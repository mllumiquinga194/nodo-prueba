function compare(a, b) {

  if (a.champions > b.champions) {
    return -1;
  }
  if (a.champions < b.champions) {
    return 1;
  }
  return 0;
}

const creaObj = array => {
  let objeto = {};

  array.forEach( items => {
    objeto = Object.assign(objeto, items);
  });

  return objeto;
}

function agregar(equipo) {

  // agrego el equipo al arreglo de equipos
  teams.push(equipo);

  // relaciono el equipo con la liga
  const team = leagues.filter(liga => liga.country === equipo.country);

  // objeto con el id del equipo y id de la liga al que pertenece
  var newEquipoLiga = {
    teamId: equipo.id,
    leagueId: team[0].id
  }

  // objeto con el id del equipo nuevo con su numero de champions
  var newEquipoWins = {
    teamId: equipo.id,
    wins: 4
  }

  // Relaciono el equipo al arreglo de teamsByLeague
  teamsByLeague.push(newEquipoLiga);

  // agrego el numero de victorias del equipo nuevo al arreglo winsByTeams
  winsByTeams.push(newEquipoWins);
}

// No editar
const teams = [
  { id: 1, country: 'Spain', name: 'Real Madrid C.F.' },
  { id: 2, country: 'Italy', name: 'A.C. Milan' },
  { id: 3, country: 'Spain', name: 'Futbol Club Barcelona' },
  { id: 4, country: 'Germany', name: 'FC Bayern Munich' },
  { id: 5, country: 'England', name: 'Liverpool F.C.' },
  { id: 6, country: 'Netherlands', name: 'AFC Ajax' },
  { id: 7, country: 'Italy', name: 'Inter Milan' },
  { id: 8, country: 'England', name: 'Manchester United F.C.' },
  { id: 9, country: 'England', name: 'Chelsea F.C.' },
  { id: 10, country: 'Portugal', name: 'FC Porto' },
  { id: 11, country: 'Germany', name: 'Borussia Dortmund' },
  { id: 12, country: 'Italy', name: 'Juventus FC' },
  { id: 13, country: 'France', name: 'Olympique Marseille' }

]

const leagues = [
  { id: 1, country: 'England', name: 'Premier League' },
  { id: 2, country: 'Germany', name: 'Bundesliga' },
  { id: 3, country: 'Netherlands', name: 'Eredivisie' },
  { id: 4, country: 'Spain', name: 'La Liga' },
  { id: 5, country: 'Italy', name: 'Serie A' },
  { id: 6, country: 'Portugal', name: 'Liga NOS' },
  { id: 7, country: 'France', name: 'Lige 1' }
]

const teamsByLeague = [
  { teamId: 12, leagueId: 5 },
  { teamId: 6, leagueId: 3 },
  { teamId: 2, leagueId: 5 },
  { teamId: 3, leagueId: 4 },
  { teamId: 4, leagueId: 2 },
  { teamId: 8, leagueId: 1 },
  { teamId: 10, leagueId: 6 },
  { teamId: 5, leagueId: 1 },
  { teamId: 7, leagueId: 5 },
  { teamId: 9, leagueId: 1 },
  { teamId: 11, leagueId: 2 },
  { teamId: 1, leagueId: 4 },
  { teamId: 13, leagueId: 7 }
]

const winsByTeams = [
  { teamId: 10, wins: 2 },
  { teamId: 6, wins: 4 },
  { teamId: 5, wins: 5 },
  { teamId: 1, wins: 13 },
  { teamId: 7, wins: 3 },
  { teamId: 4, wins: 5 },
  { teamId: 8, wins: 3 },
  { teamId: 2, wins: 7 },
  { teamId: 9, wins: 1 },
  { teamId: 3, wins: 5 },
  { teamId: 11, wins: 1 },
  { teamId: 12, wins: 2 },
  { teamId: 13, wins: 1 }
]

/*
  SECCIÓN PROBLEMAS
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Puede utilizar funciones auxiliares como apoyo para tener una descomposición de código mas clara al momento de lectura.
    - Su prueba debe ejecutarse sin errores con: node logic-test.js
*/

// 0 Arreglo con los ids de los equipos (función de ejemplo)
function listTeamsIds() {
  return teams.map((client) => client.id)
}

// 1 Arreglo con los nombres de los equipos y el país al que pertenecen, ordenados alfabéticamente por el nombre de su país de origen.
function listTeamsByCountry() {

  // Utilicé el metodo SORT() con una funcion de comparacion para ordenar los equipos alfabeticamente por pais.
  return teams.sort((a, b) => (a.country < b.country ? -1 : a.country > b.country ? 1 : 0)).map(item => [item.country, item.name]);
}

// 2 Arreglo con los nombres de los equipos ordenados de mayor a menor por la cantidad de victorias en champions league.
function sortTeamsByWins() {
  // CODE HERE
  const equipos = teams.map((equipo) => {
    // con el metodo map() obtengo cada equipo, con el id de cada equipo puedo buscar en el arreglo winsByTeams las victoria de ese equipo
    const wins = winsByTeams.find(wins => wins.teamId === equipo.id);

    // Retorno un objeto con el equipo y el numero de chamspions por equipo
    return {
      equipo: equipo.name,
      champions: wins.wins
    }

  });

  // Ordeno de mayor a menor
  return equipos.sort(compare).map(item => item.equipo);
}

// 3 Arreglo de objetos en donde se muestre el nombre de las ligas y la sumatoria de las victorias de los equipos que pertenecen a ellas.
function leaguesWithWins() {
  // CODE HERE
  const ligas = leagues.map(liga => {
    var champions = 0;

    // Recorro las ligas y las asocio con teamsByLeague.
    teamsByLeague.forEach(team => {
      if (liga.id === team.leagueId) {
        // Para cada equipo que sea igual en ID al existente en winsByTeams, sumo lus victorias. tomando en cuenta que en este punto, estoy ubicado en una liga en especifico
        champions += winsByTeams.find(items => items.teamId === team.teamId).wins;
      }
    });

    // Retorno un objeto con el nombre de la liga y las sumatorias de las champions ganadas por esas ligas
    return {
      liga: liga.name,
      champions
    }
  });

  return ligas;
}

// 4 Objeto en que las claves sean los nombres de las ligas y los valores el nombre del equipo con la menor cantidad de victorias en champions.
function leaguesWithTeamWithLestWins() {
  // CODE HERE

  const ligas = leagues.map(liga => {
    var champions = 10;
    var aux;
    // Recorro las ligas y las asocio con teamsByLeague.
    teamsByLeague.forEach(team => {
      aux = 0;
      if (liga.id === team.leagueId) {
        // Para cada equipo que sea igual en ID al existente en winsByTeams, sumo lus victorias. tomando en cuenta que en este punto, estoy ubicado en una liga en especifico
        aux = winsByTeams.find(items => items.teamId === team.teamId);
        
        if (aux.wins <= champions) {
          champions = aux.wins;
          nameEquipo = teams.find( nameEquipo => nameEquipo.id === aux.teamId ).name;
        }
      }
    });
    
    return {
      [liga.name]: nameEquipo
    }
  });
  return creaObj(ligas);
}

// 5 Objeto en que las claves sean los nombres de las ligas y los valores el nombre del equipo con la mayor cantidad de victorias en champions.

function leaguesWithTeamWithMostWins() {
  // CODE HERE
  const ligas = leagues.map(liga => {
    var champions = 0;
    var aux;
    // Recorro las ligas y las asocio con teamsByLeague.
    teamsByLeague.forEach(team => {
      aux = 0;
      if (liga.id === team.leagueId) {
        // Para cada equipo que sea igual en ID al existente en winsByTeams, sumo lus victorias. tomando en cuenta que en este punto, estoy ubicado en una liga en especifico
        aux = winsByTeams.find(items => items.teamId === team.teamId);
        
        if (aux.wins >= champions) {
          champions = aux.wins;
          nameEquipo = teams.find( nameEquipo => nameEquipo.id === aux.teamId ).name;
        }
      }
    });
    
    return {
      [liga.name]: nameEquipo
    }
  });

  return creaObj(ligas);
}

// 6 Arreglo con los nombres de las ligas ordenadas de mayor a menor por la cantidad de victorias de sus equipos.
function sortLeaguesByTeamsByWins() {
  
  // Ejercicio muy parecido al 3, solo que en este caso, ordeno las ligas de mayor a menos segun las victorias de sus equipos
  const ligas = leaguesWithWins();

  return ligas.sort(compare).map(item => item.liga);

}

// 7 Arreglo con los nombres de las ligas ordenadas de mayor a menor por la cantidad de equipos que participan en ellas.
function sortLeaguesByTeams() {
  // CODE HERE

  // Recorro las ligas 
  const ligas = leagues.map(liga => {
    // creo un nuevo arreglo con los equipos que coincidan en id con esa liga.
    // en este nuevo arreglo tengo los equipos que pertenecen a una liga en especifica
    // al pasarlo por .length, obtengo en numero de equipos exactos.
    const teams = teamsByLeague.filter(wins => liga.id === wins.leagueId).length;

    // retorno la liga y el numero de equipos
    // utilizo el numero de equipos para ordenarlos
    return {
      liga: liga.name,
      champions: teams
    }
  });

  return ligas.sort(compare).map(item => item.liga);
}

// 8 Agregar un nuevo equipo con datos ficticios a "teams", asociarlo a la liga de Francia y agregar un total de 4 victorias en champions.
// Luego devolver el lugar que ocupa este equipo en el ranking de la pregunta 2.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newTeamRanking() {
  // CODE HERE

  // creo un nuevo equipo
  var equipo = { id: 14, country: 'France', name: 'Caracas F.C' };

  // llamo la funcion agregar y mando el equipo como argumento
  agregar(equipo);

  // Llamo a la funcion del ejercicio 2 para obtener su posicion
  //Retorna la Posicion del equipo que coinscida con 'Caracas F.C', le sumo uno ya que los arreglos comienzan por 0.
  // return sortTeamsByWins().indexOf(nameEquip => nameEquip === 'Caracas F.C') + 1;
  return sortTeamsByWins().indexOf('Caracas F.C') + 1;
}

// 9 Realice una función que retorne una promesa con los nombres de los equipos en upper case.
// haga la llamada a la función creada desde esta función y asignarle la respuesta a la variable response.
// recuerde que debe esperar el retorno de función asíncrona para que su resultado pueda ser mostrado por el
// console.log. Utilice async await para la llamada asíncrona a la función.
// NOTA: solo debe crear la función asíncrona y agregar la llamada en la siguiente función.
// Esta funcion retorna una promesa
let namesUpperCase = async () => {

  let names = teams.map(items => items.name.toUpperCase());

  if (!names) {
    throw new Error(`No se encontraron nombres`);
  } else {
    return names;
  }
}

async function getTeamsNamesAsUpperCase() {
  let response;
  // ------MAKE AWAIT CALL HERE------
  response = await namesUpperCase();

  // --------------------------------
  console.log('response:')
  console.log(response)
}


// Impresión de soluciones. No modificar.
console.log('Pregunta 0')
console.log(listTeamsIds())
console.log('Pregunta 1')
console.log(listTeamsByCountry())
console.log('Pregunta 2')
console.log(sortTeamsByWins())
console.log('Pregunta 3')
console.log(leaguesWithWins())
console.log('Pregunta 4')
console.log((leaguesWithTeamWithLestWins()))
console.log('Pregunta 5')
console.log((leaguesWithTeamWithMostWins()))
console.log('Pregunta 6')
console.log((sortLeaguesByTeamsByWins()))
console.log('Pregunta 7')
console.log((sortLeaguesByTeams()))
console.log('Pregunta 8')
console.log((newTeamRanking()))
console.log('Pregunta 9')
console.log(getTeamsNamesAsUpperCase())
