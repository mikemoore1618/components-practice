import React from 'react'

class Button extends React.Component {

    handleClick() {
        console.log("Clicked!")
    }   

    render() {
        return(
            <button onClick={ this.props.onClick }>
            { this.props.text }
            </button>
        )
    }
}


export default Button
