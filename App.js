const qrInput = document.querySelector(".data"),
    qrImg = document.querySelector("#img"),
    generateBtn = document.querySelector(".submit");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code....";
    // API:https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=<DATA>
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.classList.remove("hidden");

    qrImg.addEventListener("load", () => {
        generateBtn.classList.add("inactive");
        generateBtn.innerText = "Generate QR Code";
    })

});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        generateBtn.classList.remove("inactive");
    }
})