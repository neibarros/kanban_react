import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ul>
                <Card />
            </ul>
        )
    }
}

export default Cards