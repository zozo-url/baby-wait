export default function(state = {}, action){
    console.log('reducer: ', action.suburb)
    switch(action.type){
        case 'ECC_List':
            return{...state,ECC:action.payload}
        case 'FILTERLIST':
            return{...state,filteredList: action.suburb}
        default:
            return state;

    }
}
