import {createStore} from 'redux';
import {food} from '../data/data';



const someReducer = (state = food, action) => {
    if(action.type === 'SELECTED_CATEGORIE') {
        console.log('state')

    }
}









const store = createStore(someReducer);





