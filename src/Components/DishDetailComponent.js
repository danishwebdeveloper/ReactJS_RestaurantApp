import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { CardImg, CardBody, CardText, CardTitle, BreadcrumbItem, Breadcrumb, Modal, Button, Label, Col, Row, ModalHeader, ModalBody } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelOpen: false
        }
        this.toogleModel = this.toogleModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toogleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }

    handleSubmit(values) {
        this.toogleModel();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return ( <
            div >
            <
            Button outline onClick = { this.toogleModel } >
            Submit Comment <
            /Button> <
            Modal isOpen = { this.state.isModelOpen }
            toogle = { this.toogleModel } >
            <
            ModalHeader toggle = { this.toogleModel } > Submit Comment < /ModalHeader> <
            ModalBody >
            <
            LocalForm onSubmit = {
                (values) => this.handleSubmit(values) } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "rating"
            md = { 3 } > Select Rating < /Label> <
            Col md = { 9 } >
            <
            Control.select className = "form-control"
            name = "rating"
            model = ".rating"
            id = "rating" >
            <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 < /option> <
            /Control.select> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "authorname"
            md = { 3 } > Your Name < /Label> <
            Col md = { 9 } >
            <
            Control.text name = "authorname"
            model = ".authorname"
            placeholder = "Your Name"
            className = "form-control"
            validators = {
                {
                    required,
                    maxLength: maxLength(15),
                    minLength: minLength(5)
                }
            }
            /> <
            Errors className = "form-danger"
            model = ".authorname"
            name = "authorname"
            show = "touched"
            messages = {
                {
                    required: required,
                    maxLength: "Maximum is 15 character name or less",
                    minLength: "Minimum character should be 5"
                }
            }
            /> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "comment"
            md = { 3 } > Comment < /Label> <
            Col md = { 9 } >
            <
            Control.textarea name = "comment"
            placeholder = "Feedback"
            model = ".comment"
            className = "form-control" /
            >
            <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Col md = { 2 } >
            <
            Button type = "submit"
            value = "submit"
            color = "primary" >
            Submit <
            /Button> <
            /Col> <
            /Row> <
            /LocalForm> <
            /ModalBody> <
            /Modal>

            <
            /div>
        )
    }
}

function RenderComment({ comments, addComment, dishId }) {
    return ( <
        div className = "col-12 col-md-5 m-1" >
        <
        h4 > COMMENTS < /h4>  <
        ul > {
            comments.map((comnt) =>
                <
                li key = { comnt.id } >
                <
                p > { comnt.comment } < /p>  <
                p > { comnt.author }, { comnt.date.split("T")[0] } < /p> </li >
            )
        } < /ul> 

        <
        CommentForm addComment = { addComment }
        dishId = { dishId }
        /> <
        /div>
    )
}


function RenderDish({ dish }) {
    return ( <
        div className = "col-12 col-md-5 m-1" >
        <
        CardImg width = "100%"
        src = { baseUrl + dish.image }
        alt = { dish.name }
        />  <
        CardBody >
        <
        CardTitle > { dish.name } <
        /CardTitle>  <
        CardText > { dish.description } <
        /CardText>  <
        /CardBody>  <
        /div>
    )
}



const Detail = (props) => {
    if (props.isLoading) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Loading / >
            <
            /div> <
            /div>
        );
    } else if (props.errMess) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            h4 > { props.errMess } < /h4> <
            /div> <
            /div>
        );
    }
    if (props.dish != null) {

        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem > < Link to = "/menu" > Menu < /Link></BreadcrumbItem >
            <
            BreadcrumbItem active > { props.dish.name } < /BreadcrumbItem> <
            /Breadcrumb> <
            div className = "col-12" >
            <
            h3 > { props.dish.name } < /h3> <
            hr / >
            <
            /div>                 <
            /div> <
            div className = "row" >
            <
            div className = "col-12 col-md-5 m-1" >
            <
            RenderDish dish = { props.dish }
            /> <
            /div> <
            div className = "col-12 col-md-5 m-1" >
            <
            RenderComment comments = { props.comments }
            addComment = { props.addComment }
            dishId = { props.dish.id }
            /> <
            /div> <
            /div> <
            /div>
        );
    }
    return ( <
        div >
        <
        /div>
    )
}
export default Detail;