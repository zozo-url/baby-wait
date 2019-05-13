export default function(state = {filteredList: []}, action){
    switch(action.type){
        case 'ECC_List':
            return{...state,ECC:action.payload}
        case 'FILTER_WORD':
            return{...state,filterWord: action.suburb}
        case 'FILTERED_LIST':
            return{...state, filteredList: action.theList}
        default:
            return state;

    }
}
