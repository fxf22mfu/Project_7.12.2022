getText("Textfiles/ch7.txt");

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("seven").innerHTML = y;
}
