import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signup from '../../components/Forms/SignUpForm';
import { register, resetError } from './actions';
import { useHistory } from 'react-router-dom';
import './styles.css';
function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const registerData = useSelector((state) => state.register);
  const handleSubmit = (e, data) => {
    e.preventDefault();
    dispatch(register(data));
  };

  const onResetError = () => {
    dispatch(resetError());
  };
  return (
    <div className='signupContainer'>
      <Signup
        handleSubmit={handleSubmit}
        register={registerData}
        onResetError={onResetError}
      />
    </div>
  );
}

export default SignUp;
