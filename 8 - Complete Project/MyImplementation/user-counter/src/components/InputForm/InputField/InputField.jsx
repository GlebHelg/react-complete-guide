import './InputField.css';

const InputField = (props) => {

    const inputLabel = <label className="input-label" 
                              id={props.id} 
                              htmlFor={props.id}>{props.label}</label>;

    const inputField = <input className="input-field" 
                              type={props.type} 
                              id={props.id} 
                              value={props.value}/>;

    return (
        <div className={'input-field-div'+(!props.end ? '' : '-submitBtn')}>
            {inputLabel}{!props.end ? <br /> : null}
            {inputField}{!props.end ? <br /> : null}
        </div>
    );
}

export default InputField;