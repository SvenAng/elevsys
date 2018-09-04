/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
      
      // Mobilmenu
      jQuery(".c-hamburger").click(function(){
        jQuery('#main-navigation').toggleClass('open');
        jQuery('.c-hamburger').toggleClass('is-active');
      });
      jQuery("ul.mobile-menu-root > li.has-flyout > .expand").click(function(){
        jQuery(this).next().slideToggle();  
      });
      // Scroll topp
      jQuery(".scroll-top").click(function() {
        jQuery("html, body").animate({scrollTop: 0 }, "slow");
        return false;

      });

      var offset = 120;
      var duration = 500;

      jQuery('.scroll-top').hide();

      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.scroll-top').fadeIn(duration);
        } else {
          jQuery('.scroll-top').fadeOut(duration);
        }
      });
    }
  };

})(jQuery, Drupal);
