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

hd_1.addEventListener("mousemove", () => {
    nav1.style.display = "none"
    nav1.classList.remove('show')
})

window.onload = () => {
    nav1.style.display = "none"
}

//price.addEventListener("mousemove", () => {
//nav1.classList.add('show')
//  nav1.style.display = "flex"
//})

window.addEventListener("scroll", () => {

    nav1.classList.add('show')
    nav1.style.display = "flex"
})



// pf1.addEventListener("click", () => {
//   if (pd1.classList = "pfd1") {
//       pd1.classList.remove('pfd1')
//       pd1.classList.add('pfd1_1')
//   } else if (pd1.classList = 'pfd1_1') {
//       pd1.classList.remove('pfd1_1')
//       pd1.classList.add('pfd1')
//   } else {
//        console.log("errorrr")
//  }
// })


// PF

pf1.addEventListener("click", () => {
    if (pd1.classList == "pfd1") {
        pd1.classList.remove('pfd1')
        pd1.classList.add('pfd_1')
    } else if (pd1.classList == 'pfd_1') {
        pd1.classList.remove('pfd_1')
        pd1.classList.add('pfd1')
    }
})

pf2.addEventListener("click", () => {
    if (pd2.classList == 'pfd_2') {
        pd2.classList.remove('pfd_2')
        pd2.classList.add('pfd2')
    } else if (pd2.classList == 'pfd2') {
        pd2.classList.remove('pfd2')
        pd2.classList.add('pfd_2')
    }
})

pf3.addEventListener("click", () => {
    if (pd3.classList == 'pfd_3') {
        pd3.classList.remove('pfd_3')
        pd3.classList.add('pfd3')
    } else if (pd3.classList == 'pfd3') {
        pd3.classList.remove('pfd3')
        pd3.classList.add('pfd_3')
    }
})

pf4.addEventListener("click", () => {
    if (pd4.classList == 'pfd_4') {
        pd4.classList.remove('pfd_4')
        pd4.classList.add('pfd4')
    } else if (pd4.classList == 'pfd4') {
        pd4.classList.remove('pfd4')
        pd4.classList.add('pfd_4')
    }
})

pf5.addEventListener("click", () => {
    if (pd5.classList == 'pfd_5') {
        pd5.classList.remove('pfd_5')
        pd5.classList.add('pfd5')
    } else if (pd5.classList == 'pfd5') {
        pd5.classList.remove('pfd5')
        pd5.classList.add('pfd_5')
    }
})