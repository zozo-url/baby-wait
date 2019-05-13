export default function(state = {},action){

    switch(action.type){
        case 'ECC_WAITLIST':
            return{...state,eccWaitlist:action.payload};
        default:
            return state;

    }
}
