var changeFactor = 5;

function increaseFontSize(id, increaseFactor){
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + changeFactor) + 'px';
}
function decreaseFontSize(id, decreaseFactor){
	 txt = document.getElementById(id);
	 style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	 currentSize = parseFloat(style);
	 txt.style.fontSize = (currentSize - changeFactor) + 'px';
}
