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
        display.value = new Function('return ' + display.value)();
    }    
    catch(error){
        display.value = "Error";
    }
}