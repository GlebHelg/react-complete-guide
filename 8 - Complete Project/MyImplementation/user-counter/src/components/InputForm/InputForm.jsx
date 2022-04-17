
const InputForm = (props) => {

    const inputLabel = <label className="input-label">{props.label}</label>;
    const inputText = <input type="text" id=""/>;

    return (
        <form className="input-field">
            {inputLabel}
            {inputText}
        </form>
    );
}

export default InputForm;