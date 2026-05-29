const productContainer = document.querySelector(".cardContainer");
const productTemplate = document.querySelector(".productTemplate");
export const showProductContainer = (products) => {
    if (!products){
        return false;
    }

    products.forEach((curProd) => {
        const {name, stock, description, image, category, brand, price} = curProd;

        const productClone = document.importNode(productTemplate.content, true);

           productClone.querySelector(".category").textContent = category;
           productClone.querySelector(".productName").textContent = name;
           productClone.querySelector(".cardImage").src = image;
           productClone.querySelector(".cardImage").alt = name  ;
           productClone.querySelector(".stockQuantity").textContent = stock;
           productClone.querySelector(".description-box").textContent = description;
           productClone.querySelector(".price").textContent = `₹${price}`;
           productClone.querySelector(".actualPrice").textContent = `₹${price * 4}`;       

        productContainer.append(productClone); 
    });
};