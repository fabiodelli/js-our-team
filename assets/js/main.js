/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
 */

let team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: './assets/img/angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: './assets/img/scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: '.barbara-ramos-graphic-designer.jpg'
    }
  ];

/*   MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */  

    for (let i = 0; i < team.length; i++) {

        console.log(`Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}, Foto: ${team[i].foto}`);
    }

/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 */

    const teamMembersDiv = document.getElementById("team-members");

    for (let i = 0; i < team.length; i++) {
        const memberDiv = document.createElement("div");
        memberDiv.innerHTML =`Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}, Foto: ${team[i].foto}`;
        teamMembersDiv.appendChild(memberDiv)
    }

    

