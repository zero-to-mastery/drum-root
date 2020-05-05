import React from 'react';
import FormWrapper from '../Components/FormWrapper'; 

const Label = styled.label`
    font-family: raleway
`;

const SigninForm = () => {
    <FormWrapper onSubmit={onSubmitSignIn}>
        <fieldset>
          <legend className=''>Sign In</legend>
          <div>
            <Label htmlFor="email-address">Email</Label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
              type="email"
              name="email-address"
              id="email-address"
              onChange={e => setSigninEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
              type="password"
              name="password"
              id="password"
              onChange={e => setSigninPassword(e.target.value)}
            />
          </div>
        </fieldset>
        <div>
          <input type="submit" value="Sign in" />
        </div>
      </FormWrapper>
}

export default SigninForm; 