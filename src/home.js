export const renderHomePage = () => {
    const contentDiv = document.querySelector('#content');

    const jumbotron = document.createElement('div');
    jumbotron.classList.add('jumbotron');

    const jumbotronHeader = document.createElement('h1');
    jumbotronHeader.classList.add('display-5');
    jumbotronHeader.textContent = 'Best Coffee Shop With Modern Style';

    const jumbotronLeadContent = document.createElement('p');
    jumbotronLeadContent.classList.add('lead');
    jumbotronLeadContent.textContent = 'Enjoy the day with delicious drinks and food served in a comfortable place in carrying out activities';
    
    const startLineBreak = document.createElement('hr');
    startLineBreak.classList.add('my-3');

    const imgFig = document.createElement('figure');

    const img = document.createElement('img');
    img.src = "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img.alt = "Contour cafe";
    img.classList.add('img-fluid');

    const imgCaption = document.createElement('figcaption');
    imgCaption.innerHTML = `Photo by <a href="https://unsplash.com/@nputra?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nafinia Putra</a> on <a href="https://unsplash.com/photos/black-kitchen-appliance-on-kitchen-island-with-pendant-lights-Kwdp-0pok-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`
    
    const endLineBreak = document.createElement('hr');
    endLineBreak.classList.add('my-3');

    jumbotron.appendChild(jumbotronHeader);
    jumbotron.appendChild(jumbotronLeadContent);
    jumbotron.appendChild(startLineBreak);
    imgFig.appendChild(img);
    imgFig.appendChild(imgCaption);
    jumbotron.appendChild(imgFig);
    jumbotron.appendChild(endLineBreak);
    contentDiv.appendChild(jumbotron);
}