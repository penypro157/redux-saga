import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga'
import { take, fork, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import { fetchAllTask, filterSearchSuccess, hideLoading, showLoading, addTaskFail, fetchAllSuccess } from './actions';
import { toggleTaskForm } from './actions/task';
import * as service from './apiService/TaskAPI';
import * as actionsType from './constants/index';
import { showAlertMessage } from './Utils/ToastHelper';
import actions from 'redux-form/lib/actions';
import { MessageType } from './constants/index'

function* fetchTask() {
    while (true) {
        const data = yield take(actionsType.FETCH_TASK);
        yield put(showLoading());
        try {
            debugger
            const res = yield call(service.getAllTask, data.param);
            yield put(fetchAllSuccess(res.data));
        } catch (err) {
            showAlertMessage('Get list tasks fail !!!', MessageType.ERROR);
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}
function* searchTask({ searchText }) {
    yield delay(1000);
    yield put(fetchAllTask(searchText));
}
function* addTask({ task }) {
    debugger
    yield delay(1000);
    try {
        const res = yield call(service.addTask, task);
        var { data } = res;
        yield showAlertMessage(`'${data.name}' added successfully !!!`, MessageType.SUCCESS)
    }
    catch (error) {
        yield showAlertMessage(`'${task.name}' added fail, please try again !!!`, MessageType.ERROR);
        yield put(addTaskFail(task));
    }
}
function* rootSaga() {
    yield fork(fetchTask);
    yield takeLatest(actionsType.FILTER_SEARCH, searchTask);
    yield takeEvery(actionsType.ADD_TASK, addTask);
}

const sagaMiddleWare = createSagaMiddleware();
const configStore = () => {
    const middleWare = [thunk, sagaMiddleWare];
    const enhancers = [applyMiddleware(...middleWare)];
    var store = createStore(reducer, compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleWare.run(rootSaga);
    return store;
}
export default configStore;
