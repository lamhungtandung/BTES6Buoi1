const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"
];

let colorContainer = document.getElementById("colorContainer");
let selectColorList = () => {
    let content = "";
    for (let i = 0; i < colorList.length; i++) {
        content += `
        <button type="button" class="color-button ${colorList[i]}">
        `
    }
    colorContainer.innerHTML = content;

    //btn.setAttribute
    let house = document.querySelector('.house')
    let buttonList = document.querySelectorAll('button');

    for (let values of buttonList ) {
        let { className } = values;
        values.addEventListener('click', () => {
            //add class color 
            house.setAttribute('class', className.split(' ')[1]);
            house.classList.add('house');
            //remove all acitve
            for (let valuess of buttonList){
                valuess.classList.remove('active')
            }
            values.classList.add('active');
        });

    }
}
export default selectColorList
