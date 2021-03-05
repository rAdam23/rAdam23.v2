
function openNav() {
    document.getElementById("mobileSlider").style.opacity = "1";
    document.getElementById("mobileSlider").style.visibility = "visible";
    document.getElementById("btnMenuMobile").style.visibility = "hidden";
    document.getElementById("btnCloseMobile").style.visibility = "visible";
    document.getElementById("btnMenuDesktop").style.visibility = "hidden";
    document.getElementById("btnCloseDesktop").style.visibility = "visible";
}

function closeNav() { 
    document.getElementById("mobileSlider").style.opacity = "0"; 
    document.getElementById("mobileSlider").style.visibility = "hidden";
    document.getElementById("btnCloseMobile").style.visibility = "hidden";
    document.getElementById("btnMenuMobile").style.visibility = "visible";
    document.getElementById("btnCloseDesktop").style.visibility = "hidden";
    document.getElementById("btnMenuDesktop").style.visibility = "visible";
}
