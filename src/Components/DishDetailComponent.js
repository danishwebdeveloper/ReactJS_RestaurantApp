import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



export class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    renderComment(comments) {
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


    renderDish(dish) {
        return ( <
            div className = "col-12 col-md-5 m-1" >
            <
            CardImg width = "100%"
            src = { this.props.dishdetail.image }
            alt = { this.props.dishdetail.name }
            />  <
            CardBody >
            <
            CardTitle > { this.props.dishdetail.name } <
            /CardTitle>  <
            CardText > { this.props.dishdetail.description } <
            /CardText>  <
            /CardBody>  <
            /div>
        )
    }

    render() {
        if (this.props.dishdetail != null) {
            return (

                <
                div className = "row" > { this.renderDish(this.props.dish) } { this.renderComment(this.props.dishdetail.comments) } <
                /div>
            )
        }
        return ( <
            div >

            <
            /div>
        )
    }
}