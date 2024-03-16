const addButton = document.getElementById('mainButton');
const mainInput = document.getElementById('mainInput');
const nonListed = document.getElementById('noneListed')
const mainContent = document.getElementById('mainContentContainer');
const counter = document.getElementById('counter')

addButton.addEventListener('click', addItemFunction);
let count = 0;
function addItemFunction(event) {
    let inputValued;
    if(mainInput.value == ''){
        inputValued = false;
    }else{
        inputValued = true;
    }
    if(inputValued){
        nonListed.className = 'displayNone';
        mainContent.innerHTML += '<div class="mainContentItem"><div class="itemContent"><img onClick="this.parentElement.parentElement.className += ` doneItem`" id="checkBox" src="icons/check.svg" alt="check icon"><p>'+ mainInput.value +'</p></div><div><img onClick="this.parentElement.parentElement.remove()" src="icons/trash.svg" alt="trash Icon"></div></div>';
        mainInput.value = '';
        count++;
        counter.innerHTML = `${count}`;
    }
};

