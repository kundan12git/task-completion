//Function to append input to the display
function appendToDisplay(value){
    document.getElementById('display').value +=
    value;
}
//Function t clear the diaplay
function clearDisplay(){
    document.getElementById('display').value = 
    '';
}
//Function to calculate the result
function calculateResult(){
    try{
        let result =
        eval(document.getElementById('display').value);
        document.getElementById('display').value
        = result;
    } catch (error){
        document.getElementById('display').value
        = 'Error';

    }
}
//Function to handle keyboard input
document.addEventListener('keydown',
    function(event){
        const allowedkeys = "0123456789+-*/().";
        if(allowedkeys.includes(event.key)){
            appendToDisplay(event.key);
        }else if (event.key === 'Enter'){
            calculateResult();
        }else if (event.key === 'Backspace'){
            let display = 
            document.getElementById('display');
            display.value = display.value.slice(0,
                -1);
            }else if (event.key === 'Escape'){
                clearDisplay();
            }
});