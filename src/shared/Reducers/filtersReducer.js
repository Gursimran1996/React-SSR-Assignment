import { FETCH__FILTERS_DATA } from '../Actions/fetchFiltersData';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH__FILTERS_DATA: {
            return [ ...action.payload ];
        }
        default:
            return state;
    }
}