import React, {PropTypes} from 'react';
import Radium from 'radium';
import ipc_client from '../../../ipc_client.js';


class Plugins_list extends React.Component {
    getStyles(){
        return {
            listing: {
                display: 'block',
                textAlign: 'center',
                marginBottom: '3%',
            },
            x_icon: {
                marginLeft: '1%'
            },
            list: {
                display: 'block',
                marginTop: '10vh'
            }
        }
    }

    listingClickMethod(pl){
        if(confirm('uninstall '+pl+'?')){
            ipc_client.deletePlugin(pl).then(() => {
                ipc_client.sendNotificationShortcut(pl+' uninstalled successfully!');
            }, (err) => {
                ipc_client.sendNotificationShortcut('error uninstalling '+pl+' err: '+err);
            });
        }
    }

    render(){
        return(
            <div style={this.getStyles().list}>{
                this.props.plugins.map((pl, index) => {
                    //function binding may be a future performance issue
                    return (
                        <div style={this.getStyles().listing} key={index}>
                            {pl}
                            <img
                                src="graphics/x_icon.png"
                                style={this.getStyles().x_icon}
                                onClick={this.listingClickMethod.bind(this, pl)}
                            />
                        </div>
                    );
                })
            }</div>
        );
    }
}

Plugins_list.propTypes = {
    plugins: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Radium(Plugins_list);
