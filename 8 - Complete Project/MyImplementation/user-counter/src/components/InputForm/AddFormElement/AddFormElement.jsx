import {useState} from 'react';

const collectFormValues = (e) => {
    e.preventDefault();

    // normal stuff did not work, please explore how this works if you wish in browser
    const formProps = Object.keys(e.target)
                            .slice(0, e.target.length)
                            .map(idx => e.target[idx]);
    const formObjects = formProps.map(x => { return {'id': x.id, 'val': x.value}; })
                                 .slice(0, formProps.length-1);

    return formObjects;
}

const addFormFieldElement = (e, formFields, setFormFields) => {
    e.preventDefault();

    const formValues = collectFormValues(e);
    const formObject = {
        inputType: formValues[0].val,
        inputLabel: formValues[1].val,
        inputId: formValues[1].val
    };

    formFields.splice(formFields.length-1, 0, formObject);

    setFormFields([...formFields]);
}

const AddFormElement = (props) => {

    return (
        <form
            onSubmit={(e) => addFormFieldElement(e, props.formFields, props.setFormFields)}>
            <div>Add Field</div>
            <label htmlFor="addFormInputType">Type:</label>
            <select id="addFormInputType">
                <option>text</option>
                <option>number</option>
            </select>
            <label htmlFor="someid">Id:</label>
            <input id="someid" type="text" placeholder='enter some id '/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddFormElement;