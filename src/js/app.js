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

    () => {
        "use strict";

        const storedTheme = localStorage.getItem('theme')

        const getPreferredTheme = () => {
            if (storedTheme) {
                return storedTheme
            }

            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        const setTheme = function (theme) {
            if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-bs-theme', 'dark')
            } else {
                document.documentElement.setAttribute('data-bs-theme', theme)
            }
        }

        setTheme(getPreferredTheme())

        const showActiveTheme = theme => {
            const activeThemeIcon = document.querySelector('.theme-icon-active')
            const btnToActive = document.querySelector('[data-bs-thene-value="${theme}"]')
            const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon

            document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                element.classList.remove('active')
            })

            btnToActive.classList.add('active')
            activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive)
            activeThemeIcon.classList.add(iconOfActiveBtn)
            activeThemeIcon.dataset.iconActive = iconOfActiveBtn
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (storedTheme !== 'light' || storedTheme !== 'dark') {
                setTheme(getPreferredTheme());
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
            showActiveTheme(getPreferredTheme());

            document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value');
                    localStorage.setItem('theme', theme)
                    setTheme(theme);
                    showActiveTheme(theme, true);
                });
            });
        });
    }
)();
