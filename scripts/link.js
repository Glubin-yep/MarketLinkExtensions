const observer = new MutationObserver(Main);
const config = { childList: true, subtree: false };
observer.observe(document.body, config);

function Main() {
    try {
        const steamLink = document.querySelector('.steam-link');
        if (steamLink) {
            return;
        }

        console.log("Page loaded");

        let parentElement = document.querySelector('.name.clickable.ng-star-inserted');
        console.log(parentElement);

        const nameSpan = document.querySelector('.mat-mdc-tooltip-trigger');
        console.log(nameSpan.textContent);

        if (!parentElement) {
            parentElement = document.querySelector('.name.ng-star-inserted');
        }

        if (!parentElement || !nameSpan) {
            return
        }

        const nameItem = nameSpan.textContent;
        console.log(nameItem);

        const newLink = document.createElement('a');
        newLink.href = `https://steamcommunity.com/market/listings/730/${nameItem}`;
        newLink.target = '_blank';
        newLink.rel = 'noopener noreferrer';
        newLink.classList.add('steam-link');

        const steamLogo = document.createElement('img');
        let imgPath = chrome.runtime.getURL("images/steam_logo.png");
        steamLogo.src = imgPath;
        steamLogo.alt = 'Steam';
        steamLogo.style.width = '32px';
        steamLogo.style.height = '32px';
        steamLogo.style.borderRadius = '50%';
        steamLogo.style.verticalAlign = 'middle';
        steamLogo.style.marginLeft = '15px';

        newLink.appendChild(steamLogo);

        parentElement.appendChild(newLink);
    } catch (e) {
        console.log(e);
    }
}
