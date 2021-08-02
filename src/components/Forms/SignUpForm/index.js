import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import './styles.css';
import { Link } from 'react-router-dom';
const SignupForm = ({ handleSubmit, register, onResetError }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!!register.data) {
      clearFields();
    }
  }, [register.data]);

  useEffect(() => {
    return () => {
      onResetError();
    };
  }, []);

  const clearFields = () => {
    setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, state)} className='FormContainer'>
      <h3>Register</h3>
      <FormGroup>
        <Input
          type='firstName'
          name='firstName'
          id='FirstName'
          value={state.firstName}
          required
          placeholder='firstName'
          onChange={(e) =>
            setState({
              ...state,
              firstName: e.target.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          type='LastName'
          name='lastName'
          id='LastName'
          value={state.lastName}
          placeholder='LastName'
          onChange={(e) =>
            setState({
              ...state,
              lastName: e.target.value,
            })
          }
        />
      </FormGroup>
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
        {register.isLoading ? 'Registering' : 'Register'}
      </Button>

      <p>
        Already have an account? <Link to='/login'>login</Link>
      </p>
      {register.error && (
        <Alert color='danger' className='alert'>
          {register.error}
        </Alert>
      )}
      {register.data && (
        <Alert color='success' className='alert'>
          Registered successfully, please login to continue
        </Alert>
      )}
    </Form>
  );
};

export default SignupForm;
