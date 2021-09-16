import AddIcon from '@material-ui/icons/Add';
import { Box, Button, TextField } from '@material-ui/core';
import { Component } from 'react';
import GroupTask from '../components/groupTask/GroupTask';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import * as formActions from './../actions/task';
import TaskForm from '../components/taskForm/TaskForm';
import { bindActionCreators } from 'redux';
class TaskBar extends Component {
    onToggleTaskForm = (open) => {
        var { modalActions } = this.props;
        modalActions.toggleTaskForm(open);
    }
    onTextSearch = (e) => {
        this.props.filterSearch(e.target.value)
    }
    submit = data => {
        // print the form values to the console
        var { addTask } = this.props;
        var { name, status, desc } = data;
        addTask({ name, description: desc, status: Number(status) });
        this.onToggleTaskForm(false);
    }
    render() {
        var { taskForm } = this.props;
        return (

            <div className="container">
                <Box component="div" padding={1} display="flex" flexDirection="row">
                    <Button onClick={() => this.onToggleTaskForm(true)} color="primary" variant="contained" startIcon={<AddIcon />}>Add New Task
                    </Button> &nbsp;
                </Box>
                <TaskForm open={taskForm.open} onSubmit={this.submit} />
                <Box component="div" padding={1}>
                    <TextField id="standard-search" label="Search field" type="search" onChange={this.onTextSearch} />
                </Box>
                <Box component="div" padding={1}>
                    <GroupTask />
                </Box>
            </div >

        );
    }
}
const mapStateToProps = (state) => {
    return {
        taskForm: state.taskForm,
        form: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTask: () => {
            dispatch(actions.fetchAllTask([]))
        },
        filterSearch: (value) => {
            dispatch(actions.filterSearch(value))
        },
        addTask: (task) => {
            dispatch(actions.addTask(task))
        },
        modalActions: bindActionCreators(formActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);
