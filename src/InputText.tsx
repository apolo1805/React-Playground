import { useState } from 'react';

function InputText(props: any) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: any) => {
      setInputValue(e.target.value);
      props.changeValue(e.target.value);
    };

    return (
        <>
            <div className="form-group row mb-3">
            <label htmlFor="inputText1" className="col-sm-2">{props.label}:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id={props.id} name={props.name} onChange={handleChange} value={inputValue} />
            </div>
          </div>
        </>
    )
}

export default InputText