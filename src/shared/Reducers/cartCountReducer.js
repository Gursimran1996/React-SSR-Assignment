import { ADD_PRODUCT_TO_CART} from '../Actions/fetchFiltersData';
import { REMOVE_PRODUCT_FROM_CART} from '../Actions/fetchFiltersData';

/**
 * Nee to add cart logic
 */
export default (state=[], action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART: {
            return [ ...action.payload ];
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return action.payload
        }
        default:
            return state;
    }
}