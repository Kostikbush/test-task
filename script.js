const dropMenuOne = document.querySelector('#drop__menu-one');
const dropMenuTwo = document.querySelector('#drop__menu-two');
const btnDropOne = document.querySelector('#btn-drop-one');
const btnDropTwo = document.querySelector('#btn-drop-two');
const dropDownTwoLis = document.querySelectorAll('.btn-classick-li1');

//btn ... icon on cart
const listDrop = document.querySelector('#drop__menu-last');
const btnDropMenu = document.querySelector('#control-btn-menu').onclick = ()=> toggleDropMenu(listDrop);
const listDrop1 = document.querySelector('#drop__menu-last1');
const btnDropMenu1 = document.querySelector('#control-btn-menu1').onclick = ()=> toggleDropMenu(listDrop1);
const listDrop2 = document.querySelector('#drop__menu-last2');
const btnDropMenu2 = document.querySelector('#control-btn-menu2').onclick = ()=> toggleDropMenu(listDrop2);
const listDrop3 = document.querySelector('#drop__menu-last3');
const btnDropMenu3 = document.querySelector('#control-btn-menu3').onclick = ()=> toggleDropMenu(listDrop3);


// list of btn down menu btn ... icon on cart
const list1 = document.querySelectorAll('#list1');
const list2 = document.querySelectorAll('#list2');
const list3 = document.querySelectorAll('#list3');
const list4 = document.querySelectorAll('#list4');


// btn filter
const dateUp = document.querySelector('#dateUp').onclick = dateUpF;
const dateDown = document.querySelector('#dateDown').onclick = dateDownF;
const coinUp = document.querySelector('#coinUp').onclick = coinUpF;
const coinDown = document.querySelector('#coinDown').onclick = coinDownF;


// btns of slider and image container imgWrBuy and imgWrSell
const imgWrBuy = document.querySelector('.img-bg-buy');
const btnsSlideOne1 = document.querySelectorAll('#btn-slide-one-1');
const btnsSlideOne2 = document.querySelectorAll('#btn-slide-one-2');
const btnsSlideOne3 = document.querySelectorAll('#btn-slide-one-3');
const btnsSlideOne4 = document.querySelectorAll('#btn-slide-one-4');
const btnsSlideOne5 = document.querySelectorAll('#btn-slide-one-5');

const imgWrSell = document.querySelector('.img-bg-sell');
const btnsSlideTwo1 = document.querySelectorAll('#btn-slide-two-1');
const btnsSlideTwo2 = document.querySelectorAll('#btn-slide-two-2');
const btnsSlideTwo3 = document.querySelectorAll('#btn-slide-two-3');
const btnsSlideTwo4 = document.querySelectorAll('#btn-slide-two-4');
const btnsSlideTwo5 = document.querySelectorAll('#btn-slide-two-5');



function toggleDropMenu(menu){
    menu.classList.toggle('drop__menu-active');
}
// dropDown vie ore not toggle and arrow up down
btnDropOne.addEventListener('click', ()=> {
    const arrowDropOne = document.querySelector('#arr-drop-one');
    dropMenuTwo.classList.remove('drop__menu-active');
    dropMenuOne.classList.toggle('drop__menu-active');
    arrowDropOne.classList.toggle('arr-up')
})
btnDropTwo.addEventListener('click', ()=> {
    const arrowDropTwo = document.querySelector('#arr-drop-two');   
    dropMenuOne.classList.remove('drop__menu-active');
    dropMenuTwo.classList.toggle('drop__menu-active');
    arrowDropTwo.classList.toggle('arr-up')
    
})


dropDownTwoLis.forEach(li => {
    li.addEventListener('click', ()=> {
        innerFunc(li.dataset.atri, li);
    });
})




function innerFunc(text, li, list) {
    // dropdown of header 
    if(text === 'dateUp'){
        btnDropTwo.innerHTML = `<span>По дате публикации</span><img class="img" src="./img/arrow-long.svg"/><img class="arr-img arr-up" id="arr-drop-two" src="./img/arrow.svg"/>`
        togleClassLi(dropDownTwoLis, li)
    }
    else if(text === 'dateDown') {
        btnDropTwo.innerHTML = `<span class="span">По дате публикации</span> <img class="down img" src="./img/arrow-long.svg"/><img class="arr-img arr-up" id="arr-drop-two" src="./img/arrow.svg"/>`;
        togleClassLi(dropDownTwoLis, li)
    }else if(text === 'coinUp'){
        btnDropTwo.innerHTML = `<span class="span">По цене</span> <img class="img"  src="./img/arrow-long.svg"/><img class="arr-img arr-up" id="arr-drop-two" src="./img/arrow.svg"/>`;
        togleClassLi(dropDownTwoLis, li)
    }else if (text === 'coinDown'){
        btnDropTwo.innerHTML = `<span class="span">По цене</span> <img class="down img" src="./img/arrow-long.svg"/><img class="arr-img arr-up" id="arr-drop-two" src="./img/arrow.svg"/>`;
        togleClassLi(dropDownTwoLis, li)
    }

    
    // dropdown of carts 
    if (text === 'Передать' && list === '1'){
        togleClassLi(list1, li)
    }else if (text === 'Продлевать' && list === '1'){
        togleClassLi(list1, li)
    }else if (text === 'В архив' && list === '1'){
        togleClassLi(list1, li)
    }else if (text === 'Поделиться' && list === '1'){
        togleClassLi(list1, li)
    }

    else if (text === 'Передать' && list === '2'){
        togleClassLi(list2, li)
    }else if (text === 'Продлевать' && list === '2'){
        togleClassLi(list2, li)
    }else if (text === 'В архив' && list === '2'){
        togleClassLi(list2, li)
    }else if (text === 'Поделиться' && list === '2'){
        togleClassLi(list2, li)
    }
    else if (text === 'Передать' && list === '3'){
        togleClassLi(list3, li)
    }else if (text === 'Продлевать' && list === '3'){
        togleClassLi(list3, li)
    }else if (text === 'В архив' && list === '3'){
        togleClassLi(list3, li)
    }else if (text === 'Поделиться' && list === '3'){
        togleClassLi(list3, li)
    }
    else if (text === 'Передать' && list === '4'){
        togleClassLi(list4, li)
    }else if (text === 'Продлевать' && list === '4'){
        togleClassLi(list4, li)
    }else if (text === 'В архив' && list === '4'){
        togleClassLi(list4, li)
    }else if (text === 'Поделиться' && list === '4'){
        togleClassLi(list4, li)
    }
    function togleClassLi(List, li){
        List.forEach(li => {
            li.classList.remove("btn-classick")
        })
        li.classList.add('btn-classick')
    
    }
}






// code of logic slider
function changeActiveBtnSlide(btn, imgMove, btnsArr, activeSlide){
    const arr = [0,1,2,3,4]
    btn[0].classList.add('btn-active');
    arr.map(numberOFSlide => {
        if(numberOFSlide !== activeSlide){
            imgMove.classList.remove(`left${numberOFSlide}`);
        }else {
            imgMove.classList.add(`left${numberOFSlide}`);
        }
        btnsArr.map(btn => {
            btn[0].classList.remove('btn-active');
        })
    })

}
//slider One
btnsSlideOne1[0].addEventListener('click', ()=>{
    changeActiveBtnSlide(btnsSlideOne1,imgWrBuy,[btnsSlideOne2,btnsSlideOne3,btnsSlideOne4,btnsSlideOne5],0)
})

btnsSlideOne2[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideOne2,imgWrBuy,[btnsSlideOne1,btnsSlideOne3,btnsSlideOne4,btnsSlideOne5],1)
})
btnsSlideOne3[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideOne3,imgWrBuy,[btnsSlideOne1,btnsSlideOne2,btnsSlideOne4,btnsSlideOne5],2)
})
btnsSlideOne4[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideOne4,imgWrBuy,[btnsSlideOne1,btnsSlideOne2,btnsSlideOne3,btnsSlideOne5],3)
})
btnsSlideOne5[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideOne5,imgWrBuy,[btnsSlideOne1,btnsSlideOne2,btnsSlideOne3,btnsSlideOne4],4)

})

//slider Two
btnsSlideTwo1[0].addEventListener('click', ()=>{
    changeActiveBtnSlide(btnsSlideTwo1,imgWrSell,[btnsSlideTwo2,btnsSlideTwo3,btnsSlideTwo4,btnsSlideTwo5],0)
})

    
btnsSlideTwo2[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideTwo2,imgWrSell,[btnsSlideTwo1,btnsSlideTwo3,btnsSlideTwo4,btnsSlideTwo5],1)
})
btnsSlideTwo3[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideTwo3,imgWrSell,[btnsSlideTwo1,btnsSlideTwo2,btnsSlideTwo4,btnsSlideTwo5],2)
})
btnsSlideTwo4[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideTwo4,imgWrSell,[btnsSlideTwo1,btnsSlideTwo2,btnsSlideTwo3,btnsSlideTwo5],3)
})
btnsSlideTwo5[0].addEventListener('click',()=> {
    changeActiveBtnSlide(btnsSlideTwo5,imgWrSell,[btnsSlideTwo1,btnsSlideTwo2,btnsSlideTwo3,btnsSlideOne4],4)

})


// logic of filter
function dateUpF(){
    const carts = document.querySelectorAll('#carts')[0];
    for(let i= 0; i < carts.children.length; i++){
        for(let j=i; j < carts.children.length; j++){
            if(+carts.children[i].getAttribute('data-date') > +carts.children[j].getAttribute('data-date')){
                replacedNode = carts.replaceChild(carts.children[j],carts.children[i]);
                insertAfter(replacedNode,carts.children[i]);
            }
        }
    }
};
function dateDownF(){
    const carts = document.querySelectorAll('#carts')[0];
    for(let i= 0; i < carts.children.length; i++){
        for(let j=i; j < carts.children.length; j++){
            if(+carts.children[i].getAttribute('data-date')< +carts.children[j].getAttribute('data-date')){
                replacedNode = carts.replaceChild(carts.children[j],carts.children[i]);
                
                insertAfter(replacedNode,carts.children[i])
            }
        }
    }
};
function coinUpF (){
    const carts = document.querySelectorAll('#carts')[0];
    for(let i= 0; i < carts.children.length; i++){
        for(let j=i; j < carts.children.length; j++){
            if(+carts.children[i].getAttribute('data-costup')> +carts.children[j].getAttribute('data-costup')){
                replacedNode = carts.replaceChild(carts.children[j],carts.children[i]);
                
                insertAfter(replacedNode,carts.children[i])
            }
        }
    }
}
function coinDownF (){
    const carts = document.querySelectorAll('#carts')[0];
    for(let i= 0; i < carts.children.length; i++){
        for(let j=i; j < carts.children.length; j++){
            if(+carts.children[i].getAttribute('data-costup') < +carts.children[j].getAttribute('data-costup')){
                replacedNode = carts.replaceChild(carts.children[j],carts.children[i]);
                
                insertAfter(replacedNode,carts.children[i])
            }
        }
    }
}



// inner elemnt delete on function dateUpF, dateDownF...
function insertAfter(elem, refElment){
    return refElment.parentNode.insertBefore(elem,refElment.nextSibling)
}

list1.forEach(li => {
    li.addEventListener('click', ()=> {
        innerFunc(li.dataset.atri, li, '1');
    });
})
list2.forEach(li => {
    li.addEventListener('click', ()=> {
        innerFunc(li.dataset.atri, li, '2');
    });
})
list3.forEach(li => {
    li.addEventListener('click', ()=> {
        innerFunc(li.dataset.atri, li, '3');
    });
})
list4.forEach(li => {
    li.addEventListener('click', ()=> {
        innerFunc(li.dataset.atri, li, '4');
    });
})

// screns 
const screenOne = document.querySelector('.container__carts');
const screenTwo = document.querySelector('.screen-two');
const screenThree = document.querySelector('.screen-three');

const btnsScreensOne = document.querySelector('#li-navbar-one');
const btnsScreensTwo = document.querySelector('#li-navbar-two');
const btnsScreensThree = document.querySelector('#li-navbar-three');


btnsScreensOne.addEventListener('click', ()=> {
    btnsScreensOne.classList.add('active-li');
    btnsScreensTwo.classList.remove('active-li');
    btnsScreensThree.classList.remove('active-li');

    screenOne.classList.add('screen-active');
    screenTwo.classList.remove('screen-active');
    screenThree.classList.remove('screen-active');
})
btnsScreensTwo.addEventListener('click', ()=> {
    btnsScreensOne.classList.remove('active-li');
    btnsScreensTwo.classList.add('active-li');
    btnsScreensThree.classList.remove('active-li');

    screenOne.classList.remove('screen-active');
    screenTwo.classList.add('screen-active');
    screenThree.classList.remove('screen-active');
})
btnsScreensThree.addEventListener('click', ()=> {
    btnsScreensOne.classList.remove('active-li');
    btnsScreensTwo.classList.remove('active-li');
    btnsScreensThree.classList.add('active-li');

    screenOne.classList.remove('screen-active');
    screenTwo.classList.remove('screen-active');
    screenThree.classList.add('screen-active');
})

