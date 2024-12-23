$(() => {
    /*
      add category attribute to a store category page   
      License         : < https://tinyurl.com/s872fb68 >   
      Version         : 0.1d2     
      SS Versions     : 7.1, 7.0
      */
    const category = twcsl.page.store.list.category;
    if (!category) return; // bail if no category
    $('body').attr('data-store-category', category);
});
