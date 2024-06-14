export default function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT_FROM_CART': {
            const index = state.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        default:
            return state;
    }
}
