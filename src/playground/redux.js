import React from "react";
import {createStore} from "redux";


export const Redux = (props) => {
    const store = createStore((state = {count: 0}) => {
        return state
    });
    console.log(store.getState());
    return (
        <div>
            this is div
            {
               props.name
            }
        </div>
    )
};
