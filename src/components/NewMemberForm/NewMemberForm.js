import React, { useState, Component, useEffect } from "react";
import axios from "axios";

function NewMemberForm() {
    const initalform={
        account_type:"",
        name:"",
        email:"",
        date_of_birth:null,
        gender:"",
        distance:null,
        location:"",
        band_type:"",
        gender_pref:"",
        about_me:"",
    }

    const [formValues,setFormValues]= useState(initalform)
  
    const handleFormChange = (e) => setFormValues({
        ...formValues,
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
      });
    const handleFileUpload = (event) =>{
        console.log(event.target.files[0])
    };

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
          <h1>Create Member(using create())</h1>
          <form onSubmit={handleSubmit} class="pb-5">
              <label>Account Type</label>
                  <div class="input-group">
                      <input onChange={handleFormChange} type="text" name="account_type" value={formValues.account_type} />
                  </div>
              <label>Name</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="name" value={formValues.name} />
              </div>
              <label>Email</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="email" value={formValues.email} />
              </div>
              <label>DOB</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="date" name="date_of_birth" value={formValues.date_of_birth} />
              </div>
              <label>Gender</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="gender" value={formValues.gender} />
              </div>
              <label>Distance</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="number" pattern="[0-100]*" name="distance" value={formValues.distance} />
              </div>
              <label>Location</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="location" value={formValues.location} />
              </div>
              <label>Band Type</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="band_type" value={formValues.band_type} />
              </div>
              <label>Gender Preference</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="gender_pref" value={formValues.gender_pref} />
              </div>
              <label>About Me</label>
              <div class="input-group">
                  <input onChange={handleFormChange} type="text" name="about_me" value={formValues.about_me} />
              </div>
              <input onChange={handleFileUpload} type="file" name="image" />
                  {/* <div>{{$errors->first('account_type')}}</div>
                  <div>{{$errors->first('name')}}</div>
                  <div>{{$errors->first('email')}}</div>
                  <div>{{$errors->first('date_of_birth')}}</div>
                  <div>{{$errors->first('gender')}}</div>
                  <div>{{$errors->first('distance')}}</div>
                  <div>{{$errors->first('location')}}</div>
                  <div>{{$errors->first('band_type')}}</div>
                  <div>{{$errors->first('gender_pref')}}</div>
                  <div>{{$errors->first('about_me')}}</div> */}
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
        </>
      )
}
    
    

export default NewMemberForm;



