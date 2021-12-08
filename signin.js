function signin(e){
    e.preventDefault();

    let myform = document.getElementById("myform1")
    console.log(myform)

    
    let email1 = myform.email1.value         //here name is id of input type name similarly for all
    let password1 = myform.password1.value

   console.log(email,password)

    let all_user = JSON.parse(localStorage.getItem("user"))
//    console.log(all_user)

    all_user.forEach(function (users){
        if(email1 === users.email && password1 === users.password){
            console.log(email1,users.email)
            alert("logged in succesffuly")
            window.location.href = "index.html"
        }
        
    })


}