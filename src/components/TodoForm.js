/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    const { currentTodo, changeCurrent } = props;
    const handleInputChange = (evt) => {
        const val = evt.target.value
        changeCurrent(val);
    }
    return (
        <form>
            <input type="text" value={currentTodo} onChange={handleInputChange}></input>
        </form>
    )
}