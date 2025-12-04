const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

document.getElementById("create-btn").onclick = () => {
    window.location.href = "dashboard.html";
};