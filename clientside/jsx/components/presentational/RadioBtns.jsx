import React, {PropTypes} from 'react';
import Radium from 'radium';

class RadioBtns extends React.Component {
    constructor(){
        super();
        this.onRadioClick = this.onRadioClick.bind(this);
    }

    onRadioClick(e){
        e.preventDefault();
        this.props.onBtnClick(e.target.value);
    }

    getStyles(){
        return {
            btns: {
                display: 'block'
            }
        };
    }

    render(){
        return(
            <form>
                {
                    this.props.btnNames.map((name, index) => {
                        let isChecked = (name == this.props.btnSelected);
                        return (
                            <span
                                style={this.getStyles().btns}
                                key={index}
                            >
                                <input
                                    type="radio"
                                    name={name}
                                    value={name}
                                    checked={isChecked}
                                    readOnly={true}
                                    onClick={this.onRadioClick}
                                />
                                {name}
                            </span>
                        );
                    })
                }
            </form>
        );
    }
}

RadioBtns.propTypes = {
    btnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    btnSelected: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired
};

RadioBtns.defaultProps = {
    btnNames: ['no btnNames prop :(']
};

export default Radium(RadioBtns);
