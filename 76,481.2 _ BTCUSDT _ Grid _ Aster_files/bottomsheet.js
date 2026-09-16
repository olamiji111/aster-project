document.addEventListener("click", (event) => {
    const sheetOverlay = document.getElementById("sheetOverlay");
    const bottomSheet = document.getElementById("bottomSheet");

    if (event.target === sheetOverlay) {
        sheetOverlay.classList.remove("active");
        return;
    }

    if (event.target.closest("#connectWallet")) {
        sheetOverlay.classList.add("active");
    }

    if (event.target.closest("#emailAlert")) {
        alert("Please Sign in with email");
    }
});


