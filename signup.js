function signup(e){
    e.preventDefault();
    

  
    let email = myform.email.value         //here name is id of input type name similarly for all
    let password = myform.password.value

console.log(email,password)

   

     

    if(localStorage.getItem('user') === null){
        localStorage.setItem('user', JSON.stringify([]));
    }

        // 1.send user data
        //if key and value are same then add otherwise no
    let user = {
        email,
         password,
       
    };

    // 2.get array from local storage

    let arr = JSON.parse(localStorage.getItem("user"))

   arr.push(user) 

   localStorage.setItem("user", JSON.stringify(arr))


//    let myform = document.getElementById("myform")
// myform.reset()

}


