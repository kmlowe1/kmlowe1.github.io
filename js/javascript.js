const changeFactor = 5;  /** Constant for increase/decrease font size factor **/
const Feb_2_2024_PerformanceURL = "https://kmlowe1.github.io/gigList/rainGig2_2_2024.html";
const March_8_2024 = "https://kmlowe1.github.io/gigList/rainGig3_8_2024.html";
const currentPerformanceURL = "https://kmlowe1.github.io/gigList/rainGig3_29_2024.html";
const allLyricsURL = "https://kmlowe1.github.io/lyrics/all_lyrics.html";

const songList = ["Cant_you_See-Marshal_Tucker_Band.html",
     "One_Horse_Town-Blackberry_Smoke.html",
     "Afgan-Bubbi_Mothens.html",
     "Lost_Together-Blue_Rodeo.html",
     "Summernótt-Greifarnir.html",
     "Take_On_Me-a-ha.html",
     "Runnaway_Train-Soul_Asylum.html",
     "Easy_On_Me-Adele.html",
     "Unwell-Matchbox_Twenty.html",
     "Á_Þig-Á_Móti_Sól.html",
     "In_The_Air_Tonight-Phil_Collins.html",
     "Always_Remember_Us_This_Way-Lady_Gaga.html",
     "Vegbúinn-Elín_Ey.html",
     "Free_Falling-Tom_Petty.html",
     "Nothing_Compares_2_U-Sinéad_O_Connor.html",
     "Long_As_I_Can_See_The_Light-CCR.html",
     "The_Story-Brandi_Carlile.html",
     "Shallow-Lady_Gaga.html",
     "Tennessee_Whiskey-Chris_Stapleton.html",
     "Creep-Radiohead.html",
     "Let_Her_Go-Passenger.html",
     "Í_Síðasta_Skipti-Friðrik_Dór.html",
     "Girl_Crush-Little_Big_Town.html",
     "Chasing_Cars-Snow_Patrol.html",
     "Stál_Og_Hnífur-Bubbi_Morthens.html",
     "Wish_You_Where_Here-Pink_Floyd.html",
     "Linger-The_Crandberries.html",
     "Wholl_Stop_The_Rain-CCR.html",
     "Zombie-The_Crandberries.html",
     "Ástin_Á_Sér_Stað-Sverrir_Bergmann.html",
     "Þar_Sem_Hjartað_Slær-Halldór_Gunnar.html"];

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

function toggleElementVisibility(id) {
     var element = document.getElementById(id);
     if (element.style.display === "none") {
       element.style.display = "inline-block";
     } else {
       element.style.display = "none";
     }
   }
function setProperMenuOptions(){
     const previousURL = document. referrer;
     if(previousURL === currentPerformanceURL){
          toggleElementVisibility("returnToEventPageMenuButton");
          /* toggleElementVisibility("previousPageMenuButton");
          toggleElementVisibility("nextPageMenuButton"); */
     }
     else if(previousURL === allLyricsURL){
          toggleElementVisibility("returnToAllLyricsPageMenuButton");
     }
}

function nextLyricPage(){
     alert("page forward.");
}

function previousLyricPage(){
     alert("page backward.");
}
   