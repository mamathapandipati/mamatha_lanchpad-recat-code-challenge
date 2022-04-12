import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
function Postallookup(props) {

  //const [postalDetails, setPostalDataDetails] = useState([]);
  const [data, setData] = useState({
    placeName: "",
    latitude: "",
    state: "",
  })

  const onBlurHandler = (e) => {
    console.log("PostalookPage")
    console.log(e.target.value)
    axios.get(`https://api.zippopotam.us/us/${e.target.value}`)
      .then(response => {
        console.log(response)
        console.log(response.data.places)
        //setPostalDataDetails(response);
        setData(response.data.places);
      }).catch(response => {
        console.log(response)
      })
  }

  return (
    <div class="container-fluid">
      Input the Zip code to search:  <input
        type='number'
        name='userId'
        onBlur={onBlurHandler}>
      </input>

      <button type="button" class="btn btn-info">Get Details</button>
      <div class='form'>
        <h3>Postal Lookup Details</h3>
        <form>
          <div><label for="pname">PlaceName</label>
            :   <input
              type='text'
              name='placeName' readOnly value={data.placeName}></input>
          </div>
          <div>
            <label for="state" >State </label>
            : <input
              type='text'
              name='state' readOnly
            ></input>
          </div>
          <div>
            <label for="latitude" >Latitude</label>
            :  <input readOnly
              type='text'
              name='latitude'>
            </input>
          </div>
          <div>
            <label for="longitude">Longitude</label>
            :  <input readOnly
              type='text'
              name='longitude'>
            </input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Postallookup;