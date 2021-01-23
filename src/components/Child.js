import React from 'react'

const Child = ({person, name, lastName}) => {
    return (
        <div>
            {person}
            {name}
            {lastName}
        </div>
    )
}

export default Child
