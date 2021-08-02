import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, login } from './actions';
import LoginForm from '../../components/Forms/LoginForm';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../../components/Auth/actions';
const Login = () => {
  const { isLoading, error, success } = useSelector((state) => state.login);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e, data) => {
    e.preventDefault();
    dispatch(login(data));
  };
  useEffect(() => {
    if (success) {
      const token = localStorage.getItem('authToken');
      dispatch(setCurrentUser(token));
      history.push('/home');
    }
  }, [success]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);
  return (
    <div className='signupContainer'>
      <LoginForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Login;
