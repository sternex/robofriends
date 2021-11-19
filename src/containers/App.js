import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

function App() {

    //Declare a new state variable for hooks
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    //Side effect we do every time we run the app
    useEffect(() => {
        //API fetch random users
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])//<-- Param Equivalent to ComponentDidMount Only run list to skip render on setRobots

    //Callback method to pass
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    //Filter robots by name
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
        <h1>Loading...</h1>
        : (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
}

export default App;