
import { Button, Card, CardActions, CardContent, Fab, Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { style } from '../style';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
class TaskItem extends Component {
    classes = this.props.classes;
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
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="add" dir>
                        <EditIcon />
                    </Fab>
                </CardActions>
            </Card>
        )

    }
}

export default withStyles(style)(TaskItem);
