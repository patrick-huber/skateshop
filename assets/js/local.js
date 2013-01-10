// SkateJunk Bootstrap Javascript
$(document).ready(function(e) {
	
	// Secondary Nav Toggle
  $('ul.nav-secondary > li > a').on('click', function(e){
		e.preventDefault();
		$('.secondary-content > div.in').collapse('hide');
		$($(this).attr('href')).collapse('show').on('shown',function(){
			$(this).find('input:first').focus();
		});
	});
	$('#nav-collapse-toggle').on('click', function(e){
		e.preventDefault();
		$('.nav-collapse').collapse('toggle');
	});
	
	// Account
	// Tabs
	$('#tabs-account a').on('click', function(e){ // Could generalize to init when $('ul.nav-tabs a') is found if creating multiple tabs sets
		e.preventDefault();
		$(this).tab('show');
	});
	
	// Future todo: Slide Tabs for modal
	function init_slideTab() {
		var tab_groups = $('.slideTab').toArray()
		for (var i in tab_groups) {
			var tab_links = $(tab_groups[i]).find('a').toArray();
			for (var i in tab_links) {
				if($(tab_links[i]).hasClass('active')) {
					console.log('active')
				} else {
				}
			}
		}
		
	}
	//init_slideTab()
	
	
	
	// Cart Actions
	// Edit Item
	$('#cart a.edit').on('click', function(e){
		e.preventDefault();
		// switch edit to remove
		$(this).toggleClass('remove edit').html('<i class="icon-remove">Remove</i>').on('click', function(e){
			e.preventDefault();
			// modal confirm
			$('#modal-cart-remove').modal('show');
			
			// remove item
			$(this).closest('tr').next('tr').andSelf().fadeOut('fast', function(){
				if($('#cart table tr.item:visible').length == 0){
					$('#cart table tr.total').hide();
					$('#cart table tr.empty').removeClass('hide');
					$('#cart-check-out').addClass('disabled').attr('disabled','disabled');
					$('#cart-update').off().addClass('hide');
				} else if ($('#cart table > tr.item > td.item-name > a.remove').length == 0){
					$('#cart-update').off().addClass('hide');
				}
			}); // end remove item
		}).parent('td').nextAll('.quantity').html('<select class="span1"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option></select>'); // end switch edit to remove
		// Update Cart button
		$('#cart-update').removeClass('hide').on('click', function(e){
			e.preventDefault();
			$(this).addClass('hide');
			$('#cart').find('a.remove').toggleClass('edit remove').html('<i class="icon-edit">Edit</i>').parent('td').nextAll('.quantity').html('1');
		}); // end Update Cart button
	}); // end edit item
	
});	