'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const email = $('#email');
  const phone = $('#phone-number');
  const query = $('#comments')

  // check user entries for validity
  let isValid = true;
  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (phone.value == '') {
    phone.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    phone.nextElementSibling.textContent = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    $('form').submit();
  }
};

const resetForm = () => {
    $('form').reset();
    $('#name').nextElementSibling.textContent = '*';
    $('#email').nextElementSibling.textContent = '*';
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    $('#submit').addEventListener('click', processEntries);
    $('#reset_form').addEventListener('click', resetForm);
    $('#email').focus();
  });

  function check()
{
  document.getElementById('f1').outerHTML = document.queries.email.value;
  document.getElementById('f2').outerHTML = document.queries.phone.value;
  document.getElementById('f3').outerHTML = document.queries.query.value;
}