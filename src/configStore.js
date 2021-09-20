import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga'
import { take, fork, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import { fetchAllTask, filterSearchSuccess, hideLoading, showLoading, addTaskFail, fetchAllSuccess, updateTaskSuccess, deleteTaskSuccess, addTaskSuccess } from './actions';
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
        yield put(addTaskSuccess(task));
        yield showAlertMessage(`'${data.name}' added successfully !!!`, MessageType.SUCCESS)
    }
    catch (error) {
        yield showAlertMessage(`'${task.name}' added fail, please try again !!!`, MessageType.ERROR);
        yield put(addTaskFail(task));
    }
}
function* updateTask({ task }) {
    yield delay(500);
    try {
        const res = yield call(service.updateTask, task);
        var { data } = res;
        yield showAlertMessage(`'${data.name}' updated successfully !!!`, MessageType.SUCCESS);
        yield put(updateTaskSuccess(task));
    }
    catch (error) {
        yield showAlertMessage(`'${task.name}' updated fail, please try again !!!`, MessageType.ERROR);
    }
}
function* deleteTask({id}) {
    debugger
    yield delay(500);
    try {
        const res = yield call(service.deleteTask, id);
        var { data } = res;
        yield showAlertMessage(`'${data.name}' deleted successfully !!!`, MessageType.SUCCESS);
        yield put(deleteTaskSuccess(data.id));
    }
    catch (error) {
        yield showAlertMessage(`Deleted fail, please try again !!!`, MessageType.ERROR);
    }
}
function* rootSaga() {
    yield fork(fetchTask);
    yield takeLatest(actionsType.FILTER_SEARCH, searchTask);
    yield takeEvery(actionsType.ADD_TASK, addTask);
    yield takeEvery(actionsType.UPDATE_TASK, updateTask);
    yield takeEvery(actionsType.DELETE_TASK, deleteTask);
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
