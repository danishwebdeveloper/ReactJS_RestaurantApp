import React, {Component} from 'react';
import {BreadcrumbItem, Breadcrumb, Button, Label, FormGroup, FormFeedback, Col, Form, Input, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


export class Contact extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values){
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render(){
        
        return(
            <div className="container">
                 <div className="row">         
    <Breadcrumb>
    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
    <BreadcrumbItem active>Contact us</BreadcrumbItem>
    </Breadcrumb>
    <div className="col-12">
        <h3>Contact Us</h3>
        <hr />
    </div>
    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your FeedBack</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                       <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text
                                model=".firstname"
                                id="firstname"
                                name="firstname"    
                                placeholder="First Name"
                                className="form-control" 
                                validators= {{
                                    required, 
                                    maxLength: maxLength(10),
                                    minLength: minLength(3)
                                }}
                                />
                                <Errors
                                className="form-danger"
                                model=".firstname"
                                show="touched"
                                messages ={{
                                    required : required,
                                    maxLength: "Not more than 10 character",
                                    minLength: "Not less than 3 characters"
                                }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text 
                                model=".lastname"
                                id="lastname"
                                className="form-control"
                                name="lastname"
                                placeholder="lastname"
                                validators= {{
                                    required, 
                                    maxLength: maxLength(10),
                                    minLength: minLength(3)
                                }}
                                />
                                 <Errors
                                className="form-danger"
                                model=".lastname"
                                show="touched"
                                messages ={{
                                    required : required,
                                    maxLength: "Not more than 10 character",
                                    minLength: "Not less than 3 characters"
                                }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact No</Label>
                            <Col md={10}>
                                <Control.text 
                                model=".telnum"
                                id="telnum"
                                className="form-control"
                                name="telnum"
                                placeholder="telnum"
                                validators={{
                                    required,
                                    isNumber,
                                    minLength: minLength(9),
                                    maxLength:maxLength(13)
                                }}
                                />
                                <Errors
                                className="form-danger"
                                model=".telnum"
                                show="touched"
                                messages ={{
                                    required : required,
                                    isNumber : "Should be Numbers",
                                    maxLength: "Maximum of 13 Characters",
                                    minLength: "Minimum length shoudl be 9"
                                }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text 
                                model=".email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="email"
                                validators={{
                                    required,
                                    validEmail
                                }}
                                />
                                <Errors
                                className="form-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required : required,
                                    validEmail : "Should be valid email, its not valid email"
                                }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:6 , offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox 
                                        model=".agree"
                                        name="agree"
                                        className="form-check"
                                        /> { ' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                    </div>
                            </Col>
                            <Col md={{size:3 , offset:1}}>
                                <Control.select 
                                model=".contactType"
                                name="contactType"
                                className="form-control"
                                >
                                 <option>Tel,No</option>
                                 <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Control.textarea 
                            model=".message"
                            name="message"
                            className="form-control"
                            />
                        </Row>
                        <Row className="form-group">
                            <Col md={2}>
                                <Button type="submit" color="primary">
                                Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
                </div>
            </div>
        );
    }
}


