import React from 'react'
import AdminHomePage from './container/AdminHomePage/index';
import TaskBoardPage from './container/TaskBoardPage/index';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
const routeList = [
    {
        path: '/',
        exact: true,
        name : 'Home Page',
        symbol : HomeIcon,
        component: () => <AdminHomePage/>
    },
    {
        path: '/task-board',
        exact: false,
        name : 'Task Board',
        symbol : FormatListBulletedIcon,
        component: () => <TaskBoardPage />

    }
]
export default routeList;