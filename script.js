$(document).ready(function() {


    $(".button").on("click", function() {

            $.get("text.txt", function (txt) {
                var newArray = txt.split("\n");
                console.log(newArray);
                for (var i = 0; i < newArray.length; i++) {
                    $(".result").append("<div class='shoutOuts'>" + newArray[i] + "</div>");
                    console.log(newArray[i]);
                    $(".shoutOuts").hide().delay(i * 1000).slideDown();
                }

            });
    });

});

//josephs
//$.get("feedback.txt", function(data) {
//var newArray = data.split("\n");
//for(var i=0; i < newArray.length; i++) {
//$("feedback").append("<div id=" + i + ">" newArray[i] + "</div>");
//}
//



//$(#div).html(data)
//});



//var lines = data.split("\n");
//$(".button").click(function() {
//    for (var i = 0, len = lines.length; i < len; i++) {
//        save(lines[i]);
//    }
//    $( ".result" ).html( data );
//});
//
//
////alert(data);
//
//});






//test explode code
// //$('#but-explode').toggle(
//     function() {
//         $('#explode').hide('explode', {}, 1000);
//     },
//     function() {
//         $('#explode').show('explode', { pieces: 30 }, 500);
//     }
// );


//exploding gymnast code
// $(".hello").toggle(
// 			function() {
// 				$("#explode").hide("explode", {}, 1000);
// 			},
// 			function() {
// 				$("#explode").show("explode", { pieces: 30 }, 500)
// 			}
// 		);
//
// $.get( "text.txt", function( data ) {
//console.log(data);
//
