import React, { useState, Component, useEffect } from "react";
import axios from "axios";

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          image: ''
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleFileUpload = this.handleFileUpload.bind(this)
        this.handleFileHandler = this.handleFileHandler.bind(this)
      }

    handleFileUpload = (event) =>{
        console.log(event.target.files[0])
        this.setState({
            image:event.target.files[0]
        })
    };


    handleFileHandler = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", this.state.image);
        
        axios.put('http://band_app.test/api/file/1/image_list',formData)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    };

    render() {

      return (
        <form encType="multipart/form-data" onSubmit={this.handleFileHandler}>
        <input onChange={this.handleFileUpload} type="file" name="image"/>
        <button type="submit">Upload</button>
      </form>
      );
    }
  }
  
  export default UploadImage;


          // axios.post('http://band_app.test/api/members', formData,{
        //     onUploadProgress: progressEvent => {
        //       console.log(progressEvent.loaded / progressEvent.total)
        //     }
        // })



    // function UploadImage() {
    //     const initalImage={
    //         image:"",
    //     }
    
    //     const handleFileUpload = (event) =>{
    //         console.log(event.target.files[0])
    //     };
    
    
    //     return (
    //         <>
    //           <input onChange={handleFileUpload} type="file" name="image" />
    //         </>
    //       )
    // }
        
        
    
    // export default UploadImage;





