
function filtersData() {
  const filtersObj = {};
  $('#menu_filter .filter_items').each(function() {
    const $this = $(this);
    if ($this.find('input:checked').length) {
      const filterName = $this.find('input[type="checkbox"]').attr('name').replace('[]', '');
      const filterValues = [];
      $this.find('input:checked').each(function() {
        const $filter = $(this);
        if ($filter.data('from') && $filter.data('to') !== '') {
          filterValues.push({
            from: $filter.data('from'),
            to: $filter.data('to'),
          });
        } else {
          filterValues.push($(this).val());
        }
      });
      filtersObj[filterName] = filterValues;
    }
  });
  return filtersObj;
}

function filterCallback(json) {
  $.each(json, function getFiltersAjax(filterGroupKey, filterGroupValue) {
    const container = $(`.filter_content[id="filter_${filterGroupKey}"]`);

    $.each(filterGroupValue, function filterGroupValueEach(filterKey, filterValue) {
      let targetInput = container.find(`input[value="${filterValue.id}"]`);
      if (filterGroupKey === 'areaRanges') {
        targetInput = container.find(`input[data-from="${filterValue.from}"][data-to="${filterValue.to}"]`);
      }

      targetInput.each(function targetInputEach() {
        const $this = $(this);

        if (filterValue.checked === 1) {
          $this.attr('checked', true);
        } else {
          $this.attr('checked', false);
        }

        if (filterValue.disabled === 1) {
          $this.attr('disabled', true);
          $this.parent('label').addClass('disabled');
        } else {
          $this.attr('disabled', false);
          $this.parent('label').removeClass('disabled');
        }
      });
    });
  });
}


function menuFilter() {
  
  $('#menu_filter input').on('change', function menuFilterChange() {
    $.ajax({
      url: '/get-filters-ajax/group-locations/true',
      type: 'post',
      dataType: 'json',
      data: filtersData(),
      beforeSend: () => {
        $('#menu_filter').addClass('loading');
      },
      success: (json) => {
        filterCallback(json);
        $('#menu_filter').removeClass('loading');
      },
    });
  });

  $('#menu_filter #filters_submit').on('click', function filtersSubmitClick() {
    if (!$('#filter_areaRanges input:checked').length) {
      $('#menu_filter form').trigger('submit');
    } else {
      let counter = 1;
      $('#filter_areaRanges input:checked').each(function filterAreaRangesEach() {
        const $this = $(this);

        $this.after(`<input type="hidden" name="areaRanges[${counter}][from]" value="${$this.attr('data-from')}"/>`);
        $this.after(`<input type="hidden" name="areaRanges[${counter}][to]" value="${$this.attr('data-to')}"/>`);

        $this.attr('name', '__');
        counter += 1;
      });
      $('#menu_filter form').trigger('submit');
    }
    return false;
  });

  $('#show_filters').click(function showFiltersClick() {
    $('#menu_filter').slideToggle(300);
  });

}


function createDoubleFilter() {
  if($('#filter_locations').length === 0) {
    menuFilter();
    return false;
  }
  let data = filtersData();
  const checkedFilters = $('#filter_locations').attr('data-checked').split(' ,');
  typeof data.locations != "undefined" ? data['locations'].concat(checkedFilters) : data['locations'] = checkedFilters;

  $.ajax({
    url: '/get-filters-ajax/group-locations/true',
    type: 'post',
    dataType: 'json',
    data: data,
    beforeSend: () => {
      $('#menu_filter').addClass('loading');
    },
    success: (json) => {
      $('#menu_filter').removeClass('loading');
      (typeof json.locationsByCities != 'undefined' && json.locationsByCities.length > 0) ? createDoubleFilterData(json) : menuFilter();
    },
    error: () => {
      menuFilter()
    }
  });
}

function createDoubleFilterData(json) {
  json.locationsByCities.forEach((el, index) => {
    let item = 
    `<div class="filter_sub" role="group" aria-labelledby="location_${index}">
    ${createDoubleFilterGrid(el.streets , el.city, index)}
    </div>`;
    $('#filter_locations .filter_content').append(item);
  })
  return menuFilter();
}

function createDoubleFilterGrid(array , name, index) {
  let html = `<span id="location_${index}" class="filter_header_sub">${name}</span>`;
  array.forEach((el) => {
    html +=
    `<div class="checkbox" tabindex="0" role="checkbox" aria-checked="false">
      <label ${el.disabled == 1 ? 'class="disabled"' : ''}>
        <input type="checkbox" name="locations[]" value=${el.id} ${el.checked == 1 ? 'checked="checked"' : ''} ${el.disabled == 1 ? 'disabled="disabled"' : ''}>
        <span>
          <span>${el.street}</span>
        </span>
      </label>
    </div>`;
  });
  return html;
}


app_book.run(() => {createDoubleFilter()}, 'all', '#menu_filter');

class Checkbox {
  constructor(domNode) {
    this.domNode = domNode;
    this.isMouseClick = false; // Flaga do śledzenia źródła zdarzenia

    this.domNode.addEventListener("mousedown", () => {
      this.isMouseClick = true; // Ustaw flagę, jeśli kliknięto myszą
    });

    this.domNode.addEventListener("keydown", (event) => this.onKeydown(event));
    this.domNode.addEventListener("keyup", (event) => this.onKeyup(event));
    this.domNode.addEventListener("click", () => this.onClick());
  }

  toggleCheckbox() {
    const isChecked = this.domNode.getAttribute("aria-checked") === "true";
    this.domNode.setAttribute("aria-checked", isChecked ? "false" : "true");
  }

  toggleInputChecked() {
      const checkedInput = this.domNode.querySelector('input');
      checkedInput.checked === true ? checkedInput.checked = false : checkedInput.checked = true;
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  onKeyup(event) {
    if (event.key === " " && !this.isMouseClick) {
      this.toggleCheckbox();
      this.toggleInputChecked()
      event.stopPropagation();
    }
    this.isMouseClick = false; // Resetuj flagę po obsłużeniu zdarzenia
  }

  onClick() {
    if (!this.isMouseClick) {
      this.toggleCheckbox();
    }
    this.isMouseClick = false; // Resetuj flagę po obsłużeniu kliknięcia
  }
}

// Initialize checkboxes on the page
window.addEventListener("load", () => {
  const checkboxes = document.querySelectorAll('#menu_filter [role="checkbox"]');

  checkboxes.forEach((checkbox) => new Checkbox(checkbox));

  const filterForm = document.querySelector('#menu_filter_form');
  filterForm.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      filterForm.submit();
    }
  })
});
