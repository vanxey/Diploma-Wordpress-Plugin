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

    jQuery('#btn_confirm').click(()=>{ //changing cursor size on confirm
        if(jQuery('#inp_switch_cursor').prop('checked') == true){
            replaceCursor('html', true)
            replaceCursor('.custom_cursor', true)
            replaceCursor('.custom_cursor:active', true)
            replaceCursor('.custom_cursor:link', true)
            replaceCursor('.custom_cursor:hover', true)

        }
        else if(jQuery('#inp_switch_cursor').prop('checked') == false){
            replaceCursor('html', false)
            replaceCursor('.custom_cursor', false)
            replaceCursor('.custom_cursor:active', false)
            replaceCursor('.custom_cursor:link', false)
            replaceCursor('.custom_cursor:hover', false)
        }

        let font = jQuery('#inp_select_font_family :selected').text()
        if(font != 'Choose a font family'){
            jQuery('body').css('font-family', font)
        }

        if(jQuery('#inp_switch_contrast').prop('checked') == true){
            jQuery('body').toggleClass('high_contrast', true)

        }else if(jQuery('#inp_switch_contrast').prop('checked') == true){
            jQuery('body').toggleClass('high_contrast', false)
        
        }

        

        jQuery("#menu").hide()
    })


    changeTextSize('#btn_small_text', '20px')
    changeTextSize('#btn_medium_text', '25px')
    changeTextSize('#btn_large_text', '30px')
    
})

function replaceCursor(className, stmt){ //function for cursor size switch / true false for differentiating url or default cursor
    if(stmt == true){
        jQuery(className).css('cursor', 'url(wp-content/plugins/plugin_easy_access_vb/src/cursor4.png), auto')
    }
    else{
        jQuery(className).css('cursor', 'default')
    }
    
}

function changeTextSize(btnId, fontSize){
    return jQuery(btnId).click(()=>{
        jQuery('body').css('font-size', fontSize)
    })
}

function highContrast(tagName, prop, val){
    return jQuery(tagName).css(prop, val)
    
}


