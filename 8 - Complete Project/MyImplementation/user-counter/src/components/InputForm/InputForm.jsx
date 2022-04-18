import InputField from './InputField/InputField';
import './InputForm.css';

const GenerateHtmlFromInputList = (inputFieldsList) => {
    return inputFieldsList.map((o, idx) => <InputField 
                                                    type={o.inputType} 
                                                    label={o.inputLabel} 
                                                    id={o.inputId} 
                                                    value={o.inputValue}
                                                    end={(idx < inputFieldsList.length-1) ? false : true}
                                                    key={idx}/>);
}

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

const addFormElementsToParentState = (e, userList, setUserList) => {
    e.preventDefault();

    const formValues = collectFormValues(e);
    setUserList([...userList, formValues]);
};

const inputFormRowList = () => {

    const inputFields = [
        {
            inputType: "text",
            inputLabel: "Username",
            inputId: "UsrName"
        },{
            inputType: "text",
            inputLabel: "Address",
            inputId: "Address"
        },
        {
            inputType: "number",
            inputLabel: "Age",
            inputId: "UserAge"
        },
        {
            inputType: "submit",
            inputId: "addUser",
            inputValue: "Add User"
        }
    ];
    return inputFields;
};

const InputForm = (props) => {
    console.log(props);
    const inputFieldsListJsx = GenerateHtmlFromInputList(inputFormRowList());

    return (
        <div className="input-form-div" >
            <form className="input-form"
                id="input-form" 
                onSubmit={(e) => addFormElementsToParentState(e, props.parentUserList, props.parentSetUserList)}>
                {inputFieldsListJsx}
            </form>
        </div>
    );
}

export default InputForm;