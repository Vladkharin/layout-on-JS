
function create (tag) {
    return document.createElement(tag)
}

function addClass (name, className){
    return name.classList.add(className)
}

function setAttribute (name, nameAttribute, valueAttribute) {
    return name.setAttribute(nameAttribute, valueAttribute)
}

function addOnPage (nameParent, nameChild) {
    return nameParent.appendChild(nameChild)
}

function editTextContent (name, text){
    return name.textContent = text
}

// function cycle (tag, nameParent, nameChild, countElements) {
//     for (i = 0; i <= countElements; i++){
//         window[tag] = create(tag)
//         addOnPage(nameParent, tag)
//     }
// }

//HEADER

const header = create('header')
addClass(header, 'header')
setAttribute(header, 'id', 'header')

const headerContainer = create('div')
addClass(headerContainer, 'container')

const linkLogo = create('a')
setAttribute(linkLogo, 'href', '#')
addClass(linkLogo, 'header-logo')

const logo = create('img')
setAttribute(logo, 'src', "assets/images/logo.svg")
setAttribute(logo, 'alt', "logo")

const nav = create('nav')
addClass(nav, 'header-nav')

const firstSpanNav = create('span')
editTextContent(firstSpanNav, 'Services')

const secondSpanNav = create('span')
editTextContent(secondSpanNav, 'Product')

const thirdSpanNav = create('span')
editTextContent(thirdSpanNav, 'Technology')

const fourthSpanNav = create('span')
editTextContent(fourthSpanNav, 'About')

const fifthSpanNav = create('span')
editTextContent(fifthSpanNav, 'Client')

const sixthSpanNav = create('span')
editTextContent(sixthSpanNav, 'Partner')

const headerContacts = create('div')
addClass(headerContacts, 'header-contacts')

const firstLinkContacts = create('a')
addClass(firstLinkContacts, 'header-contacts-home')
setAttribute(firstLinkContacts, 'href', '#')

const firstLinkContactsImg = create('img')
setAttribute(firstLinkContactsImg, 'src', 'assets/icons/home.svg')
setAttribute(firstLinkContactsImg, 'alt', 'icons')

const secondLinkContacts = create('a')
setAttribute(secondLinkContacts, 'href', '#')

const secondLinkContactsImg = create('img')
setAttribute(secondLinkContactsImg, 'src', 'assets/icons/mail.svg')
setAttribute(secondLinkContactsImg, 'alt', 'icons')

const thirdLinkContacts = create('a')
setAttribute(thirdLinkContacts, 'href', '#')

const thirdLinkContactsImg = create('img')
setAttribute(thirdLinkContactsImg, 'src', 'assets/icons/shuffle.svg')
setAttribute(thirdLinkContactsImg, 'alt', 'icons')

const headerBtn = create('button')
addClass(headerBtn, 'header-menu-button')

const firstDivider = create('span')
const secondDivider = create('span')
const thirdDivider = create('span')

const headerMenuMobile = create('div')
addClass(headerMenuMobile, 'header-menu-mobile')

const headerMobileContainer = create('div')
addClass(headerMobileContainer, 'container')

const navMobile = create('nav')
addClass(navMobile, 'header-menu-mobile-nav')

const firstLinkNavMobile = create('a')
setAttribute(firstLinkNavMobile, 'href', '#')
editTextContent(firstLinkNavMobile, 'Services')

const secondLinkNavMobile = create('a')
setAttribute(secondLinkNavMobile, 'href', '#')
editTextContent(secondLinkNavMobile, 'Product')

const thirdLinkNavMobile = create('a')
setAttribute(thirdLinkNavMobile, 'href', '#')
editTextContent(thirdLinkNavMobile, 'Technology')

const fourthLinkNavMobile = create('a')
setAttribute(fourthLinkNavMobile, 'href', '#')
editTextContent(fourthLinkNavMobile, 'About')

const fifthLinkNavMobile = create('a')
setAttribute(fifthLinkNavMobile, 'href', '#')
editTextContent(fifthLinkNavMobile, 'Client')

const sixthLinkNavMobile = create('a')
setAttribute(sixthLinkNavMobile, 'href', '#')
editTextContent(sixthLinkNavMobile, 'Partner')

const headerContactsMobile = create('nav')
addClass(headerContactsMobile, 'header-menu-mobile-contacts')

const firstLinkContactsMobile = create('a')
setAttribute(firstLinkContactsMobile, 'href', '#')

const firstContactsImgMobile = create('img')
addClass(firstContactsImgMobile, 'header-contacts-home')
setAttribute(firstContactsImgMobile, 'src', 'assets/icons/home.svg')
setAttribute(firstContactsImgMobile, 'alt', 'icons')

const secondLinkContactsMobile = create('a')
setAttribute(secondLinkContactsMobile, 'href', '#')

const secondContactsImgMobile = create('img')
setAttribute(secondContactsImgMobile, 'src', 'assets/icons/mail.svg')
setAttribute(secondContactsImgMobile, 'alt', 'icons')

const thirdLinkContactsMobile = create('a')
setAttribute(thirdLinkContactsMobile, 'href', '#')

const thirdContactsImgMobile = create('img')
setAttribute(thirdContactsImgMobile, 'src', 'assets/icons/shuffle.svg')
setAttribute(thirdContactsImgMobile, 'alt', 'icons')

addOnPage(document.body, header)
addOnPage(header, headerContainer)

// logo
addOnPage(headerContainer, linkLogo)
addOnPage(linkLogo, logo)

//nav
addOnPage(headerContainer, nav)

addOnPage(nav, firstSpanNav)
addOnPage(nav, secondSpanNav)
addOnPage(nav, thirdSpanNav)
addOnPage(nav, fourthSpanNav)
addOnPage(nav, fifthSpanNav)
addOnPage(nav, sixthSpanNav)

addOnPage(headerContainer, headerContacts)

addOnPage(headerContacts, firstLinkContacts)
addOnPage(headerContacts, secondLinkContacts)
addOnPage(headerContacts, thirdLinkContacts)

addOnPage(firstLinkContacts, firstLinkContactsImg)
addOnPage(secondLinkContacts, secondLinkContactsImg)
addOnPage(thirdLinkContacts, thirdLinkContactsImg)

addOnPage(headerContainer, headerBtn)
addOnPage(headerBtn, firstDivider)
addOnPage(headerBtn, secondDivider)
addOnPage(headerBtn, thirdDivider)

addOnPage(headerContainer, headerMenuMobile)
addOnPage(headerMenuMobile, headerMobileContainer)
addOnPage(headerMobileContainer, navMobile)
addOnPage(navMobile, firstLinkNavMobile)
addOnPage(navMobile, secondLinkNavMobile)
addOnPage(navMobile, thirdLinkNavMobile)
addOnPage(navMobile, fourthLinkNavMobile)
addOnPage(navMobile, fifthLinkNavMobile)
addOnPage(navMobile, sixthLinkNavMobile)

addOnPage(headerMobileContainer, headerContactsMobile)

addOnPage(headerContactsMobile, firstLinkContactsMobile)
addOnPage(headerContactsMobile, secondLinkContactsMobile)
addOnPage(headerContactsMobile, thirdLinkContactsMobile)

addOnPage(firstLinkContactsMobile, firstContactsImgMobile)
addOnPage(secondLinkContactsMobile, secondContactsImgMobile)
addOnPage(thirdLinkContactsMobile, thirdContactsImgMobile)


//MAIN

const main = create('main')
addClass(main, 'main')

const mainContainer = create('div')
addClass(mainContainer, 'container')

const mainLeft = create('div')
addClass(mainLeft, 'main-left')

const mainLeftH1 = create('h1')
editTextContent(mainLeftH1, 'Making the most of the ever-growing')

const mainLeftH1br = create('br')

const mainLeftH1span = create('span')
editTextContent(mainLeftH1span, 'Information Technology')

const mainLeftP = create('p')
editTextContent(mainLeftP, 'Managed by a team of professional experts with extensive experience and impressive track records')

const mainLeftLink = create('a')
addClass(mainLeftLink, 'main-button')
setAttribute(mainLeftLink, 'href', '#')
editTextContent(mainLeftLink, 'Read More')

const mainRight = create('div')
addClass(mainRight, 'main-right')

const mainRightImg = create('img')
setAttribute(mainRightImg, 'src', 'assets/images/main-image.svg')
setAttribute(mainRightImg, 'alt', 'photo')

addOnPage(document.body, main)

addOnPage(main, mainContainer)

addOnPage(mainContainer, mainLeft)
addOnPage(mainContainer, mainRight)

addOnPage(mainLeft, mainLeftH1)
addOnPage(mainLeftH1, mainLeftH1br)
addOnPage(mainLeftH1, mainLeftH1span)

addOnPage(mainLeft, mainLeftP)
addOnPage(mainLeft, mainLeftLink)

addOnPage(mainRight, mainRightImg)


//FOOTER

const footer = create('footer')
addClass(footer, 'footer')

const footerCopy = create('div')
addClass(footerCopy, 'footer-copy')

const footerContainer = create('div')
addClass(footerContainer, 'container')
editTextContent(footerContainer, 'Copyright © 2015 - ')

const footerContainerB = create('b')
editTextContent(footerContainerB, 'Dwidasa Samsara Indonesia')

addOnPage(document.body, footer)

addOnPage(footer, footerCopy)

addOnPage(footerCopy, footerContainer)

addOnPage(footerContainer, footerContainerB)

document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('#header')
    const menuButtonElement = headerElement.querySelector('.header-menu-button')

    menuButtonElement.addEventListener('click', () => {
        headerElement.classList.toggle('menu-open')
    })
})
