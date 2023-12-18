let products = [
    {
        id: 1,
        name: 'Apple iPhone 12',
        feature: '(64 GB) - Blue',
        descr: 'Save extra with no cost EMI',
        price: 59990,
        image: "./assets/mob4.jpg"
        
    },
    {
        id: 2,
        name: 'Realme narzo 50i',
        feature: '(64 GB) - Carbon Black',
        descr: '10% off',
        price: 7499,
        image: "./assets/mob3.jpg"
    },
    {
        id: 3,
        name: 'Apple iPhone 12',
        feature: '(128 GB) - Green',
        descr: 'Save extra with no cost EMI',
        price: 60990,
        image: "./assets/mob5.jpg"
    },
    {
        id: 4,
        name: 'Redmi note 11S',
        feature: '(128 GB) - Polar White',
        descr: 'Save extra with no cost EMI',
        price: 16999,
        image: "./assets/mob1.jpg"
    }
]

let heartSelected = false;

products.forEach(function (item){
    let viewItem = document.getElementById('view');

    let panel1 = document.createElement('div');
    panel1.className = 'panel';
    viewItem.appendChild(panel1);
    let div1 = document.createElement('div');
    panel1.appendChild(div1);
    let button1 = document.createElement('button');
    let node1 = document.createTextNode('X');
    button1.appendChild(node1);
    button1.className = 'cross';
    div1.appendChild(button1);


    let div2 = document.createElement('div');
    panel1.appendChild(div2);
    let button2 = document.createElement('button');
    let img1 = document.createElement("img");
    img1.setAttribute('id', item.id)
    if (heartSelected===false)
        img1.setAttribute("src", "./assets/heart-blank.png");
    else
        img1.setAttribute("src", "./assets/heart-fill.png");
    button2.appendChild(img1);
    button2.className = 'wish';
    button2.addEventListener('click', ()=>onHeartClick(item.id));
    div2.appendChild(button2);


    let div3 = document.createElement('div');
    panel1.appendChild(div3);
    div3.className = 'imgg';
    let img3 = document.createElement('img');
    div3.appendChild(img3);
    img3.setAttribute('src',item.image)


    let div4 = document.createElement('div');
    panel1.appendChild(div4);
    let h22 = document.createElement('h2');
    div4.appendChild(h22);
    let node41 = document.createTextNode(item.name);
    h22.appendChild(node41);
    let h33 = document.createElement('h3');
    div4.appendChild(h33);
    let node42 = document.createTextNode(item.feature);
    div4.appendChild(node42);
    let h55 = document.createElement('h5');
    div4.appendChild(h55);
    let node43 = document.createTextNode(item.descr);
    div4.appendChild(node43);


    let div5 = document.createElement('div');
    panel1.appendChild(div5);
    let p5 = document.createElement('p');
    div5.appendChild(p5);
    p5.className = 'enter';
    let node5 = document.createTextNode('Enter quantity: ');
    p5.appendChild(node5);
    let input5 = document.createElement('input');
    div5.appendChild(input5);
    input5.className = 'quantity';
    input5.setAttribute('value','1');
    input5.setAttribute('type','number')


    let div6 = document.createElement('div');
    panel1.appendChild(div6);
    let p6 = document.createElement('p');
    div6.appendChild(p6);
    p6.className = 'cost';
    let node6 = document.createTextNode(item.price);
    p6.appendChild(node6);


    let div7 = document.createElement('div');
    panel1.appendChild(div7);
    let button7 = document.createElement('button');
    div7.appendChild(button7);
    button7.className = 'btn';
    let node7 = document.createTextNode('Buy Now');
    button7.appendChild(node7);
    button7.addEventListener('click', ()=>buyNow(item));
})


function buyNow(info){
    window.location.href = '/Users/shreyabhavsar/Storage/codes/js-projects/shopping-app/cart.html?id='+info.id
}

function onHeartClick(v_id) {
    let image = document.getElementById(v_id);
    if (image.getAttribute('src')==="./assets/heart-blank.png"){
        image.setAttribute("src", "./assets/heart-fill.png");
    }
    else{
        image.setAttribute("src", "./assets/heart-blank.png");
    }
}