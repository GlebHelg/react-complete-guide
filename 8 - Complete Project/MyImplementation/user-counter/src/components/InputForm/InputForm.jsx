import InputField from './InputField/InputField';

const GenerateHtmlFromInputList = (inputFieldsList) => {
    return inputFieldsList.map((o, idx) => <InputField 
                                                    type={o.inputType} 
                                                    label={o.inputLabel} 
                                                    id={o.inputId} 
                                                    value={o.inputValue}
                                                    break={(idx < inputFieldsList.length-1) ? true : false}
                                                    key={idx}/>);
}

const collectFormValues = (e) => {
    e.preventDefault();

    const formProps = Object.keys(e.target)
                            .slice(0, e.target.length)
                            .map(idx => e.target[idx]);
    
    const formObjects = formProps.map(x => { return {'id: ': x.id, 'val: ': x.value}; })
                                 .slice(0, formProps.length-1);

}

const InputForm = (props) => {
    console.log(props);
    const inputFieldsListJsx = GenerateHtmlFromInputList(props.inputFieldsList);

    return (
        // onSubmit triggers rerender...
        <form className="input-form" id="input-form" onSubmit={(e) => collectFormValues(e)}>
            {inputFieldsListJsx}
        </form>
    );
}

export default InputForm;