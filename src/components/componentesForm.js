function Input(props) {
    return <div>
      <label style={{padding:"5px"}} htmlFor={props.nombre}>{props.labelText}</label>
      <input className="form-control" type="text" name={props.nombre} placeholder={props.nombre} onChange={props.onChange}/>
    </div>
  }
  
  function Select(props) {
        return <div>
        <label style={{padding:"5px"}} htmlFor={props.nombre}>{props.labelText}</label>
            <select className="form-control" name={props.nombre} onChange={props.onChange} value={props.defaultValue}>
            {props.opciones.map((opt, i) => { 
                return <option value={opt} key={i.toString()} > {opt} </option> })}
            </select>
        </div>
  }
  
  function Button(props) {
    return <button onClick={props.onClick} className={props.className} style={props.style}>{props.text}</button>
  }

  export {Input, Select, Button};