import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import './styles.css';
import { Link } from 'react-router-dom';
const LoginForm = ({ handleSubmit, isLoading, error }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   if (!!register.data) {
  //     clearFields();
  //   }
  // }, [register.data]);

  // useEffect(() => {
  //   return () => {
  //     onResetError();
  //   };
  // }, []);

  const clearFields = () => {
    setState({
      email: '',
      password: '',
    });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, state)} className='FormContainer'>
      <h3>Login</h3>
      <FormGroup>
        <Input
          required
          type='email'
          name='email'
          id='exampleEmail'
          value={state.email}
          placeholder='Email'
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          type='password'
          name='password'
          id='password'
          value={state.password}
          placeholder='Password'
          onChange={(e) =>
            setState({
              ...state,
              password: e.target.value,
            })
          }
        />
      </FormGroup>

      <Button type='submit' color='primary' size='lg'>
        {isLoading ? 'Please wait...' : 'Login'}
      </Button>
      <p>
        Don't have an account? <Link to='/signUp'>signUp</Link>
      </p>
      {error && (
        <Alert color='danger' className='alert'>
          {error}
        </Alert>
      )}
      {/* {data && (
        <Alert color='success' className='alert'>
          Registered successfully, please login to continue
        </Alert>
      )} */}
    </Form>
  );
};

export default LoginForm;
