const observer = new MutationObserver(Main);

const config = { childList: true, subtree: false };
observer.observe(document.body, config);

function Main() {
    const check = document.querySelector('.steam-link');

    if (check) {
        return;
    }

    console.log("Page loaded");

    const parentElement = document.querySelector('.name.clickable.ng-star-inserted');
    const nameSpan = document.querySelector('.mat-mdc-tooltip-trigger');

    if (!parentElement || !nameSpan) {
        return;
    }

    const nameItem = nameSpan.textContent;
    console.log(nameItem);

    const newLink = document.createElement('a');
    newLink.href = `https://steamcommunity.com/market/listings/730/${nameItem}`;
    newLink.target = '_blank';
    newLink.rel = 'noopener noreferrer';
    newLink.classList.add('steam-link');


    const steamLogo = document.createElement('img');
    let imgPath = chrome.runtime.getURL("images/steam_logo.png")
    steamLogo.src = imgPath;
    steamLogo.alt = 'Steam';
    steamLogo.style.width = '32px';  // Example style: width of 50 pixels
    steamLogo.style.height = '32px'; // Example style: height of 50 pixels
    steamLogo.style.borderRadius = '50%'; // Example style: border radius of 50% for a circular shape
    steamLogo.style.verticalAlign  = 'middle'; 
    steamLogo.style.marginLeft = '15px';
   
    newLink.appendChild(steamLogo);

    parentElement.appendChild(newLink);
}
