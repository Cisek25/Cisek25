
app_book.fn.ga4 = function(type = 'select_item', id = '', price = null, name = '') {
  try { 
    gtag('event', type, {
    'items': [
        {
          'item_id': id,
          "item_name": name,
          'price': price,
        }
      ]
    });
  } catch(error) {
    console.log(error);
  }
}

app_book.fn.ga4Init = () => {
  const a = document.querySelectorAll('a[onclick*="generateWidgetIdoSellBooking(this)"]');
  a.forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute("data-ga4_type") || 'select_item';
      const price = el.getAttribute("data-price") || '';
      const name = el.getAttribute("data-name") || '';
      const ga4 = el.getAttribute("data-ga4") || '';
      const promotion = el.getAttribute("data-promotion") || '';
      const id = el.getAttribute("data-object") || '1';
      ga4 ? app_book.fn.ga4(type, (promotion ? promotion : id), price, name) : '';
    });
  });
}
app_book.fn.ga4Init();