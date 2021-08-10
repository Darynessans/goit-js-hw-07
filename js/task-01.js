const elCategories = document.querySelector('#categories')

const elItems = elCategories.querySelectorAll(".item")
console.log(`В списке ${elItems.length} категории`);




elItems.forEach(elem => {
    console.log("Категория :", elem.getElementsByTagName("h2")[0].textContent);
    console.log('Количество элементов:', elem.getElementsByTagName("li").length);
;
})