$(document).ready(function(){
    $("#menu").hide() //hides whole menu div

    $("#btn_open_menu").click(function(){
        $("#menu").show() //displays menu div
    })

    
    $("#menu").click(function(e){ //if clicking outside of menu-content hide menu
            if(e.target.id == $("#menu").attr("id")){
                $("#menu").hide()
            } 
    })

    $("#close-menu").click(function(){ //if clicking on x hide menu
        $("#menu").hide()
    })

    

    
})