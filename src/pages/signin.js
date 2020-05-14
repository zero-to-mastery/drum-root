import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormWrapper from '../Components/FormWrapper';
import { signin } from '../utils/common-functions';

const Label = styled.label `
  font-family: raleway;
  color: "#6C7682"; 
  font-size: 1.2rem;
`;

const Input = styled.input `
  border-radius: 0.3rem;
  border: 1px solid #525962;
  width: 75%;
  height: 1.3rem;
`;

const Fieldset = styled.fieldset `
  border-radius: 0.3rem;
  border: 1px solid #525962;
  box-shadow: 0 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  max-width: 40rem;
  margin: 0 auto; 
  height: 15rem; 
`

// eslint-disable-next-line no-unused-vars
const Signin = ({ onRouteChange, loadUser }) => {
  const router = useRouter();
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const onSubmitSignIn = async () => {
    await signin(signinEmail, signinPassword);
    router.push('/');
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <FormWrapper onSubmit={onSubmitSignIn}>
        <Fieldset>
          <legend style={{ display: 'none' }}>Sign In</legend>
          <div style={{ padding: '1rem', width: '20rem' }}>
            <Label htmlFor="email-address">Email</Label>
            <br />
            <Input
              type="email"
              name="email-address"
              id="email-address"
              onChange={e => setSigninEmail(e.target.value)}
            />
          </div>
          <div style={{ padding: '1rem', width: '20rem' }}>
            <Label htmlFor="password">Password</Label>
            <br />
            <Input
              type="password"
              name="password"
              id="password"
              onChange={e => setSigninPassword(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', width: '22%', justifyContent: 'space-between', padding: '1rem' }}>
            <input onClick={onRouteChange} type="submit" value="Sign in" />
            <button>Register</button>
          </div>
        </Fieldset>
      </FormWrapper>
    </>
  );
};

Signin.propTypes = {
  onRouteChange: PropTypes.func,
  loadUser: PropTypes.func
};

export default Signin;
