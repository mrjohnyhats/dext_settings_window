import React from 'react';
import Radium from 'radium';

const style = {
    base: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '80vw',
        height: '100vh'
    }
}

class Page extends React.Component {
    render(){
        let styles = [style.base];

        return (
            <div style={styles}>{this.props.children}</div>
        )
    }
}

export default Radium(Page);
