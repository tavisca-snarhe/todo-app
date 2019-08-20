function openTab(evt, tabName) {
    console.log(evt);
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("todo").style.display = "block";

var deleteTask = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement.parentElement.parentElement);
}

var addTask = () => {
  if(document.getElementById("input-text").value != "") {
    document.getElementById("todos").innerHTML += "<li>"+
    "<div class='li'>"+
        "<span class='text'>"+
        document.getElementById("input-text").value +
        "</span> "+
        "<span class='buttons'>"+
            "<span class='button' onclick='editTask(event)'>"+
                "<img src='images/edit.png' />"+
            "</span>"+
            "<span class='button' onclick='deleteTask(event)'>"+
                "<img src='images/delete.png'/>"+
            "</span>"+ 
        "</span>"+ 
    "</div>"+
  "</li>";
  }
}

var onEnter = (event) => {
  if(event.charCode == 13) 
    addTask();
}