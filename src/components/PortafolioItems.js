import React from 'react'

const PortafolioItems = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>A thing I've done with id {props.match.params.id}</p>
    </div>
)

export default PortafolioItems