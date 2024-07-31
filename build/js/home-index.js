const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const search = document.getElementById('search');
const accountButton = document.getElementById('account-button');
const account = document.getElementById('account');

// Xử lý sự kiện khi click vào icon tìm kiếm
searchIcon.addEventListener('click', function () {
    if (!searchIcon.classList.contains('toggled')) {
        this.classList.toggle("active"); 
    searchInput.classList.toggle("active");
    } else {
        searchIcon.classList.remove("toggled"); 
    searchInput.classList.remove("toggled"); 
    }
});
search.addEventListener('click', function () {
    searchIcon.classList.toggle("toggled"); 
    searchInput.classList.toggle("toggled"); 
    searchIcon.classList.remove("active");  
    searchInput.classList.remove("active");
    if (searchIcon.classList.contains('hidden')) {
        searchIcon.classList.remove("hidden");
    } else {
        searchIcon.classList.toggle("hidden");
    }
})

// Xử lý sự kiện khi searchIcon hoặc input mất focus
document.addEventListener('click', function(event) {
    if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
        searchIcon.classList.remove("active");
        searchInput.classList.remove("active");
    }
    if (!search.contains(event.target) && !searchInput.contains(event.target)) {
        searchIcon.classList.remove("toggled");
        searchInput.classList.remove("toggled");
        searchIcon.classList.add("hidden");
    }
});

accountButton.addEventListener('click', function(){
    account.classList.toggle('active');
})
accountButton.addEventListener('blur', function(){
    account.classList.remove('active');
})

const hamburgerBtn = document.getElementById('menuButton')
const mobileMenu = document.getElementById('mobile-menu')
const toggleMenu = () => {
    mobileMenu.classList.toggle('toggled')
    hamburgerBtn.classList.toggle('toggle-btn');
    search.classList.toggle("toggled"); 
    accountButton.classList.toggle("toggled"); 
    if(search.classList.contains('hidden')){
        search.classList.remove("hidden"); 
    }else{
        search.classList.toggle("hidden"); 
    }
    if(accountButton.classList.contains('hidden')){
        accountButton.classList.remove("hidden"); 
    }else{
        accountButton.classList.toggle("hidden"); 
    }
}
hamburgerBtn.addEventListener('click', toggleMenu)

const exButton = document.getElementById('exButton')
const navMobile = document.getElementById('nav-mobile')
const navButton = document.getElementById('nav-button')
const navButtonCover = document.getElementById('nav-button-cover')

exButton.addEventListener('click', function () {
    navMobile.classList.remove('active')
    navButtonCover.classList.add('hidden')
})
navButton.addEventListener('click', function () {
    navMobile.classList.toggle('active')
    navButtonCover.classList.remove('hidden')
})
document.addEventListener('click', function(event) {
    if (!navButton.contains(event.target) && !navMobile.contains(event.target)) {
        navMobile.classList.remove("active");
        navButtonCover.classList.add('hidden')
    }
});

const navItem = [
    { nav: 'nav-1', li: 'li-1', plus: 'plus1' },
    { nav: 'nav-2', li: 'li-2', plus: 'plus2' },
    { nav: 'nav-3-1', li: 'li-3-1', plus: 'plus31' },
    { nav: 'nav-3', li: 'li-3', plus: 'plus3' },
    { nav: 'nav-4', li: 'li-4', plus: 'plus4' },
    { nav: 'nav-4-1', li: 'li-4-1', plus: 'plus41' },
    { nav: 'nav-4-2', li: 'li-4-2', plus: 'plus42' },
    { nav: 'nav-4-3', li: 'li-4-3', plus: 'plus43' },
    { nav: 'nav-5', li: 'li-5', plus: 'plus5' },
];

navItem.forEach(item => {
    const navElement = document.getElementById(item.nav);
    const liElement = document.getElementById(item.li);
    const plusButton = document.querySelector(`.${item.plus}`);

    navElement.addEventListener('click', () => {
        liElement.classList.toggle('active');
        plusButton.classList.toggle('active');
    });
});

const navItems = [
    { nav: 'web-nav-home', hover: 'home-hover' },
    { nav: 'web-nav-features', hover: 'features-hover' },
    { nav: 'web-nav-pages', hover: 'pages-hover' },
    { nav: 'web-nav-error-page', hover: 'error-page-hover' },
    { nav: 'web-nav-Blog', hover: 'Blog-hover' },
    { nav: 'web-nav-BlogGrid', hover: 'BlogGrid-hover' },
    { nav: 'web-nav-BlogSidebar', hover: 'BlogSidebar-hover' },
    { nav: 'web-nav-BlogSingle', hover: 'BlogSingle-hover' },
    { nav: 'web-nav-Shop', hover: 'Shop-hover' },
];

navItems.forEach(item => {
    const navElements = document.getElementById(item.nav);
    const hoverElement = document.getElementById(item.hover);
    let navHovered = true;
    let hoverHovered = true;

    navElements.addEventListener('mouseenter', function() {
        navHovered = true;
        hoverElement.classList.remove('hidden');
    });
    navElements.addEventListener('mouseleave', function() {
        navHovered = false;
        hideHoverIfBothNotHovered();
    });

    hoverElement.addEventListener('mouseleave', function() {
        hoverHovered = false;
        hideHoverIfBothNotHovered();
    });
    hoverElement.addEventListener('mouseenter', function() {
        hoverHovered = true;
        hoverElement.classList.remove('hidden');
    });

    function hideHoverIfBothNotHovered() {
        if (!navHovered && !hoverHovered) {
            hoverElement.classList.add('hidden');
        }
    }
});

const settingIcon = document.getElementById('setting-icon');
const settingBar = document.getElementById('setting-bar');
const settingBarEx = document.getElementById('setting-bar-exit');
const rlt = document.getElementById('rtl');
const ltr = document.getElementById('ltr');

settingIcon.addEventListener('click',function(){
    if(!settingBar.classList.contains('reve')){
        settingBar.classList.add('active');
    }else{
        settingBar.classList.remove('reve')
    }
});
settingBarEx.addEventListener('click',function(){
    if(settingBar.classList.contains('reactive')){
        settingBar.classList.remove('active')
    }else{
        settingBar.classList.add('reve')
    }
})
document.addEventListener('click', function(event) {
    if (!settingBar.contains(event.target) && !settingIcon.contains(event.target)) {
        if(settingBar.classList.contains('reactive')){
            settingBar.classList.remove('active')
        }else{
            settingBar.classList.add('reve')
        }
    }
});
// Chuyển sang chế độ RTL
rlt.addEventListener('click', function() {
    settingBar.classList.remove('right-0');
    settingBar.classList.add('left-0');
    settingBar.classList.remove('reactive');
    settingIcon.classList.remove('right-0');
    settingIcon.classList.add('left-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    ltr.classList.remove('bg-black', 'text-white');
    ltr.classList.add('text-zinc-700');
});

// Chuyển sang chế độ LTR
ltr.addEventListener('click', function() {
    settingBar.classList.remove('left-0');
    settingBar.classList.add('right-0');
    settingBar.classList.add('reactive');
    settingIcon.classList.remove('left-0');
    settingIcon.classList.add('right-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    rlt.classList.remove('bg-black', 'text-white');
    rlt.classList.add('text-zinc-700');
});
const hots = document.getElementById('hots');
const netflixElements = document.querySelectorAll('.netflix');
const netflixBG = document.querySelectorAll('.netflix-bg');
const followIconHover = document.querySelectorAll('.follow-icon');

hots.addEventListener('click', function () {
    netflixElements.forEach(function (netflix) {
        netflix.classList.add('hotstar');
        netflix.classList.remove('netflix');
    });
    netflixBG.forEach(function (netflix) {
        netflix.classList.add('hotstar-bg');
        netflix.classList.remove('netflix');
    });
    followIconHover.forEach(function (icon) {
        icon.classList.remove('hover:bg-red-600');
        icon.classList.add('hover:bg-blue-700');
    });
});