

hidemode = false;
document.getElementById("factsB").onclick = () => {
      hidemode = !hidemode;
      document.getElementById("facts").hidden = hidemode;
      if (hidemode){
        document.getElementById("factsB").innerHTML = "show facts about my type";
      }
      else{
        document.getElementById("factsB").innerHTML = "hide facts about my type";
      }
  }


changecolor = true;
document.getElementById("ChangeColorB").onclick = () => {
      changecolor = !changecolor;
      if (changecolor){
        document.body.style.backgroundColor = "#FFDAB9";
        document.body.style.color = "black";
      }
      else{
        document.body.style.backgroundColor = "#E9967A"; 
        document.body.style.color = "white";
      }
  }
