// validation.js
export const validateTextArea = (value) => {
    const regex = /^[a-zA-Z0-9-_]+$/;
    if (value.length < 5 || value.length > 50) {
        return false;
    } else if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
};

export const textAreaErrorMessage = "Het bericht moet minimaal 5 en maximaal 50 karakters lang zijn en mag alleen letters, getallen en '-' of '_' bevatten.";
