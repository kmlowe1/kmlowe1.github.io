var changeFactor = 1;

function increaseFontSize(id, increaseFactor){
     txt = document.getElementById('body');
     style = window.getComputedStyle('body', null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + changeFactor) + 'px';
}
function decreaseFontSize(id, decreaseFactor){
	txt = document.getElementById(id);
	style = windo.getComputedStyle(txt, null).getPropertyValue('font-size');
	currentSize = parseFloat(style);
	txt.style.fontSize = (currentSize - changeFactor) + 'px';
}


/**
But, if we want a "Decrease Font Size 1px", what we can do? We call the function with -1 rather than with 1.

We solve the Decrease Font Size problem as well. 
However, I would change the function name to a more generic one and call it in both two 
functions that I would create: increaseFontSize(id, increaseFactor) and 
decreaseFontSize(id, decreaseFactor).**/