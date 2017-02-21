import React, {PropTypes} from 'react';
import Radium from 'radium';
import Page from '../base/Page.jsx';
import Inputbox from './Inputbox.jsx';
import ipc_client from '../../../ipc_client.js';

class Plugins_page extends React.Component {
    constructor(){
        super();
        this.state = {
            showLoading: false
        };

        this.handlePluginSubmit = this.handlePluginSubmit.bind(this);
    }

    getStyles(){
        return {
            loadingElem: {
                display: 'block',
                margin: '8vh auto auto auto'
            }
        };
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
            this.props.updatePlugins();

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
        if(this.state.showLoading || true){
            loadingElem = <img src="graphics/loading_gif.gif" style={this.getStyles().loadingElem}/>;
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
    updatePlugins: PropTypes.func.isRequired
};

export default Radium(Plugins_page);
