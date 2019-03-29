import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  progress: {
    marginLeft: '20px'
  }
};

class ButtonAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      time: moment().format('HH:mm')
    };
  }

  displayTime(){
    this.setState({
        time: moment().format('HH:mm')
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.displayTime();
    }, 5000);
  }


  componentWillReceiveProps() {
    this.setState({
      loading: this.props.loading
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link as={`/`} href={`/`}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" color="inherit">
              <b>Camp Carowanis</b> <span style={{fontWeight: 'lighter', color: 'rgba(255,255,255,0.8)', fontSize: '0.8em'}}>Station de Supervision</span>
            </Typography>
            {this.state.loading && <CircularProgress className={classes.progress} color="secondary" size={20} />}
            <Typography className={classes.grow}></Typography>
            
            <Typography variant="h6" color="inherit" style={{marginRight: '10px'}}>{this.state.time}</Typography>
            <Link as={`/settings`} href={`/settings`}>
              <IconButton color="inherit">
                  <SettingsIcon />
              </IconButton>
            </Link>
            {/* <Button color="inherit">Déconnexion</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);