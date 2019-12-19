/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Jaime Sanchez
******************************************/

//Global Variables
// variable to hold a list of all the students on the page
const studentList = document.querySelectorAll('.student-item');
// variable to hold the number of students to show per page
const numberPerPage = 10;


//function hides students except for the 10 you select on a given page
const showPage = (list, page) => {
  const startIndex = (page * numberPerPage) - numberPerPage;
  const endIndex = page * numberPerPage;

  for (let i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
  }
  for (let i = 0; i <= list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = ''
    }
  }
}


//function creates and appends pagination links
const appendPageLinks = (list) => {

  const pageButtonDiv = document.createElement("div");
  const mainPage = document.querySelector(".page");
  pageButtonDiv.className = 'pagination';
  mainPage.append(pageButtonDiv);
  const pageButtonUl = document.createElement("ul");
  pageButtonDiv.append(pageButtonUl);

//function creates pagination links for each page of 10
  const getNumberOfPages = Math.ceil(list.length / numberPerPage);
  for(let i = 0; i < getNumberOfPages; i++){
    const pageButtonLi = document.createElement("li");
    pageButtonUl.appendChild(pageButtonLi);
    const pageButtonAnchor = document.createElement("a");
    pageButtonAnchor.href = '#';
    pageButtonAnchor.textContent = i + 1;
    pageButtonLi.appendChild(pageButtonAnchor);
  }


  const pageButton = document.querySelectorAll('a');
  pageButton[0].className = 'active';
//event listener for pagination links and calls showPage() function also changes class name to active on selected link
  pageButtonUl.addEventListener('click', (e) => {
    for(let i = 0; i < pageButton.length; i++){
      pageButton[i].className = '';
      e.target.className = 'active';
      showPage(studentList, e.target.textContent);
    }
  })
}


showPage(studentList, 1);
appendPageLinks(studentList);
