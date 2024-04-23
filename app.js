const HTMLCSS = document.getElementById('html_css');
const JS = document.getElementById('html_css_js');
const PROJECT1 = document.getElementById('project1');
const PROJECT2 = document.getElementById('project2');


HTMLCSS.addEventListener('click', function(){
    PROJECT1.classList.toggle('hide');
})

JS.addEventListener('click', function(){
    PROJECT2.classList.toggle('hide');
})