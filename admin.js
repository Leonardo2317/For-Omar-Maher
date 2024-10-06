function login() {
    const adminUsername = "Data1_1Druid";
    const adminPassword = "P@ssW0rd!23&Secure#2024";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    if (username === adminUsername && password === adminPassword) {
        localStorage.setItem("loggedIn", "true"); 
        window.location.href = "admin-dashboard.html"; 
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}

function logout() {
    localStorage.removeItem("loggedIn"); 
    window.location.href = "login.html"; 
}

window.onload = function() {
    // إزالة هذا الشرط، لأننا نريد أن نسمح للمستخدم بالدخول إلى صفحة تسجيل الدخول
    // if (localStorage.getItem("loggedIn") !== "true") {
    //     window.location.href = "index.html"; 
    // }

    // إضافة شرط للتوجيه إذا كان المستخدم قد سجل الدخول مسبقًا
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "admin-dashboard.html"; 
    }
};