// get html eliment 
const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image');


window.onload = () => { 
    filterItem.onclick = (selectItem) => {
        if(selectItem.target.classList.contains('item')) {
            filterItem.querySelector(".active").classList.remove("active");
            selectItem.target.classList.add('active');
            let filterName = selectItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");
                if((filterName == filterImages) || filterName == "all") {
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            })
        }
    }
    for(let index = 0; index < filterImg.length; index++){
        filterImg[index].setAttribute('onclick', 'preview(this)');
    }
}


// get html eliment preview box 
const previewBox = document.querySelector('.preview-box');
const previewImg = previewBox.querySelector('img')
const previewClossIcon = previewBox.querySelector('.closs');
const previewCatagoryName = document.querySelector('.title p');
const shadow = document.querySelector('.shadow');



// fullscreen preview function calling 
function preview(element) {

    document.querySelector('body').style.overflow = 'hidden';

    let selectPrevImg = element.querySelector('img').src;
    previewImg.src = selectPrevImg;

    let selectPrevCataName = element.getAttribute('data-name');
    previewCatagoryName.textContent = selectPrevCataName;

    shadow.classList.add('show');

    previewBox.classList.add('show');
    
    previewClossIcon.onclick = () => {
        previewBox.classList.remove('show');
        shadow.classList.remove('show');

        document.querySelector('body').style.overflow = 'scroll';        
    }

}
