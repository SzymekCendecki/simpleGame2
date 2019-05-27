document.addEventListener("DOMContentLoaded", () => {
    $("#left, #center, #right, #hexs, #stage1, #stage2, #stage3, #stage4, #stage5, #gameOver").hide();

    let counterPoints = 0;
    let stage = 1;
    let points = 20;

    function changeColors(x, y){
        counterPoints=0;
        $("#centerPoints").empty().append(points);
        $("#rightPoints").text(counterPoints);
        $("body").removeClass(x).addClass(y);
        $("#rightPoints").addClass("pulseRed");
        $("#rightPoints").removeClass("greenNumber");
    }
  
   function countDown() {
        let time = 200;
        var id = setInterval(timeFn, 1000);
        function timeFn() {
      
            if ($("#rightPoints").text() >= points) {
                clearInterval(id);
                $("#leftTime").empty().append(time);
                $(".rect").hide();

                stage = stage + 1;                
                $("#stage"+stage).show();
                
                points = points + 20;
            
                if(stage == 6 && time == 0 || $("#rightPoints").text() == 100){
                    clearInterval(id);
                    $(".rect").hide();
                    $("#gameOver").show().append("<p class='win2'>WYGRANA</p>");
                   counterPoints = 0;
                   stage= 1;
                   points = 20;
                   $("#centerPoints").empty().append(100);
                }

                if($("#rightPoints").text() >= $("#centerPoints").text()){
                    $("#rightPoints").removeClass("pulseRed");
                    $("#rightPoints").addClass("greenNumber");
                }else{
                    $("#rightPoints").addClass("pulseRed");
                    $("#rightPoints").removeClass("greenNumber");
                }
            } else if(time == 0 && $("#rightPoints").text() < points){
                clearInterval(id);
                $(".rect").hide();
                $("#gameOver").show().append("<p class='loose2'>PRZEGRANA</p>");
               counterPoints = 0;
               stage= 1;
               points = 20;
            }           
            else {
                time--; 
                if(time <=10){
                    $("#leftTime").removeClass("greenNumber");
                    $("#leftTime").addClass("pulseRed");
                }else{
                    $("#leftTime").removeClass("pulseRed");
                    $("#leftTime").addClass("greenNumber");
                }
                    $("#leftTime").empty().append(time);
            }
        }
   
        if(stage == 2){ 
            time = time + 1 -10;
            changeColors("bckg1", "bckg2");            
        }else if(stage == 3){
            time = time + 1- 20;
            changeColors("bckg2", "bckg3");    
        }else if(stage == 4){
            time = time + 1 - 30;
            changeColors("bckg3", "bckg4");    
        }else if(stage == 5){
            time = time + 1 - 40;
            changeColors("bckg4", "bckg5");    
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
        $("#left, #center, #right").show();   
    });

    function stages(stage){
        stage.on("click",()=>{
            stage.hide();
            $("#hexs, .rect").show();
            showBtns();
            countDown();
        });
    }

    stages($("#stage1"));
    stages($("#stage2"));
    stages($("#stage3"));
    stages($("#stage4"));
    stages($("#stage5"));
   
    $("#gameOver").on("click",()=>{
        $("#gameOver").hide();
        $("#stage1").show();
        $("#leftTime").empty().append(200).removeClass("pulseRed");
        $("#rightPoints").empty().append(0);
        $("#centerPoints").empty().append(20);
        $("body").removeClass("bckg5").addClass("bckg1");
        $("#rightPoints").addClass("pulseRed");
        $("#rightPoints").removeClass("greenNumber");
    });
});
