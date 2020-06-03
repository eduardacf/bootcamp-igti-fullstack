let allUsers = [];
let novosUsers = [];

let exibicaoUsers = null;
let contUser = 0;
let contadorSomaIdades = 0;
let contadorMediaIdades = 0;
let contadorSexoM = 0;
let contadorSexoF = 0;

window.addEventListener('load', () => {
  contadorUsers = document.querySelector('#contadorUsers');
  exibicaoUsers = document.querySelector('#exibicaoUsers');
  contadorSexoM = document.querySelector('#contadorSexoM');
  contadorSexoF = document.querySelector('#contadorSexoF');
  contadorSomaIdades = document.querySelector('#contadorSomaIdades');
  contadorMediaIdades = document.querySelector('#contadorMediaIdades');

  fetchUsers();

  inputPesquisar.addEventListener('keyup', buscarUsers);
});

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  allUsers = json.results.map((users) => {
    const { name, picture, dob, gender } = users;
    return {
      nome: name.first + ' ' + name.last,
      foto: picture.thumbnail,
      idade: dob.age,
      sexo: gender,
    };
  });
  console.log(allUsers);
}

const buscarUsers = () => {
  let filtrar = inputPesquisar.value;
  novosUsers = allUsers.filter((user) =>
    user.nome.toLowerCase().includes(filtrar.toLowerCase())
  );
  console.log(novosUsers);
  render();
};

function render() {
  novosUsers = novosUsers.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  let userHTML = '<div>';

  novosUsers.forEach((user) => {
    const { nome, foto, idade } = user;

    const usersHTML = `
    <div id="users-list-grid">
      <div>
        <img src="${foto}" alt="${nome}" class="add"/>
      </div>
      <div>
        <ul>
            <li type="none">${nome}, ${idade}</li>
        </ul>
      </div>
    </div>
    `;

    userHTML += usersHTML;
  });

  userHTML += '</div>';
  exibicaoUsers.innerHTML = userHTML;
  carregarEstatisticas();
}

function carregarEstatisticas() {
  //usuários listados
  contUser = novosUsers.length;
  contadorUsers.innerHTML = contUser;

  // calculo soma idades
  const somaIdades = novosUsers.reduce((acc, curr) => {
    return acc + curr.idade;
  }, 0);
  contadorSomaIdades.innerHTML = somaIdades;

  //sexo masculino
  const userMasc = novosUsers.filter((user) => user.sexo === 'male');
  contadorSexoM.innerHTML = userMasc.length;

  //sexofemino
  const userFem = novosUsers.filter((user) => user.sexo === 'female');
  contadorSexoF.innerHTML = userFem.length;

  //media idade
  const mediaIdades = () => {
    if (novosUsers === 0) {
      return 0;
    }
    return somaIdades / novosUsers.length;
  };
  contadorMediaIdades.innerHTML = mediaIdades();
}

function formatNumber(number) {
  return numberFormat.format(number);
}
