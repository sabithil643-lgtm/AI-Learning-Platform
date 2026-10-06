// ===============================
// AI LEARN - MAIN JAVASCRIPT
// ===============================


// DARK / LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// START LEARNING BUTTON

const startButtons =
    document.querySelectorAll(".primary-btn");

startButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// EXPLORE COURSES

const exploreButton =
    document.querySelector(".secondary-btn");

exploreButton.addEventListener("click", () => {

    document
        .getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// COURSE BUTTONS

const courseButtons =
    document.querySelectorAll(".course-card button");

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Course selected! 🚀\n\n" +
            "The course learning system will be connected in the next stage."
        );

    });

});


// AI ASSISTANT

const aiButton =
    document.querySelector(".ai-btn");

aiButton.addEventListener("click", () => {

    alert(
        "🤖 AI Learning Assistant\n\n" +
        "Hello! I'm your AI learning assistant.\n\n" +
        "The AI assistant system will be connected to the backend later."
    );

});


// LOGIN BUTTON

const loginButton =
    document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {

    alert(
        "🔐 Login page coming next!"
    );

});


// REGISTER BUTTON

const registerButton =
    document.querySelector(".register-btn");

registerButton.addEventListener("click", () => {

    alert(
        "🚀 Registration page coming next!"
    );

});
// =====================================================
// AI LEARN - DASHBOARD USER & LOGIN ACTIVITY SYSTEM
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // Get current user information
    const userName =
        localStorage.getItem("aiLearnName") || "Student";

    const userEmail =
        localStorage.getItem("aiLearnCurrentEmail") ||
        localStorage.getItem("aiLearnEmail") ||
        "student@example.com";


    // =================================================
    // SHOW USER NAME
    // =================================================

    const dashboardUserName =
        document.getElementById("dashboardUserName");

    if (dashboardUserName) {
        dashboardUserName.textContent = userName;
    }


    // =================================================
    // SHOW PROFILE INITIAL
    // =================================================

    const profileAvatar =
        document.getElementById("profileAvatar");

    if (profileAvatar) {
        profileAvatar.textContent =
            userName.charAt(0).toUpperCase();
    }


    // =================================================
    // LOGIN ACTIVITY
    // =================================================

    const activityContainer =
        document.getElementById("loginActivity");

    if (activityContainer) {

        let loginHistory = [];

        try {

            loginHistory = JSON.parse(
                localStorage.getItem(
                    "aiLearnLoginHistory"
                ) || "[]"
            );

        } catch (error) {

            loginHistory = [];

        }


        // No activity
        if (loginHistory.length === 0) {

            activityContainer.innerHTML = `
                <div class="no-login-data">
                    No login activity yet.
                </div>
            `;

            return;
        }


        // Display login history
        activityContainer.innerHTML =
            loginHistory.map(function (user) {

                const initial =
                    (user.name || "S")
                    .charAt(0)
                    .toUpperCase();

                return `

                    <div class="login-user-row">

                        <div class="login-user-info">

                            <div class="activity-avatar">
                                ${initial}
                            </div>

                            <div>

                                <strong>
                                    ${user.name || "Student"}
                                </strong>

                                <small>
                                    ${user.email || "Unknown email"}
                                </small>

                            </div>

                        </div>

                        <div class="login-time">
                            ${user.time || "Recently"}
                        </div>

                    </div>

                `;

            }).join("");
    }

});