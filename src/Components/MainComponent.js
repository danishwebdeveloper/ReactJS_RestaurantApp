import React, { Component } from 'react';
import Menu from './MenuComponent';
import Detail from './DishDetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomeComponent';
import { Contact } from './ContactComponent';
import { About } from './AboutComponent';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback, fetchFeedbacks } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Initialize as an redux state store as an props
const mapStateToProps = (state) => {
    return {
        // prop: state.prop
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) },
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomePage = () => {
                return ( <
                    Home dish = { this.props.dishes.dishes.filter((dish) => dish.featured)[0] }
                    dishesLoading = { this.props.dishes.isLoading }
                    dishErrMess = { this.props.dishes.errMess }

                    promotion = { this.props.promotions.promotions.filter((promo) => promo.featured)[0] }
                    promoLoading = { this.props.promotions.isLoading }
                    promoErrMess = { this.props.promotions.errMess }

                    leader = { this.props.leaders.leaders.filter((leader) => leader.featured)[0] }
                    leaderLoading = { this.props.leaders.isLoading }
                    leaderErrMess = { this.props.leaders.errMess }
                    />
                );
            }
            // Match use and make this function becasue we want to match item and show to the dish detail page, 
            // otherwise we also make simple by just doing simple props to dish detail as well
        const DishWithId = ({ match }) => {
            return ( <
                Detail dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                isLoading = { this.props.dishes.isLoading }
                errMess = { this.props.dishes.errMess }
                comments = { this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                commentsErrMess = { this.props.comments.errMess }
                postComment = { this.props.postComment }
                />
            );
        };

        const ResetFeedbackForm = () => {
            return ( <
                Contact resetFeedbackForm = { this.props.resetFeedbackForm }
                // feedbacksErrMess={this.props.feedbacks.errMess}
                postFeedback = { this.props.postFeedback }
                />
            )
        }

        const AboutUsPage = () => {
            return ( <
                About leaders = { this.props.leaders.leaders }
                />
            );
        };
        return ( <
            div >
            <
            Header / >
            <
            TransitionGroup >
            <
            CSSTransition key = { this.props.location.key }
            classNames = "page"
            timeout = { 300 } >

            <
            Switch >
            <
            Route path = "/home"
            component = { HomePage }
            />  { /* But here we also want to pass some value as a props to Menu as we send before so we do some different */ }

            <
            Route exact path = "/menu"
            component = {
                () => < Menu dishes = { this.props.dishes }
                />}/ >
                <
                Route path = '/menu/:dishId'
                component = { DishWithId }
                />  <
                Route path = "/aboutus"
                component = { AboutUsPage }
                /> <
                Route path = "/contactus"
                component = { ResetFeedbackForm }
                />  <
                Redirect to = "/home" / >
                <
                /Switch> 

                <
                /CSSTransition> <
                /TransitionGroup> <
                Footer / >
                <
                /div>
            );
        }
    }

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));