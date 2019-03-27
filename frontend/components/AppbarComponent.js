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
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link as={`/`} href={`/`}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <b>Camp Carowanis</b> Station de Supervision
          </Typography>
          <Link as={`/settings`} href={`/settings`}>
            <IconButton color="inherit">
                <SettingsIcon />
            </IconButton>
          </Link>
          <Button color="inherit">Déconnexion</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);