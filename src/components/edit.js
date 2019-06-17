import React from 'react'

export const EditExpensePage = (props) => {
    console.log(props);
    return (
        <p>This is my EditExpensePage component. Editing the id of {props.match.params.id}</p>
    )
};
