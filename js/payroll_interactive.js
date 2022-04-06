document.addEventListener('DOMContentLoaded', function() {
  const range_container = document.querySelector('.payroll_range');
  const options = document.querySelectorAll('.select_options');
  const price_output = document.querySelector('#payroll_range-price')

  // динамические числа

  range_container.addEventListener('input', function(e) {
      if (e.target.tagName === 'INPUT' && e.target.type === 'range') {
          e.target.parentElement.children[1].value = e.target.value;
          // price_output.value = e.target.value; вот так динамически меняется оутпут с ценой сейчас добавим условия
          if (e.target.value == 1) {
              price_output.value = 35;

          } else if (e.target.value >= 2 && e.target.value <= 4) {
              price_output.value = 120;
          } else if (e.target.value >= 5 && e.target.value <= 10) {
              price_output.value = 250;
          } else if (e.target.value >= 11 && e.target.value <= 50) {
              price_output.value = 250 + (23 * (e.target.value - 10));
          } else if (e.target.value >= 51 && e.target.value <= 100) {
              price_output.value = 1170 + (20 * (e.target.value - 50));
          }

      } else if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
          if (+e.target.value < +e.target.min) {
              e.target.value = e.target.min;
          } else if (+e.target.value > +e.target.max) {
              e.target.value = e.target.max;
          }
          e.target.parentElement.children[2].value = e.target.value;
          if (e.target.value == 1) {
              price_output.value = 35;

          } else if (e.target.value >= 2 && e.target.value <= 4) {
              price_output.value = 120;
          } else if (e.target.value >= 5 && e.target.value <= 10) {
              price_output.value = 250;
          } else if (e.target.value >= 11 && e.target.value <= 50) {
              price_output.value = 250 + (23 * (e.target.value - 10));
          } else if (e.target.value >= 51 && e.target.value <= 100) {
              price_output.value = 1170 + (20 * (e.target.value - 50));
          }
      }

  });

  селект

  const payroll_selection = document.querySelector('.payroll_selection');
  document.addEventListener('click', function(e) {
      closePayrollSelections();
      if (
          e.target.closest('button') &&
          e.target.closest('button').classList.contains('payroll_select_btn') &&
          !e.target.classList.contains('payroll_option')
      ) {
          const btn = e.target.closest('button');

          btn.parentElement.parentElement.children[1].classList.toggle('payroll_select_show');
      }
  });

  payroll_selection.addEventListener('click', function(e) {
      closePayrollSelections();
  });

  options.forEach((el) => {
      el.addEventListener('click', function(e) {
          if (e.target.classList.contains('payroll_option')) {
              e.target.parentElement.parentElement.children[0].children[1].children[0].innerText = e.target.innerText;
              closePayrollSelections();
          }
      });
  });

  function closePayrollSelections() {
      options.forEach((el) => {
          el.classList.remove('payroll_select_show');
      });
  }

});