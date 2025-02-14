import { useState } from 'react';

function InputText(props: any) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="form-group row mb-3">
            <label htmlFor="inputText1" className="col-sm-2">{props.label}:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputText1" name="inputText1" value={inputValue} onChange={handleInputChange} />
            </div>
          </div>
        </>
    )
}

export default InputText