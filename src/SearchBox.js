import React, { Fragment } from "react";

class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <input
                    className='pa3 ba b--green bg-lightest-blue'
                    type="search"
                    placeholder="search robots"
                />
            </div>
        )
    }
}

export default SearchBox;