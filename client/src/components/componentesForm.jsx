function Input(props) {
  return (
      <input
        className="form-control "
        type="text"
        name={props.nombre}
        placeholder={props.nombre}
        onChange={props.onChange}
        autoComplete="off"
        onKeyUp={(e) => props.validar(e, props.regex)}
        onBlur={(e) => props.validar(e, props.regex)}
      />);
}

function Select(props) {
  return (
      <select
        className="form-control"
        name={props.nombre}
        onChange={props.onChange}
        value={props.value}
        onKeyUp={props.validar}
        onBlur={props.validar}
      >
        {props.opciones.map((opt, i) => {
          return (
            <option value={opt} key={i.toString()}>
              {opt}{" "}
            </option>
          );
        })}
      </select>
  );
}

function Button(props) {
  return (
      <button
        onClick={props.onClick}
        className={props.className}
        style={props.style}
      >
        {props.text}
      </button>
  );
}

export { Input, Select, Button };
