
    const signin_btn = document.querySelector("#sign-in-btn");
    const signup_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const logout = document.querySelector("#logout");
// Sigin-Signup login Page

signup_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})
signin_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})


    


