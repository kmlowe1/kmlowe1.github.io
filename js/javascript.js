function increaseFontSize(id, increaseFactor){
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

/**
<input type="button" value="Increase Font Size 1px" onclick="increaseFontSize("b", 1)">
<p id="b">Font Size by 1 Pixel</p>

<input type="button" value="Decrease Font Size 1px" onclick="increaseFontSize("b", -1)">
<p id="b">Font Size by -1 Pixel</p>

But, if we want a "Decrease Font Size 1px", what we can do? We call the function with -1 rather than with 1.

We solve the Decrease Font Size problem as well. 
However, I would change the function name to a more generic one and call it in both two 
functions that I would create: increaseFontSize(id, increaseFactor) and 
decreaseFontSize(id, decreaseFactor).**/