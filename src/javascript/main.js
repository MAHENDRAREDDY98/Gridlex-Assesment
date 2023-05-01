/** progress circles  **/
let options = {
  startAngle: -1.55,
  size: 160,
  value: 0.93,
  fill: {color: ['#029BE3']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: 0.94
});

/** Form js */
  $(document).ready(function(){
    // Get value on button click and show alert
    $("#formSubmit").click(function(){
        let email = $("#email").val();
        let phone = $("#phone").val();
        let message = $("#message").val();
        $("#emailValue").text(email);
        $("#phoneValue").text(phone);
        $("#messageValue").text(message);
    });
});