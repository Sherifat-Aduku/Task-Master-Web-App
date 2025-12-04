const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

signupBtn.addEventListener("click", () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
});

document.getElementById("create-btn").onclick = () => {
    window.location.href = "dashboard.html";
};
