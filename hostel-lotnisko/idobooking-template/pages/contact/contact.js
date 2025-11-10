// load style for page - DO NOT CHANGE !
import "./contact.less";

app_book.run(() => {

  $('.--owner').after($('.--payInfo'));

}, [1,2], '.--owner');
  
app_book.run(() => {

  $('.contact__payments').append($('.--payInfo'));
  
}, [3,4], '.--payInfo');