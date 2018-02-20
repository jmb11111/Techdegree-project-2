//variable storing all student info
const students = $("li.student-item");

let pages= Math.ceil(students.length/10);


//function that hides all students
function hideStudents(){
  for (let i = 0; i < students.length; i++) {
    students[i].style.display='none';
  }
}
//loads 10 students, depending on which paramater is set
function loadStudents(x) {
hideStudents()
let $students = students.slice((x-1) * 10, x * 10);
  for (var i = 0; i < $students.length; i++) {
  $students[i].style.display='';
  }
}

//creates buttons on bottom of page depending on how many items are in the students array, then calls load students passing in the argument based on the number pressed
function createPagination(){
  let ul=document.createElement('ul');

     for(i=0;i<pages;i++)
     {
         let li=document.createElement('li');
         li.innerHTML= "<button onclick= loadStudents("+(i+1)+") class='pages'"+'>'+(i+1)+ "</button>";
         ul.appendChild(li);

     }
     document.getElementById('pagination').appendChild(ul);
}



loadStudents(1);
createPagination();
