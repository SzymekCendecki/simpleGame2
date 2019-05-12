document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right").hide();

    $("#start").on("click", ()=>{
        $("#title, #start").hide();
        $("#left, #right").show();
    });
});
