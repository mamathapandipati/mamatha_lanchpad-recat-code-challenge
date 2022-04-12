import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Container } from "react-bootstrap";

function Universities() {
  const [countries, setCountries] = useState([]);
  const [universityName, setUniversityName] = useState([]);
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none')
      .then((response) => {
        setCountries(response.data.data);
      }).catch((err) => {
        console.log("error")
      });
  }, []);

  const handlecountry = (event) => {
    const cntryName = event.target.value;
    axios.get(`http://universities.hipolabs.com/search?country=${cntryName}`)
      .then((response) => {
        console.log(response.data)
        setUniversityName(response.data);
      }).catch((err) => {
        alert("error");
      });
  }

  // const ucollege = [...new Set(countries.map(item => item.ucollege))];
  // ucollege.sort();
  // console.log(countries);
  // const handle1 = (e) => {
  //   let colleges = countries.filter(colleges = colleges.ucollege === e.target.value)
  //   console.log(colleges);
  //   colleges = [...new Set(colleges.map(item => item.name))]
  //   colleges.sort()
  //   console.log(colleges);
  //   setUniversityName(colleges);
  // }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row mb-3">
          <div className="form-group col-md-4">
            <label className="mb-2">Country</label>
            <select name="countries" className="form-control" onChange={(e) => handlecountry(e)}>
              <option>--Select Country--</option>
              {
                countries.map((getcon) => (
                  <option key={getcon.name} value={getcon.name}> {getcon.name}</option>
                ))}
            </select>
            <label className="mb-2">University</label>
            <select name="countries" className="form-control">
              <option>--Select University--</option>
              {
                universityName.map((uname) => (
                  <option key={uname.name} value={uname.name}> {uname.name}</option>
                ))}
            </select>
            <label className="mb-2">Domain</label>
            <select name="countries" className="form-control">
              <option>--Select Domain--</option>
              {
                universityName.map((uname) => (
                  <option key={uname.domains} value={uname.domains}> {uname.domains}</option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universities;