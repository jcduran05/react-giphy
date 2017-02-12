import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import  { reduxer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;
