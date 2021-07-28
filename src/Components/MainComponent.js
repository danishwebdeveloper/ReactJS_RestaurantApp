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