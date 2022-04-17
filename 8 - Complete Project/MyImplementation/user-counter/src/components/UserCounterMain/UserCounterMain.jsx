import InputForm from '../InputForm/InputForm';

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

    return (
        <div>
            <h1>User Counter Main</h1>
            <InputForm inputFieldsList={inputFormPropsGenerator()}/>

        </div>

    );
}

export default UserCounterMain;