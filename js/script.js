var input = document.getElementById("width, height, colors, text1");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
});

function sizes() {
    var a = document.getElementById("width").value + document.getElementById("Width").value
    var b = document.getElementById("height").value + document.getElementById("Height").value
    document.getElementById("number1").style.width = a;
    document.getElementById("number1").style.height = b;
}

function colors() {
    var c = document.getElementById("colors").value
    document.getElementById("number1").style.backgroundColor = c;
}

function reset() {
    document.getElementById("number1").removeAttribute('style');
}

function YES() {
    document.getElementById("yes").style.display = 'none';
    document.getElementById("no").style.display = 'none';
    document.getElementById("Send").style.display = 'block';
    document.getElementById("text1").style.display = 'block';
    document.getElementsByClassName("fonts")[0].style.display = 'block';
    document.getElementById("ques").innerHTML = "What is your text?";
}

function NO() {
    document.getElementById("ques").innerHTML = "Okay Guys ! Let's Change Another Options !";
    document.getElementById("yes").style.display = 'none';
    document.getElementById("no").style.display = 'none';
}

function send() {
    var d = document.getElementById("text1").value
    var e = document.getElementById("font").value + document.getElementById("Font").value
    var f = document.getElementById("font_colors").value
    var g = document.getElementById("back_colors").value
    var h = document.getElementById("bOrders").value + document.getElementById("Border").value
    var i = document.getElementById("BOrders").value
    var l = document.getElementById("border_style").value
    var m = document.getElementById("BORders").value + document.getElementById("border_radius").value
    document.getElementsByTagName("pre")[0].innerHTML = d;
    document.getElementsByTagName("pre")[0].style.fontSize = e;
    document.getElementsByTagName("pre")[0].style.color = f;
    document.getElementsByTagName("pre")[0].style.backgroundColor = g;
    document.getElementsByTagName("pre")[0].style.borderWidth = h;
    document.getElementsByTagName("pre")[0].style.borderColor = i;
    document.getElementsByTagName("pre")[0].style.borderStyle = l;
    document.getElementsByTagName("pre")[0].style.borderRadius = m;
}

function yES() {
    document.getElementById("quest").innerHTML = "Lets Go !!!"
    document.getElementsByClassName("borders")[0].style.display = 'block';
    document.getElementById("BOrders").style.display = 'block';
    document.getElementsByClassName("border-style")[0].style.display = 'block';
    document.getElementsByClassName("border-radius")[0].style.display = 'block';
}

function nO() {
    document.getElementById("quest").innerHTML = "Okay Dude ! I understand you...";
    document.getElementsByClassName("borders")[0].style.display = 'none';
    document.getElementById("BOrders").style.display = 'none';
    document.getElementsByClassName("border-style")[0].style.display = 'none';
    document.getElementsByClassName("border-radius")[0].style.display = 'none';
}