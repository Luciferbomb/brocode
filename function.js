
$( document ).ready(function() {
    var Staticroot="https://ganglandmanipal.herokuapp.com/";
    var Name2;
    var Name2;
    $(".Score").hide();
    $("#customerOrder").on( 'click',function(){

        console.log("Score");

         Name1=$("[name=YourName]").val();
         Name2=$("[name=BroName]").val();
        console.log("Score",Name2);
        var Score = Math.abs(((10-(Name1.length+Name2.length))/10))*100;
        console.log("Score",Score);
        let element = document.getElementById("Score");
        element.innerHTML = "Tmse na ho paega";
        $(".contact-us").hide();
        $(".Score").show();

        var settings = {
          "url": Staticroot+"/create",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/json"
          },
          "data": JSON.stringify({
            "yname": Name2,
            "bname": Name2
          }),
        };
        
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
    });
  
})
