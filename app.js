const form = document.querySelector('#form');
const name = document.querySelector('#username');
const email= document.querySelector('#email');
const phonenumber= document.querySelector('#phone number');
const cphonenumber= document.querySelector('#cphonenumber');

form.addEventListener('submit',(e)=>{
   
   if(!Validateinputs()){
    e.preventDefault()
   }
})

function Validateinputs(){
    const nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phonenumberVal = phonenumber.value.trim();
    const cphonenumberVal = cphonenumber.value.trim();
    let success =true;



if(nameVal===''){
    success=false;
    setError(username,'username is required')
}else{
    setSuccess(name)
}
if(emailVal===''){
    success=false;
    setError(email,'Email is required')
}else if(!ValidateEmail(emailVal)){
    setError(email,'please set a vaild email')
}
else{
    setSuccess(email)
}
if(phonenumberVal===''){
    success=false;
    setError(phonenumber,'phonenumber is required')
}else if(passwordVal.length<10){
    setError(phonenumber,'must enter 10 number')
}
else{
    setSuccess(phonenumber)
}
if(cphonenumberVal===''){
    success=false;
    setError(cphonenumber,'conform phone number is required')
}else if(cphonenumber!==phonenumberVal){
    setError(cphonenumber,'phonenumber not match')
}
else{
    setSuccess(cphonenumber)
}
return success;
}


function setError (element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess (element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const ValidateEmail =(email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}