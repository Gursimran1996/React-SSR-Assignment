export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

export const addProductToCart = () => dispatch => {
    
    dispatch({
        type: ADD_TO_CART,
        payload: filtersData
    });
}