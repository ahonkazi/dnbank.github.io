// login
let login_btn = document.querySelector('#login-btn')
// form data
let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;
let login_form = document.querySelector('.login_form');
let loginErr = document.querySelector('.login-err');
let dashboard = document.querySelector('#dashboard');
let loginArea = document.querySelector('#login-area');
let forms = document.querySelectorAll('form')
// try to login


login_form.addEventListener('submit', (e) => {
    e.preventDefault();
    login()
    // if (email == "aohinuzzaman420@gmail.com" && password == "1234" ) {
    //     login();
    // } else {
    //     loginFalse();
    // }
})





function login() {
    loginArea.classList.remove('show');
    loginArea.classList.add('hide')
    dashboard.classList.remove('hide');

    dashboard.classList.add('show');
}
function loginFalse() {
    loginErr.classList.remove('hide');
    loginErr.classList.add('show');
}
if (loginErr.classList.contains('show')) {
    setTimeout(() => {
        loginErr.classList.remove('show');
        loginErr.classList.add('hide');
    }, 4000)
}

// forms.forEach(form => {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//     })
// });


// display
let withdraw_ammount_display = document.querySelector('.withdraw_ammount');
let deposite_ammount_display = document.querySelector('.diposite_ammount');
let withdraw_ammount = parseFloat(withdraw_ammount_display.innerText);
let deposite_ammount = parseFloat(deposite_ammount_display.innerText);
let main_balance_display = document.querySelector('.main_balance');
let main_balance = parseFloat(main_balance_display.innerText);

// buttons
let deposite = document.querySelector('#deposite');
let withdraw = document.querySelector('#withdraw');
// inputs
let withdraw_ammount_input = document.querySelector("#withdraw__ammount-input");
let deposite_ammount_input = document.querySelector("#deposite__ammount-input");

// operaitons

deposite.addEventListener('click', () => {
    if (parseFloat(deposite_ammount_input.value) >= 10) {
        deposite_ammount = parseFloat(deposite_ammount) + parseFloat(deposite_ammount_input.value);
        main_balance = main_balance + parseFloat(deposite_ammount_input.value);
        deposite_ammount_display.innerHTML = deposite_ammount;
        main_balance_display.innerHTML = main_balance;
        deposite_ammount_input.value = "";
    } else {
        alert("Opps,you can not deposite balance under 10$,you tried to deposite "+deposite_ammount_input.value+"$")
    }
})

withdraw.addEventListener("click", () => {



    withdraw_ammount = parseFloat(withdraw_ammount) + parseFloat(withdraw_ammount_input.value);
    main_balance = main_balance - parseFloat(withdraw_ammount_input.value);
    if (main_balance >= 0) {
        withdraw_ammount_display.innerHTML = withdraw_ammount;
        main_balance_display.innerHTML = main_balance;
        withdraw_ammount_input.value = "";
    } else {
        alert("Opps,you can not withdraw now,you have not enough balance!!")
    }



})