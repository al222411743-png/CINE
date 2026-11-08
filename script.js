const peliculas = {
  Drama: [
    { t: "Cadena perpetua", a: 1994, d: "Frank Darabont", min: 14, dur: "2 h 22 min", e: "⛓️", c: ["#2b5876", "#4e4376"], s: "Un banquero condenado injustamente encuentra esperanza y amistad tras los muros de una prisión." },
    { t: "Forrest Gump", a: 1994, d: "Robert Zemeckis", min: 12, dur: "2 h 22 min", e: "🍫", c: ["#56ab2f", "#a8e063"], s: "Un hombre sencillo vive, sin proponérselo, los grandes momentos de la historia de Estados Unidos." },
    { t: "Parásitos", a: 2019, d: "Bong Joon-ho", min: 16, dur: "2 h 12 min", e: "🏠", c: ["#232526", "#5a6b5d"], s: "Una familia pobre se infiltra poco a poco en la vida de una familia rica, con consecuencias inesperadas." },
    { t: "Whiplash", a: 2014, d: "Damien Chazelle", min: 14, dur: "1 h 47 min", e: "🥁", c: ["#8e0e00", "#1f1c18"], s: "Un joven baterista enfrenta a un profesor despiadado que lo empuja hasta el límite del talento." },
    { t: "La lista de Schindler", a: 1993, d: "Steven Spielberg", min: 16, dur: "3 h 15 min", e: "🕯️", c: ["#434343", "#000000"], s: "Un empresario alemán salva a más de mil judíos durante el Holocausto." },
    { t: "Titanic", a: 1997, d: "James Cameron", min: 12, dur: "3 h 14 min", e: "🚢", c: ["#1c92d2", "#0a2a5e"], s: "Romance a bordo del célebre transatlántico entre Jack, un artista libre, y Rose, una joven de alta sociedad." },
    { t: "El diario de Noa", a: 2004, d: "Nick Cassavetes", min: 12, dur: "2 h 3 min", e: "💌", c: ["#ff9a9e", "#fad0c4"], s: "Un anciano lee a una mujer la historia de un amor de juventud que sobrevivió a las clases sociales y a la guerra." },
    { t: "Orgullo y prejuicio", a: 2005, d: "Joe Wright", min: 10, dur: "2 h 9 min", e: "🌹", c: ["#a18cd1", "#fbc2eb"], s: "Elizabeth Bennet y el orgulloso señor Darcy descubren que las primeras impresiones pueden engañar." },
    { t: "Casablanca", a: 1942, d: "Michael Curtiz", min: 10, dur: "1 h 42 min", e: "✈️", c: ["#232526", "#8d6e4c"], s: "Un dueño de bar en plena guerra reencuentra a un viejo amor y debe elegir entre ella y lo correcto." },
    { t: "Antes del amanecer", a: 1995, d: "Richard Linklater", min: 14, dur: "1 h 41 min", e: "🚆", c: ["#355c7d", "#c06c84"], s: "Dos desconocidos se conocen en un tren y pasan una noche caminando y conversando por Viena." },
    { t: "Up: una aventura de altura", a: 2009, d: "Pete Docter", min: 0, dur: "1 h 36 min", e: "🎈", c: ["#56ccf2", "#f2994a"], s: "Un viudo ata miles de globos a su casa y viaja a Sudamérica con un niño explorador a bordo." },
    { t: "Intensamente", a: 2015, d: "Pete Docter", min: 0, dur: "1 h 35 min", e: "😢", c: ["#f9d423", "#4facfe"], s: "Las emociones de Riley, Alegría, Tristeza, Furia, Temor y Desagrado, la guían durante una mudanza difícil." },
    { t: "WALL·E", a: 2008, d: "Andrew Stanton", min: 0, dur: "1 h 38 min", e: "🤖", c: ["#f7b733", "#fc4a1a"], s: "Un pequeño robot que limpia la Tierra abandonada se enamora y emprende un viaje por el espacio." },
    { t: "El club de la pelea", a: 1999, d: "David Fincher", min: 18, dur: "2 h 19 min", e: "🥊", c: ["#c31432", "#240b36"], s: "Un oficinista con insomnio funda un club clandestino de peleas con un carismático vendedor de jabón." },
    { t: "Joker", a: 2019, d: "Todd Phillips", min: 18, dur: "2 h 2 min", e: "🃏", c: ["#134e5e", "#71b280"], s: "Un comediante fracasado y marginado cae poco a poco en la locura en una Gotham violenta." },
    { t: "Réquiem por un sueño", a: 2000, d: "Darren Aronofsky", min: 18, dur: "1 h 42 min", e: "💊", c: ["#41295a", "#2f0743"], s: "Cuatro personas persiguen sus sueños mientras las adicciones destruyen sus vidas." }
  ],
  Comedia: [
    { t: "El gran hotel Budapest", a: 2014, d: "Wes Anderson", min: 14, dur: "1 h 39 min", e: "🏨", c: ["#f857a6", "#ff5858"], s: "Un conserje legendario y su joven aprendiz se ven envueltos en el robo de un cuadro renacentista." },
    { t: "Sr. Mom — Mrs. Doubtfire", a: 1993, d: "Chris Columbus", min: 10, dur: "2 h 5 min", e: "👵", c: ["#614385", "#516395"], s: "Un padre divorciado se disfraza de niñera para poder ver a sus hijos todos los días." },
    { t: "Supercool (Superbad)", a: 2007, d: "Greg Mottola", min: 16, dur: "1 h 53 min", e: "🍻", c: ["#f7971e", "#ffd200"], s: "Dos amigos intentan vivir la fiesta de sus vidas antes de terminar la preparatoria." },
    { t: "Una noche en el museo", a: 2006, d: "Shawn Levy", min: 8, dur: "1 h 48 min", e: "🦖", c: ["#0f2027", "#2c5364"], s: "Un vigilante nocturno descubre que todo el museo cobra vida cuando se apagan las luces." },
    { t: "Ted", a: 2012, d: "Seth MacFarlane", min: 16, dur: "1 h 46 min", e: "🧸", c: ["#c33764", "#1d2671"], s: "Un oso de peluche que cobró vida de niño sigue siendo el mejor (y peor) amigo de John." },
    { t: "Shrek", a: 2001, d: "Andrew Adamson", min: 0, dur: "1 h 30 min", e: "👹", c: ["#76b852", "#8dc26f"], s: "Un ogro gruñón rescata a una princesa para recuperar su pantano, junto a un burro que no deja de hablar." },
    { t: "Toy Story", a: 1995, d: "John Lasseter", min: 0, dur: "1 h 21 min", e: "🤠", c: ["#2193b0", "#ffe259"], s: "Woody y Buzz Lightyear, dos juguetes rivales, deben trabajar juntos para volver con su dueño." },
    { t: "Buscando a Nemo", a: 2003, d: "Andrew Stanton", min: 0, dur: "1 h 40 min", e: "🐠", c: ["#00c6ff", "#ff8008"], s: "Un pez payaso cruza el océano para encontrar a su hijo, ayudado por la olvidadiza Dory." },
    { t: "Kung Fu Panda", a: 2008, d: "Mark Osborne", min: 0, dur: "1 h 32 min", e: "🐼", c: ["#e52d27", "#b31217"], s: "Po, un panda fanático del kung fu, es elegido inesperadamente como el Guerrero Dragón." },
    { t: "Mi villano favorito", a: 2010, d: "Pierre Coffin", min: 0, dur: "1 h 35 min", e: "🌙", c: ["#fddb3a", "#355c7d"], s: "Gru planea robar la Luna, pero tres niñas huérfanas cambian sus planes y su corazón." },
    { t: "Los Increíbles", a: 2004, d: "Brad Bird", min: 0, dur: "1 h 55 min", e: "🦸", c: ["#f12711", "#f5af19"], s: "Una familia de superhéroes retirados debe volver a la acción para salvar al mundo." },
    { t: "Una esposa de mentira", a: 2011, d: "Dennis Dugan", min: 14, dur: "1 h 57 min", e: "💍", c: ["#00c9ff", "#f9d423"], s: "Un cirujano plástico finge estar casado para ligar y arrastra a su asistente y a sus hijos a un viaje a Hawái." },
    { t: "¿Qué pasó ayer?", a: 2009, d: "Todd Phillips", min: 18, dur: "1 h 40 min", e: "🎰", c: ["#f7971e", "#ff512f"], s: "Tres amigos despiertan en Las Vegas tras una despedida de soltero sin recordar nada, y sin el novio." },
    { t: "Damas en guerra", a: 2011, d: "Paul Feig", min: 16, dur: "2 h 5 min", e: "👰", c: ["#ee9ca7", "#ffdde1"], s: "Annie, dama de honor de su mejor amiga, compite con otra por ser la favorita antes de la boda." },
    { t: "Hermanastros", a: 2008, d: "Adam McKay", min: 16, dur: "1 h 38 min", e: "🥋", c: ["#373b44", "#4286f4"], s: "Dos hombres adultos y todavía inmaduros deben convivir como hermanos cuando sus padres se casan." }
  ],
  Musical: [
    { t: "La La Land", a: 2016, d: "Damien Chazelle", min: 12, dur: "2 h 8 min", e: "🌆", c: ["#ee9ca7", "#5b3fa0"], s: "Una actriz y un pianista de jazz persiguen sus sueños en Los Ángeles, entre canciones y decisiones difíciles." },
    { t: "Coco", a: 2017, d: "Lee Unkrich", min: 0, dur: "1 h 45 min", e: "💀", c: ["#f12711", "#f5af19"], s: "Miguel viaja a la Tierra de los Muertos para descubrir la verdad sobre su familia y su pasión por la música." },
    { t: "El gran showman", a: 2017, d: "Michael Gracey", min: 8, dur: "1 h 45 min", e: "🎪", c: ["#8e2de2", "#4a00e0"], s: "La historia de P. T. Barnum, quien construyó un espectáculo que cambió el entretenimiento para siempre." },
    { t: "Mamma Mia!", a: 2008, d: "Phyllida Lloyd", min: 10, dur: "1 h 48 min", e: "🏝️", c: ["#00c6ff", "#0072ff"], s: "Antes de su boda, una joven invita a tres posibles padres a una isla griega, al ritmo de ABBA." },
    { t: "Bohemian Rhapsody", a: 2018, d: "Bryan Singer", min: 12, dur: "2 h 14 min", e: "🎤", c: ["#cb2d3e", "#ef473a"], s: "El ascenso de Queen y de Freddie Mercury hasta el legendario concierto del Live Aid." },
    { t: "El rey león", a: 1994, d: "Roger Allers", min: 0, dur: "1 h 28 min", e: "🦁", c: ["#f7971e", "#c0392b"], s: "Simba, joven heredero de la sabana, debe enfrentar su pasado para reclamar su lugar como rey." },
    { t: "Frozen: el reino del hielo", a: 2013, d: "Chris Buck y Jennifer Lee", min: 0, dur: "1 h 42 min", e: "❄️", c: ["#74ebd5", "#9face6"], s: "Anna emprende un viaje para encontrar a su hermana Elsa, cuyos poderes de hielo congelaron el reino." },
    { t: "Moana", a: 2016, d: "Ron Clements y John Musker", min: 0, dur: "1 h 47 min", e: "🌊", c: ["#00b4db", "#0083b0"], s: "Una valiente joven cruza el océano con el semidiós Maui para salvar a su pueblo." },
    { t: "Encanto", a: 2021, d: "Byron Howard y Jared Bush", min: 0, dur: "1 h 49 min", e: "🦋", c: ["#f9d423", "#ff4e50"], s: "Mirabel, la única Madrigal sin poderes mágicos, descubre que su familia está en peligro." },
    { t: "Enredados", a: 2010, d: "Nathan Greno y Byron Howard", min: 0, dur: "1 h 40 min", e: "🏮", c: ["#f6d365", "#fda085"], s: "Rapunzel sale por primera vez de su torre con un ladrón para ver las luces flotantes." },
    { t: "Sing: ¡Ven y canta!", a: 2016, d: "Garth Jennings", min: 0, dur: "1 h 48 min", e: "🐨", c: ["#fc5c7d", "#6a82fb"], s: "Un koala dueño de un teatro organiza un concurso de canto que cambia la vida de sus participantes." },
    { t: "Moulin Rouge!", a: 2001, d: "Baz Luhrmann", min: 14, dur: "2 h 7 min", e: "🌹", c: ["#d31027", "#ea384d"], s: "Un joven poeta se enamora de la estrella de un cabaret parisino en un romance trágico." },
    { t: "Chicago", a: 2002, d: "Rob Marshall", min: 16, dur: "1 h 53 min", e: "🔫", c: ["#1f1c2c", "#928dab"], s: "Dos artistas acusadas de asesinato luchan por la fama y por escapar de la horca en los años veinte." },
    { t: "Rocketman", a: 2019, d: "Dexter Fletcher", min: 18, dur: "2 h 1 min", e: "🎹", c: ["#fc4a1a", "#f7b733"], s: "La vida de Elton John, desde niño prodigio hasta estrella del pop, con sus excesos y su caída." }
  ],
  Crimen: [
    { t: "El Padrino", a: 1972, d: "Francis Ford Coppola", min: 16, dur: "2 h 55 min", e: "🌹", c: ["#1a1a1a", "#6b4423"], s: "El patriarca de una dinastía mafiosa transfiere el control de su imperio a su reacio hijo menor." },
    { t: "Tiempos violentos", a: 1994, d: "Quentin Tarantino", min: 18, dur: "2 h 34 min", e: "🍔", c: ["#f2994a", "#b21f1f"], s: "Las vidas de dos sicarios, un boxeador y una pareja de ladrones se cruzan en Los Ángeles." },
    { t: "Seven: Los siete pecados", a: 1995, d: "David Fincher", min: 18, dur: "2 h 7 min", e: "📦", c: ["#304352", "#d7d2cc"], s: "Dos detectives persiguen a un asesino que basa sus crímenes en los siete pecados capitales." },
    { t: "Entre navajas y secretos", a: 2019, d: "Rian Johnson", min: 12, dur: "2 h 10 min", e: "🔪", c: ["#614385", "#d38312"], s: "Un detective investiga la muerte de un novelista millonario rodeado de una familia llena de secretos." },
    { t: "Atrápame si puedes", a: 2002, d: "Steven Spielberg", min: 12, dur: "2 h 21 min", e: "✈️", c: ["#2193b0", "#6dd5ed"], s: "Un joven estafador falsifica identidades mientras un agente del FBI le sigue los pasos." },
    { t: "Zootrópolis", a: 2016, d: "Byron Howard y Rich Moore", min: 0, dur: "1 h 48 min", e: "🐰", c: ["#11998e", "#38ef7d"], s: "Una coneja policía y un zorro astuto investigan la desaparición de varios animales en la gran ciudad." },
    { t: "Basil, el ratón superdetective", a: 1986, d: "Ron Clements y John Musker", min: 0, dur: "1 h 14 min", e: "🔍", c: ["#3a1c71", "#d76d77"], s: "Un ratón detective al estilo Sherlock Holmes busca a un juguetero secuestrado en el Londres victoriano." },
    { t: "Scooby-Doo", a: 2002, d: "Raja Gosnell", min: 6, dur: "1 h 26 min", e: "🐶", c: ["#7f00ff", "#e100ff"], s: "Scooby y la pandilla se reúnen para resolver un misterio en una isla llena de monstruos." },
    { t: "Los Goonies", a: 1985, d: "Richard Donner", min: 8, dur: "1 h 54 min", e: "🏴‍☠️", c: ["#614385", "#516395"], s: "Un grupo de amigos busca un tesoro pirata para salvar su barrio, perseguidos por una banda de criminales." },
    { t: "Hannibal", a: 2001, d: "Ridley Scott", min: 18, dur: "2 h 11 min", e: "🍷", c: ["#4b0f1a", "#1c1c1c"], s: "Una década después de El silencio de los corderos, Clarice Starling vuelve a seguir la pista del brillante y caníbal Hannibal Lecter." },
    { t: "El silencio de los corderos", a: 1991, d: "Jonathan Demme", min: 18, dur: "1 h 58 min", e: "🦋", c: ["#232526", "#414345"], s: "Una joven agente del FBI pide ayuda al encarcelado Hannibal Lecter para atrapar a un asesino en serie." },
    { t: "Perdida", a: 2014, d: "David Fincher", min: 18, dur: "2 h 29 min", e: "🔎", c: ["#0f2027", "#2c5364"], s: "El día de su aniversario, Amy desaparece y todas las sospechas recaen sobre su esposo Nick." },
    { t: "Scarface: el precio del poder", a: 1983, d: "Brian De Palma", min: 18, dur: "2 h 50 min", e: "🌴", c: ["#ff416c", "#ff4b2b"], s: "Un refugiado cubano construye un imperio de drogas en Miami hasta que su ambición lo destruye." },
    { t: "Sin City", a: 2005, d: "Robert Rodriguez y Frank Miller", min: 18, dur: "2 h 4 min", e: "🌃", c: ["#000000", "#c21500"], s: "Historias de crimen, venganza y corrupción en una ciudad oscura filmada casi en blanco y negro." }
  ]
};

const inputEdad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".genero");
let generoActual = null;
let ultima = null;

function recomendar() {
  const edad = parseInt(inputEdad.value, 10);
  if (!generoActual) return;
  if (isNaN(edad) || edad < 1) {
    resultado.innerHTML = '<p class="vacio">Ingresa una edad válida para continuar.</p>';
    return;
  }
  const opciones = peliculas[generoActual].filter(p => p.min <= edad);
  if (!opciones.length) {
    resultado.innerHTML = '<p class="vacio">Por ahora no tenemos películas de este género para tu edad. Prueba con otro género.</p>';
    return;
  }
  // Evita repetir la misma película si hay más de una
  const candidatas = opciones.length > 1 ? opciones.filter(p => p !== ultima) : opciones;
  const p = candidatas[Math.floor(Math.random() * candidatas.length)];
  ultima = p;
  mostrar(p);
}

function mostrar(p) {
  resultado.innerHTML = `
    <article class="tarjeta">
      <div class="cartel" style="background: linear-gradient(160deg, ${p.c[0]}, ${p.c[1]})">${p.e}</div>
      <div>
        <h2>${p.t}</h2>
        <ul class="meta">
          <li>${p.a}</li><li>${p.dur}</li><li>${p.d}</li>
          <li class="edadmin">${p.min === 0 ? "Todo público" : "+" + p.min}</li>${p.min <= 7 ? "<li>👶 Para niños</li>" : ""}${p.min >= 18 ? "<li>🔞 Para adultos</li>" : ""}
        </ul>
        <p class="sinopsis">${p.s}</p>
        <button class="otra" type="button">Otra recomendación</button>
      </div>
    </article>`;
  resultado.querySelector(".otra").addEventListener("click", recomendar);
  inclinar(resultado.querySelector(".cartel"));
}

// El cartel se inclina siguiendo el mouse
function inclinar(el) {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(600px) rotateY(${x * 24}deg) rotateX(${-y * 24}deg) scale(1.04)`;
  });
  el.addEventListener("mouseleave", () => { el.style.transform = ""; });
}

botones.forEach(b => b.addEventListener("click", () => {
  botones.forEach(x => x.classList.remove("activo"));
  b.classList.add("activo");
  generoActual = b.dataset.genero;
  ultima = null;
  recomendar();
}));
inputEdad.addEventListener("change", () => { ultima = null; recomendar(); });

/* Palomitas flotando: se apartan del mouse */
const lienzo = document.getElementById("polvo");
const ctx = lienzo.getContext("2d");
const mouse = { x: -999, y: -999 };
let palomitas = [];

function ajustar() {
  lienzo.width = innerWidth;
  lienzo.height = innerHeight;
  const n = Math.min(28, Math.floor(innerWidth / 55));
  palomitas = Array.from({ length: n }, () => ({
    x: Math.random() * lienzo.width,
    y: Math.random() * lienzo.height,
    r: Math.random() * 9 + 9,
    vy: Math.random() * .35 + .15,
    vx: (Math.random() - .5) * .3,
    a: Math.random() * Math.PI * 2,
    va: (Math.random() - .5) * .012,
    o: Math.random() * .25 + .55
  }));
}
addEventListener("resize", ajustar);
addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
addEventListener("mouseout", () => { mouse.x = mouse.y = -999; });

function dibujarPalomita(p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.a);
  ctx.globalAlpha = p.o;
  const r = p.r;
  // base amarilla (el grano) y "nubes" cremas encima
  ctx.fillStyle = "#e8b83a";
  ctx.beginPath(); ctx.arc(0, r * .35, r * .45, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#fff6d6";
  [[-.45, -.1, .55], [.45, -.1, .55], [0, -.5, .6], [-.2, .25, .5], [.25, .25, .5]].forEach(([dx, dy, k]) => {
    ctx.beginPath(); ctx.arc(dx * r, dy * r, k * r, 0, Math.PI * 2); ctx.fill();
  });
  ctx.fillStyle = "rgba(220,170,60,.45)";
  ctx.beginPath(); ctx.arc(-.1 * r, .1 * r, r * .22, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function animar() {
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);
  for (const p of palomitas) {
    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const d = Math.hypot(dx, dy);
    if (d < 140 && d > 0) { p.x += (dx / d) * (140 - d) * .07; p.y += (dy / d) * (140 - d) * .07; p.a += .05; }
    p.x += p.vx; p.y += p.vy; p.a += p.va;
    if (p.y > lienzo.height + 30) { p.y = -30; p.x = Math.random() * lienzo.width; }
    if (p.x < -30) p.x = lienzo.width + 30;
    if (p.x > lienzo.width + 30) p.x = -30;
    dibujarPalomita(p);
  }
  requestAnimationFrame(animar);
}
ajustar();
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  palomitas.forEach(dibujarPalomita);
} else {
  animar();
}