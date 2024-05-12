let count = 0;
document.getElementById("increasebtn").onclick = function(){
    count+= 1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("decreasebtn").onclick = function(){
    count-= 1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function(){
    count= 0;
    document.getElementById("countlabel").innerHTML = count;
}
function cl() {
    const dbtn = document.querySelector('.btn1')
    const lbtn = document.querySelector('.btn2')
    const label = document.getElementById('labelbg')
    const all = document.getElementById('all')
    const red = document.getElementById('decreasebtn')
    const bod = document.querySelector('.body')
    const dark = document.querySelector('.btn1')
    const clear = document.getElementById('resetbtn')
    const add = document.getElementById('increasebtn')
    bod.style.backgroundColor = "black"
    dbtn.style.backgroundColor = "rgba(255, 68, 0, 0.59)"
    all.style.border = "solid white"
    clear.style.backgroundColor = "black"
    add.style.backgroundColor = "black"
    all.style.backgroundColor = "rgba(100, 148, 237, 0.379)"
    label.style.border = "solid white"
    label.style.boxShadow = "0px 0px 10px 10px cyan"
    label.style.backgroundColor = "cyan"
    red.style.backgroundColor = "black"
    lbtn.style.backgroundColor = "rgba(0, 255, 255, 0.601)"
}
function cl2() {
    const lbtn = document.querySelector('.btn2')
    const dbtn = document.querySelector('.btn1')
    const add = document.getElementById('increasebtn')
    const red = document.getElementById('decreasebtn')
    const clear = document.getElementById('resetbtn')
    const label = document.getElementById('labelbg')
    const all = document.getElementById('all')
    const bod = document.querySelector('.body')
    const light = document.querySelector('.btn2')
    red.style.backgroundColor = "rgba(203, 73, 73, 0.752)"
    add.style.backgroundColor = "blueviolet"
    clear.style.backgroundColor = "white"
    bod.style.backgroundColor = "white"
    all.style.border = "solid black"
    label.style.border = "solid black"
    label.style.boxShadow = "0px 0px 0px 0px"
    dbtn.style.backgroundColor = "orangered"
    lbtn.style.backgroundColor = "cyan"
}