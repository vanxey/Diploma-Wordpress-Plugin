<style>
    <?php include "plugin_easy_access_vb.css" ?>
</style>

<script>
    <?php include "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" ?>
    <?php include "test.js" ?>
</script>


<?php 
    echo '<link rel="stylesheet" href="plugin_easy_access_vb.css" >';
    // echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" ></script>';
    // echo '<script src="test.js" ></script>';
    echo '<script src="plugin_easy_access_vb.js" ></script>';
?>

$(document).ready(function(){
    $("#menu").hide() //hides whole menu div
    $("#btn_open_menu").click(function(){
        $("#menu").show() //displays menu div

        if($("#menu").is(":visible")){
            $(window).click(function(e){
                if(e.target != $("#menu")){
                    $("#menu").hide()
                }
            })
            alert("nope")
        }
    })
})