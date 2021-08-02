import { combineReducers } from 'redux';
import media from './pages/Media/reducer';
import register from './pages/Register/reducer';
import login from './pages/Login/reducer';
import auth from './components/Auth/reducer';
import userMedia from './components/UserMedia/reducer';

export default combineReducers({
  media,
  register,
  login,
  auth,
  userMedia,
});
