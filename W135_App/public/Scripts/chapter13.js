getText("Textfiles/ch13.txt");

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("thirteen").innerHTML = y;
}
