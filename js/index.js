
//Navbar
const nav1 = document.getElementById('nav1')
const nav2 = document.getElementById('nav2')
const hd_1 = document.getElementById('hd_1')
const btnS_2 = document.getElementById('btnS_2')
const price = document.getElementById('price')

//PF
const pd1 = document.getElementById('pd1')
const pf1 = document.getElementById('pf1')
const pd2 = document.getElementById('pd2')
const pf2 = document.getElementById('pf2')
const pd3 = document.getElementById('pd3')
const pf3 = document.getElementById('pf3')
const pd4 = document.getElementById('pd4')
const pf4 = document.getElementById('pf4')
const pd5 = document.getElementById('pd5')
const pf5 = document.getElementById('pf5')

//PF2
const a1 = document.getElementById('a1')
const b1 = document.getElementById('b1')
const c1 = document.getElementById('c1')
const d1 = document.getElementById('d1')
const e1 = document.getElementById('e1')

window.onload = () => {
    nav1.style.display = "none"
}

// Navbar
window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset;
    if (windowTop <= 800) {
        btnS_2.style.display = "flex"
        nav1.style.display = "none"
        nav1.classList.remove('show')
    } else if (windowTop >= 800) {
        nav1.classList.add('show')
        btnS_2.style.display = "none"
        nav1.style.display = "flex"
    }
})

//PF
pf1.addEventListener("click", () => {
    if (pd1.classList == "pfd1") {
        pd1.classList.remove('pfd1')
        pd1.classList.add('pfd_1')
        a1.innerHTML = "+";
    } else if (pd1.classList == 'pfd_1') {
        pd1.classList.remove('pfd_1')
        pd1.classList.add('pfd1')
        a1.innerHTML = "-";
    }
})

pf2.addEventListener("click", () => {
    if (pd2.classList == 'pfd_2') {
        pd2.classList.remove('pfd_2')
        pd2.classList.add('pfd2')
        b1.innerHTML = "+";
    } else if (pd2.classList == 'pfd2') {
        pd2.classList.remove('pfd2')
        pd2.classList.add('pfd_2')
        b1.innerHTML = "-";
    }
})

pf3.addEventListener("click", () => {
    if (pd3.classList == 'pfd_3') {
        pd3.classList.remove('pfd_3')
        pd3.classList.add('pfd3')
        c1.innerHTML = "-";
    } else if (pd3.classList == 'pfd3') {
        pd3.classList.remove('pfd3')
        pd3.classList.add('pfd_3')
        c1.innerHTML = "+";
    }
})

pf4.addEventListener("click", () => {
    if (pd4.classList == 'pfd_4') {
        pd4.classList.remove('pfd_4')
        pd4.classList.add('pfd4')
        d1.innerHTML = "-";
    } else if (pd4.classList == 'pfd4') {
        pd4.classList.remove('pfd4')
        pd4.classList.add('pfd_4')
        d1.innerHTML = "+";
    }
})

pf5.addEventListener("click", () => {
    if (pd5.classList == 'pfd_5') {
        pd5.classList.remove('pfd_5')
        pd5.classList.add('pfd5')
        e1.innerHTML = "-";
    } else if (pd5.classList == 'pfd5') {
        pd5.classList.remove('pfd5')
        pd5.classList.add('pfd_5')
        e1.innerHTML = "+";
    }
})
