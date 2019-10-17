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
      }
    });

export const signout = () => {
  fetch("http://localhost:3000/signout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.sessionStorage.getItem("token")
    }
  })
    .then(() => {
      window.sessionStorage.removeItem("token");
    })
    .catch(err => console.log);
};
