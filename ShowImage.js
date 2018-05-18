/* exported ShowImages */

const showImagesTemplate = document.getElementById('show-images-template');

class Product {

    constructor() {
        this.arrayOfProducts = arrayOfProducts;
        this.totalCount = 0;

    }

    render() {
        const dom = showImagesTemplate.content.cloneNode(true);
        const img = dom.querySelector('image');
        img.src = this.arrayOfProducts.image;
        this.arrayOfProducts.viewCount++;
        img.addEventListener('click', () => {
            this.onSelect(this.arrayOfProducts);
        });

        return dom; 
    }
}