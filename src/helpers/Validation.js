// functie om de juiste validatiefunctie te kiezen
export function getValidationFunction(fieldType) {
    switch (fieldType) {
        case 'first_name':
            return validateFirstName;
        case 'last_name':
            return validateLastName;
        case 'email':
            return validateEmail;
        case 'phone_number': // Changed to an underscore
            return validatePhoneNumber;
        case 'house_number': // Changed to an underscore
            return validateHouseNumber;
        case 'jobDescription':
            return validateTextArea;
        default:
            return () => true; // default validation function that always returns true (no validation)
    }
}

// formvalidation functions:
export function validateTextArea(inputValue) {
    const errorMessage = "Het bericht moet minimaal 5 en maximaal 50 karakters lang zijn en mag alleen letters, getallen en '-' of '_' bevatten.";
    const regex = /^[a-zA-Z0-9-_ ]+$/;
    if (inputValue.length < 5 || inputValue.length > 50 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
export function validateLastName(inputValue) {
    const errorMessage = "De gebruikersnaam moet beginnen met een hoofdletter, minimaal 2 en maximaal 20 karakters lang zijn en mag alleen letters en '-' bevatten.";
    const regex = /^([A-Z][a-z]+(( |-)[A-Z][a-z]+)*)$/;

    if (inputValue.length < 2 || inputValue.length > 20 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
export function validatePhoneNumber(inputValue) {
    const errorMessage = "Voer een telefoonnummer in dat begint met +31 of 0";
    const regexPattern = /^(?:\(0\d{2}\) \d{7}|\(0\d{3}\) \d{6}|0[1-9]\d{1,2}[-\s]?\d{6,7}|06[-\s]?\d{8}|\+31[-\s]?6[-\s]?\d{8}|031[-\s]?6[-\s]?\d{4}[-\s]?\d{4})$/;
    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
export function validateHouseNumber(inputValue) {
    const errorMessage = "Voer een geldig huisnummer in, bijv. 8A, 10H of 420.";
    const regexPattern = /^(10|8)(-| )?([A-Za-z]|[0-9]{3})$|^([0-9]{3})$/;


    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
export function validateEmail(inputValue) {
    const errorMessage = "Voer een geldig Email adres in.";
    const regexPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
export function validateFirstName(inputValue) {
    const errorMessage = "Uw voornaam moet beginnen met een hoofdletter, minimaal 2 en maximaal 20 karakters lang zijn en mag alleen letters en '-' bevatten.";
    const regex = /^([A-Z][a-z]+(( |-)[A-Z][a-z]+)*)$/;

    if (inputValue.length < 2 || inputValue.length > 20 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}

