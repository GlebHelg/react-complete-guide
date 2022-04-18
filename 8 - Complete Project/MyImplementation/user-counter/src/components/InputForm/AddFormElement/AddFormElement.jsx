import {useState} from 'react';

const addFormFieldElement = (e) => {
    console.log("addFormFieldElement e:", e);
}

const AddFormElement = () => {


    return (
        <form
            onSubmit={(e) => addFormFieldElement(e)}>
            <div>Add Field</div>
            <label htmlFor="addFormInputType">Type:</label>
            <select id="addFormInputType">
                <option>text</option>
                <option>number</option>
            </select>
            <input id="someid" type="text" placeholder='enter some id '/>;
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddFormElement;