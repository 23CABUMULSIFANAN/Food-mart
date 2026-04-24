// let inc=document.getElementById("inc")
// let dec=document.getElementById("dec")

// let output=document.getElementById("output")

// let count=0
// inc.addEventListener("click",function(){
//     count++;
//     output.textContent=count
// })

// dec.addEventListener("click",function(){

//     if(count>0){
//      count--;
//       output.textContent=count
//     }
// }
// )

document.addEventListener("click",function(e){
    if(e.target.classList.contains("dec")){
        const pro=e.target.closest(".product")
        const output=pro.querySelector(".output")

        let count=parseInt(output.innerText)
       if(count>0){
         output.innerText=count-1
       }

    }
    if(e.target.classList.contains("inc")){
        const pro=e.target.closest(".product")
        const output=pro.querySelector(".output")

        let count=parseInt(output.innerText)
       
         output.innerText=count+1
       
    }
    
})

const cart=document.getElementById("cart")

document.addEventListener("click",function(e){
    if(e.target.classList.contains("btn-cart")){
        const product=e.target.closest(".product")

        const title=product.querySelector(".text-center").innerText;
        const price=product.querySelector("h3").innerText;
        
        const img=product.querySelector("img").src;

        const result=`
        <div class="d-flex ">
        <img src="${img}" width=50>

        <div>
        <h6>${title}</h6>
        <p>${price}</p>
        </div>
        </div>`

        cart.innerHTML+=result
        


    }
})