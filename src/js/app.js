window.addEventListener("DOMContentLoaded", () => {
  let scrollPos = 0;
  const mainNav = document.getElementById("mainNav");
  const headerHeight = mainNav.clientHeight;
  window.addEventListener("scroll", function () {
    const currentTop = document.body.getBoundingClientRect().top * -1;
    if (currentTop < scrollPos) {
      // Scrolling Up
      if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
        mainNav.classList.add("is-visible");
      } else {
        console.log(123);
        mainNav.classList.remove("is-visible", "is-fixed");
      }
    } else {
      // Scrolling Down
      mainNav.classList.remove(["is-visible"]);
      if (
        currentTop > headerHeight &&
        !mainNav.classList.contains("is-fixed")
      ) {
        mainNav.classList.add("is-fixed");
      }
    }
    scrollPos = currentTop;
  });
})(

  // !!! Dark Mode

  (() => {
    'use strict';
    const storedTheme = localStorage.getItem('theme');

    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    };

    setTheme(getPreferredTheme());

    const showActiveTheme = (theme, setOpacity = true) => {
      const activeThemeIcon = document.querySelector('.theme-icon-active');
      const btnToActive = document.querySelector(`[data-bs-theme-value='${theme}']`);
      const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon;

      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active', 'opacity-75');
        if (setOpacity) {
          element.classList.add('opacity-75');
        }
      });

      btnToActive.classList.add('active');
      activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
      activeThemeIcon.classList.add(iconOfActiveBtn);
      activeThemeIcon.dataset.iconActive = iconOfActiveBtn;
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    });

    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme(), false);

      document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          localStorage.setItem('theme', theme);
          setTheme(theme);
          showActiveTheme(theme, false);
        });
      });
    });
  })())


// Animasi Navbar
window.addEventListener('DOMContentLoaded', () => {
  let scrollPos = 0;
  const mainNav = document.getElementById('mainNav');
  const headerHeight = mainNav.offsetHeight; // Menggunakan offsetHeight untuk mendapatkan tinggi navbar yang akurat

  const handleScroll = () => {
    const currentTop = window.pageYOffset || document.documentElement.scrollTop; // Mendapatkan posisi scroll saat ini

    if (currentTop < scrollPos) {
      // Scrolling Up
      if (currentTop > 0 && !mainNav.classList.contains('is-visible')) {
        mainNav.classList.add('is-visible');
      } else {
        mainNav.classList.remove('is-visible', 'is-fixed');
      }
    } else {
      // Scrolling Down
      mainNav.classList.remove('is-visible');
      if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
        // mainNaw.classList.add(getPreferredTheme())
        mainNav.classList.add('is-fixed');
      }
    }

    scrollPos = currentTop;
  };

  window.addEventListener('scroll', handleScroll);
});


// Biodata Kelompok
const cards = document.querySelectorAll('.card-wrap');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const info = card.querySelector('.card-info');
    const bg = card.querySelector('.card-bg');

    info.style.transform = 'translateY(0)';
    info.querySelector('p').style.opacity = 1;
    info.style.transition = '0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    info.querySelector('p').style.transition = '0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    info.querySelector(':after').style.transition = '5s cubic-bezier(0.23, 1, 0.32, 1)';
    info.querySelector(':after').style.opacity = 1;
    info.querySelector(':after').style.transform = 'translateY(0)';

    bg.style.transition = '0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1)';
    bg.style.opacity = 0.8;

    card.querySelector('.card').style.transition = '0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1)';
    card.querySelector('.card').style.boxShadow = 'rgba(255, 255, 255, 0.2) 0 0 40px 5px, rgba(255, 255, 255, 1) 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px';
  });

  card.addEventListener('mouseleave', () => {
    const info = card.querySelector('.card-info');
    const bg = card.querySelector('.card-bg');

    info.style.transform = '';
    info.querySelector('p').style.opacity = '';
    info.style.transition = '';
    info.querySelector('p').style.transition = '';
    info.querySelector(':after').style.transition = '';
    info.querySelector(':after').style.opacity = '';
    info.querySelector(':after').style.transform = '';

    bg.style.transition = '';
    bg.style.opacity = '';

    card.querySelector('.card').style.transition = '';
    card.querySelector('.card').style.boxShadow = '';
  });
});