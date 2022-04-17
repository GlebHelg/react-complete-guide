import InputForm from '../InputForm/InputForm';
import {useState} from 'react';

const inputFormPropsGenerator = () => {

    const inputFields = [
        {
            inputType: "text",
            inputLabel: "Name",
            inputId: "Name"
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

const UserCounterMain = () => {

    let [userList, setUserList] = useState([]);

    console.log('userList: ', userList);
    return (
        <div>
            <h1>User Counter Main</h1>
            <InputForm inputFieldsList={inputFormPropsGenerator()} 
                       parentSetUserList={setUserList}/>
            <p>{userList.length > 1 ? userList[0].id  : ''}</p>
            <p>{userList.length > 1 ? userList[0].val : ''}</p><br />
            <p>{userList.length > 1 ? userList[1].id  : ''}</p>
            <p>{userList.length > 1 ? userList[1].val : ''}</p><br />
        </div>

    );
}

export default UserCounterMain;