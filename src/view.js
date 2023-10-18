export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear un elemento ul por cada elemento en data
  const ul = document.createElement("ul");

  data.forEach(createLi);

  function createLi(element) {
    // const li = document.createElement("li");
    // //Inyectar cada li con los datos de cada elemento
    const li = `
    
    <li class="elements">
    <section class="card">

    <section class="front">
      <dl itemscope itemtype="https://schema.org/TVSeries" class="user-name">
        <figure>
          <img src="${element.imageUrl}" class="img"/>
        </figure>
        <dt itemprop=""><b>${element.name}</b></dt><dd itemprop=""> Canal de Television : ${element.channel}</dd>
        <dt itemprop="">Genero: ${element.genre}</dt>
        <dt itemprop="">Transmision: ${element.status}</dt>
        <dt itemprop="">Audiencia: ${element.targetAudience}</dt>
        
        </section>

        <section class="back">
        <dt itemprop=""><b>Descripcion corta:</b> ${element.shortDescription}</dt>
        <dt itemprop=""><b>Descripcion:</b> ${element.description}</dt>
        <dt itemprop=""><b>Hechos importantes:</b> </dt>
        <dd>Fecha de Creacion: ${element.facts.fechaDeCreacionDelPrograma}</dd>
        <dd>Capitulo con mayor rating: ${element.facts.capituloConMayorRating}</dd>
        <dd>Dato curioso: ${element.facts.datoCurioso}</dd>

        </section>
      </dl>

      </section>
    </li>
    
  `;

    //Cada li inyectarlo en la ul
    ul.innerHTML += li;
  }

  //Renderizar el ul, esto debe estar en el main.js

  return ul;
};

export const channelStatistics = (computeStats) => {
  const ul = document.createElement("ul");

  const li = `
    <li> Disney Channel: ${computeStats["Disney Channel"]} </li>
    <li> Cartoon Network: ${computeStats["Cartoon Network"]} </li>
    <li> Discovery Kids: ${computeStats["Discovery Kids"]} </li>
    <li> Nickelodeon: ${computeStats["Nickelodeon"]} </li>
    `;

  ul.innerHTML = li;

  return ul;
};


