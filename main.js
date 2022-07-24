
let leftCount = document.getElementById("left-count")
let rightCount = document.getElementById("right-count")

/* console.log(leftCount)
console.log(rightCount) */


let skore1=12;
let skore2=5;

function adda(){
    skore1= skore1 + 1
    leftCount.textContent = skore1
    
}
function addb(){
    skore1 = skore1 + 2
    leftCount.textContent = skore1
    
}
function addc(){
    skore1 = skore1 + 3
    leftCount.textContent = skore1
    
}
function addd(){
    skore2 = skore2 + 1
    rightCount.textContent = skore2
    
}
function adde(){
    skore2 = skore2 + 2
    rightCount.textContent = skore2
    
}
function addf(){
    skore2 = skore2 + 3
    rightCount.textContent = skore2
    
}

 