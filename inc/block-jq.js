jQuery(document).ready(function(){
    jQuery(".tab-title").click(function(){
           if (jQuery(this).hasClass("active")){
               jQuery(".tab-title").removeClass("active");
               jQuery(".tab-panel").slideUp("slow");
           }else {
               jQuery(".tab-title").removeClass("active");
               jQuery(this).addClass("active");
               jQuery(".tab-panel").slideUp("slow");
               jQuery(this).next().slideDown("slow");
           }
    });
    jQuery('.theme-section-full').each(function() {
        jQuery(this).css('background', jQuery(this).attr('assignedstyle'));
    });
    jQuery('.customs-b-color').each(function() {
        jQuery(this).css('background', jQuery(this).attr('assignedstyle'));
    });
    jQuery('.customs-b-color-3').each(function() {
        jQuery(this).css('background', jQuery(this).attr('assignedstyle'));
    });
    jQuery('.wpwpmindsfr-p-Color .disPricing-3').each(function() {
        jQuery(this).css('background', jQuery(this).attr('assignedstyle'));
    });
    jQuery('.wpwpmindsfr-p-Color .cColor-3').each(function() {
        jQuery(this).css('color', jQuery(this).attr('styleColor'));
    });
    jQuery('.cColor').each(function() {
        jQuery(this).css('color', jQuery(this).attr('styleColor'));
    });
    var $owl = jQuery('.Slidersimple');
	$owl.owlCarousel({
		nav:true,
		loop: true,
		items: 1,
		margin:0,
		dots: true,
	});
});