import { useRef, useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

export const signin = async (email, password) =>
  fetch("http://localhost:3000/signin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      console.log("in", data);
      if (data.userId && data.success) {
        console.log("seetting");
        window.sessionStorage.setItem("token", data.token);
        cookie.set("token", data.token, { expires: 1 });
      }
    });

export const signout = () => {
  // TODO: figure out how to set env vars
  fetch("http://localhost:3000/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token")
    }
  })
    .then(() => {
      window.sessionStorage.removeItem("token");
      cookie.remove("token");
    })
    .catch(err => console.log);
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

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/signin" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/signin");
  }

  return token;
};
