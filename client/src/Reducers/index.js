import {combineReducers} from 'redux'
import currentUserReducer from './currentuser' 
import authReducer from "./auth"
import channelReducers from './channel'
import videoReducer from './Video'
import likedVideoReducer from './likedVideo'
import watchLaterReducer from './watchLater'
import HistoryReducer from './History'
import commentReducer from './Comments'

export default combineReducers({
  authReducer,
  currentUserReducer,
  channelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  HistoryReducer,
  commentReducer

  
});