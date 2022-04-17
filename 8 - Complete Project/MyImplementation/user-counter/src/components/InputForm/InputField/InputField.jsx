
const InputField = (props) => {
    
    const inputLabel = <label className="input-label" 
                              id={props.id} 
                              htmlFor={props.id}>{props.label}</label>;

    const inputField = <input type={props.type} 
                              id={props.id} 
                              value={props.value}/>;

    return (
        <>
            {inputLabel}{props.break ? <br /> : null}
            {inputField}{props.break ? <br /> : null}
        </>
    );
}

export default InputField;