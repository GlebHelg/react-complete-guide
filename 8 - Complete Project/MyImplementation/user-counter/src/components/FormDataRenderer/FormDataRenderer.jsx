import './FormDataRenderer.css';



const FormDataRenderer = (props) => {

    const renderData = props.formData.map((formObject,idx) => 
        <div className="form-data-and-btn-wrapper">
            <div className="form-data-wrapper" >
                {formObject.map(formField => {
                    return (
                        <div className="renderFormRow">
                            <p className="renderFormCol">{formField.id}</p>
                            <p className="renderFormCol">{formField.val}</p>
                        </div>
                    );
                })}
            </div> 
            <button className="remove-me-btn" onClick={() => console.log('remove row with idx: ', idx)}>
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