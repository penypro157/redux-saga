import customTheme from './theme/theme'
import { Box, CircularProgress, ThemeProvider, withStyles } from '@material-ui/core';
import TaskBar from './container/TaskBar';
import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react';
import ApiHandler from './Utils/ApiHandler';
import { API_URL } from './constants';
import { style } from './components/style';
import { render } from '@testing-library/react';
import GlobalLoading from './components/common/GlobalLoading';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routeList from './router';
import AdminLayoutRoute from './components/common/AdminLayout/index';



class App extends Component {
  showRouteList = (routeList) => {
    var result = null;
    result = routeList.map((item, index) => {
      return (
        <AdminLayoutRoute key={index} path={item.path} exact={item.exact} component={item.component} name={item.name} />
      )
    })
    console.log(result);
    return result;
  }
  render() {
    var { classes } = this.props;
    return (
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <GlobalLoading />
          <ToastContainer />
          {/* <TaskBar /> */}
        </ThemeProvider>
        <Switch>
          {this.showRouteList(routeList)}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withStyles(style)(App);
const isPromise = (obj) => typeof obj !== 'undefined' &&
  typeof obj.then === 'function';
const loop = (iterator, callback, prev) => {
  const item = iterator.next(prev);
  const value = item.value;
  if (item.done) {
    callback(prev);
    return;
  }
  if (isPromise(value)) {
    value.then(res => {
      loop(iterator, callback, res);
    })
  }
  else {
    loop(iterator, callback, value);
  }
}





const fristFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1 * 1000);
  })
}

const secondFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(50);
    }, 1 * 1000);
  })
}

const thirdFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(40);
    }, 12 * 1000);
  })
}

var url = `${API_URL}/tasks`;
var stack = function* () {
  // const first = yield fristFunc();
  // const second = yield secondFunc();
  // const third = yield thirdFunc();
  // yield (first + second + third);
  const first = yield ApiHandler.get(`http://localhost:3000/tasks`);
  const second = yield ApiHandler.get(`${url}/${first.data.length}`);
  yield [first, second];
}
const sync = (fn) => () => {
  return new Promise(
    resolve => {
      loop(fn(), res => resolve(res));
    }
  );
}
var result = sync(stack);

result().then(res => console.log(res))