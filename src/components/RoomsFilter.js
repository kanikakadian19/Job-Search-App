import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from "../components/Title";
//get all unique values
const getUnique = (items,value) =>{
    return [...new Set(items.map(item=> item[value]))]
}
export default function RoomsFilter({rooms}) {
   const context =  useContext(RoomContext);
   const{
       handleChange,type,location,price,minPrice,maxPrice,minSize,maxSize,workFromHome,workFromOffice} = context;
//get unique types
    let types = getUnique(rooms,'type');
    //add all
    types =['all',...types];
    //map to jsx
    types= types.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>);
    });
    let people = getUnique(rooms,'location');
    people =['all',...people];
    people = people.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>);
    })

   return(
    <section className="filter-container">
       <Title title="search jobs"/>
       <form className="filter-form">
           {/*select type*/}
           <div className="form-group">
            <label htmlFor="type">job type</label>
            <select name="type" id="type" value={type}
            className="form-control" onChange={handleChange}>
              {types}  
            </select>
           </div>
           {/*end of select*/}
           {/*guest type*/}
           <div className="form-group">
            <label htmlFor="location">Location</label>
            <select name="location" id="location" value={location}
            className="form-control" onChange={handleChange}>
              {people}  
            </select>
           </div>
           {/*end of select*/}

           {/*price type*/}
           <div className="form-group">
            <label htmlFor="price">Salary per month ${price}</label>
            <input type="range" name="price" min={minPrice}
            max= {maxPrice} id="price" value={price} onChange={handleChange}
            className="form-control"/>
           </div>
           {/*end of select*/}
            {/*sizee type*/}
           <div className="form-group">
            <label htmlFor="size">experience</label>
            <div className="size-inputs">
                <input type="number" name="minSize" id="size"
                value={minSize} onChange={handleChange}
                className="size-input"/>
                 <input type="number" name="maxSize" id="size"
                value={maxSize} onChange={handleChange}
                className="size-input"/>
                

            </div>
            
           </div>
           {/*end of select*/}
           {/*extras */}
           <div className="form-group">
               <div className="single-extra">
                   <input type="checkbox" name= "workFromHome" id="workFromHome" checked={workFromHome}
                   onChange={handleChange}/>
                   <label htmlFor="workFromHome">workFromHome</label>
               </div>
               <div className="single-extra">
                   <input type="checkbox" name= "workFromOffice" id="workFromOffice" checked={workFromOffice}
                   onChange={handleChange}/>
                   <label htmlFor="workFromOffice">workFromOffice</label>
               </div>
           </div>

       </form>
   </section>
   );

}
