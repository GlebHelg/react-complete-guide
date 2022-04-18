import InputForm from '../InputForm/InputForm';
import FormDataRenderer from '../FormDataRenderer/FormDataRenderer';
import {useState} from 'react';

const inputFormPropsGenerator = () => {

    const inputFields = [
        {
            inputType: "text",
            inputLabel: "Username",
            inputId: "UsrName"
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

const FormDataManager = () => {

    let [userList, setUserList] = useState([]);

    console.log('userList: ', userList);
    return (
        <div>
            <h1>User Counter Main</h1>
            <InputForm inputFieldsList = {inputFormPropsGenerator()} 
                       parentUserList = {userList}
                       parentSetUserList = {setUserList}/>
            <FormDataRenderer formData={userList}/>
        </div>

    );
}

export default FormDataManager;