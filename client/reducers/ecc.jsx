export default function(state = {ecc:[], filteredList: []}, action){
    switch(action.type){
        case 'ECC_List':
            return{...state,ecc:action.payload}
        case 'FILTER_WORD':
            return{...state,filterWord: action.suburb}
        case 'FILTERED_LIST':
            return{...state, filteredList: action.theList}
        default:
            return state;

    }
}
