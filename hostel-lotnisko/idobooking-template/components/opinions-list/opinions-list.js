window.addEventListener('load' , function() {
  function opinionsListShow() {
    document.querySelectorAll('.opinions-list .opinion').forEach((item) => {
      const wrapper = item.querySelector('.opinion__desc');
      const more = item.querySelector('.opinion__more');
      let desc = '';
      
      if (wrapper != null) {
        desc = wrapper.innerText;
        function isOverflown(element) {
          return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }
        console.log(isOverflown(wrapper))
        if (desc.length > 350 || isOverflown(wrapper)) {
          const oldVal = desc.slice(0, 220);
          const newVal = desc.slice(220);
          wrapper.innerText = '';
          wrapper.innerHTML = `<span class="prev">${oldVal}</span><span class="ellipsis">...<br></span><span class="next">${newVal}</span>`;

          wrapper.setAttribute(
            'data-height',
            wrapper.querySelector('.next').offsetHeight,
          );
          wrapper.style.maxHeight = `${
            wrapper.querySelector('.prev').offsetHeight
          }px`;

          more.style.display = 'block';
          more.addEventListener('click', function toggleOpinion() {
            if (!item.classList.contains('--show')) {
              item
                .querySelector('.opinion__inner')
                .setAttribute(
                  'style',
                  `min-height: ${
                    parseFloat(item.offsetHeight)
                    + parseFloat(wrapper.getAttribute('data-height'))
                  }px;`,
                );
            } else {
              item.querySelector('.opinion__inner').setAttribute('style', '');
            }

            wrapper.classList.toggle('--show');
            item.classList.toggle('--show');

            const old = this.getAttribute('data_old');
            const cur = this.innerText;
            this.innerText = old;
            this.setAttribute('data_old', cur);
          });
        }
        wrapper.style.opacity = '1';
      }
    });

    function opinionsCheck(count, string, tip1, tip2, tip3) {
      if (parseFloat(count) === 1) {
        return string + tip1;
      // eslint-disable-next-line no-else-return
      } else if (
        parseFloat(count) > 1 && parseFloat(count) < 5 && parseFloat(count) < 20
      ) {
        return string + tip2;
      } else if (
        parseFloat(count[count.length - 1]) > 1 && parseFloat(count[count.length - 1]) < 5
         && (parseFloat(count[count.length - 2] + count[count.length - 1]) < 10
        || parseFloat(count[count.length - 2] + count[count.length - 1]) > 20)
      ) {
        return string + tip2;
      } else {
        return string + tip3;
      }
    }

    if (document.querySelector('#opinions_val') != null) {
      document.querySelector('#opinions_val').innerText = opinionsCheck(
        document.querySelector('#opinions_all').innerText,
        'opini',
        'a',
        'e',
        'i',
      );
      document.querySelector('#opinions_val').style.display = 'inline';
    }
  }
  if(document.querySelector('.page-opinions') != null) {
    opinionsListShow();
  }
})