let content = document.getElementById('content');

let removeChildNodes = (main) => {
    let main = document.querySelector(main);
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

let runMenu = () => {
    removeChildNodes(main);
    let main = document.querySelector('.main');

    let container = document.createElement('div');
    container.setAttribute('class', 'container');

    let heading = document.createElement('h3');
    heading.setAttribute('class', 'item');
    heading.textContent = "Heading";

    container.append(heading);

    main.append(container);

}


let runTemplate = () => {
    // HEADER
    let header = document.createElement('header');
    header.classList.add('header');

    // LOGO
    let title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "RESTOBAR";

    // -- NAVIGATION START --

    // HOME
    let linkHome = document.createElement('span');
    linkHome.textContent = 'HOME';
    linkHome.classList.add('link');
    
    // MENU
    let linkMenu = document.createElement('span');
    linkMenu.textContent = 'MENU';
    linkMenu.classList.add('link');
    linkMenu.addEventListener('click', runMenu);

    // CONTACT
    let linkContact = document.createElement('span');
    linkContact.textContent = 'CONTACT';
    linkContact.classList.add('link');

    header.append(title, linkHome, linkMenu, linkContact);

    // MAIN CONTENT
    let main = document.createElement('div');
    main.classList.add('main');

    // INFO
    let info = document.createElement('h2');
    info.classList.add('info');
    info.textContent = "Although Caribbean food has a rich and complicated history, the secret to making it is very simple. The best food is always created with love. And love demands that you make no compromises or take no shortcuts.";
    main.append(info);

    // FOOTER
    let footer = document.createElement('footer');

    content.append(header, main, footer);
}

export { 
    runTemplate,
    runMenu
};