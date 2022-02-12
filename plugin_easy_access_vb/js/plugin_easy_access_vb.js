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
    })

    jQuery('#btn_open_menu').mouseout(()=>{
        jQuery('#btn_open_menu').css('background-color', '#000000')
    })

    // css styling each select option
    jQuery('#inp_select_font_family').click(()=>{
        let font_families = ['bahnschrift', 'helvetica', 'arial', 'roboto']
        font_families.map(font =>{
            let id = 'font_family_' + font
            return jQuery('#' + id).css('font-family', font)
        })
    })

    //switch eventhandling
    jQuery('#inp_switch_contrast').click(()=>{
        if(jQuery('#inp_switch_contrast').prop('checked') == true) jQuery('#inp_switch_contrast_display').text('ON')
        else jQuery('#inp_switch_contrast_display').text('OFF')
    })

    jQuery('#inp_switch_cursor').click(()=>{
        if(jQuery('#inp_switch_cursor').prop('checked') == true) jQuery('#inp_switch_cursor_display').text('ON')
        else jQuery('#inp_switch_cursor_display').text('OFF')
    })

    
})


