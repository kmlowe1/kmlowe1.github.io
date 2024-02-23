var changeFactor = 5;  /** Constant for increase/decrease font size factor **/

/** This function increases the font size of the text in the HTML Element **/
function increaseFontSize(id) {
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + changeFactor) + 'px';
}
/** This function decreases the font size of the text in the HTML Element **/
function decreaseFontSize(id) {
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize - changeFactor) + 'px';
}