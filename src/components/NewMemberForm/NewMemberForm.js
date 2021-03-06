import React, { useState, Component, useEffect } from "react";
import axios from "axios";
import UploadImage from "../UploadImage/UploadImage";

function NewMemberForm() {
    const initalform={
        account_type:"groupie",
        name:"",
        email:"",
        date_of_birth:null,
        gender:"male",
        distance:5,
        location:"",
        band_type:"cover",
        gender_pref:"male",
        about_me:"",
    }

    const [formValues,setFormValues]= useState(initalform)
  
    const handleFormChange = (e) => setFormValues({
        ...formValues,
        [e.target.name]: e.target.name === 'distance' ? parseInt(e.target.value) : e.target.value,
      });

      const handleSubmit= e => {
        e.preventDefault();
        axios.post('http://band_app.test/api/members',formValues)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        console.log(formValues);
    }

    return (
        <>

{/* <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} /> */}
          <h1>Create Member(using create())</h1>
          <form onSubmit={handleSubmit} class="pb-5">
              <label>Account Type</label>
              <div class="input-group">
                <select defaultValue={formValues.account_type} type="text" name="account_type" onChange={handleFormChange}>
                    <option value="groupie">Groupie</option>
                    <option value="band_member">Band Member</option>
                    <option value="producer">Producer</option>
                </select>
                </div>
              <label>Name</label>
              <div class="input-group">
                  <input placeholder="Enter Name" onChange={handleFormChange} type="text" name="name" value={formValues.name} />
              </div>
              <label>Email</label>
              <div class="input-group">
                  <input placeholder="Enter Email" onChange={handleFormChange} type="text" name="email" value={formValues.email} />
              </div>
              <label>DOB</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="date" name="date_of_birth" value={formValues.date_of_birth} />
              </div>
              <label>Gender</label>
              <div class="input-group">
                  <select defaultValue={formValues.gender} type="text" name="gender" onChange={handleFormChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                </select>
              </div>
              <label>Distance</label>
              <div class="input-group">
                  {/* <input onChange={handleFormChange} type="number" name="distance" value={formValues.distance} /> */}
                <select defaultValue={formValues.distance} type="number" name="distance" onChange={handleFormChange}>
                    <option type="number" value="5">5 mi</option>
                    <option type="number" value="15">15 mi</option>
                    <option type="number" value="25">25 mi</option>
                    <option type="number" value="100">100 mi</option>
                    <option type="number" value="10000">Global</option>
                </select>
              </div>
              <label>Location</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="location" value={formValues.location} />
              </div>
              <label>Band Type</label>
              <div class="input-group">
                  {/* <input onChange={handleFormChange} type="text" name="band_type" value={formValues.band_type} /> */}
                  <select defaultValue={formValues.band_type} type="text" name="band_type" onChange={handleFormChange}>
                    <option value="cover">Cover Only</option>
                    <option value="original">Original Only</option>
                    <option value="both">Both</option>
                    <option value="dont_mind">Dont Mind</option>
                </select>
              </div>
              <label>Gender Preference</label>
              <div class="input-group">
                  {/* <input onChange={handleFormChange} type="text" name="gender_pref" value={formValues.gender_pref} /> */}
                  <select defaultValue={formValues.gender_pref} type="text" name="gender_pref" onChange={handleFormChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="mix">Mix</option>
                    <option value="dont_mind">I dont mind</option>
                </select>
              </div>
              <label>About Me</label>
              <div class="input-group">
                  <input placeholder="Enter About You" onChange={handleFormChange} type="text" name="about_me" value={formValues.about_me} />
              </div>
              <button className="btn" type="submit">Add Member</button>
          </form>
                  <div>{formValues.account_type}</div>
                  <div>{formValues.name}</div>
                  <div>{formValues.email}</div>
                  <div>{formValues.date_of_birth}</div>
                  <div>{formValues.gender}</div>
                  <div>{formValues.distance}</div>
                  <div>{formValues.location}</div>
                  <div>{formValues.band_type}</div>
                  <div>{formValues.gender_pref}</div>
                  <div>{formValues.about_me}</div>
                  <UploadImage/>
        </>
      )
}
    
    

export default NewMemberForm;



