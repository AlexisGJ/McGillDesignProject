import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import '../static/css/main_custom.css'

import SnackbarComponent from '../components/SnackbarComponent';
import AppbarComponent from '../components/AppbarComponent';
  

class Settings extends React.Component {

    state = {}

    render() {
        return(
            <div>
                <AppbarComponent />
                
                Settings
                
                <SnackbarComponent />

            </div>

        );
    }
}

export default Settings;