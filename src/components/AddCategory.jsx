import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const escribir = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length>2){
        setCategories( e =>[inputValue,...e]);
    setInputValue("");
    }


    }


  return (
    <>
    <h1>{inputValue}</h1>
    <form onSubmit={handleSubmit}>
    <input 
        type="text"
        value={inputValue}
        onChange={escribir}
        placeholder="Busca tus gifs"/>
        </form>
        
    </>
  )
}

AddCategory.propTypes = {
  setCategories:  PropTypes.func.isRequired
}