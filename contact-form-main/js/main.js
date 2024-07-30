// html-labels
const FIRST_NAME_ERROR = document.getElementById('first-name-error');
const LAST_NAME_ERROR = document.getElementById('last-name-error');
const EMAIL_ERROR = document.getElementById('email-error');
const INVALID_EMAIL_ERROR = document.getElementById('invalid-email-error');
const QERY_TYPE_ERROR = document.getElementById('qery-type-error');
const MESSAGE_ERROR = document.getElementById('message-error');
const CHECKBOX_ERROR = document.getElementById('checkbox-error');


// html-input-elements
const FIRST_NAME = document.getElementById('first-name');
const LAST_NAME = document.getElementById('last-name');
const MESSAGE = document.getElementById('message');
const CHECKBOX = document.getElementById('checkbox');
const BUTTON = document.getElementById('button');

function checkUserName() {
    const F_NAME = FIRST_NAME.value;
    const L_NAME = LAST_NAME.value;

    if (F_NAME === "") {
        FIRST_NAME_ERROR.style.display = 'block';
    } else {
        FIRST_NAME_ERROR.style.display = 'none';
    }

    if (L_NAME === "") {
        LAST_NAME_ERROR.style.display = 'block';
    } else {
        LAST_NAME_ERROR.style.display = 'none';
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
        EMAIL_ERROR.style.display = 'block';
    } else {
        if (emailRegex.test(email)) {
            EMAIL_ERROR.style.display = 'none';
            INVALID_EMAIL_ERROR.style.display = 'none';
        } else {
            INVALID_EMAIL_ERROR.style.display = 'block';
        }
    }
}

function getSelectedValue() {
    const selectedOption = document.querySelector('input[name="query"]:checked');
    if (selectedOption) {
        QERY_TYPE_ERROR.style.display = 'none';
    } else {
        QERY_TYPE_ERROR.style.display = 'block';
    }
}

function getUserMessage() {
    if (MESSAGE.value === "") {
        MESSAGE_ERROR.style.display = 'block';
    } else {
        MESSAGE_ERROR.style.display = 'none';
    }
}

function getCheckedValue() {
    if (CHECKBOX.checked) {
        CHECKBOX_ERROR.style.display = 'none';
    } else {
        CHECKBOX_ERROR.style.display = 'block';
    }
}

function showSuccessMessage() {
    const ALERT_MESSAGE_BOX = document.getElementById('alert-message');
    if ((FIRST_NAME_ERROR.style.display === 'none') && (LAST_NAME_ERROR.style.display === 'none')
        && (EMAIL_ERROR.style.display === 'none') && (QERY_TYPE_ERROR.style.display === 'none')
        && (MESSAGE_ERROR.style.display === 'none') && (CHECKBOX_ERROR.style.display === 'none')) {
        ALERT_MESSAGE_BOX.style.top = '5%';
    } else {
        ALERT_MESSAGE_BOX.style.top = '-20%';
    }
}

BUTTON.addEventListener('click', () => {
    checkUserName();
    getSelectedValue();
    validateEmail();
    getUserMessage();
    getCheckedValue();
    showSuccessMessage();
});