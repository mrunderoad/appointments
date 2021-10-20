$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const infoInput = $("input#info").val();
    const startInput= $("input#start").val();
    const endInput= $("input#end").val();
    const dateInput = $("input#date").val();

    $(".name").text(nameInput);
    $(".info").text(infoInput);
    $(".start").text(startInput);
    $(".end").text(endInput);
    $(".date").text(dateInput);

    $("#confirm").show();

    //$("#confirm").click(function(){ window.location = "http://www.youtube.com"});
    //window.open("success.html",  + $(this).show("#confirm"));
    //window.open('Contract/Print/' + $(this).attr('id'));
    // window.open ("http://www.javascript-coder.com","mywindow","status=1");
  });
});