import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
//import Uploader from '../components/imageUpload';
import axios from 'axios';

class HairForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            instagram: '',
            facebook: '',
            colorHistory: '',
            hairCare: '',
            extensionLength: '',
            extensionInfo: '',
            photos: []

        };

        //this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
    }


    /*onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    } */

    


    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    uploadHandler(event) {
        const data = new FormData();
        data.append('file', event.target.files[0]);

        axios.post('/upload', data)
        .then((res) => {
            this.setState({photos: [res.data, ...this.state.photos]});
        });
    }

    
    

    async handleSubmit(e) {
        e.preventDefault();
        
        
        
        const { firstName, lastName, email, phoneNumber, instagram, facebook, colorHistory, hairCare, photos, extensionLength, extensionInfo} = this.state


        await axios.post('/api/form', {
            firstName,
            lastName,
            email,
            phoneNumber,
            instagram,
            facebook,
            colorHistory,
            hairCare,
            photos,
            extensionLength,
            extensionInfo
        })

        
        
    };

    
    render() {

        return (
            <div className='d-flex justify-content-start'>
                <Form onSubmit={this.handleSubmit.bind(this)} id='contactForm'>
                    <Form.Group controlId='formBasicFirstName'>
                        <Form.Control type='text' placeholder='First Name' name='firstName' required value={this.state.firstName} onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId='formBasicLastName'>
                        <Form.Control type='text' placeholder='Last Name' name='lastName' required value={this.state.lastName} onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Email' name='email' required value={this.state.email} onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId='formBasicPhoneNumber'>
                        <Form.Control type='number' placeholder='Phone Number' name='phoneNumber' required value={this.state.phoneNumber} onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId='formBasicInsta'>
                        <Form.Control type='text' placeholder='Instagram' name='instagram' required value={this.state.instagram} onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId='formBasicFaceBook'>
                        <Form.Control type='text' placeholder='Facebook' name='facebook' value={this.state.facebook} onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId='controlTextArea'>
                            <Form.Label>Please give a detailed description of your 5 year color history. (Example: At home or at salon, time frames, and color/tones.)</Form.Label>
                            <Form.Control as='textarea' rows='2' name='colorHistory' value={this.state.colorHistory} onChange={this.handleChange.bind(this)} />
                        </Form.Group>
                        <Form.Group controlId='controlSelect'>
                            <Form.Label>Are you currently using salon quality hair care at home?</Form.Label>
                            <Form.Control as='select' name='hairCare' value={this.state.hairCare} onChange={this.handleChange.bind(this)}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='controlSelect'>
                            <Form.Label>Please specify the desired length of extensions</Form.Label>
                            <Form.Control as='select' name='extensionLength' value={this.state.extensionLength} onChange={this.handleChange.bind(this)}>
                                <option></option>
                                <option>16"</option>
                                <option>18"</option>
                                <option>20"</option>
                                <option>22"</option>
                                <option>24"</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='controlSelect'>
                            <Form.Label>Are you looking for length, fullness, or both?</Form.Label>
                            <Form.Control as='select' name='extensionInfo' value={this.state.extensionInfo} onChange={this.handleChange.bind(this)}>
                                <option></option>
                                <option>Length</option>
                                <option>Fullness</option>
                                <option>Both</option>
                            </Form.Control>
                            <Form.Group controlId='formBasicUpload'>
                        <Form.Label style={{marginTop: '25px', fontWeight: 'bold'}}>Upload Three Images of Inspiration</Form.Label>
                        <Form.File name='file' onChange={this.uploadHandler}  multiple/>
                        {this.state.photos.map(photo => (
          <img src={`http://localhost:3000/${photo.filename}`} alt=''/>
        ))}
                    </Form.Group>
                        </Form.Group>
                        <Form.Group controlId='formBasicUpload'>
                            <Form.Label style={{marginTop: '25px', fontWeight: 'bold'}}>Please upload 3 photos of your hair in natural indirect sunlight. Pictures of the front, back, and sides of the hair with no filters.</Form.Label>
                            <Form.File name='file' onChange={this.uploadHandler} multiple/>
                            {this.state.photos.map(photo => (
          <img src={`http://localhost:3000/${photo.filename}`} alt=''/>
        ))}</Form.Group>
             
                    <Button variant='dark' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    };

}
export default HairForm;