//TODO Dont forget to make these buttons change the text accordingly lol, and also madd transitioning animations
function bone(){
    document.getElementById("body").style.backgroundImage = "url(bgs/bg1.jpg)";
    updateContent("Infrastructure", "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all.");
}
function btwo(){
    document.getElementById("body").style.backgroundImage = "url(bgs/bg2.jpg)";
    updateContent("Industrialization", "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries.");
}
function bthree(){
    document.getElementById("body").style.backgroundImage = "url(bgs/bg3.jpg)";
    updateContent("Innovation", "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, and landlocked developing countries.");
}
function bfour(){
    document.getElementById("body").style.backgroundImage = "none";
    updateContent("About", "idk yet lol");
}

document.addEventListener('DOMContentLoaded', init, false);

function init(){
    document.getElementById("ball").addEventListener("click", () => {
        updateContent("Welcome!", "This website's purpose is explaining the 9th sustainable development goal. Click the buttons above to learn more or click the icon to come back here.");
    })
}
function updateContent(title, content){
    document.getElementById("tit").innerHTML = title;
    document.getElementById("par").textContent = content;
}
