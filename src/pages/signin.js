import React, { useState } from "react";
import { signin } from "../utils/common-functions";
import FormWrapper from "../Components/FormWrapper";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

const Signin = ({ onRouteChange, loadUser }) => {
  const router = useRouter();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const onSubmitSignIn = async e => {
    await signin(signinEmail, signinPassword);
    router.push("/");
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <FormWrapper onSubmit={onSubmitSignIn}>
        <fieldset>
          <legend>Sign In</legend>
          <div>
            <label htmlFor="email-address">Email</label>
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
      <div className="lh-copy mt3">
        <p>Register</p>
      </div>
    </>
  );
};

export default Signin;
