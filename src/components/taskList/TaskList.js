
import { Button, Card, CardActions, CardContent, Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { style } from '../style';
import TaskItem from '../taskItem/TaskItem';
class TaskList extends Component {
    classes = this.props.classes;
    render() {
        var { taskList, status } = this.props;
        return (
            <div>
                {

                    taskList.map((task, index) => (<TaskItem key={index} task={task} status={status} />))
                }
            </div>


        );
    }
}

export default withStyles(style)(TaskList);
