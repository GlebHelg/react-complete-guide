import './FormDataRenderer.css';



const FormDataRenderer = (props) => {

    const removeRow = (idx) => {
        props.formData.splice(idx, 1)
        props.parentSetUserList([...props.formData]);
    }

    const renderData = props.formData.map((formObject,idx) => 
        <div className="form-data-and-btn-wrapper"  key={idx+"main"}>
            {idx}
            <div className="form-data-wrapper" >
                {formObject.map((formField, idx) => {
                    return (
                        <div className="renderFormRow" key={idx}>
                            <p className="renderFormCol">{formField.id}</p>
                            <p className="renderFormCol">{formField.val}</p>
                        </div>
                    );
                })}
            </div> 
            <button className="remove-me-btn" onClick={() => removeRow(idx)}>
                X
            </button>
        </div>
    );
    
    return (
            <div className="form-data-renderer">
                {renderData}
            </div>
    );
}
export default FormDataRenderer;