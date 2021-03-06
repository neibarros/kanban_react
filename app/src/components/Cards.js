import React, { Component } from 'react'
import Card from './Card'
import InputEditable from './InputEditable'

class Cards extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const cards = this.props.cards.map(card => (
            <Card
                key={ card.id } >
                <InputEditable
                    id={ card.id }
                    edit={ card.edit }
                    text={ card.text }
                />
            </Card>
        ))
        return(
            <ul>
                { cards }
            </ul>
        )
    }
}

export default Cards