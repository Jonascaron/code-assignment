/** Voeg hier je code toe */
const ADD = document.getElementById('add');
const ASSIGNMENT_03 = document.getElementById('assignment-03');
console.log(ADD);
let i = 0;

ADD.addEventListener('click',function(){
    if (i < 10) {
        let creatediv = document.createElement('div');
        i++;
        creatediv.innerText = i;
        creatediv.setAttribute('class','block');
        ASSIGNMENT_03.appendChild(creatediv); 
    }
    else{
        alert('er mogen niet meer dan 10 blokken gemaakt worder')
    }

})