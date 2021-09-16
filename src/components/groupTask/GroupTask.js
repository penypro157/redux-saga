
import { Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTask, fetchAllTaskRequest } from '../../actions';
import { Status } from '../../constants';
import { style } from '../style';
import TaskList from '../taskList/TaskList';
// const taskList = [{
//     id: 0,
//     name: 'Wash plate',
//     description : 'Because you live',
//     status: 0
// }, {
//     id: 1,
//     name: 'Eating',
//     description : 'Many things to choose',
//     status: 1
// }, {
//     id: 2,
//     name: 'Cooking',
//     description : 'Want you be my own',
//     status: 2
// },
// {
//     id: 0,
//     name: 'Wash plate',
//     description : 'Traffic lights just turned on',
//     status: 0
// }, {
//     id: 1,
//     name: 'Eating',
//     description : 'Oh Look, The windows are opening up',
//     status: 1
// }, {
//     id: 2,
//     name: 'Cooking',
//     description : 'Who are you?',
//     status: 2
// },]
class GroupTask extends Component {
    constructor(props){
        super(props);
        this.props.fetchAllTask();
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
                    <TaskList key={index} taskList={tasks} status={status} />
                </Grid>
            )
        })
        return result;
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
        }
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(GroupTask));
