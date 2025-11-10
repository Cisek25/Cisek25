import autoComplete from "./autocomplete/autocomplete";

/**
 * Build menu with dots for additional content.
 * 
 * onOff - if false, destroy 
 */
function dots_menu(onOff = true) {

    //before js run, display menu in a row
    // remove jump efect 
    $(".navbar-nav-notloaded").removeClass("navbar-nav-notloaded");

    const jMenu = $("#navbar > ul");
    if (!jMenu.length) return;

    let jMenuOverflow = $("li.menuOverflow");

    // destry 
    if (jMenuOverflow.length) {
        jMenu.append(jMenuOverflow.find("li"));
        jMenuOverflow.remove();
        jMenuOverflow = [];

    }
    // destry - quit 
    if (!onOff)
        return false;

    // build menu 
    let jMenuElements = $("#navbar > ul > li");
    const menuMaxWidth = jMenu.width();

    if (menuMaxWidth > 0) {
        let mSum = 0;
        jMenuElements.each(function () {
            mSum += $(this).outerWidth();
        });

        // stop if fits 
        while (mSum > menuMaxWidth) {

            if (!jMenuOverflow.length) {
                jMenu.append($('<li class="menuOverflow nav-item">'));
                jMenuOverflow = $("li.menuOverflow");
                jMenuOverflow.append($("<span>...</span>"));
                jMenuOverflow.append($(`<button class="nav-toggler" type="button" aria-label="${TXT_MENU.PokazWiecejMenu}" aria-expanded="false" aria-controls="menuOverflow_menu"><span class="visuallyhidden">${TXT_MENU.PokazWiecejMenu}</span></button>`));
                jMenuOverflow.append($('<ul id="menuOverflow_menu" class="menuOverflow sub-navi">'));
            }
            jMenuElements = $("#navbar > ul > li:not(.menuOverflow)");
            jMenuOverflow.find("ul.menuOverflow").append(jMenuElements.last());
            jMenuElements = $("#navbar > ul > li");
            mSum = 0;
            jMenuElements.each(function () {
                mSum += $(this).outerWidth();
            });
        }
    }
}

app_book.run(function navbarNav() {

    $(".index-info").append($('.iai-search'));
    
    $(window).scroll(function(){
        if ($(this).scrollTop() <= 65) {
            var status = true;
            if (app_book.vars.view < 3 && $('#navbar').is(':visible')){
                status = false;
            }
            if (!$('.menu-wrapper').hasClass('clean') && status){
                $('.menu-wrapper').addClass('clean');
                $('#menu_categories').addClass('floater');
            } 
        } else {
          if ($('.menu-wrapper').hasClass('clean')){
              $('#menu_categories').removeClass('floater');
              $('.menu-wrapper').removeClass('clean');
          } 
        }
      });
}, 'all', "#navbar"); // TODO - ONCE 


    app_book.run(function navbarNav() {
        dots_menu(false);
    }, [1, 2], "#navbar");
    
    
    app_book.run(function navbarNav() {
    
        dots_menu(true);
    
    }, [3, 4], "#navbar");

    app_book.run(function navbarNav() {
        document.addEventListener("DOMContentLoaded", () => {
            const navTogglers = document.querySelectorAll(".nav-toggler");
            const navItems = document.querySelectorAll(".nav-item");
        
            navTogglers.forEach(toggler => {
                toggler.addEventListener("click", function (event) {
                    event.preventDefault();
        
                    const menu = document.getElementById(this.getAttribute("aria-controls"));
                    const isExpanded = this.getAttribute("aria-expanded") === "true";
        
                    // Zamykamy wszystkie inne otwarte menu, ale nie zamykamy menuOverflow
                    closeAllMenus(this.closest(".menuOverflow"));
        
                    if (!isExpanded) {
                        openMenu(this, menu);
                    } else {
                        closeMenu(this, menu);
                    }
                });
            });
        
            // Obsługa najechania myszką na nav-item
            navItems.forEach(item => {
                const toggler = item.querySelector(".nav-toggler");
                const menu = item.querySelector(".sub-navi");
        
                if (toggler && menu) {
                    item.addEventListener("mouseenter", () => {
                        // Ustawienie aria-expanded na true i otwarcie menu
                        openMenu(toggler, menu);
                    });
        
                    item.addEventListener("mouseleave", () => {
                        // Zamknięcie menu po opuszczeniu, ale nie zamykamy menuOverflow
                        closeAllMenus(item.closest(".menuOverflow"));
                    });
                }
            });
        
            // Zamknięcie menu klawiszem Escape
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    closeAllMenus();
                }
            });
        
            // Kliknięcie poza menu zamyka je, ale nie zamyka menuOverflow
            document.addEventListener("click", function (event) {
                if (!event.target.closest(".nav-item")) {
                    closeAllMenus();
                }
            });
        
            // Zamknięcie menu, gdy fokus przejdzie poza nie, ale nie zamykamy menuOverflow
            document.addEventListener("focusin", function (event) {
                if (!event.target.closest(".nav-item")) {
                    closeAllMenus();
                }
            });
        
            function openMenu(toggler, menu) {
                toggler.setAttribute("aria-expanded", "true");
                menu.style.display = "block";
        
                // Dodaj obsługę klawiatury dla tego submenu
                handleSubmenuKeyboardNavigation(menu);
            }
        
            function closeMenu(toggler, menu) {
                toggler.setAttribute("aria-expanded", "false");
                menu.style.display = "none";
            }
        
            function closeAllMenus(excludedMenu = null) {
                document.querySelectorAll(".nav-toggler").forEach(btn => {
                    const menuParent = btn.closest(".menuOverflow");
                    if (!excludedMenu || menuParent !== excludedMenu) {
                        btn.setAttribute("aria-expanded", "false");
                    }
                });
        
                document.querySelectorAll(".sub-navi").forEach(menu => {
                    const menuParent = menu.closest(".menuOverflow");
                    if (!excludedMenu || menuParent !== excludedMenu) {
                        menu.style.display = "none";
                    }
                });
            }
        
            function handleSubmenuKeyboardNavigation(submenu) {
                const links = submenu.querySelectorAll("a");
        
                if (links.length > 0) {
                    links.forEach((link, index) => {
                        link.addEventListener("keydown", function (event) {
                            if (event.key === "Tab" && !event.shiftKey && index === links.length - 1) {
                                // Jeśli jesteśmy na ostatnim elemencie i naciskamy Tab -> zamykamy menu
                                closeAllMenus();
                            } else if (event.key === "Tab" && event.shiftKey && index === 0) {
                                // Jeśli jesteśmy na pierwszym elemencie i naciskamy Shift + Tab -> zamykamy menu
                                closeAllMenus();
                            }
                        });
                    });
                }
            }
        });
    }, [1 ,2, 3, 4], "#navbar");

    app_book.run(function navbarNav() {
        document.addEventListener("DOMContentLoaded", () => {
            const navbarToggler = document.querySelector(".navbar-toggler");
            const navbar = document.getElementById("navbar");
            const menuWrapper = document.querySelector(".menu-wrapper");
            let focusableElements = [];
            let firstFocusable, lastFocusable;
            let isAnimating = false;
        
            navbarToggler.addEventListener("click", function (event) {
                event.preventDefault();
                if (isAnimating) return;
        
                const isOpen = navbar.style.display === "block";
                isOpen ? closeNavbar() : openNavbar();
            });
        
            function openNavbar() {
                menuWrapper.classList.remove("clean");
                navbar.style.display = "block";
        
                animateSlide(navbar, "open", 400, () => {
                    navbarToggler.setAttribute("aria-expanded", "true");
        
                    updateFocusableElements(); // Pobieramy elementy focusowalne
        
                    if (focusableElements.length > 0) {
                        firstFocusable.focus();
                    }
        
                    document.addEventListener("keydown", trapTabKey);
                    document.addEventListener("click", outsideClick);
                });
            }
        
            function closeNavbar() {
                animateSlide(navbar, "close", 400, () => {
                    navbar.style.display = "none";
                    navbarToggler.setAttribute("aria-expanded", "false");
                    navbarToggler.focus();
        
                    document.removeEventListener("keydown", trapTabKey);
                    document.removeEventListener("click", outsideClick);
        
                    if (window.scrollY <= 65) {
                        menuWrapper.classList.add("clean");
                    }
                });
            }
        
            function trapTabKey(event) {
                updateFocusableElements();
        
                if (event.key === "Escape") {
                    closeNavbar();
                    return;
                }
        
                if (event.key === "Tab") {
                    if (focusableElements.length === 0) return;
        
                    if (document.activeElement === lastFocusable && !event.shiftKey) {
                        event.preventDefault();
                        closeNavbar();
                    }
                }
            }
        
            function outsideClick(event) {
                if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
                    closeNavbar();
                }
            }
        
            function updateFocusableElements() {
                focusableElements = navbar.querySelectorAll(
                    "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
                );
        
                const flags = navbar.querySelector(".flags");
                const navLinks = navbar.querySelectorAll(".navbar-nav .nav-link");
        
                if (flags) {
                    lastFocusable = flags.querySelector("a:last-of-type");
                } else if (navLinks.length > 0) {
                    lastFocusable = navLinks[navLinks.length - 1];
                } else {
                    lastFocusable = focusableElements[focusableElements.length - 1];
                }
        
                firstFocusable = focusableElements[0] || navbarToggler;
            }
        
            function animateSlide(element, action, duration, callback) {
                let startHeight = action === "open" ? 0 : element.scrollHeight;
                let endHeight = action === "open" ? element.scrollHeight : 0;
                let startTime = null;
        
                function step(currentTime) {
                    if (!startTime) startTime = currentTime;
                    let elapsedTime = currentTime - startTime;
                    let progress = Math.min(elapsedTime / duration, 1);
                    let currentHeight = startHeight + (endHeight - startHeight) * progress;
        
                    element.style.height = currentHeight + "px";
        
                    if (elapsedTime < duration) {
                        requestAnimationFrame(step);
                    } else {
                        if (action === "close") {
                            element.style.display = "none";
                        }
                        element.style.height = "";
                        if (callback) callback();
                    }
                }
        
                element.style.overflow = "hidden";
                element.style.display = "block";
                requestAnimationFrame(step);
            }
        });
    }, [1 ,2], "#navbar");


app_book.run(function navsearch() {
    
    $(".flags a").click(function(){
        $.cookie('langChange', 'y');
    })

    document.addEventListener("DOMContentLoaded", () => {
        const languageToggler = document.querySelector("button.language__toggler");
        const languageMenu = document.querySelector(".page-top__language .language");
    
        if (languageToggler && languageMenu) {
            languageToggler.addEventListener("click", () => {
                languageMenu.classList.toggle("active");
                 if(languageToggler.getAttribute('aria-expanded') === 'false') {
                    languageToggler.setAttribute("aria-expanded", "true");
                 } else {
                    languageToggler.setAttribute("aria-expanded", "false");
                 }
            });
        }
    });

}, "all", ".flags a");