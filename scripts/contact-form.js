document.documentElement.setAttribute("data-js-enabled", true);

let submitButton = document.querySelector("#contact-form button[type='submit']");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let textFields = [emailInput, messageInput];


function isEmpty(formElement) {
    return formElement.value.trim().length == 0;
}

function isValidEmail(formElement) {
    if (isEmpty(emailInput)) {
        return false;
    }

    const regex = /[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\\.]+/gm;

    let text = formElement.value.trim();
    return (regex.exec(text)) !== null;
}


submitButton.addEventListener("click", e => {
    if (isEmpty(messageInput)) {
        messageInput.classList.add("bg-error");
        e.preventDefault();
    }

    if (isValidEmail(emailInput) == false) {
        emailInput.classList.add("bg-error");
        e.preventDefault();
    }

    return true;
});

textFields.forEach(field => {
    field.addEventListener("focus", () => {
        field.classList.remove("bg-error");
    });
});

