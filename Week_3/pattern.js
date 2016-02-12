
function showPattern(){
  var width = 1500, height = 900, top = 10, left = 10;
  var bodyElement = document.getElementById("theBody");
  var color = ["red", "blue", "green", "black", "aqua", "yellow", "orange", "navy", "pink", "lightyellow", "lightskyblue","lightgray", "chocolate", "coral", "darkcyan", "darkkhaki", "darkmagenta", "darkorchid", "firebrick", "gold", "silver"];
  var colLen = color.length;
  while(height>20){

    //creating a new Div
    var newDiv = document.createElement("div");

    //Setting the attributes for the created Div
    newDiv.style.width=width+"px";
    newDiv.style.height=height+"px";
    newDiv.style.top=top+"px";
    newDiv.style.left=left+"px";

    //Appending the Div to the body
    bodyElement.appendChild(newDiv);

    //Choosing a random color for the div
    newDiv.style.backgroundColor = color[Math.floor(Math.random()*colLen)];

    //Re-Adjusting the positions for the next Div
    top+=10;
    left+=10;
    width-=20;
    height-=20;

  }
}

function clearPattern(){
  var bodyElement = document.getElementById("theBody");
  var count = 0;

  var divElements = document.getElementsByTagName("div");
  while(divElements[0]){
    divElements[0].parentNode.removeChild(divElements[0]);
  }

}

function showAndClearPattern(){
  showPattern();
  setTimeout(function(){
    clearPattern();
    showAndClearPattern();
  },100);
}
(document.getElementById("theBody")).addEventListener("load",showAndClearPattern());
