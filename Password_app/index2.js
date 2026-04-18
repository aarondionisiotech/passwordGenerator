function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {

    const uppercaseChars = "ABCDE";
    const lowercaseChars = "abcde";
    const numberChars = "01234";
    const symbolsChars = "!$&#@";

    let allowedChars = "";
    let password = "";

    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (length <= 0) {
        return "(Your password must have atleast one character)";
    }

    if (allowedChars === 0) {
        return "(Atleast one character should be selected)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }



    return password;
}

const result = document.getElementById('result');

function generateBtn() {

    const passwordLength = 12;
    const includeUppercase = true;
    const includeLowercase = true;
    const includeNumbers = true;
    const includeSymbols = true;


    const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    result.textContent = `Generated Password : ${password}`;
    
}


console.log(`Generated Password : ${password}`);