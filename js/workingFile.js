document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right, #hexs").hide();

    $("#start").on("click", ()=>{
        $("#title, #start").hide();
        $("#left, #right, #hexs").show();

        const allRects = document.querySelectorAll('#hexs > button'); 
        $(".rect").css("opacity", "0").prop("disabled", true);

        let x = Math.round(Math.random()*50+1);
        $("#"+x).css("opacity", "1").prop("disabled", false);

        for (let i=0; i<allRects.length; i++){
            allRects[i].onclick = function(){
                $(this).css("opacity", "0");
                $(this).prop("disabled", true);
                let x = Math.round(Math.random()*50+1);
                $("#"+x).css("opacity", "1");
                $("#"+x).prop("disabled", false);
            }
        }
    });
});
