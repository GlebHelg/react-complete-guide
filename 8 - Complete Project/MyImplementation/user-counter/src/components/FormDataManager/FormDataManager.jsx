import InputForm from '../InputForm/InputForm';
import FormDataRenderer from '../FormDataRenderer/FormDataRenderer';
import {useState} from 'react';


const FormDataManager = () => {

    let [userList, setUserList] = useState([]);

    console.log('userList: ', userList);
    return (
        <div>
            <h1>Form Data Manager</h1>
            <InputForm parentUserList = {userList}
                       parentSetUserList = {setUserList}/>
            <FormDataRenderer formData={userList}
                              parentSetUserList = {setUserList}/>
        </div>

    );
}

export default FormDataManager;