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
let getELE = id => document.getElementById(id);

homeColor = (colorList) => {
    let content = "";

    colorList.map((colorS, index) => {

        content += `
            <button class= "color-button ${colorS}" onclick= "changeColor('${colorS}')"></button>
        `;
    });

    getELE("colorContainer").innerHTML = content;

}

homeColor(colorList);

changeColor = (myColor) => {
    let checkColor = getELE("house").classList;
    
    if (checkColor == "house") {
        getELE("house").classList.add(myColor);
    } else {
        getELE("house").classList = "";
        getELE("house").classList.add("house", myColor);
    }
}