import React, {PropTypes} from 'react';
import Radium from 'radium';
import Menubar from './Menubar';
import ThemesPageContainer from '../container/ThemesPageContainer';
import PluginsPageContainer from '../container/PluginsPageContainer';

class App extends React.Component {
    render(){
        let Page;
        switch(this.props.optionSelected){
            case "themes":
                Page = <ThemesPageContainer/>;
                break;
            case "plugins":
                Page = <PluginsPageContainer/>;
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
