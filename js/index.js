// let ink = document.querySelector(".w");
//     window.onscroll = function (){
//         if(window.scrollY >= 100){
//             ink.style.display="block";
//             } else{
//             ink.style.display="none"
//     }
// }
// ink.onclick = function(){
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }
let num = document.querySelector("i");
num.onclick=function(){
    num.classList.toggle("fa-spin");
    document.querySelector(".settings_box").classList.toggle("open");
};
let A=true;
let B;
document.documentElement.style.setProperty('--maincolor',localStorage.getItem("color"))
let nb = document.querySelectorAll(".text_color li");
nb.forEach(e =>{
    e.addEventListener("click" ,(b) =>{
        document.documentElement.style.setProperty('--maincolor',b.target.dataset.color)
        localStorage.setItem("color",b.target.dataset.color);
        repeat(b);
        
    });
});
// 
function repeat (e){
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });

    e.target.classList.add("active");
}
// 
let memory = document.querySelectorAll(".background-color span");
    memory.forEach(e =>{
        e.addEventListener("click", w =>{
            repeat(w);
            if(w.target.dataset.color === 'yes'){
                A= true;
                say();
            } else {
                A= false;
                clearInterval(B);
            }
        })
    })
let landingpPage = document.querySelector(".landing");

let array =["01.jpg","02.jpg" , "03.jpg" ,"04.jpg" , "05.jpg"];

function say() {
    if(A = true){
        B= setInterval(()=>{
            let randomenumber = Math.floor(Math.random() * array.length);
            landingpPage.style.backgroundImage = 'url(Image/'+array[randomenumber]+ ')' 
},3000);
}
}
let seen = document.querySelector(".Services");
let option = document.querySelectorAll(".A span");
    
    window.onscroll = function(){
        if(window.scrollY > seen.offsetTop-500){
            option.forEach((r) =>{
                r.style.width = r.dataset.width
            })
        }
    }

    let photos = document.querySelectorAll(".Contact .images img");
    photos.forEach(img =>{
        img.addEventListener("click" ,(e) =>{
            let overlay =document.createElement("div");
            overlay.className="layout";
            document.body.appendChild(overlay);
            // 
            let popup_box = document.createElement("div");
            popup_box.className="box";
            // 
            let popub_img = document.createElement("img");
            popub_img.src=img.src;
            // 
            popup_box.appendChild(popub_img);
            // 
            document.body.appendChild(popup_box);
            // 
            let close = document.createElement("span");
            close.className="close"
            let text = document.createTextNode("x");
            close.appendChild(text);
            popup_box.appendChild(close);

            // 
            
        });
    });
    document.addEventListener("click" ,function(e){
        if(e.target.className=="close"){
            e.target.parentNode.remove();
            document.querySelector(".layout").remove();
        }
    });

    // 

    let boll = document.querySelectorAll(".nav-bullets .bullet");
    console.log(boll);
    boll.forEach(e =>{
        e.addEventListener("click" , (ele) =>{
            document.querySelector(ele.target.dataset.section).scrollIntoview({
                behavior:"smooth"
            });
        });
    });
    // 
    let re = document.querySelector(".reset");
    re.onclick = function (){
        localStorage.removeItem(".background-color span");
        // 
        window.location.reload();
    }

// let n = [1,1,1,2,2,3,3,4,4,4,5,5,6,6];
// console.log(n);

// let nu = new Set(n);
// console.log(nu);







