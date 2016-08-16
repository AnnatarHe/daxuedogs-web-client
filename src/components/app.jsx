import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MuiThemeProvider>
                { this.props.children }
            </MuiThemeProvider>
        )
    }
}

export default App