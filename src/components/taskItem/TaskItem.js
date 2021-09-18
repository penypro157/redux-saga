
import { Button, Card, CardActions, CardContent, Fab, Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { style } from '../style';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
class TaskItem extends Component {
    classes = this.props.classes;
    onEditTask = (e) => {
        var { editTask, task } = this.props;
        editTask(task);
    }
    deleteTask = (e) => {
        var { onDeleteTask, task } = this.props;
        onDeleteTask(task.id);
    }
    render() {
        var { task, status } = this.props;
        return (

            <Card className={this.classes.taskItem} >

                <CardContent>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Grid item md={9} xs={12}  >
                            <div>
                                <Typography variant="h6">
                                    {task.name}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item md={3} xs={12} >
                            <div>
                                <Typography variant="h6">
                                    {status.label}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item md={9} xs={12} >
                            <div>
                                <Typography variant="caption">
                                    {task.description}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                </CardContent>
                <CardActions className={this.classes.actionButton}>
                    <Fab color="secondary" aria-label="add" dir>
                        <EditIcon onClick={this.onEditTask} />
                    </Fab>
                    <Fab color="secondary" aria-label="add" dir>
                        <DeleteOutlineIcon onClick={this.deleteTask}/>
                    </Fab>
                </CardActions>
            </Card>
        )

    }
}

export default withStyles(style)(TaskItem);
