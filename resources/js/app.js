//DOM selections
let applyButton = document.querySelector('.apply_button');


//Functions
let hideConfirmation = function(){
    let elementSuccess = document.querySelector('.success');
  if(elementSuccess){
    elementSuccess.parentElement.removeChild(elementSuccess);
  }
}

let confirmationApplication = function(){
    let markUp = `<div class="success">
    <p>Congratulations!! Your application was successful!</p>
</div>`;
  document.querySelector('#body_container').insertAdjacentHTML("afterbegin", markUp);   
}

/*EventListener*/
applyButton.addEventListener("click", ()=>{
  hideConfirmation();
  confirmationApplication();
   
  setTimeout(()=>{
      hideConfirmation();
  },5000);
});

