const currentUserReducer =(state = null,action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            return action.payload;
        //    return action.payload ? action.payload.token:null;
        default:
            return state;
    }
}
export default currentUserReducer;