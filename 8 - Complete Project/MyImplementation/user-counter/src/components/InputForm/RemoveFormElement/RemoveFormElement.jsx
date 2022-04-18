
const removeFormFieldElement = (e) => {
    console.log("removeFormFieldElement e:", e);
}

const RemoveFormElement = (props) => {
    return (
        <form
                onSubmit={(e) => removeFormFieldElement(e)}>
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