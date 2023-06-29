function HowAreYou(feeling) {
    let message = "Check out ";
    let pug = "the fourth pug!"
    if (feeling === "good") {
        pug = "the first pug!"
    } else if (feeling === "happy") {
        pug = "the second pug!"
    } else if (feeling === "sad") {
        pug = "the third pug!"
    } 
    document.write('<p style="font-size: 25px;">' + feeling + '</p>');
    document.write('<p style="font-size: 25px;">' + message + pug + '</p>');
}

function checkValue(value) {
    if ((Number(value)) || value === null || value === "") {
        alert('Try again!');
        let feeling = prompt("How are you feeling today?");
        checkValue(feeling);
    } else {
        HowAreYou(value);
    }
}

function checkColor(value) {
    if (!isNaN(value) || value === null || value === "") {
        alert('Try again!');
        let color = prompt("Enter a color: ");
        checkColor(color);
    } else {
        document.getElementById("colorButton").style.backgroundColor = value;
    }
}