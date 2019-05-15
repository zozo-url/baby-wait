export default function(state = {ecc:[], filteredList: [], usersChildren: [], eccId: null}, action){
    switch(action.type){
        case 'ECC_List':
            return{...state,ecc:action.payload}
        case 'FILTER_WORD':
            return{...state,filterWord: action.suburb}
        case 'FILTERED_LIST':
            return{...state, filteredList: action.theList}
        case 'CHILD_LIST':
            return{...state, usersChildren: action.payload}
        case 'SELECT_ECC':
        return{...state, eccForApplication: action.id}
        default:
            return state;

    }
}
