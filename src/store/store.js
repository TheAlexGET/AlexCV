import { legacy_createStore as createStore } from 'redux';
import {themeReducer} from './themeReducer';

const store = createStore(themeReducer);

export default store;