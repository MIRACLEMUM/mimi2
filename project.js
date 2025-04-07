const  imageContainerEl = document.querySelector(".image-container")

const btnEl = document.querySelector("btn")

btnEl.addEventListener("click", ()
=> {
    let imageNum = 10;
    addNewImages()
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const element = array[index];
        
    }
   
   
    const newImgEl = document.createElement("img")
    newImgEl.scr=`https://picsum.photos/300?random=${Math.floor(
        Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
}