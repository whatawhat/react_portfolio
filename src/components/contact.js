//import render from 'dom-serializer';
import React from 'react';
import { Form } from 'react-bootstrap';
//import { requiredMessage, validEmail } from "../utils/validate";

function Contact() {
        return (
            <div>
                {/* <Form onSubmit={this.mySubmitHandler}></Form> */}
                <h2>Contact Me</h2>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control id='nameInput' type="text" placeholder="Your Name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Your Email"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control placeholder="Your message" as="textarea" rows={3}/>
                    </Form.Group>
               
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        )
    }

export default Contact;