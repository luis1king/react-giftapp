import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {Component} from "react";
import { GiftGrid } from './components/GiftGrid';

const Giftexpertapp = () => {

    const [categories, setCategories] = useState(["We are bears"]);

    // const agregar = ()=>{

    //      //Otra Forma de hacerlo 
    //     //setCategories(e=> [...e,"Luis"]);

    //     //setCategories([...categories,"Luis"]);

    // }



    return (
        <>

        <h2>GifExperApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>


        

        {

        categories.map(e=>< GiftGrid key={e} e={e}/>)
        }



        

            
        </>
    );
}

export default Giftexpertapp;
