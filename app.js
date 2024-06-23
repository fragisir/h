const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const pname = product.querySelectorAll(".p-details h2")[0].textContent || product.querySelectorAll(".p-details h2")[0].innerText;
        if (pname.toUpperCase().indexOf(searchbox) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
