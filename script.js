document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
    const navList = document.querySelector('ul');

    mobileMenuIcon.addEventListener('click', function () {
        navList.classList.toggle('open');
        mobileMenuIcon.classList.toggle('open');
    });
});
