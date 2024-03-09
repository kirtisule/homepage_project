const texts = ["Healthy", "Wealthy", "Marijuana"];


function changeText() {
    const changingText = document.getElementById("item");
    const currentIndex = texts.indexOf(changingText.textContent);
    const nextIndex = (currentIndex + 1) % texts.length;
    changingText.textContent = texts[nextIndex];
}


setInterval(changeText, 1000);


function show(){
    document.getElementById("content").style.height="200px"
    document.getElementById("content").style.display="block"
    document.getElementById("show").style.display="none"
   
}

function hide(){
    document.getElementById("content").style.height="0px"
    document.getElementById("content").style.display="none"
    document.getElementById("show").style.display=""
}


