export default function(state = {currentUser: 1},action){

    switch(action.type){
        case 'SET_CURRENT_USER':
            return{currentUser: action.id};
        default:
            return state;

    }
}
