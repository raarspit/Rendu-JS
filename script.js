let escapegame = 'escapeGame.json';
fetch("escapeGame.json")
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);

        const Titre = document.createElement("h1");
        Titre.textContent = `${data.entreprise.nomCommercial}`;
        document.body.appendChild(Titre);
        console.log(Titre);

        const deuxTitre = document.createElement("h2")
        deuxTitre.textContent = `${data.entreprise.phraseAccroche}  ${data.entreprise.texteAppelAction}`;
        document.body.appendChild(deuxTitre);
        console.log(deuxTitre);

        const Bouton = document.createElement("button")
        Bouton.textContent = `${data.entreprise.texteAppelAction}`;
        document.body.appendChild(Bouton);
        console.log(Bouton);

        const liste = document.createElement("ul");
        document.body.appendChild(liste);

        data.entreprise.avantagesClients.forEach(element => {
            console.log(element);
            const li = document.createElement("li");
            li.textContent = element;
            document.body.appendChild(li);
        });

        const listeActivites = document.createElement("ul");
        document.body.appendChild(listeActivites);
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

        document.body.appendChild(listeTemoignages);
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
    });