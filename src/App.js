import React from 'react'
import Button from './Button'
import Heading from './Heading'

class App extends React.Component {
    render() {
        return (
            <div>
                <Heading label='Hello World!'/>
                <Button text='BOOM!' onClick={() => {console.log("BOOM!")}} />
                <Button text='BANANA!' onClick={() => {console.log("BANANA!")}}/>
                <Button text='DYNAMITE!' onClick={() => {console.log("DYNAMITE!")}}/>
                <Button text='BANG!' onClick={() => {console.log("BANG!")}}/>
            </div>
        )
    }
}

export default App