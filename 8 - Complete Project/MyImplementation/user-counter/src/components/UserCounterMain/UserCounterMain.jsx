import InputForm from '../InputForm/InputForm';


const UserCounterMain = () => {

    const inputFieldUsername = <InputForm />;
    const inputFieldAge = <InputForm />;
    
    return (
        <div>
            <h1>Hola</h1>
            <InputForm label="Name"/>
            {/* {inputFieldUsername}
            {inputFieldAge} */}
        </div>

    );
}

export default UserCounterMain;