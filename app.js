var productArray = [{
    name: 'bag',
    image: 'images/bag.jpg',
    count: 0,

    createImage: function() {
        var img = document.createElement('img');
        img.setAttribute('src', this.image);
        return img;
    }
}, {
    name: 'banana',
    image: 'images/banana.jpg',
    count: 0
}, {
    name: 'bathroom',
    image: 'images/bathroom.jpg',
    count: 0
}, {
    name: 'boots',
    image: 'images/boots.jpg',
    count: 0
}, {
    name: 'breakfast',
    image: 'images/breakfast.jpg',
    count: 0
}, {
    name: 'bubblegum',
    image: 'images/bubblegum.jpg',
    count: 0
}, {
    name: 'chair',
    image: 'images/chair.jpg',
    count: 0
}, {
    name: 'cthulhu',
    image: 'images/cthulhu.jpg',
    count: 0
}, {
    name: 'dog duck',
    image: 'images/dog-duck.jpg',
    count: 0
}, {
    name: 'dragon',
    image: 'images/dragon.jpg',
    count: 0
}, {
    name: 'pen',
    image: 'images/pen.jpg',
    count: 0
}, {
    name: 'pet sweep',
    image: 'images/pet-sweep.jpg',
    count: 0
}, {
    name: 'scissors',
    image: 'images/scissors.jpg',
    count: 0
}, {
    name: 'shark',
    image: 'images/shark.png',
    count: 0
}, {
    name: 'sweep',
    image: 'images/sweep.png',
    count: 0
}, {
    name: 'tauntaun', 
    image: 'images/tauntaun.jpg',
    count: 0
}, {
    name: 'unicorn',
    image: 'images/unicorn.jpg',
    count: 0
}, {
    name: 'usb',
    image: 'images/usb.gif',
    count: 0
}, {
    name: 'water can',
    image: 'images/water-can.jpg',
    count: 0
}, {
    name: 'wine glass',
    image: 'images/wine-glass.jpg',
    count: 0
}];

//productArray displays in console
console.log(productArray);

class Product {
    constructor(name, image, count) {
        this.name = name;
        this.image = image;
        this.count = count;
    }
}

// function createImage() {
//     var img = document.createElement('img');
//     for(var i = 0; i < productArray.length; i++) {
//         img.setAttribute('src', this.image);
//         return img;
    



function showImage() {
    var row = document.getElementById('images-displayed');
    for(var j = 0; j < productArray.length; j++) {
        var img = productArray[j].createImage();
        row.appendChild(img);
    }
}

showImage();