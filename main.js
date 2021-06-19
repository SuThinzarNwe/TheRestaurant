

const footerImage = document.getElementsByClassName("footer-image")[0];
const origianlImage = footerImage.src
const imageArray =[
    "/media/restaurant.jpg",
    "/media/restaurant1.jpg",
    "/media/restaurant2.jpg",
    "/media/restauraant3.jpg",
    
];
let count = 0;

footerImage.addEventListener("click", () => {
    if (count ==4){
        
        count=0
        footerImage.src =origianlImage
        return;
    }
    const showImage = imageArray[count]
    footerImage.src = showImage
    count+=1;
    console.log(count)
})