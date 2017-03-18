import React, {PropTypes} from 'react';
import Radium from 'radium';
import Page from '../base/Page.jsx';
import RadioBtns from './RadioBtns.jsx';
import ipc_client from '../../../ipc_client.js';
import actions from '../../../actions.js';

class ThemesPage extends React.Component {
    constructor(){
        super();
        this.onThemeSelect = this.onThemeSelect.bind(this);
    }

    onThemeSelect(theme){
        ipc_client.changeTheme(theme).then(() => {
            this.props.regThemeChange(theme);
        }, (err) => {
            throw 'error changing theme: '+err.toString();
        });
    }

    render(){
        return(
            <Page>
                <RadioBtns btnNames={this.props.themeArr} btnSelected={this.props.curTheme} onBtnClick={this.onThemeSelect}/>
            </Page>
        );
    }
}

ThemesPage.propTypes = {
    curTheme: PropTypes.string.isRequired,
    themeArr: PropTypes.arrayOf(PropTypes.string).isRequired,
    regThemeChange: PropTypes.func.isRequired
};

export default ThemesPage;
