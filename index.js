
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

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
        document.body.style.backgroundColor = rs.getPropertyValue("--second-color");
        document.body.style.color = "black";
      }
      else{
        document.body.style.backgroundColor = rs.getPropertyValue("--main-color"); 
        document.body.style.color = "white";
      }
  }
