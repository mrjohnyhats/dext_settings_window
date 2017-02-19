import React, {PropTypes} from 'react';
import Radium from 'radium';

const style = {
    base: {
        padding: '5%',
        transition: '0.2s ease-in-out'
    },
    selected: {
        backgroundColor: '#bababa'
    }
};

class Menuopt extends React.Component {
    render(){
        let styles = [style.base, this.props.selected && style.selected];
        return(
            <div onClick={() => this.props.onSelected(this.props.optId)} style={styles} >{this.props.text}</div>
        );
    }
}

Menuopt.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    optId: PropTypes.string.isRequired,
    onSelected: PropTypes.func.isRequired
};

Menuopt.defaultProps = {
    selected: false
}

export default Radium(Menuopt);
