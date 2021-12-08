let images = [
    "https://www.uboric.com/wp-content/uploads/2021/08/bannershose.jpg",
    "https://images.unsplash.com/photo-1448387473223-5c37445527e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
//"https://images.unsplash.com/photo-1542834759-4db91f2574d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://www.uboric.com/wp-content/uploads/2021/08/bannershose.jpg",
  ];

  let container = document.getElementById("myslideshow")
  let interval;

function startslideshow(){

    let img = document.createElement("img")
    let counter = 0   
    
    img.src = images[0]
    img.setAttribute("class","img-slido")
    container.append(img)
    counter = counter +1

     interval = setInterval(function(){

        //here we are making div blank show that div image take its place and we see like slideshow
        container.innerHTML = null     //or you can use = ""

        if(counter === images.length){
            counter = 0
        }

        let img = document.createElement("img")
        img.src = images[counter]
        img.setAttribute("class","img-slido")
        container.append(img)

        counter = counter + 1

    },3000)



}
// clearInterval(interval)
startslideshow()