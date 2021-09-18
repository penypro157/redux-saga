
import { Button, FormControl, Grid, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { style } from '../style';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as fields from '../../components/HookFormComponents';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as validation from './../HookFormComponents/validation'
import * as formActions from './../../actions/task'
class ComponentTaskForm extends Component {

    onSubmit = (data) => {
        if (this.props.valid) {
            this.props.onSubmit(data);
            this.props.reset();
        }
    }
    onModalClose = () => {
        var { modalActions } = this.props;
        modalActions.resetInitTaskForm();
        modalActions.toggleTaskForm(false);

    }
    render() {
        var { classes, open, handleSubmit,initialValues } = this.props;
        return (
            <div>
                <Dialog open={open} aria-labelledby="form-dialog-title" onClose={this.onModalClose}
                >

                    <form onSubmit={handleSubmit(this.onSubmit)}  >
                        <DialogTitle id="form-dialog-title">{Number(initialValues.id) > 0 ? 'UPDATE TASK' : 'ADD NEW TASK'}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To submit task for supervisor, please input all field.
                            </DialogContentText>
                            <Grid container>
                                <Grid item md={9} xs={12} className={classes.formInput}>
                                    <Field component={fields.renderTextField} label="Name" name="name" validate={[validation.required]} />
                                </Grid>
                                <Grid item md={9} xs={12} className={classes.formInput}>
                                    <Field component={fields.renderTextField} label="Description" name="description" validate={[validation.maxLength(100)]} />
                                </Grid>
                                <Grid item md={9} xs={12} className={classes.formInput}>
                                    <FormControl >
                                        <Field label="Status" component={fields.renderSelectField} name="status">
                                            <option value={0}>READY</option>
                                            <option value={1}>IN PROGRESS</option>
                                            <option value={2}>COMPLETED</option>
                                        </Field>
                                        {/* <Field component={fields.renderCheckbox} label="CheckBox" name="testCheckBox" /> */}
                                    </FormControl>
                                </Grid>
                                {/* <Grid item md={9} xs={12} className={classes.formInput}>
                                    <FormControl >
                                        <FieldArray component={fields.renderArrayTextField} name="testArrayField" />
                                    </FormControl>
                                </Grid> */}

                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.onModalClose} >
                                Cancel
                            </Button>
                            <Button color="primary" type="submit" >
                                Save
                            </Button>
                        </DialogActions>

                    </form>
                </Dialog>
            </div>

        );
    }

}
let validate = (values) => {
    var validateFields = [
        'testArrayField'
    ]
    var error = {};
    var errorTestArrayField = [];
    validateFields.forEach((field) => {
        values[field]?.forEach((item, index) => {
            var error = {};
            if (item.test === "" || item.test === undefined) error.test = 'Required'
            errorTestArrayField[index] = error;
        })
    })
    error.testArrayField = errorTestArrayField;
    return error;
}
ComponentTaskForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    enableReinitialize : true,
    validate
})(ComponentTaskForm)
const mapDispatchToState = (dispatch) => {
    return { modalActions: bindActionCreators(formActions, dispatch) }
}
ComponentTaskForm = connect(
    state => ({
        initialValues: state.taskForm.initData // pull initial values from account reducer
    }),
    mapDispatchToState, // bind account loading action creator
)(ComponentTaskForm);
export default withStyles(style)(ComponentTaskForm);
