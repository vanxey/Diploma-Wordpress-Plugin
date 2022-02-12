jQuery(document).ready(()=>{
    jQuery("#menu").hide() //hides whole menu div

    jQuery("#btn_open_menu").click(()=>{
        jQuery("#menu").show() //displays menu div
    })

    
    jQuery("#menu").click((e)=>{ //if clicking outside of menu-content hide menu
            if(e.target.id == jQuery("#menu").attr("id")){
                jQuery("#menu").hide()
            } 
    })

    jQuery("#close-menu").click(()=>{ //if clicking on x hide menu
        jQuery("#menu").hide()
    })

    

    
})