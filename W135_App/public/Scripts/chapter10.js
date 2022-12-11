getText("Textfiles/ch10.txt");

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("ten").innerHTML = y;
}
