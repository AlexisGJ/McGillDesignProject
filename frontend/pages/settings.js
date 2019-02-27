import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import '../static/css/main_custom.css'

import SnackbarComponent from '../components/SnackbarComponent';
import AppbarComponent from '../components/AppbarComponent';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },

      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },

      childActiveTrue: {
        color: 'green',
      },
      childActiveFalse: {
        color: 'red',
      },
  });


const rows = [
    {
        "panelId": 'panel' + Math.random()*1000,
        "panelTitle": "General settings",
        "panelDescription": "Hey this is a description",
        "panelText": "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",

    },
    {
        "panelId": 'panel' + Math.random()*1000,
        "panelTitle": "General settings",
        "panelDescription": "Hey this is a description",
        "panelText": "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",

    }
];
  

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            expanded: null,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:1234/api/child/all")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { error, isLoaded, data, expanded } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <AppbarComponent />

                    <Grid container spacing={24} className={classes.root}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paper} elevation={1}>

                            {data.map((row, key) =>
                                // <ExpansionPanel expanded={expanded === row._id} onChange={this.handleChange(row._id)}>
                                //     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                //         <Typography className={classes.heading}>{row.name}</Typography>
                                //         <Typography className={classes.secondaryHeading}>{row.location}</Typography>
                                //     </ExpansionPanelSummary>
                                //     <ExpansionPanelDetails>
                                //         <Typography>
                                //         {row.collection_id}
                                //         </Typography>
                                //     </ExpansionPanelDetails>
                                // </ExpansionPanel>

                                <ExpansionPanel key={row._id} expanded={expanded === row._id} onChange={this.handleChange(row._id)}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}><span className={row.active ? classes.childActiveTrue : classes.childActiveFalse}>&#9679;</span> {row.name}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>{row.location}</Typography>
                                    </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.details}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-name-input"
                                                    label="Nom"
                                                    className={classes.textField}
                                                    type="text"
                                                    name="name"
                                                    margin="normal"
                                                    variant="outlined"
                                                    value={row.name}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-sensorId-input"
                                                    label="ID du capteur"
                                                    className={classes.textField}
                                                    type="text"
                                                    name="sensorId"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-location-input"
                                                    label="Location"
                                                    className={classes.textField}
                                                    type="text"
                                                    name="location"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}></Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-rangemin-input"
                                                    label="Range minimum"
                                                    className={classes.textField}
                                                    type="number"
                                                    name="rangemin"
                                                    margin="normal"
                                                    variant="outlined"
                                                    value={row.range_min}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-rangemax-input"
                                                    label="Range maximal"
                                                    className={classes.textField}
                                                    type="number"
                                                    name="rangemin"
                                                    margin="normal"
                                                    variant="outlined"
                                                    value={row.range_max}
                                                />
                                            </Grid>

                                            <Grid item xs={4}></Grid>
                                            <Grid item xs={4}></Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                    <Switch
                                                        checked={this.state.gilad}
                                                        // onChange={this.handleChange('gilad')}
                                                        value="gilad"
                                                    />
                                                    }
                                                    label="Actif"
                                                />
                                            </Grid>
                                            
                                        </Grid>
                                        
                                        {/* <div className={classes.column} />
                                        <div className={classes.column}>
                                            <Chip label={row.location} className={classes.chip} onDelete={() => {}} />
                                        </div>
                                        <div className={classNames(classes.column, classes.helper)}>
                                            <Typography variant="caption">
                                                Select your destination of choice
                                                <br />
                                                <a href="#sub-labels-and-columns" className={classes.link}>
                                                    Learn more
                                                </a>
                                            </Typography>
                                        </div> */}
                                    </ExpansionPanelDetails>
                                    <Divider />
                                    <ExpansionPanelActions>
                                        <Button size="small" onClick={this.handleChange(row._id)}>Cancel</Button>
                                        <Button size="small" color="primary">Save</Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>
                            )}

                            </Paper>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    
                    <SnackbarComponent />

                </div>

            );
        }
    }
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SettingsWrapped = withStyles(styles)(Settings);

export default SettingsWrapped;