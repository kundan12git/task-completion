document.addEventListener("DOMContentLoaded",() => {
    const sections = document.querySelectorAll(".section");
    let index = 0;

    function scrollToNextsection(){
        if (index < sections.length){
            sections[index].classList.add("active");
            index++;
            setTimeout(scrollToNextsection, 1000);     
    }
}

scrollToNextsection();
});