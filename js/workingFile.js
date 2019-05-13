document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right, #hexs").hide();

    $("#start").on("click", ()=>{
        $("#title, #start").hide();
        $("#left, #right, #hexs").show();

        const allRects = document.querySelectorAll('#hexs > div'); 
        console.log(allRects);
    
        $(".rect").css("opacity", "0");

        let x = Math.round(Math.random()*50);
        console.log(x);

        $("#"+x).css("opacity", "1");
        
        for (let i=0; i<allRects.length; i++) {
            allRects[i].onclick = function() {
                console.log(this);
                $(this).css("opacity", "0");
                let x = Math.round(Math.random()*50);
                console.log(x);
                $("#"+x).css("opacity", "1");
            }
        }
    });
});
