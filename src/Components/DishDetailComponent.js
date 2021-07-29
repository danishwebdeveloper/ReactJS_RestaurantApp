import React from 'react';
import { Link } from 'react-router-dom';
import { CardImg, CardBody, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';

function RenderComment({ comments }) {
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
        } < /ul> </div >
    )
}


function RenderDish({ dish }) {
    return ( <
        div className = "col-12 col-md-5 m-1" >
        <
        CardImg width = "100%"
        src = { dish.image }
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