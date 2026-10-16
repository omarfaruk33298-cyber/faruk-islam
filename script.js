function updatetime() {
    const now = new Date();
    const timestring = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timestring;
}
setInterval(updatetime, 1000);
updatetime();