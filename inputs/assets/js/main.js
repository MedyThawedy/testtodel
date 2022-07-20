

function fn_test() {
    // With the property .value: We get the value of the inputs
    let input = document.getElementById('myInput').value;
    console.log(input);

    let input2 = document.getElementById('myInput');
    console.log(input2);

    // Only for test purposes
    document.getElementById('myInput').innerHTML = 'Voilà';
    let input3 = document.getElementById('myInput').innerHTML;
    console.log(input3);


    console.log('________________________');
    let input4 = document.getElementById('myInput2').innerHTML;
    console.log(input4);

}