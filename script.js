const dropMenuOne = document.querySelector('#drop__menu-one');
const dropMenuTwo = document.querySelector('#drop__menu-two');
const btnDropOne = document.querySelector('#btn-drop-one');
const btnDropTwo = document.querySelector('#btn-drop-two');
const dropDownTwoLis = document.querySelectorAll('.btn-classick-li1');

//btn ... icon on cart
const controlBtnVenu = document.querySelectorAll('.control-btn-menu');
controlBtnVenu.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('drop__menu-active');
    })
    
})
//btn ... icon on cart






// btn filter
const dateUp = document.querySelector('#dateUp').onclick = dateUpF;
const dateDown = document.querySelector('#dateDown').onclick = dateDownF;
const coinUp = document.querySelector('#coinUp').onclick = coinUpF;
const coinDown = document.querySelector('#coinDown').onclick = coinDownF;


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
    function togleClassLi(List, li){
        List.forEach(li => {
            li.classList.remove("btn-classick")
        })
        li.classList.add('btn-classick')
    
    }
}











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
function insertAfter (elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}




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





// slider
//  image container imgWrBuy and imgWrSell

const containersSliders = document.querySelectorAll('#slider-have')
//console.log(containersSliders)
containersSliders.forEach(containerSlider => {
    const containerImages = containerSlider.children[0];
    const containerBtns = containerSlider.children[2];
    let count = containerImages.children.length;
    let arrBtn = [];
    let numberOfBtn = 0;
    while(count > 0){
        containerBtns.insertAdjacentHTML('afterbegin', `<button id="btn-slide-one-2" class="btn-slide"></button>`);
        count--;
    }
    setTimeout(()=> {
        const btns = containerBtns.children
        btns[0].classList.add('btn-active');
        containerBtns.addEventListener('click', e => {
            for(let btn of btns) {
                arrBtn.push(btn)
                if(btn === e.target){
                    btn.classList.add('btn-active');
                    numberOfBtn = arrBtn.indexOf(btn);
                    containerImages.style.left = -numberOfBtn*230 + 'px';
                }else {
                    btn.classList.remove('btn-active')
                }
                                
            }
            arrBtn = [];
        })
    })
})


// logic of btns carts menu

const listDropMenu=document.querySelectorAll('.list__drop-li-menu')
listDropMenu.forEach(lists => {
    const lis = lists.children;
    for(let i of lis){
        lists.addEventListener('click', (e)=> {
            if(e.target === i){
                i.classList.add('btn-classick');
                if(e.target.innerText === 'В архив'){
                    e.path[5].classList.add('animationCart')
                    setTimeout(()=> {
                        e.path[5].classList.remove('animationCart');
                        removeCartToArchive(e.path[5], i);
                    }, 2000)
                }
                if(e.target.innerText === 'В активные'){
                    e.path[5].classList.add('animationCart')
                    setTimeout(()=> {
                        e.path[5].classList.remove('animationCart');
                        addCartToActive(e.path[5], i)
                    }, 2000)
                }
            }else {
                i.classList.remove('btn-classick')
            }
        })
    }
})

function removeCartToArchive(element, childEl){
    const carts = document.querySelectorAll('#carts')[0];
    const archive = document.querySelector('#archive');
    setTimeout(()=> {
        childEl.innerHTML= 'В активные';
    },1000)
    
    for(let i of carts.children){
        if(i.id === element.id){
            const newEl = carts.removeChild(i);
            archive.appendChild(newEl)
        }
    }
}
function addCartToActive(element, el) {
    const carts = document.querySelectorAll('#carts')[0];
    const archive = document.querySelector('#archive');
    setTimeout(()=>{
        el.innerHTML = 'В архив';
    },1000)
    
    for(let i of archive.children){
        if(i.id === element.id){
            const newEl = archive.removeChild(i);
            carts.appendChild(newEl)
        }
    }
}



// logic of input checkbox

const checkboxs = document.querySelectorAll('#checkbox');
const mainCheckbox = document.querySelector('#main');
mainCheckbox.addEventListener('click', ()=> {
    checkboxs.forEach(checkbox => {
        if(mainCheckbox.checked){
            checkbox.checked = 1;
        }else{
            checkbox.checked = 0;
        }
        checkbox.addEventListener('click',() => {
            if(!checkbox.checked){
                mainCheckbox.checked =0;
            }
        })
    })
})
