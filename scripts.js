//listen for click on buttons
//when a button is clicked store the value in a variable
//have a function that takes in arguments and performs arithmetics on them
//on escape click refresh the calc

function calcReset() {
    document.addEventListener('keyup', function (e) {
        console.log(e);
        if (e.keyCode === 27) {
            document.getElementById('calcinput').value = '';
        }
    });
}

function equate() {
    let solution = eval(document.getElementById('calcinput').value);

    if (isNaN(solution)) {
        document.getElementById('calcinput').value = "ERROR";
    } else if(solution == 'Infinity'){
        document.getElementById('calcinput').value = "ERROR";
    }else {
        document.getElementById('calcinput').value = solution;
    }

    return console.log(solution);
}
