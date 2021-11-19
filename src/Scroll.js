import React from "react";

class App extends React.Component {
    render() {
        return <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px', margin: '20px' }}>
            {this.props.children}
        </div>
    }
}

export default App;