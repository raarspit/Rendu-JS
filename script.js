let escapegame = 'escapeGame.json';
fetch("escapeGame.json")
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);

        const header = document.querySelector('header');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');

        const Titre = document.createElement("h1");
        Titre.textContent = `${data.entreprise.nomCommercial}`;
        header.appendChild(Titre);
        console.log(Titre);

        const deuxTitre = document.createElement("h2")
        deuxTitre.textContent = `${data.entreprise.phraseAccroche}  ${data.entreprise.texteAppelAction}`;
        header.appendChild(deuxTitre);
        console.log(deuxTitre);

        const Bouton = document.createElement("button");
        Bouton.setAttribute('id','Reservez');
        Bouton.addEventListener('click', function(event){
            window.location.href = 'index.html#Bouton'
    });
        Bouton.textContent = `${data.entreprise.texteAppelAction}`;
       header.appendChild(Bouton);
        console.log(Bouton);

        const liste = document.createElement("ul");
        main.appendChild(liste);

        data.entreprise.avantagesClients.forEach(element => {
            console.log(element);
            const li = document.createElement("li");
            li.textContent = element;
            main.appendChild(li);
        });

        const listeActivites = document.createElement("ul");
        listeActivites.setAttribute('id','Choix')
        main.appendChild(listeActivites);
        data.entreprise.activites.forEach(index => {
            const titreActivite = document.createElement('h3');
            titreActivite.textContent = `${index.nom}`;

            const paragrapheActivites = document.createElement('p');
            paragrapheActivites.textContent = `${index.description}`;
            listeActivites.appendChild(titreActivite);
            listeActivites.appendChild(paragrapheActivites);

            const division = document.createElement('div');
            listeActivites.appendChild(division);

            const image = document.createElement('img');
            image.setAttribute('src', index.image);
            division.appendChild(image);
            listeActivites.appendChild(paragrapheActivites);
        })
        const listeTemoignages = document.createElement("ul");
        listeTemoignages.setAttribute('id','Témoignages')

        main.appendChild(listeTemoignages);
        data.entreprise.temoignages.forEach(index => {

            const titrePrenom = document.createElement('h3');
            titrePrenom.textContent = `${index.prenom}`
            listeTemoignages.appendChild(titrePrenom);

            const paragrapheTemoignages = document.createElement('p');
            paragrapheTemoignages.textContent = `${index.typeExperience} ${index.commentaire} `;

            const divisionTemoignages = document.createElement('div');
            listeTemoignages.appendChild(divisionTemoignages);
            
            const imageTemoignages = document.createElement('img');
            imageTemoignages.setAttribute('src', index.image);
            divisionTemoignages.appendChild(imageTemoignages);
            listeTemoignages.appendChild(paragrapheTemoignages);
        })

        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    });