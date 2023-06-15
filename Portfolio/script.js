const btn = document.querySelector('.button');
// const input = document.querySelector('form')
// btn.addEventListener('click',() => {
//     Email.send({
//         Host:"smtp.gmail.com",
//         Username:"arun2k20143@gmail.com",
//         Password:"0E09B43384CF7CF811661F6862952AE24AE4",
//         To:"arun2k20it@csjmu.ac.in",
//         From:inputs.elements["email"].value,
//         Subject:"Contact us",
//         Body:inputs.elements["message"].value + "<br>" + inputs.elements["name"].value +"<br>" + inputs.elements["phone"].value


//     }
//     ).then(msg=>alert("The email successfully"))
// })

btn.addEventListener('click',function submitForm(e){
   
    e.preventDefault();
    alert("OK its working");

});