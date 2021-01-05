$(document).ready(function() {

    $("#mp").click(function(){
        $("#navBar").show();
        $("#hero").hide();
        $("#hiw").hide();
        $("#socialMedia").hide();
        $("#orbitDiv").hide();
        $("#mostPopDiv").show();
    
    });

    $("#search").click(function(){
        $("#navBar").show();
        $("#hero").hide();
        $("#hiw").hide();
        $("#socialMedia").hide();
        $("#orbitDiv").hide();
        $("#mostPopDiv").hide();
        $("#resultsDiv").show();

    });
  

    $(document).foundation();
 })