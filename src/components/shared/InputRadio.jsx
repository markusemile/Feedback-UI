
function InputRadio({id,name,value,handleChange,selected}) {
    
   
    return (
    <div className="input-radio" >
        <div className="spot" id={value} onChange={(e)=>handleChange(e)}>
             <input type="radio" className='inputRadio' id={id} name={name} placeholder="put your text here"  value={value} /> 
             <label htmlFor={id} className={`${selected===value ? "active" : ""}` } >{value}</label> 
        </div>
    </div>
    )
}

export default InputRadio