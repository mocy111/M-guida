import React,{useContext} from 'react'
import {RoomContext} from '../Context'
import Title from "./Title"


// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

const RoomsFilter = ({rooms}) => {

    const { handleChange,
        type,
        sizeType,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets} = useContext(RoomContext)
      
          // get unique types
    let types = getUnique(rooms, "type");
    // get unique sizes
    let sizes = getUnique(rooms, "size");
   

    // add all to types
    types = ["all", ...types];
    // add all to sizes
    sizes = ["all", ...sizes];
    
    // map to jsx typs
    types = types.map((item, index) => (
        <option key={index} value={item}>
        {item}
        </option>
    ));
    // map to jsx sizes
    sizes = sizes.map((item, index) => (
        <option key={index} value={item}>
        {item}
        </option>
    ));

        // get unique capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
        {item}
        </option>
    ));

    return (
        <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Localisation</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Chambres</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price </label>
          {/* <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          /> */}
            <div className="size-inputs">
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size </label>
          <select
            name="sizeType"
            id="sizeType"
            onChange={handleChange}
            className="form-control"
            value={sizeType}
          >
            {sizes}
          </select>
        </div>
        {/* end of select type */}
        {/* extras */}
        {/* <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div> */}
        {/* end of extras type */}
      </form>
    </section>
    )
}

export default RoomsFilter
