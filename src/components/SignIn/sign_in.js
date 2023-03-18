import Cookies from "js-cookie";

export const sign_in = async (credentials, nav) => {
  fetch("http://localhost:8000/api/sign-in/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
    body: JSON.stringify(credentials)
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('user', JSON.stringify(data))
    nav('/');
})
  .catch(err => console.log(err))
};
