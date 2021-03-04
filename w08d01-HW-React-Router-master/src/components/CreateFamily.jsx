import React from 'react';
import { useState,useEffect } from 'react';

const initialValues = {
    name: '',
    wikiSuffix: '',
    people: [],
  };
  
function CreateFamily (props) {
    const [values, setValues] = useState(initialValues);

    function onSubmitHandler(e){
        e.preventDefault();
        props.newFamily(values)
        console.log(values)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    return (
        <div>
         <form onSubmit={onSubmitHandler}>
         <label>name</label>
         <input
            value={values.name}
            onChange={handleInputChange}
            name="name"
            label="name"
          />
          <label>wikiSuffix</label>
         <input
            value={values.wikiSuffix}
            onChange={handleInputChange}
            name="wikiSuffix"
            label="wikiSuffix"
          />

          <button type='submit'  > create house </button>
        </form>
        </div>
    );
}

export default CreateFamily;
