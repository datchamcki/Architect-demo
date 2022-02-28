const buttonElements=document.querySelectorAll('.js-btn-contact');
const modalElement=document.querySelector('.modal');
var iconClose=document.querySelector('.close-modal');
var modalContainer=document.querySelector('.modal-container')
    function showModal(){
        modalElement.classList.add('hide');
    }
    function hideModal(){
        modalElement.classList.remove('hide');
    }
    for(var  buttonElement of buttonElements){
        buttonElement.addEventListener('click',showModal);
    }

    iconClose.addEventListener('click',hideModal);
    modalElement.addEventListener('click',hideModal);
    modalContainer.addEventListener('click',function(e){
        e.stopPropagation();
    })
