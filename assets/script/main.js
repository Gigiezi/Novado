const addButton = document.getElementById('mainButton');
const mainInput = document.getElementById('mainInput');
const nonListed = document.getElementById('noneListed')
const mainContent = document.getElementById('mainContentContainer');

addButton.addEventListener('click', addItemFunction);

function addItemFunction() {
    nonListed.className = 'displayNone';
    mainContent.innerHTML += '<div class="mainContentItem"><div class="itemContent"><img src="icons/check.svg" alt="check icon"><p>'+ mainInput.value +'</p></div><div><img onClick="this.parentElement.parentElement.remove()" src="icons/trash.svg" alt="trash Icon"></div></div>';
    mainInput.value = '';
}

