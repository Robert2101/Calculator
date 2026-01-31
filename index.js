const display = document.getElementById(`display`);


function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        // WARNING: While new Function() is often considered marginally safer than eval() because it executes
        // code in the global scope rather than the local scope, it *still* allows execution of arbitrary JavaScript.
        // For true security, especially with user-controlled input, a dedicated and secure mathematical expression
        // parser library or a carefully implemented manual parser with strict input validation is recommended.
        const expression = display.value;
        // Validate input to permit only numerical and basic arithmetic characters.
        // This regex allows digits, common operators (+-*/), literal parentheses, and literal decimal point.
        // Spaces are also allowed. It's crucial to prevent arbitrary code execution, though not foolproof for all edge cases
        // or complex JavaScript expressions. For full security, a dedicated math parser library is recommended.
        if (!/^[0-9+\-*\/\(\)\. ]+$/.test(expression)) {
            display.value = "Error: Invalid expression";
            return;
        }
        
        // Using eval() with strictly validated input significantly reduces the attack surface compared
        // to `new Function()` without validation, but still carries some inherent risks.
        // The most secure approach for production applications is to use a dedicated mathematical
        // expression parser library or implement a robust manual parser.
        display.value = eval(expression);
    }    
    catch(error){
        display.value = "Error";
    }
}