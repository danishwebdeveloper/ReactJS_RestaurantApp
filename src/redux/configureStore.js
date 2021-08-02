import { createStore } from 'redux';
import { Reducer, InitialState } from './reducer';

export const configureStore = () => {
    const store = createStore(
        Reducer,
        InitialState
    )
    return store;
}