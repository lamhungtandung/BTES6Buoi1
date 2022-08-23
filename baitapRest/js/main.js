
let bangDiem = (...inputValue) => {
    let arrayData = inputValue;
    let tong = 0;
    let soMon = 0;

    arrayData.map((param) => {
      tong += param;
      soMon++;
    });

    let trungBinh = tong / soMon;
    
    return trungBinh;
}

let trungBinh1 = () => {
    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);

    let tB1 = bangDiem (toan,ly,hoa);
    document.getElementById("tbKhoi1").innerHTML = tB1;
}

document.getElementById("btnKhoi1").onclick = trungBinh1;


let trungBinh2 = () => {
    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let anh = Number(document.getElementById("inpEnglish").value);

    let tB2 = bangDiem (van,su,dia,anh);
    document.getElementById("tbKhoi2").innerHTML = tB2;
}

document.getElementById("btnKhoi2").onclick = trungBinh2;
