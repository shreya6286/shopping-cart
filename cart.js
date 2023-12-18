    const products = [
    {
        "id": 1,
        "name": "Apple iPhone 12",
        "feature": "(64 GB) - Blue",
        "descr": "Save extra with no cost EMI",
        "price": 59990,
        "image": "./assets/mob4.jpg"
        
    },
    {
        "id": 2,
        "name": "Realme narzo 50i",
        "feature": "(64 GB) - Carbon Black",
        "descr": "10% off",
        "price": 7499,
        "image": "./assets/mob3.jpg"
    },
    {
        "id": 3,
        "name": "Apple iPhone 12",
        "feature": "(128 GB) - Green",
        "descr": "Save extra with no cost EMI",
        "price": 60990,
        "image": "./assets/mob5.jpg"
    },
    {
        "id": 4,
        "name": "Redmi note 11S",
        "feature": "(128 GB) - Polar White",
        "descr": "Save extra with no cost EMI",
        "price": 16999,
        "image": "./assets/mob1.jpg"
    }
]
let id = window.location.search.substr(1).split("=")[1]

let record = products.filter(function(item){
    return (parseInt(item.id)==id)
})

const image = document.getElementById("prod_id");
image.setAttribute("src", record[0].image)
document.getElementById("header1").innerHTML = record[0].name
document.getElementById("fea").innerHTML = record[0].feature

console.log(record);



// products.forEach(function(item){
//     let fin = document.getElementById('finpan');
//     let div1 = document.createElement('div');
//     fin.appendChild(div1);
//     div1.className = 'finimg';
//     let rec = document.createElement('div');
//     div1.appendChild(record)
// })