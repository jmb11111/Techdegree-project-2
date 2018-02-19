const students = $("li.student-item");
let pagination = $('.pagination')
let pages= Math.ceil(students.length/10);
//function that hides all students
const hideStudents = function hideStudents(){
  for (let i = 0; i < students.length; i++) {
    students[i].style.display='none';
  }
}
//function that shows first ten students
const showStudents = function showStudents(){
  for (let i = 0; i < 10; i++) {
    students[i].style.display=''
  }
}
const createPagination = function createPagination(){
  let ul=document.createElement('ul');
     for(i=0;i<pages;i++)
     {
         let li=document.createElement('li');
         li.innerHTML= "<a href=# class='pages'"+ 'id='+(i+1)+ ">"+(i+1)+"</a>";
         let pageNumber= document.getElementsByClassName('pages').id = i+1;
         ul.appendChild(li);
     }
     document.getElementById('pagination').appendChild(ul);

}
createPagination();
