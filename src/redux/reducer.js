import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

export const InitialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS
}

export const Reducer = (state = InitialState, action) => {
    return state;
}