function trapFocus(event, modalId) {
    const isTabPressed = event.key === `Tab` || event.keyCode === 9;
  
    if (!isTabPressed) {
      return;
    }
    const focusableElements = `button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])`;
    const modal = document.getElementById(modalId);
  
    // get focusable elements in modal
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
  
    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement || !modal.contains(document.activeElement)) {
      firstFocusableElement.focus();
      event.preventDefault();
    }
  }


app_book.run(function () {
    function initTrapFocus(event) {
        return trapFocus(event, `ck_dsclr_v2`);
      }
    function getCk(name) {var nameEQ = name + "=";var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);}return null;}
    function setCk(name,value,days) {if (days) {var date = new Date(); date.setTime(date.getTime()+(days*24*60*60*1000)); var expires = "; expires="+date.toGMTString(); } else var expires = ""; document.cookie = name+"="+value+expires+"; path=/";}

    if(!getCk("ck_cook")) {
        document.getElementById('ck_dsclr_v2').style.display = "block";
        document.body.classList.add("ck_dsclr_v2_freeze_bcg");
        document.getElementById('ck_dsclr_v2').setAttribute('aria-modal', 'true')
        document.getElementById('ck_dsclr_v2').focus();
    }
  
    document.getElementById('ckdsclmrshtdwn_v2').addEventListener('click' , function() {
        document.getElementById('ck_dsclr_v2').style.display = "none";
        document.body.classList.remove("ck_dsclr_v2_freeze_bcg");
        setCk("ck_cook", "yes", 180);
        document.getElementById('ck_dsclr_v2').style.display = "none";
        document.getElementById('ck_dsclr_v2').setAttribute('aria-modal', 'false')
        return false;
    })
    document.getElementById('ckdsclmrshtdwn_v2').addEventListener("keydown", function (event) {
        initTrapFocus(event);
        if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            document.getElementById('ck_dsclr_v2').style.display = "none";
            document.body.classList.remove("ck_dsclr_v2_freeze_bcg");
            setCk("ck_cook", "yes", 180);
            document.getElementById('ck_dsclr_v2').style.display = "none";
            document.getElementById('ck_dsclr_v2').setAttribute('aria-modal', 'false')
            return false;
        }
    });
    if(document.getElementById('ckdsclrx_v2') != null) {
        document.getElementById('ckdsclrx_v2').addEventListener('click' , function() {
            document.getElementById('ck_dsclr_v2').style.display = "none";
            setCk("ck_cook", "yes", 180);
            return false;
        });
        document.getElementById('ckdsclrx_v2').addEventListener("keydown", function (event) {
            initTrapFocus(event);
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                document.getElementById('ck_dsclr_v2').style.display = "none";
                setCk("ck_cook", "yes", 180);
                return false;
            }
        });
    }
    if(document.getElementById('ckdsclmrshtrtn_v2') != null) {
        document.getElementById('ckdsclmrshtrtn_v2').addEventListener('click' , function() {
            window.history.back();
        });
        document.getElementById('ckdsclmrshtrtn_v2').addEventListener("keydown", function (event) {
            initTrapFocus(event);
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                window.history.back();
            }
        });
    }
  
}, 'all', '#ck_dsclr_v2');
