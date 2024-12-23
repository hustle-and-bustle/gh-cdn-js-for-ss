function add_go_to_cart_button() {
    const text = 'Go to Cart';

    /*
    
      the url can be any valid url. it can be a full (external to your site) one
      like < https://www.tomsWeb.consulting/ > or a partial (internal to your
      site) one like '/contact'
      
      */

    const url = '/cart';

    const targetAtttributeValue = ''; /* use _self (default, if left empty) |
                                         _blank | _parent | _top | framename */

    /* guard processor for other conditions which prevent the code from running.
       replace undefined with the name of your custom function. your function
       must return a boolean. false means do not add the button and true means
       add the button */

    const guardProcessor = undefined;

    // do not change anything below, there be the borg here

    if (guardProcessor !== undefined) // guard processor

        if (!guardProcessor()) return;

    const selector = '.sqs-add-to-cart-button-wrapper';

    $(selector).each(function () {
        const $this = $(this);
        const $button = $this
            .clone()
            .removeAttr('data-form')
            .removeAttr('id')
            .removeClass('use-form');

        const $e = $('.sqs-add-to-cart-button', $button)
            .attr('href', url)
            .removeAttr('id ' +
                'data-collection-id ' +
                'data-item-id ' +
                'data-original-label ' +
                'data-product-type ' +
                'data-use-custom-label')
            .find('.sqs-add-to-cart-button-inner')
            .html(text)
            .end();
        if (targetAtttributeValue)
            $e.attr('target', targetAtttributeValue);
        const $anchorTag = $('<a>');
        $.each($e.prop('attributes'), function () {
            $anchorTag.attr(this.name, this.value);
        });
        $e.children().appendTo($anchorTag);
        $e.replaceWith($anchorTag)
        $button.insertAfter($this);
    });
}
$(() => {

    if (!('MutationObserver' in window)) return;
    const element = document.querySelector('.sqs-add-to-cart-button');
    let prevState = element.classList.contains('cart-added');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            const { target } = mutation;

            if (mutation.attributeName === 'class') {
                const currentState = mutation.target.classList
                    && mutation.target.classList.contains('cart-added');
                if (prevState !== currentState) {
                    prevState = currentState;
                    //console.log(`'cart-added' class ${currentState ? 'added' : 'removed'}`);
                    add_go_to_cart_button();
                }
            }
        });
    });
    observer.observe(element, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class']
    });
});
