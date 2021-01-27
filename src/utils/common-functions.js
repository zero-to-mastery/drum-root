import { useRef, useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import isNode from 'is-node';

const tokenType = process.env.REACT_APP_TOKEN_TYPE;

export const signin = async (email, password) =>
  fetch(process.env.REACT_APP_SIGNIN_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.userId && data.success) {
        cookie.set('token', data.token, { expires: 1 });
      }
    })
    .catch(console.log);

export const signout = () => {
  fetch(process.env.REACT_APP_SIGNIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${tokenType} ${window.sessionStorage.getItem('token')}`
    }
  }).then(() => {
    cookie.remove('token');
    Router.push('/signin');
  });
};

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/signin' });
    ctx.res.end();
    return '';
  }

  if (!token) {
    Router.push('/signin');
    return '';
  }

  return `${tokenType} ${token}`;
};

export const logError = () => {
  if (!isNode) console.error.apply(console, arguments); // eslint-disable-line
};
