import './FormDataRenderer.css';



const FormDataRenderer = (props) => {

    const renderData = props.formData.map(formObject => 
       <div style={{border: '5px solid #999999', display:'block'}} >
           {formObject.map(formField => {
               return (
                   <div className="renderFormRow">
                    <p className="renderFormCol">{formField.id}</p>
                    <p className="renderFormCol">{formField.val}</p>
                   </div>
               );
           })}
       </div> 
    );
    
    return (
        <div style={{border: '5px solid #999999', width:'50%', display:'inline-block', textAlign: 'center'}}>
            {renderData}
        </div>
    );
}
export default FormDataRenderer;