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

    
    // css styling button hover
    jQuery('#btn_open_menu').mouseover(()=>{
        jQuery('#btn_open_menu').css('background-color', '#323a45')
        // jQuery('#icon_accessibility').css('color', '#000000')
    })

    jQuery('#btn_open_menu').mouseout(()=>{
        jQuery('#btn_open_menu').css('background-color', '#000000')
        jQuery('#icon_accessibility').css('color', '#ffffff')
    })
    
})