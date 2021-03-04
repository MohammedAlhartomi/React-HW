import React from 'react';
import { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom' 

const initialValues = {
    name: '',
    description: '',
    imageSuffix: '',
    wikiSuffix: ''
  };
  
function AddNew  (props)  {
    const [values, setValues] = useState(initialValues);
    const { id } = useParams()

    function onSubmitHandler(e){
        e.preventDefault();
        props.addFamilyMember(values,id)
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
          <label>description</label>
         <input
            value={values.description}
            onChange={handleInputChange}
            name="description"
            label="description"
          />
<label>imageSuffix</label>
              <input
            value={values.imageSuffix}
            onChange={handleInputChange}
            name="imageSuffix"
            label="imageSuffix"
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

export default AddNew;
