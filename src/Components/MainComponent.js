import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Detail from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomeComponent';
import { Redirect, Route, Router, Switch } from 'react-router-dom';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }



    render() {

        const HomePage = () => {
            return ( <
                Home / >
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
                Redirect to = "/home" / >
                <
                /Switch> <
                Footer / >
                <
                /div>
            );
        }
    }