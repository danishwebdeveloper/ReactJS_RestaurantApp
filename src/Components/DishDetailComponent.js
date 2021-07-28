import React from 'react';
import { CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

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
            div className = "row" >
            <
            RenderDish dish = { props.dish }
            /> <
            RenderComment comments = { props.dish.comments }
            /> <
            /div>
        )
    }
    return ( <
        div >
        <
        /div>
    )
}
export default Detail;