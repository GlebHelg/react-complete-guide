
const InputField = (props) => {
    const inputLabel = <label className="input-label" htmlFor={props.id}>{props.label}</label>;
    const inputField = <input type={props.type} id={props.id} value={props.value}/>;

    return (
        <>
            {inputLabel}<br/>
            {inputField}<br/>
        </>
    );
}

export default InputField;