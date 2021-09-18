import AddIcon from '@material-ui/icons/Add';
import { Box, Button, TextField } from '@material-ui/core';
import { Component } from 'react';
import GroupTask from '../components/groupTask/GroupTask';
import ConfirmDialog from '../components/common/confirmDialog';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import * as formActions from './../actions/task';
import ComponentTaskForm from '../components/taskForm/TaskForm';
import { bindActionCreators } from 'redux';
import { ButtonType, MESSAGE_CONFIRM, MESSAGE_TITLE } from '../constants';
class TaskBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmOpen: false,
            data: ''
        }
    }
    onToggleTaskForm = (open) => {
        var { modalActions } = this.props;
        modalActions.toggleTaskForm(open);
    }
    onTextSearch = (e) => {
        this.props.filterSearch(e.target.value)
    }
    submit = data => {
        var { addTask, updateTask } = this.props;
        var { id, name, status, description } = data;
        debugger
        if (id !== '' && id !== undefined) {
            updateTask({ id, name, description, status: Number(status) });
        } else {
            addTask({ name, description, status: Number(status) });
        }
        this.onToggleTaskForm(false);
    }
    deleteTask = (data) => {
        this.toggleConfirmDialog(true);
        this.setState({ data })
    }
    toggleConfirmDialog = (open) => {
        var data = open ? this.state.data : null;
        this.setState({
            confirmOpen: open,
            data
        })
    }
    onIgnoreDeleteTask = () => {
        this.toggleConfirmDialog(false);
    }
    onAgreeDeleteTask = (e) => {
        debugger
        var { deleteTask } = this.props;
        deleteTask(this.state.data);
        this.toggleConfirmDialog(false);
    }
    render() {
        var { taskForm } = this.props;
        return (

            <div className="container">
                <Box component="div" padding={1} display="flex" flexDirection="row">
                    <Button onClick={() => this.onToggleTaskForm(true)} color="primary" variant="contained" startIcon={<AddIcon />}>Add New Task
                    </Button> &nbsp;
                </Box>
                <ConfirmDialog open={this.state.confirmOpen}
                    agreeButton={ButtonType.AGREE}
                    ignoreButton={ButtonType.DISAGREE}
                    content={MESSAGE_CONFIRM.DELETE}
                    title={MESSAGE_TITLE.DELETE_TASK}
                    handleIgnore={this.onIgnoreDeleteTask}
                    handleAgree={this.onAgreeDeleteTask}
                />
                <ComponentTaskForm open={taskForm.open} onSubmit={this.submit} />
                <Box component="div" padding={1}>
                    <TextField id="standard-search" label="Search field" type="search" onChange={this.onTextSearch} />
                </Box>
                <Box component="div" padding={1}>
                    <GroupTask onDeleteTask={this.deleteTask} />
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
        updateTask: (task) => {
            dispatch(actions.updateTask(task))
        },
        deleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        modalActions: bindActionCreators(formActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);
