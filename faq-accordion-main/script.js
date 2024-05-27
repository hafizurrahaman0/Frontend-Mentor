const accordion = document.getElementsByClassName('content-Box');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}