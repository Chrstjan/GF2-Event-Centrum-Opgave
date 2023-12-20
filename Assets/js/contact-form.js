const formContainer = document.getElementById("form-container");

const createForm  = () => {
    const formElement = document.createElement("form");
    const formFieldset = document.createElement("fieldset");

    //Helper functions
    const createFormLabel = (text, forInput) => {
        const label = document.createElement("label");
        label.textContent = text;
        label.setAttribute("for", forInput);

        return label;
    }

    const createFormInput = (type, placeholder, id) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("id", id);

        return input;
    }

    const createTextArea = (rows, placeholder) => {
        const textArea = document.createElement("textarea");
        textArea.setAttribute("rows", rows);
        textArea.setAttribute("placeholder", placeholder);

        return textArea;
    }

    const createFormBtn = (type, value) => {
        const formBtn = document.createElement("input");
        formBtn.setAttribute("type", type);
        formBtn.setAttribute("value", value);

        return formBtn;
    }

    const fName = createFormInput("text", "Fulde Navn:", "fName");

    const address = createFormInput("text", "Adresse:", "address");

    const email = createFormInput("email", "Email:", "email");

    const checkboxLabel = createFormLabel("Jeg vil gerne ringes op", "checkbox");
    const checkbox = createFormInput("checkbox", "", "checkbox");

    const phone = createFormInput("text", "Telefon:", "tel");

    const phoneContainer = document.createElement("fieldset");
    phoneContainer.classList.add("phone-container");

    const textArea = createTextArea(4, "Besked:");

    const submitBtn = createFormBtn("submit", "Send Besked");
    const formBtnContainer = document.createElement("fieldset");
    
    formBtnContainer.appendChild(submitBtn);

    const validateInput = (input, regEx, errorMessage) => {
        const trimmedValue = input.value.trim();
        const isValid = regEx.test(trimmedValue);

        if (isValid) {
            //Add valid class
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
        else {
            input.classList.add("invalid");
            input.classList.remove("valid");
            displayErrorMessage(errorMessage);
        }

        return isValid;
    }

    const displayErrorMessage = (message) => {
        errorTextContainer.textContent = message;
    }

    const formValidation = (e) => {
        const nameRegEx = /^[a-zA-Z]{2,17}$/;
        const addressRegEx = /^[a-zA-Z 0-9]{2,17}$/;
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        const phoneRegEx = /^[0-9]{8,}$/;

        const isNameValid = validateInput(fName, nameRegEx, "Dit navn skal være et gyldigt navn");
        const isAddressValid = validateInput(address, addressRegEx, "Adresse skal være gyldig");
        const isEmailValid = validateInput(email, emailRegEx, "Email skal være en gyldig email");
        const isPhoneValid = validateInput(phone, phoneRegEx, "Telefonnummer skal være gyldigt");

        if (isNameValid && isAddressValid && isEmailValid && isPhoneValid) {
            formFieldset.innerHTML = "";
            const recivedMessage = document.createElement("h2");
            recivedMessage.textContent = "Tak for din besked";

            appendChildren(formFieldset, [
                recivedMessage
            ]);
        }
        else {
            e.preventDefault();
        }
    }

    submitBtn.addEventListener("click", formValidation);

    const errorTextContainer = document.createElement("div");
    errorTextContainer.classList.add("error-text");

   const appendChildren = (parent, elements) => {
        elements.forEach((element) => {
            parent.appendChild(element);
        });
    };

    appendChildren(phoneContainer, [
        checkboxLabel,
        checkbox,
        phone
    ]);

    appendChildren(formFieldset, [
        fName,
        address,
        email,
        phoneContainer,
        textArea,
        formBtnContainer,
        errorTextContainer
    ]);

    formElement.appendChild(formFieldset);
    formContainer.appendChild(formElement);
}

window.addEventListener("load", createForm);