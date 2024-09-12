//your code here
let container = document.querySelector("main");

let imagesClassNames = ["img1", "img2", "img3", "img4", "img5"] 

let randomIndex =   parseInt(Math.random()*imagesClassNames.length) //0-4 3
// console.log(randomIndex, imagesClassNames[randomIndex])
imagesClassNames.push(imagesClassNames[randomIndex]) // ["done", "done", "done", "done", "done", "done"]

// ["done", "done", "done", "img3", "done", "img3"] => set(arr) => done


// console.log(imagesClassNames)

// reaagrere the array
let count = 1
while(true){
     
      let set = new Set(imagesClassNames) // ["done", "done", "done", "done", "done", "done"] => {"done"}
      if(set.size === 1){
          break
      }
     let randomIndex =   parseInt(Math.random()*imagesClassNames.length) // 1, 0,1,1,3
     if(imagesClassNames[randomIndex] === "done"){
         continue
     }
     let pic = document.createElement("img")
     pic.className = imagesClassNames[randomIndex] // img2
     pic.alt = imagesClassNames[randomIndex] // img2
     pic.id = `img${count++}`

     imagesClassNames[randomIndex] = "done"

    container.append(pic)


    pic.addEventListener("click", changeState)
      
}



// generate an h3: 

let h3 = document.createElement("h3")
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
h3.id = "h"
container.append(h3)


// let previousImageId = null
let numberOfSelectedImages = 0
function changeState(e){
    let clickedImage = e.target

     if(clickedImage.classList[1] == "selected"){
             return
     }

     numberOfSelectedImages++

    clickedImage.classList.add("selected")

   


    if(document.querySelector("#reset") == null){
        let restBtn = document.createElement("button")
        restBtn.innerText = "Reset"
        restBtn.id = "reset"
        container.append(restBtn)

        restBtn.addEventListener("click", reset)
    }

    if(numberOfSelectedImages == 2){
        let verifyBtn = document.createElement("button")
        verifyBtn.innerText = "Verify"
        verifyBtn.id = "verify"
        container.append(verifyBtn)

        verifyBtn.addEventListener("click", verify)
    }

    if(numberOfSelectedImages > 2 && document.querySelector("#verify") != null){
        let verifyBtn = document.querySelector("#verify")
        verifyBtn.remove()
    }
}


function reset(){
    let selectedImages = document.querySelectorAll(".selected")
    for(let t of selectedImages){
        t.classList.remove("selected")
    }

    let resetBtn = document.querySelector("#reset")
    resetBtn.remove()

    let verifyBtn = document.querySelector("#verify")
    if(verifyBtn != null){
        verifyBtn.remove()
    }

    numberOfSelectedImages = 0
    
}


function verify(){
    let selectedImages = document.querySelectorAll(".selected")
    let para = document.createElement("p")
    para.id = "para"
    container.append(para)

    if(selectedImages[0].className == selectedImages[1].className){
      para.innerText = "You are a human. Congratulations! "
    }
    else{
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }

    let verifyBtn = document.querySelector("#verify")
    verifyBtn.remove()
        
}






























// for(let t of imagesClassNames){
//     let pic = document.createElement("img")
//     // <img src="" alt="">
//     pic.className = t
//     pic.alt = t

//     container.append(pic)
//     // container.prepend(pic)
// }