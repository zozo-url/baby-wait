export default function(state = {},action){

    switch(action.type){
        case 'ECC_List':
            return{...state,ECC:action.payload};
        default:
            return state;

    }
}
