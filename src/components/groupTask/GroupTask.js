
import { Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTask, fetchAllTaskRequest } from '../../actions';
import { Status } from '../../constants';
import { style } from '../style';
import TaskItem from '../taskItem/TaskItem';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task'
class GroupTask extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAllTask();
    }
    editTask = (task) => {
        var { modalActions } = this.props;
        modalActions.toggleTaskForm(true);
        modalActions.editInitTaskForm(task);
    }
    deleteTask = (id) => {
        var { onDeleteTask } = this.props;
        onDeleteTask(id);
    }
    renderTaskBar = (statusList) => {
        var result = null;
        result = statusList.map((status, index) => {
            var tasks = this.props.tasks.filter((item) => {
                return item.status === status.value;
            })
            return (

                <Grid key={index} item md={4} xs={12} >
                    <Typography variant="h6">{status.label}</Typography>
                    {this.renderTaskList(tasks, status)}
                </Grid>
            )
        })
        return result;
    }
    renderTaskList = (taskList, status) => {
        return (<div>
            {
                taskList.map((task, index) => (<TaskItem key={index} task={task} status={status} editTask={this.editTask} onDeleteTask={this.deleteTask} />))
            }
        </div>)
    }
    render() {
        return (
            <Grid container spacing={Status.length}>
                {this.renderTaskBar(Status)}
            </Grid>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTask: () => {
            dispatch(fetchAllTaskRequest(dispatch))
        },
        modalActions: bindActionCreators(taskActions, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(GroupTask));
