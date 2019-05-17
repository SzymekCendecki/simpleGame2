document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right, #hexs, #stage2").hide();

    let counterPoints = 0;
    let stage = 1;
    function countDown() {
 
        var time = 61;
        var id = setInterval(timeFn, 1000);
        function timeFn() {
          if (time == 0) {
            clearInterval(id);
            $("#leftTime").empty().append(time);
            $(".rect").hide();
            $("#stage2").show();
            stage = stage + 1;
          } else {
            time--; 
            if(time <=10){
                $("#leftTime").addClass("pulseRed");
            }else{
                $("#leftTime").removeClass("pulseRed");
            }
            $("#leftTime").empty().append(time);
         }
        }
      }
      
    function showBtns(){
        const allRects = document.querySelectorAll('#hexs > button'); 
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
    } 

    $("#start").on("click", ()=>{
        $("#title, #start").hide();
        $("#left, #right, #hexs").show();
        showBtns();
        countDown();
    });

    $("#stage2").on("click", ()=>{
        console.log("działa");
        $("#stage2").hide();
        console.log(stage);
        showBtns();
        countDown();
        $(".rect").show();
    });
});


