import React, {PropTypes} from 'react';
import Radium from 'radium';
import Menubar from './Menubar';
import Themes_page_container from '../container/Themes_page_container';
import Plugins_page_container from '../container/Plugins_page_container';

class App extends React.Component {
    render(){
        let Page;
        switch(this.props.optionSelected){
            case "themes":
                Page = <Themes_page_container/>;
                break;
            case "plugins":
                Page = <Plugins_page_container/>;
                break;
        };

        return(
            <div>
                <Menubar/>
                {Page}
            </div>
        );
    }
}

App.propTypes = {
    optionSelected: PropTypes.string.isRequired
};

export default Radium(App);
