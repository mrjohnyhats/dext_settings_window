import React, {PropTypes} from 'react';
import Radium from 'radium';
import Menuopt_container from '../container/Menuopt_container';

const style = {
    base: {
        backgroundColor: '#dadada',
        width: '20vw',
        height: '100vh',
        margin: '0',
        position: 'absolute',
        top: '0',
        left: '0'
    }
};

class Menubar extends React.Component {
    render(){
        let styles = [style.base];
        return(
            <div style={styles}>
                <Menuopt_container text="select theme" optId="themes"/>
                <Menuopt_container text="install plugins" optId="plugins"/>
            </div>
        );
    }
}

export default Radium(Menubar);
