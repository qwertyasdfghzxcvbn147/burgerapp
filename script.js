let textD = document.getElementById("D");
let linerD = document.getElementById("lineD");
let textB = document.getElementById("B");
let linerB = document.getElementById("lineB");
let burgerB = document.getElementById("burger");
let indexB = document.getElementById("index");
let st = true;
let unan = true;

function lineB() {
    if (st === true && unan === true) {
        st = false;
        indexB.style.zIndex = 1;
        burgerB.style.zIndex = 3;
        linerB.classList.add("line");
        textB.classList.add("active");
        linerD.classList.add("unline");
        textD.classList.add("unactive");
        setTimeout(function() {
            linerD.classList.remove("line");
            textD.classList.remove("active");
            textD.classList.remove("unactive");
            linerD.classList.remove("unline");
            st = true;
            unan = false;
        }, 500);
    }
}

function lineD() {
    if (st === true && unan === false) {
        st = false; 
        burgerB.style.zIndex = 1;
        indexB.style.zIndex = 3;
        linerD.classList.add("line");
        textD.classList.add("active");
        linerB.classList.add("unline");
        textB.classList.add("unactive");
        setTimeout(function() {
            linerB.classList.remove("line");
            textB.classList.remove("active");
            textB.classList.remove("unactive");
            linerB.classList.remove("unline");
            st = true;
            unan = true;
        }, 500);
    }
}
