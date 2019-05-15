document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right, #hexs").hide();

    let time = 60;
    let counterPoints = 0;

    function countDown(time){
        setInterval(()=>{
            if(time > 0){
                time--;
                $("#leftTime").empty().append(time);
            }else{
                $("#leftTime").empty().append(0);
                clearInterval(countDown);
                $(".rect").hide();
               
            }
        }, 1000);
    }

    $("#start").on("click", ()=>{
        $("#title, #start").hide();
        $("#left, #right, #hexs").show();

        const allRects = document.querySelectorAll('#hexs > button'); 
        console.log(allRects);
        $(".rect").css("opacity", "0").prop("disabled", true);

        let x = Math.floor(Math.random()*50);
        $("#"+x).css("opacity", "1").prop("disabled", false);

        for (let i=0; i<allRects.length; i++){
            allRects[i].onclick = function(){
                $(this).css("opacity", "0");
                $(this).prop("disabled", true);
                let x = Math.floor(Math.random()*50);
                $("#"+x).css("opacity", "1");
                $("#"+x).prop("disabled", false);

                counterPoints = counterPoints + 1;
                  $("#rightPoints").empty().append(counterPoints);
            }
        }

        countDown(time);
    });
});


