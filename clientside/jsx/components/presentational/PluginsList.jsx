import React, {PropTypes} from 'react';
import Radium from 'radium';
import ipc_client from '../../../ipc_client.js';


class PluginsList extends React.Component {
    constructor(){
        super();
        this.state = {
            pluginsDeleting: []
        };
    }

    getStyles(){
        return {
            listing: {
                display: 'block',
                textAlign: 'center',
                marginBottom: '3%',
            },
            x_icon: {
                marginLeft: '1%',
                width: '16px',
                height: '16px'
            },
            list: {
                display: 'block',
                marginTop: '10vh'
            }
        }
    }

    listingClickMethod(pl){
        const regDelComplete = () => {
            const newPluginsDeleting = this.state.pluginsDeleting;
            newPluginsDeleting.splice(newPluginsDeleting.indexOf(pl), 1);
            this.setState({
                pluginsDeleting: newPluginsDeleting
            });
        };

        const regDelStart = () => {
            this.setState({
                pluginsDeleting: this.state.pluginsDeleting.concat(pl)
            });
        }

        if(confirm('uninstall '+pl+'?')){
            regDelStart();
            ipc_client.deletePlugin(pl).then(() => {
                regDelComplete();
                ipc_client.sendNotificationShortcut(pl+' uninstalled successfully!');
                this.props.updatePlugins();
            }, (err) => {
                regDelComplete();
                ipc_client.sendNotificationShortcut('error uninstalling '+pl+' err: '+err);
            });
        }
    }

    render(){
        let delicon;
        return(
            <div style={this.getStyles().list}>
            {
                this.props.plugins.map((pl, index) => {
                    //function binding may be a future performance issue

                    if(this.state.pluginsDeleting.indexOf(pl) == -1) {
                        delicon = <img
                            src="graphics/x_icon.png"
                            style={this.getStyles().x_icon}
                            onClick={this.listingClickMethod.bind(this, pl)}
                        ></img>
                    } else {
                        delicon = <img
                            src="graphics/loading_gif.gif"
                            style={this.getStyles().x_icon}
                        ></img>
                    }

                    return (
                        <div style={this.getStyles().listing} key={index}>
                            {pl}
                            {delicon}
                        </div>
                    );
                })
            }</div>
        );
    }
}

PluginsList.propTypes = {
    plugins: PropTypes.arrayOf(PropTypes.string).isRequired,
    updatePlugins: PropTypes.func.isRequired
};

export default Radium(PluginsList);
