//? A rather inefficient way of doing this, but it works well enough. PS: I wanted to put all this in the html but the did'nt like that

function bone() { // Changing background and text contents
    document.getElementById("body").style.backgroundImage = "url(bgs/bg1.jpg)";
    updateContent("Infrastructure", "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all."); //* Funny text
}

function btwo() {
    document.getElementById("body").style.backgroundImage = "url(bgs/bg2.jpg)";
    updateContent("Industrialization", "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries.");
}

function bthree() {
    document.getElementById("body").style.backgroundImage = "url(bgs/bg3.jpg)";
    updateContent("Innovation", "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, and landlocked developing countries.");
}

function bfour() {
    document.getElementById("body").style.backgroundImage = "none";
    updateContent("About", "Not exactly sure if i should even put something here, well it took about 2 days to make, it was pretty much an uphill battle with css. It was still fun to make this website and i learned a lot of css.");
}

function updateContent(title, content) { // Helper function to change text contents, thinking about it i couldve added a third parameter for the background
    document.getElementById("tit").innerHTML = title;
    document.getElementById("par").textContent = content;
}

document.addEventListener('DOMContentLoaded', init, false); //The script was loading before the image so this works around that

function init() { 
    document.getElementById("ball").addEventListener("click", () => { //Making it so that when you click the icon it brings you back to the home
        updateContent("Welcome!", "This website's purpose is explaining the 9th sustainable development goal. Click the buttons above to learn more or click the icon to come back here.");
        document.getElementById("body").style.backgroundImage = "url(bgs/bg0.jpg)";
    })
}
