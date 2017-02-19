import React, {PropTypes} from 'react';
import Radium from 'radium';
import Page from '../base/Page.jsx';
import Inputbox from './Inputbox.jsx';
import ipc_client from '../../../ipc_client.js';

const hasThemeEnding = (plName) => {
    return /-theme$/.test(plName);
};

class Plugins_page extends React.Component {
    constructor(){
        super();
        this.state = {
            showLoading: false
        };

        this.handlePluginSubmit = this.handlePluginSubmit.bind(this);
    }

    handlePluginSubmit(inputVal){
        this.setState({
            showLoading: true
        });

        let plName = inputVal.trim();

        ipc_client.installPlugin(plName).then(() => {
            ipc_client.sendNotification('installing plugin '+plName+' was successfull').then(() => {}, (err) => {
                console.log('error sending notification '+err);
            });
            if(hasThemeEnding(plName)) this.props.regNewTheme(plName);

            this.setState({
                showLoading: false
            });
        }, (err) => {
            ipc_client.sendNotification('error installing plugin '+plName+', error code: '+err).then(() => {}, (err) => {
                console.log('error sending notification '+err);
            });

            this.setState({
                showLoading: false
            });
        });
    }

    render(){
        let loadingElem = null;
        if(this.state.showLoading){
            loadingElem = <img src="graphics/loading_gif.gif"/>;
        }

        return(
            <Page>
                <Inputbox defaultVal="install a plugin" handleSubmit={this.handlePluginSubmit}/>
                {loadingElem}
            </Page>
        );
    }
}

Plugins_page.propTypes = {
    regNewTheme: PropTypes.func.isRequired
};

export default Radium(Plugins_page);
