var changeFactor = 1;  /** Constant for increase/decrease font size factor **/

/** This function increases the font size of the text in the HTML Element **/
function increaseFontSize(id) {
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + changeFactor) + 'em';
}
/** This function decreases the font size of the text in the HTML Element **/
function decreaseFontSize(id) {
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     if(currentSize <= 1){
          return;
     }
     txt.style.fontSize = (currentSize - changeFactor) + 'em';
}

