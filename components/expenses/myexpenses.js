document.addEventListener("DOMContentLoaded", () => {
    console.log("Expenses page ready");

    const tabs = document.querySelectorAll(".expense-tabs .tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab.active")?.classList.remove("active");
            tab.classList.add("active");

            // You can connect real logic here later
            console.log("Switched to:", tab.textContent.trim());
        });
    });
});

document.getElementById("logoutBtn").onclick = () => {
    window.location.href = "/index.html";
};
