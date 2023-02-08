function validateEmail(email) 
{
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
}

function validatePhone(phone)
{
  // 880-1710-336617
  var re = /^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
  return re.test(phone);
}





nameinput =document.querySelector("input[name=name]")
emailinput =document.querySelector("input[name=email]")
phoneinput =document.querySelector("input[name=phone]")
messageinput =document.querySelector("textarea")
form = document.querySelector("form")
thankbox=document.querySelector(".thank-you")
mainbox=document.querySelector(".box")

function reset(elm){
    elm.nextElementSibling.classList.add("hidden")

}
function invalidate(elm){
    
    
    elm.nextElementSibling.classList.remove("hidden")

}

let inputs = [nameinput,emailinput,phoneinput,messageinput]



let run = false
let thank = false

function isValid(){
    if(!run){
        return
    }

    thank = true
    reset(nameinput)
    reset(emailinput)
    reset(phoneinput)
    reset(messageinput)




    if(!nameinput.value){
        invalidate(nameinput)
        thank = false
        
    }
    if(!validateEmail(emailinput.value)){
        invalidate(emailinput)
        thank = false

    }
    if(!validatePhone(phoneinput.value)){
        invalidate(phoneinput)
        thank = false

    }
    if(!messageinput.value){
        invalidate(messageinput)
        thank = false
        
    }



}






form.addEventListener("submit",(e)=>{
    e.preventDefault()
    run = true
    isValid()
    if(thank){
        mainbox.parentElement.removeChild(mainbox)
        thankbox.classList.remove("hidden")
    }
})


for (const input of inputs) {
    
    input.addEventListener("input",()=>{
        isValid()
    })
}