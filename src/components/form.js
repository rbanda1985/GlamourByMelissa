import React from 'react';
import { Form, Button } from "react-bootstrap";
import Uploader from '../components/imageUpload';

class HairForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        instagram: '',
        facebook: '',
        colorHistory: '',
        hairCare: '',


    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {

        return (
            <div className='custForm d-flex justify-content-start'>
                <Form>
                    <Form.Group controlId='formBasicFirstName'>
                        <Form.Control type='text' placeholder='First Name' name='firstName' required value={this.state.firstName} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId='formBasicLastName'>
                        <Form.Control type='text' placeholder='Last Name' name='lastName' required value={this.state.lastName} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Email' name='email' required value={this.state.email} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId='formBasicPhoneNumber'>
                        <Form.Control type='number' placeholder='Phone Number' name='phoneNumber' required value={this.state.phoneNumber} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId='formBasicInsta'>
                        <Form.Control type='text' placeholder='Instagram' name='instagram' required value={this.state.instagram} onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId='formBasicFaceBook'>
                        <Form.Control type='text' placeholder='Facebook' name='facebook' value={this.state.facebook} onChange={this.handleOnChange}/>
                    </Form.Group>
                    <Form.Group controlId='formBasicUpload'>
                        <Form.Label>Upload Three Images of Inspiration</Form.Label>
                    <div className='uploaderPosition d-flex flex-row'>
                        <div>
                        <Uploader>
                        </Uploader>
                        </div>
                        <div>
                        <Uploader>
                        </Uploader>
                        </div>
                        <div>
                        <Uploader>
                        </Uploader>
                        </div>
                    </div>
                    <Form.Group controlId='controlTextArea'>
                            <Form.Label>Please give a detailed description of your 5 year color history. (Example: At home or at salon, time frames, and color/tones.)</Form.Label>
                            <Form.Control as='textarea' rows='2' name='colorHistory' value={this.state.colorHistory} onChange={this.handleOnChange} />
                        </Form.Group>
                        <Form.Group controlId='controlSelect'>
                            <Form.Label>Are you currently using salon quality hair care at home?</Form.Label>
                            <Form.Control as='select' name='hairCare' value={this.state.hairCare} onChange={this.handleOnChange}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Group>
                        <Form.Group controlId='formBasicUpload'>
                            <Form.Label>Please upload 3 photos if your hair in natural indirect sunlight. Pictures of the front, back, and sides of the hair with no filters.</Form.Label>
                            <div className='uploaderPosition d-flex flex-row'>
                                <div>
                                <Uploader>

                                </Uploader>
                            </div>
                            <div>
                                <Uploader>

                                </Uploader>
                            </div>
                            <div>
                                <Uploader>

                                </Uploader>
                            </div>
                            </div>
                        </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    };
}

export default HairForm;