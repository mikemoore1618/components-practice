import React from 'react'

class Heading extends React.Component { 
    render() {
        return(
            <h1 className="Heading" style={{ fontSize: 2 * 25, fontFamily: 'sans-serif' }}>
                {this.props.label}
            </h1>
        )
    }
}


export default Heading