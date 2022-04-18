import {useState} from 'react';
import './InputForm.css';
import InputField from './InputField/InputField';
import AddFormElement from './AddFormElement/AddFormElement';
import RemoveFormElement from './RemoveFormElement/RemoveFormElement';


const GenerateHtmlFromInputList = (inputFieldsList) => {
    console.log('inputFieldsList: ', inputFieldsList);
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
    console.log('addFormElementsToParentState: ', formValues);
    setUserList([...userList, formValues]);
};

const InputForm = (props) => {
    let [formFields, setFormFields] = useState([
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
                                            inputId: "submit",
                                            inputValue: "Submit"
                                        }
                                    ]);

    console.log(props);
    const inputFieldsListJsx = GenerateHtmlFromInputList(formFields);
 
 


    return (
        <div className="input-form-div" >
            <form className="input-form"
                id="input-form" 
                onSubmit={(e) => addFormElementsToParentState(e, props.parentUserList, props.parentSetUserList)}>
                {inputFieldsListJsx}
            </form>
            <AddFormElement formFields={formFields}
                            setFormFields={setFormFields}/>
            <RemoveFormElement formFields={formFields}
                               setFormFields={setFormFields}/>
        </div>
    );
}

export default InputForm;