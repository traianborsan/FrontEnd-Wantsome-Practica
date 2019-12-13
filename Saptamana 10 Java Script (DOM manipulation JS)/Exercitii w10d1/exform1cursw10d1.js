//create + add h2 inside body:
const body = document.querySelector("body")
const h2 = document.createElement("h2");
console.log(h2);
h2.innerHTML = `Get your own Site 42 Sites <br> account in seconds`
body.appendChild(h2);


//create + add form inside body:
const form = document.createElement("form");
form.setAttribute("id", "firstForm");
form.setAttribute("name", "firstForm");
console.log(form);
body.appendChild(form);


//username div:
const userName = document.createElement("div");
userName.setAttribute("class", "divTag");
userName.setAttribute("name", "divTagName");
console.log(userName);
form.appendChild(userName);
const labelDiv1 = document.createElement("label");
labelDiv1.setAttribute("for", "nameInput");
labelDiv1.setAttribute("class", "labelTag");
labelDiv1.setAttribute("name", "labelTagName");
labelDiv1.innerHTML = "USERNAME:";
console.log(labelDiv1)
userName.appendChild(labelDiv1);
//create span with alert message when validation is wrong:
const userNameSpan = document.createElement("span");
userNameSpan.setAttribute("id", "nameSpanMessage");
userNameSpan.setAttribute("name", "nameSpanMess");
userNameSpan.setAttribute("type", "text");
userNameSpan.innerHTML = "Please enter a username.";
userNameSpan.classList.add("hidden");
userName.appendChild(userNameSpan);
//create userNameInput:
const userNameInput = document.createElement("input");
userNameInput.setAttribute("id", "nameInput");
userNameInput.setAttribute("name", "nameInput");
userNameInput.setAttribute("type", "text");
userName.appendChild(userNameInput);
console.log(userNameInput);
//create Event Listener for validation of userNameInput field, containing at least 4 characters, letters and numbers only:
const textAlphanumeric = () => {
    let alphaNum = /^[0-9a-zA-Z]+$/;
    if (userNameInput.value.length === 0) {
        userNameSpan.style.display = 'block';
        userNameSpan.classList.replace('hidden', 'span');
        // userNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (userNameInput.value.length <= 3) {
        userNameSpan.style.display = 'block';
        userNameSpan.className = 'span';
        // userNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (userNameInput.value.length >= 4) {
        if (userNameInput.value.match(alphaNum)) {
            userNameSpan.classList.add('hidden');
            userNameSpan.style.display = 'none';
            return true;
        }
        else {
            userNameSpan.style.display = 'block';
            userNameSpan.classList.replace('hidden', 'span');
            // userNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return false
        }
    }
};
userNameInput.addEventListener('focusout', textAlphanumeric);
//create firstParagraph with hints about valid userNameInput:
const firstParagraph = document.createElement("p");
firstParagraph.innerHTML = "(Must be at least 4 characters, letters and numbers only.)";
userName.appendChild(firstParagraph);
//after creating firstParagraph I want to show the information only when focusing on input:
firstParagraph.classList.add("hidden");
userNameInput.addEventListener('focus', function () {
    firstParagraph.style.display = 'block';
});
userNameInput.addEventListener('focusout', function () {
    firstParagraph.style.display = 'none';
});


//e-mail address div:
const eMailAddress = document.createElement("div");
eMailAddress.setAttribute("class", "divTag");
console.log(eMailAddress);
form.appendChild(eMailAddress);
const labelDiv2 = document.createElement("label");
labelDiv2.setAttribute("for", "eMailInput");
labelDiv2.setAttribute("class", "labelTag");
labelDiv2.innerHTML = "EMAIL ADDRESS:";
console.log(labelDiv2)
eMailAddress.appendChild(labelDiv2);
//create span with alert message when validation is wrong:
const emailNameSpan = document.createElement("span");
emailNameSpan.setAttribute("id", "emailSpanMessage");
emailNameSpan.setAttribute("name", "emailSpanMess");
emailNameSpan.setAttribute("type", "text");
emailNameSpan.innerHTML = "Please enter a valid email address.";
emailNameSpan.classList.add("hidden");
eMailAddress.appendChild(emailNameSpan);
//create eMailAddressInput:
const eMailAddressInput = document.createElement("input");
eMailAddressInput.setAttribute("id", "eMailInput");
eMailAddressInput.setAttribute("type", "email");
eMailAddress.appendChild(eMailAddressInput);
console.log(eMailAddressInput);
//create Event Listener for validation of eMailAddressInput field, checks whether an user entered
//valid email address or not and displays alert message on wrong email address format:
const emailValidation = () => {
    let emailFormat = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
    if (eMailAddressInput.value.length === 0) {
        emailNameSpan.style.display = 'block';
        emailNameSpan.classList.replace('hidden', 'span');
    }
    else if (eMailAddressInput.value.length !== 0) {
        if (eMailAddressInput.value.match(emailFormat)) {
            emailNameSpan.className = 'hidden';
            emailNameSpan.style.display = 'none';
            // eMailAddressInput.focus();- this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return true
        }
        else {
            emailNameSpan.style.display = 'block';
            emailNameSpan.classList.replace('hidden', 'span')
            // eMailAddressInput.focus();- this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return false;
        }
    }
};
eMailAddressInput.addEventListener('focusout', emailValidation);
//create secondParagraph with hints about valid eMailAddressInput:
const secondParagraph = document.createElement("p");
secondParagraph.innerHTML = "We send your registration email to this address. (Double-<br>check your email address before continuing.)";
eMailAddress.appendChild(secondParagraph);
//after creating secondParagraph we want to show the information only when focusing on input & label
secondParagraph.classList.add("hidden");
eMailAddressInput.addEventListener('focus', function () {
    secondParagraph.style.display = 'block';
});
eMailAddressInput.addEventListener('focusout', function () {
    secondParagraph.style.display = 'none';
});


//first name div:
const firstName = document.createElement("div");
firstName.setAttribute("class", "divTag");
console.log(firstName);
form.appendChild(firstName);
const labelDiv3 = document.createElement("label");
labelDiv3.setAttribute("for", "firstNameInput");
labelDiv3.setAttribute("class", "labelTag");
labelDiv3.innerHTML = "FIRST NAME:";
console.log(labelDiv3)
firstName.appendChild(labelDiv3);
//create span with alert message when validation is wrong:
const firstNameSpan = document.createElement("span");
firstNameSpan.setAttribute("id", "firstNameSpanMessage");
firstNameSpan.setAttribute("name", "firstNameSpanMess");
firstNameSpan.setAttribute("type", "text");
firstNameSpan.innerHTML = "Please enter a First Name.";
firstNameSpan.classList.add("hidden");
firstName.appendChild(firstNameSpan);
//create firstNameInput:
const firstNameInput = document.createElement("input");
firstNameInput.setAttribute("id", "firstNameInput");
firstNameInput.setAttribute("type", "text");
firstName.appendChild(firstNameInput);
console.log(firstNameInput);
//create Event Listener for validation of firstNameInput field, containing at least 3 characters, letters only:
const inputAlphabet1 = () => {
    let alphaInput = /^[a-zA-Z]+$/;
    if (firstNameInput.value.length === 0) {
        firstNameSpan.style.display = 'block';
        firstNameSpan.classList.replace('hidden', 'span');
        // firstNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (firstNameInput.value.length < 3) {
        firstNameSpan.style.display = 'block';
        firstNameSpan.className = 'span';
        // firstNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (firstNameInput.value.length >= 3) {
        if (firstNameInput.value.match(alphaInput)) {
            firstNameSpan.classList.add('hidden');
            firstNameSpan.style.display = 'none';
            return true;
        }
        else {
            firstNameSpan.style.display = 'block';
            firstNameSpan.classList.replace('hidden', 'span');
            // firstNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return false
        }
    }
};
firstNameInput.addEventListener('focusout', inputAlphabet1);
//create thirdParagraph with hints about valid firstNameInput:
const thirdParagraph = document.createElement("p");
thirdParagraph.innerHTML = "(Must be input.)";
firstName.appendChild(thirdParagraph);
//after creating thirdParagraph we want to show the information only when focusing on input & label
thirdParagraph.classList.add("hidden");
firstNameInput.addEventListener('focus', function () {
    thirdParagraph.style.display = 'block';
});
firstNameInput.addEventListener('focusout', function () {
    thirdParagraph.style.display = 'none';
});


//last name div:
const lastName = document.createElement("div");
lastName.setAttribute("class", "divTag");
console.log(lastName);
form.appendChild(lastName);
const labelDiv4 = document.createElement("label");
labelDiv4.setAttribute("for", "lastNameInput");
labelDiv4.setAttribute("class", "labelTag");
labelDiv4.innerHTML = "LAST NAME:";
console.log(labelDiv4)
lastName.appendChild(labelDiv4);
//create span with alert message when validation is wrong:
const lastNameSpan = document.createElement("span");
lastNameSpan.setAttribute("id", "lastNameSpanMessage");
lastNameSpan.setAttribute("name", "lastNameSpanMess");
lastNameSpan.setAttribute("type", "text");
lastNameSpan.innerHTML = "Please enter a Last Name.";
lastNameSpan.classList.add("hidden");
lastName.appendChild(lastNameSpan);
//create lastNameInput:
const lastNameInput = document.createElement("input");
lastNameInput.setAttribute("id", "lastNameInput");
lastNameInput.setAttribute("type", "text");
lastName.appendChild(lastNameInput);
console.log(lastNameInput);
//create Event Listener for validation of firstNameInput field, containing at least 3 characters, letters only:
const inputAlphabet2 = () => {
    let alphaInput = /^[a-zA-Z]+$/;
    if (lastNameInput.value.length === 0) {
        lastNameSpan.style.display = 'block';
        lastNameSpan.classList.replace('hidden', 'span');
        // lastNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (lastNameInput.value.length < 3) {
        lastNameSpan.style.display = 'block';
        lastNameSpan.className = 'span';
        // lastNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (lastNameInput.value.length >= 3) {
        if (lastNameInput.value.match(alphaInput)) {
            lastNameSpan.classList.add('hidden');
            lastNameSpan.style.display = 'none';
            return true;
        }
        else {
            lastNameSpan.style.display = 'block';
            lastNameSpan.classList.replace('hidden', 'span');
            // lastNameInput.focus(); - this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return false
        }
    }
};
lastNameInput.addEventListener('focusout', inputAlphabet2);
//create fourthParagraph with hints about valid lastNameInput:
const fourthParagraph = document.createElement("p");
fourthParagraph.innerHTML = "(Must be input.)";
lastName.appendChild(fourthParagraph);
//after creating fourthParagraph I want to show the information only when focusing on input & label
fourthParagraph.classList.add("hidden");
lastNameInput.addEventListener('focus', function () {
    fourthParagraph.style.display = 'block';
});
lastNameInput.addEventListener('focusout', function () {
    fourthParagraph.style.display = 'none';
});


//nickname div:
const nickName = document.createElement("div");
nickName.setAttribute("class", "divTag");
console.log(nickName);
form.appendChild(nickName);
const labelDiv5 = document.createElement("label");
labelDiv5.setAttribute("for", "nickNameInput");
labelDiv5.setAttribute("class", "labelTag");
labelDiv5.innerHTML = "NICKNAME:";
console.log(labelDiv5)
nickName.appendChild(labelDiv5);
//create nickNameInput (optional, it doesn't have a restriction of any kind.)
const nickNameInput = document.createElement("input");
nickNameInput.setAttribute("id", "nickNameInput");
nickNameInput.setAttribute("type", "text");
nickName.appendChild(nickNameInput);
console.log(nickNameInput);


//telephone div:
const phoneNumber = document.createElement("div");
phoneNumber.setAttribute("class", "divTag");
console.log(phoneNumber);
form.appendChild(phoneNumber);
const labelDiv6 = document.createElement("label");
labelDiv6.setAttribute("for", "phoneInput");
labelDiv6.setAttribute("class", "labelTag");
labelDiv6.innerHTML = "PHONE:";
console.log(labelDiv6)
phoneNumber.appendChild(labelDiv6);
//create span with alert message when validation is wrong:
const phoneNumberSpan = document.createElement("span");
phoneNumberSpan.setAttribute("id", "lastNameSpanMessage");
phoneNumberSpan.setAttribute("name", "lastNameSpanMess");
phoneNumberSpan.setAttribute("type", "text");
phoneNumberSpan.innerHTML = "Please enter a Phone.";
phoneNumberSpan.classList.add("hidden");
phoneNumber.appendChild(phoneNumberSpan);
//create phoneNumberInput:
const phoneNumberInput = document.createElement("input");
phoneNumberInput.setAttribute("id", "phoneInput");
phoneNumberInput.setAttribute("type", "tel");
phoneNumberInput.setAttribute("pattern", "[0-9]{10}");
phoneNumber.appendChild(phoneNumberInput);
console.log(phoneNumberInput);
//create Event Listener for validation of phoneNumberInput field, containing at least 3 characters, letters only:
const inputPhone = () => {
    let phoneInput = /^[0-9]+$/;
    //let phoneInput = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g;
    //OBS.: above I added regexp that would cover all types of phone numbers accross the World, including country prefixes
    //and taking into consideration that people will introduce data with special characters such as: "+", " ", "-", "."
    if (phoneNumberInput.value.length === 0) {
        phoneNumberSpan.style.display = 'block';
        phoneNumberSpan.classList.replace('hidden', 'span');
        // phoneNumberInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (phoneNumberInput.value.length < 10) {
        phoneNumberSpan.style.display = 'block';
        phoneNumberSpan.className = 'span';
        // phoneNumberInput.focus(); - this line blocks the user from inserting other information in the bellow input
        //fields, until he meets the validation rules
    }
    else if (phoneNumberInput.value.length >= 10) {
        if (phoneNumberInput.value.match(phoneInput)) {
            phoneNumberSpan.classList.add('hidden');
            phoneNumberSpan.style.display = 'none';
            return true;
        }
        else {
            phoneNumberSpan.style.display = 'block';
            phoneNumberSpan.classList.replace('hidden', 'span');
            // phoneNumberInput.focus(); - this line blocks the user from inserting other information in the bellow input
            //fields, until he meets the validation rules
            return false
        }
    }
};
phoneNumberInput.addEventListener('focusout', inputPhone);
//create fifthParagraph with hints about valid phoneNumberInput:
const fifthParagraph = document.createElement("p");
fifthParagraph.innerHTML = "(Must be at least 10 characters, numbers only.)";
phoneNumber.appendChild(fifthParagraph);
//after creating fifthParagraph we want to show the information only when focusing on input & label
fifthParagraph.classList.add("hidden");
phoneNumberInput.addEventListener('focus', function () {
    fifthParagraph.style.display = 'block';
});
phoneNumberInput.addEventListener('focusout', function () {
    fifthParagraph.style.display = 'none';
});

//radio buttons divTag:
const radioButtons = document.createElement("div");
radioButtons.setAttribute("id", "divTag");
console.log(radioButtons);
form.appendChild(radioButtons);

//radio button divTag1:
const radioButton1 = document.createElement("div");
radioButton1.setAttribute("id", "divTag1");
console.log(radioButton1);
radioButtons.appendChild(radioButton1);
const radio1Input = document.createElement("input");
radio1Input.setAttribute("id", "radio1");
radio1Input.setAttribute("type", "radio");
radio1Input.setAttribute("name", "radioButton");
radioButton1.appendChild(radio1Input);
console.log(radio1Input);
const label1 = document.createElement('label');
label1.setAttribute("id", "label1");
label1.setAttribute("for", "radio1");
label1.innerHTML = "GIMME A SITE!";
radioButton1.appendChild(label1);
document.getElementById("radio1").checked = true;//we set #radio1 to be checked by default

//radio button divTag2:
const radioButton2 = document.createElement("div");
radioButton2.setAttribute("id", "divTag2");
console.log(radioButton2);
radioButtons.appendChild(radioButton2);
const radio2Input = document.createElement("input");
radio2Input.setAttribute("id", "radio2");
radio2Input.setAttribute("type", "radio");
radio2Input.setAttribute("name", "radioButton");
radioButton2.appendChild(radio2Input);
console.log(radio2Input);
const label2 = document.createElement("label");
label2.setAttribute("id", "label2");
label2.setAttribute("for", "radio2");
label2.innerHTML = "JUST A USERNAME, PLEASE.";
radioButton2.appendChild(label2);

//create NEXT button:
const buttonNext = document.createElement("input");
buttonNext.setAttribute("id", "next");
buttonNext.setAttribute("type", "submit");// because the button has type = "submit" I will need to use Prevent Default for validating the form!!!
buttonNext.setAttribute("name", "submit");
buttonNext.setAttribute("value", "NEXT")
form.appendChild(buttonNext);
console.log(buttonNext);


//1. de UTILIZAT PENTRU VALIDAREA TUTUROR CAMPURILOR FORMULARULUI:
const validate = function (event) {
    console.log(event);
    if (userNameInput.value.length === 0 && eMailAddressInput.value.length === 0 && firstNameInput.value.length === 0 && lastNameInput.value.length === 0 && phoneNumberInput.value.length === 0) {
        userNameSpan.style.display = 'block';
        userNameSpan.classList.replace('hidden', 'span');
        firstParagraph.style.display = 'block';
        emailNameSpan.style.display = 'block';
        emailNameSpan.classList.replace('hidden', 'span');
        secondParagraph.style.display = 'block';
        firstNameSpan.style.display = 'block';
        firstNameSpan.classList.replace('hidden', 'span');
        thirdParagraph.style.display = 'block';
        lastNameSpan.style.display = 'block';
        lastNameSpan.classList.replace('hidden', 'span');
        fourthParagraph.style.display = 'block';
        phoneNumberSpan.style.display = 'block';
        phoneNumberSpan.classList.replace('hidden', 'span');
        fifthParagraph.style.display = 'block';
        alert('All form input fields are invalid. Please check again your registration information.');
        event.preventDefault();
    }
    else if (textAlphanumeric() === true) {
        if (emailValidation() === true) {
            if (inputAlphabet1() === true) {
                if (inputAlphabet2() === true) {
                    if (nickNameInput.value.length !== 0) {
                        if (inputPhone() === true) {
                            if (document.getElementById("radio1").checked === true || document.getElementById("radio2").checked === true) {
                                alert('The form has been succesfully validated.');
                                event.preventDefault();
                            }
                        }
                    }
                }
            }
        }
    }
    else if (textAlphanumeric() === false || emailValidation() === false || inputAlphabet1() === false || inputAlphabet2() === false || nickNameInput.value.length === 0 || inputPhone() === false || document.getElementById("radio1").checked === false || document.getElementById("radio2").checked === false) {
        alert('There is an/more invalid form input fields. Please check again your registration information.');
        event.preventDefault();
    }
};
//OBS.: The alert for attentioning that one/ more input fields are invalid doesn't work properly. I need some help guys.

form.addEventListener('submit', validate);