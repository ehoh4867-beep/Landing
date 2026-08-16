const modal = document.getElementById("modal");
const btn = document.getElementById("reg");
const close = document.getElementById("close");
const act = document.getElementById("button");

const modalWindow = document.getElementById("window");
const closeWindow = document.getElementById("close-window");
const openWindow = document.getElementById("open-window");

const cont = document.getElementById("contact");
const modWind = document.getElementById("modalai");
const closeWind = document.getElementById("close-modalai");

btn.addEventListener("click", () => {
    modal.classList.add("active");
});

close.addEventListener("click", () => {
    modal.classList.remove("active");
});

act.addEventListener("click", () => {
    modal.classList.remove("active");
    btn.style.backgroundColor = "green";
    setTimeout(() => {
        btn.style.backgroundColor = "pink";
    }, 500);
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

openWindow.addEventListener("click", () => {
    modalWindow.classList.add("active");
});

closeWindow.addEventListener("click", () => {
    modalWindow.classList.remove("active");
});

modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
        modalWindow.classList.remove("active");
    }
});

contact.addEventListener("click", () => {
    modWind.classList.add("active");
});

closeWind.addEventListener("click", () => {
    modWind.classList.remove("active");
});

modWind.addEventListener("click", (e) => {
    if (e.target === modWind) {
        modWind.classList.remove("active");
    }
});