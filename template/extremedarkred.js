(function($) {
	'use strict';

	$(function() {
		const $window = $(window);
		const $body = $('body');
		const $headerbar = $('.headerbar');
		const $navbar = $('.headerbar > .navbar');

		if (!$headerbar.length || !$navbar.length) {
			return;
		}

		let threshold = 0;

		function syncStickyNav() {
			const navHeight = $navbar.outerHeight();
			const navOffset = $navbar.offset();

			if (!navOffset || !navHeight) {
				return;
			}

			threshold = $headerbar.offset().top + $headerbar.outerHeight() - navHeight;

			if (!$body.hasClass('edr-nav-sticky-active')) {
				document.documentElement.style.setProperty('--edr-sticky-nav-left', `${navOffset.left}px`);
				document.documentElement.style.setProperty('--edr-sticky-nav-width', `${$navbar.outerWidth()}px`);
			}

			document.documentElement.style.setProperty('--edr-sticky-nav-height', `${navHeight}px`);

			$body.toggleClass('edr-nav-sticky-active', $window.scrollTop() >= threshold);
		}

		$window.on('scroll.edrStickyNav resize.edrStickyNav orientationchange.edrStickyNav', syncStickyNav);
		syncStickyNav();
	});
})(jQuery);
