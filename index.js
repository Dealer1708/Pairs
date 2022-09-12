

const fruitList = ["banan.png","blueberry.png","cherry.png","lemon.png","orange.png","pear.png","purple.png","straw.png"]
const pair = document.querySelectorAll(".pair")
let pairList = ["pair-1", "pair-2", "pair-3", "pair-4", "pair-5", "pair-6", "pair-7", "pair-8", "pair-9", "pair-10", "pair-11", "pair-12", "pair-13", "pair-14", "pair-15", "pair-16"]

let duplicates = []
let picList = []
// Filling up the empty places

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }

function FillingTheField(){
    for (let j = 0; j < fruitList.length; j++) {
        for(let i = 0; i < fruitList.length * 30;  i++){
            const img = document.createElement("img")
            rndPlacement = get_random(pairList)
            rndPair = document.getElementById(rndPlacement)

            if(rndPair.classList.contains("full")){
                console.log("no!")
                
                
            }
                
            else{
                
                img.src = `Fruits/${fruitList[j]}`
                img.classList.add("imgs")
                rndPair.appendChild(img)
                indexOfPair = pairList.indexOf(rndPlacement)
                console.log(j)
                rndPair.classList.add("full")
                break
                // console.log(pairList)
            }
        }
    }
}

FillingTheField()
FillingTheField()










// for (let i = 0; i < pair.length;i++) { 

//     const img = document.createElement("img")
//     // console.log(picList)

//     pic = fruitList[Math.floor(Math.random() * fruitList.length )]
//         // // console.log(pic)
//     img.src = `Fruits/${pic}`
//     img.classList.add("imgs")
//     pair[i].appendChild(img)
    
// }


























// for(let y = 0; y < 17; y++){
//     pic = fruitList[Math.floor(Math.random() * fruitList.length )]
//     picList.push(pic)  
//     // console.log(picList)   
//     for (let j = 0; j < picList.length; j++){
//         for (let k = 0; k < j; k++){
//             if (picList[k] === picList[j] && duplicates.includes(picList[j]) == false){
//                 duplicates.push(picList[j])
//             }
//         }
//     }
//     console.log(duplicates)
//     for(let n = 0; n < duplicates.length; n++){
//        if(pic.includes(duplicates[n])){
        
//         index = picList.indexOf(duplicates[n])
//         picList.splice(index)
//         console.log(picList)

//        }
//     }


// }
    
















































//https://learn.javascript.ru/js-animation









// for(let i = 0; i < covers.length; i++){
//     covers[i].addEventListener('click', function(){
//         covers[i].classList.add("isClicked")
//     cover = covers[i]
//     console.log(cover)
//     })
//     // console.log(covers[i].classList)


// function choose(){
//     // console.log(cover)
//     let start = Date.now();

//     let timer = setInterval(function() {
//         let timePassed = Date.now() - start

//         if (timePassed >= 150) {    
//             clearInterval(timer)
//             return;

//       }
//     draw(timePassed)
//     }, 1)
//     function draw(timePassed) {
//         cover.style.left = timePassed / 1 + 'px';
//       }
// }

// }
