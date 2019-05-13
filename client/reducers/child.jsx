export default function(state = {},action){

  switch(action.type){
      case 'CHILD_LIST':
          return{...state,Child:action.payload}
             default:
          return state;

  }
}








