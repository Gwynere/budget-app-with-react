import React from 'react'

export default function EditExpensePage(props) {
    console.log(props)
    return (
        <div>
            editing the expense with id of {props.match.params.id}
        </div>
    )
}
