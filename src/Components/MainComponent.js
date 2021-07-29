import React, { Component } from 'react';
import Menu from './MenuComponent';
import Detail from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomeComponent';
import { Contact } from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { About } from './AboutComponent';

import { Redirect, Route, Router, Switch } from 'react-router-dom';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            comments: COMMENTS
        }
    }



    render() {

            const HomePage = () => {
                return ( <
                    Home dish = { this.state.dishes.filter((dish) => dish.featured)[0] }
                    promotion = { this.state.promotions.filter((promo) => promo.featured)[0] }
                    leader = { this.state.leaders.filter((lead) => lead.featured)[0] }
                    />
                )
            }

            // const ContactUS = () => {
            //     return (
            //       <Contact />
            //     )
            // }

            // Match use and make this function becasue we want to match item and show to the dish detail page, 
            // otherwise we also make simple by just doing simple props to dish detail as well
            const DishWithId = ({ match }) => {
                return ( <
                    Detail dish = { this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                    comments = { this.state.comments.filter((comnt) => comnt.dishId === parseInt(match.params.dishId, 10)) }
                    />
                )
            }

            return ( <
                div >
                <
                Header / >
                <
                Switch >
                <
                Route path = "/home"
                component = { HomePage }
                /> { /* But here we also want to pass some value as a props to Menu as we send before so we do some different */ } <
                Route exact path = "/menu"
                component = {
                    () => < Menu dishes = { this.state.dishes }
                    />}/ >
                    <
                    Route path = '/menu/:dishId'
                    component = { DishWithId }
                    /> <
                    Route path = "/aboutus"
                    component = {
                        () => < About leaders = { this.state.leaders }
                        />}/ >
                        <
                        Route path = "/contactus"
                        component = { Contact }
                        /> <
                        Redirect to = "/home" / >
                        <
                        /Switch> <
                        Footer / >
                        <
                        /div>
                    );
                }
            }