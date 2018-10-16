/* dragInitialize() */

function dragInitialize(ev) {
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
  return true;
}

/*allow dropping */
function allowDropStatus(ev) {
  ev.preventDefault();
  return false;
}

/* complete the drop */
function dropComplete(ev) {
  ev.preventDefault();
  var src = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(src));
  ev.stopPropagation();
  return false;
}

/*HANDLING FILE UPLOAD */
document.getElementById('fileinput').addEventListener('change', function(){
var file = this.files[0];
// This code is only for demo ...
console.log("name : " + file.name);
console.log("size : " + file.size);
console.log("type : " + file.type);
console.log("date : " + file.lastModified);
}, false);
