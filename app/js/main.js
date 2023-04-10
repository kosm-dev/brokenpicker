"use strict";
document.addEventListener("DOMContentLoaded", () => {


  // выпадающее меню
  let intervalId;
  const dropdownTogglers = document.querySelectorAll('.dropdown-toggle');
  dropdownTogglers.forEach(toggler => {
    toggler.addEventListener('click', e => {
      const menu = e.currentTarget.dataset.path,
        menuAttr = document.querySelector(`[data-target=${menu}]`),
        dropdownMenus = document.querySelectorAll('.dropdown-menu');

      dropdownMenus.forEach(dropdownMenu => {
        if (!menuAttr.classList.contains('open')) {
          dropdownMenu.classList.remove('dropdown-menu--active');
          dropdownMenu.classList.remove('open');
          menuAttr.classList.add('dropdown-menu--active');
          intervalId = setTimeout(() => {
            menuAttr.classList.add('open');
          });
        }
        if (menuAttr.classList.contains('open')) {
          clearTimeout(intervalId);
          menuAttr.classList.remove('dropdown-menu--active');
          intervalId = setTimeout(() => {
            menuAttr.classList.remove('open');
          });
        }

      });
    });
  });

  // ticker

  let ticker = document.querySelector('.ticker'),
    list = document.querySelector('.ticker__inner'),
    clone = list.cloneNode(true);

  ticker.append(clone);

















});