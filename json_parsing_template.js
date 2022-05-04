$(document).ready(function() {

    $.getJSON( "orders.json", function( data ) {
  
        var fname = data["orders"][0]["customer"][0]["fname"];
        var lname = data["orders"][0]["customer"][0]["lname"];
        document.getElementById("demo").innerHTML = "Order for " + fname + " " + lname;
        
    });
});



