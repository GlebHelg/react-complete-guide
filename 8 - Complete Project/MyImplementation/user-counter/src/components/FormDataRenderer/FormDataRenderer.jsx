



const FormDataRenderer = (props) => {

    const renderData = props.formData.map(formObject => 
       <div style={{border: '5px solid #999999', display:'block'}} >
           <p>{formObject[0].id}</p>
           <p>{formObject[0].val}</p>
           <p>{formObject[1].id}</p>
           <p>{formObject[1].val}</p>
       </div> 
    );
    
    return (
        <div style={{border: '5px solid #999999', width:'50%', display:'inline-block', textAlign: 'center'}}>
            {renderData}
        </div>
    );
}
export default FormDataRenderer;