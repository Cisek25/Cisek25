
// template components files starts here
import "../../components/menu/menu.js";

// LAZY LOAD 
import LazyLoad from "vanilla-lazyload";
app_book.run(function lazyLoad(){
    app_book.fn.lazyLoad = new LazyLoad();

    document.addEventListener("DOMContentLoaded", function(event) { 
        app_book.fn.lazyLoad.update();
      });
    
},"all"); // ONCE 
