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

    render(){
        return(
            <div style={this.getStyles().list}>{
                this.props.plugins.map((pl, index) => {

                    let clickMethod = () => {
                        if(confirm('uninstall '+pl+'?')){
                            ipc_client.deletePlugin(pl).then(() => {
                                ipc_client.sendNotification(pl+' uninstalled successfully!')
                            }, (err) => {
                                ipc_client.sendNotification('error uninstalling '+pl+' err: '+err);
                            });
                        }
                    };

                    return (
                        <div style={this.getStyles().listing} key={index}>
                            {pl} <img src="graphics/x_icon.png" style={this.getStyles().x_icon} onClick={clickMethod}/>
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
