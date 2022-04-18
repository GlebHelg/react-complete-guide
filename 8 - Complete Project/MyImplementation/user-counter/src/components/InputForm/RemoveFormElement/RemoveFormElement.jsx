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

const removeFormFieldElement = (e, formFields, setFormFields) => {
    e.preventDefault();
    console.log("removeFormFieldElement e:", e);
    const formValues = collectFormValues(e);
    console.log('formValues: ', formValues[0].val);
    console.log('formFields: ', formFields);

    let idxToRemove = formFields.findIndex((field, idx) => {
        return field.inputId === formValues[0].val;
    });
    
    formFields.splice(idxToRemove, 1);

    setFormFields([...formFields]);
}

const RemoveFormElement = (props) => {
    return (
        <form
                onSubmit={(e) => removeFormFieldElement(e, props.formFields, props.setFormFields)}>
                <div>Remove Field</div>
                <div>
                    <label htmlFor="InputFieldId">ID:</label>
                    <select id="InputFieldId">
                        {props.formFields.map((field, idx) => {
                            return <option key={idx}>{field.inputId}</option>;
                        })}
                    </select>
                <input type="submit" value="Remove"/>
                </div>
            </form>
    );
}
export default RemoveFormElement;