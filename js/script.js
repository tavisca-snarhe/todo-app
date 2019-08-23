const openTab = (evt, tabName) => {
  console.log(evt);
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("todo").style.display = "block";

const deleteTask = event => {
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(
    event.target.parentElement.parentElement.parentElement.parentElement
  );
};

const onEdit = event => {
  if (event.charCode == 13 && event.target.value != "") {
    event.target.outerHTML =
      "<span class='text'>" + event.target.value + "</span>";
    document
      .querySelectorAll(".deleteButton")
      .forEach(element => element.addEventListener("click", deleteTask));
    document
      .querySelectorAll(".editButton")
      .forEach(element => element.addEventListener("click", editTask));
  }
};

const editTask = event => {
  event.target.parentNode.parentNode.previousSibling.parentNode.firstElementChild.outerHTML =
    "<input id='update-input' type='text' placeholder='' onkeypress='onEdit(event)'></input>";
};

const addTask = () => {
  if (document.getElementById("input-text").value != "") {
    document.getElementById("todos").innerHTML +=
      "<li class='lis'>" +
      "<div class='li'>" +
      "<span class='text'>" +
      document.getElementById("input-text").value +
      "</span> " +
      "<span class='buttons'>" +
      "<span class='editButton button'>" +
      "<img src='images/edit.png' />" +
      "</span>" +
      "<span class='deleteButton button'>" +
      "<img src='images/delete.png'/>" +
      "</span>" +
      "</span>" +
      "</div>" +
      "</li>";

    document
      .querySelectorAll(".deleteButton")
      .forEach(element => element.addEventListener("click", deleteTask));
    document
      .querySelectorAll(".editButton")
      .forEach(element => element.addEventListener("click", editTask));
    document.getElementById("input-text").value = "";
  }
};

const onEnter = event => {
  if (event.charCode == 13) addTask();
};

const onSearch = event => {
  if (event.charCode != 13) {
    const list = document.querySelectorAll(".lis");
    const inputString = event.target.value;
    const filter = inputString.toUpperCase();
    for (var i = 0; i < list.length; i++) {
      var name = list[i].innerText;
      if (name.toUpperCase().indexOf(filter) != -1)
        list[i].style.display = "list-item";
      else 
        list[i].style.display = "none";
    }
  }
};

document
  .querySelectorAll(".deleteButton")
  .forEach(element => element.addEventListener("click", deleteTask));
document
  .querySelectorAll(".editButton")
  .forEach(element => element.addEventListener("click", editTask));
