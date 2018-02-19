const students = $("li.student-item");
let pagination = $('.pagination')
let pages= Math.ceil(students.length/10);

const createPagination = function createPagination(){
  let ul=document.createElement('ul');
     for(i=0;i<pages;i++)
     {
         var li=document.createElement('li');
         li.innerHTML= "<a href=#>"+(i+1)+ "</a>";
         ul.appendChild(li);
     }
     document.getElementById('pagination').appendChild(ul);
}

const hideStudents = function hideStudents(){
  for (let i = 0; i < students.length; i++) {
    students[i].style.display='none';
  }
}

const showStudents = function showStudents(){
  for (let i = 0; i < 10; i++) {
    students[i].style.display=''
  }
}
