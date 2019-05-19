document.addEventListener("DOMContentLoaded", () => {
    $("#left, #right, #hexs, #stage1, #stage2, #stage3, #stage4, #stage5, #gameOver").hide();

    let counterPoints = 0;
    let stage = 1;
 
 
   function countDown() {
    let time = 61;
        var id = setInterval(timeFn, 1000);
        function timeFn() {
            if (time == 0) {
                clearInterval(id);
                $("#leftTime").empty().append(time);
                $(".rect").hide();

                stage = stage + 1;
                
                $("#stage"+stage).show();
                console.log(stage);

                if(stage == 6 && time == 0){
                    clearInterval(id);
                    $(".rect").hide();
                    $("#gameOver").show();
                   counterPoints = 0;
                   stage= 1;
                   $("#rightPoints").empty().append(0);
                    console.log(stage, counterPoints);
                }

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
        $("#stage1").show();
        $("#left, #right").show();
      
    });

    $("#stage1").on("click",()=>{
        $("#stage1").hide();
        $("#hexs, .rect").show();
    
        showBtns();
        countDown();
    });

   
    $("#stage2").on("click",()=>{
        $("#stage2").hide();
        $("#hexs, .rect").show();
         showBtns();
        countDown();
    });

    $("#stage3").on("click",()=>{
        $("#stage3").hide();
        $("#hexs, .rect").show();
         showBtns();
        countDown();
    });
   

    $("#stage4").on("click",()=>{
        $("#stage4").hide();
        $("#hexs, .rect").show();
         showBtns();
        countDown();
    });
   


    $("#stage5").on("click",()=>{
        $("#stage5").hide();
        $("#hexs, .rect").show();
         showBtns();
        countDown();
    });
   
  

    $("#gameOver").on("click",()=>{
        $("#gameOver").hide();
        $("#stage1").show();
     });

 });
