import InputField from './InputField/InputField';

const GenerateHtmlFromInputList = (inputFieldsList) => {
    return inputFieldsList.map((o, idx) => <InputField 
                                                    type={o.inputType} 
                                                    label={o.inputLabel} 
                                                    id={o.inputId} 
                                                    value={o.value}
                                                    key={idx}/>);
}

const InputForm = (props) => {
    console.log(props);
    const inputFieldsListJsx = GenerateHtmlFromInputList(props.inputFieldsList);
    console.log(inputFieldsListJsx);
    return (
        //() => console.log('yolo')
        <form className="input-field" action={''}>
            {inputFieldsListJsx}
        </form>
    );
}

export default InputForm;