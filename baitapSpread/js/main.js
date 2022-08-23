let hoverStyle = () => {
    let array1 = document.querySelector(".heading").innerText;
    let arayy2 = [...array1];
    let content = "";

    arayy2.map((i) => { 
        content += `
            <span>${i}</span>
        `;
     });

    document.querySelector(".heading").innerHTML = content;
}

hoverStyle();