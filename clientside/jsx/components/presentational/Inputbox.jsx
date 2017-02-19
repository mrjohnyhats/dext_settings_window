import React, {PropTypes} from 'react';
import Radium from 'radium';

class Inputbox extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputVal: ""
        };
    }

    handleChange(e){
        this.setState({inputVal: e.target.value});
    }

    getStyle(){
        return {
            display: 'block',
            margin: '10% auto auto auto',
            width: '80%',
            height: '10vh',
            fontSize: '200%',
            border: 'none',
            padding: '2%',
            transition: '0.2s ease-in-out',
            ':hover': {
                boxShadow: '0px 0px 50px -11px rgba(0,0,0,0.75)'
            }
        };
    }

    render(){
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                this.props.handleSubmit(this.state.inputVal);
            }}>
                <input style={this.getStyle()} type="text" placeholder={this.props.defaultVal} onChange={this.handleChange}/>
            </form>
        );
    }
}

Inputbox.propTypes = {
    defaultVal: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
};

Inputbox.defaultProps = {
    defaultVal: ""
};

export default Radium(Inputbox);
