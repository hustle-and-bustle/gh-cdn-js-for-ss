$(() => {

    /*
    
      add continue shopping message 
      
      License       : < https://tinyurl.com/s872fb68 >
      
      Version       : 0.1d1
      
      SS Versions   : 7.0, 7.1
      
      Dependencies  : jQuery
      
      By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
      
      */

    /*
    
      the following values are optional, if left empty default values will be
      provided. if the values have single quotes in them put a backslash before
      the single quotes. example: it's becomes it\'s
      
      */


    let notEmptyMessage = '';

    let continueShoppingLinkText = '';

    // do not change anything below, there be the borg here

    if (location.pathname != '/cart') return; // bail if not cart

    if ($('.empty-message').length) return; // bail if empty
      console.log("empty message", $('.empty-message').length);

    const selector = '[data-test=remove-item]';

    let continueShoppingLinkUrl = Static.SQUARESPACE_CONTEXT.websiteSettings

        .storeSettings.continueShoppingLinkUrl
    if (continueShoppingLinkUrl != "/") {
        continueShoppingLinkUrl = "/" + continueShoppingLinkUrl;
    }
    //console.log("continueShoppingLinkUrl", continueShoppingLinkUrl);



    if (!continueShoppingLinkText)
        continueShoppingLinkText = 'Continue Shopping';


    function add_continue_button() {
        let $cartTitle = $(".cart-title").first()
        let $clone = $cartTitle.clone();
        let $button = $(`<a href="${continueShoppingLinkUrl}" class="btn btn--border theme-btn--primary-inverse sqs-button-element--secondary">  ${continueShoppingLinkText}</a>`)
        $elem = $(`<div style="display: flex;width:100%;justify-content:space-between"></div>`).append($clone).append($button);
        $elem.insertAfter($cartTitle);
        $cartTitle.remove();
    }

    setTimeout(() => {
        add_continue_button();
    }, 100);
}); 