import React, { Fragment } from "react";
import CardList from "./CardList";
import { robots } from "./robotList";
import SearchBox from './SearchBox';

class App extends React.Component {
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        )
    }
}

export default App;