# Referências

- Este projeto foi um dos demais, no curso de **React Native: Desenvolva APPs Nativas para Android e iOS**
- Professores do curso: **Leonardo Moura Leitao, Francisco Wagner Costa Aquino**
- Entidade responsável pelo curso: **COD3R Cursos Online**
  - Plataforma: **Udemy**

[Ver o curso na Udemy](https://www.udemy.com/curso-react-native/)

# Tasks - _Organização e criação de tarefas_

Registe as suas próprias tarefas e veja o estado das mesmas.

### Features

- Adicionar tarefas
- Filtrar tarefas com as seguintes categorias: **hoje**, **amanhã**, **semana** e **mês**.

## Screenshots

### Ecrã principal **(hoje)**

![](https://raw.githubusercontent.com/bgabrielma/react-native-tasks/master/images-presentation/today.png)

> View inicial da aplicação - _(Hoje)_

### Ecrã correspondente ao filtro de **(Amanhã)**

![](https://raw.githubusercontent.com/bgabrielma/react-native-tasks/master/images-presentation/tomorrow.png)

> View da aplicação - _(Amanhã)_

### Ecrã correspondente ao filtro de **(Semanas)**

![](https://raw.githubusercontent.com/bgabrielma/react-native-tasks/master/images-presentation/nextweek.png)

> View da aplicação - _(Próxima semana)_

### Ecrã correspondente ao filtro de **(Meses)**

![](https://raw.githubusercontent.com/bgabrielma/react-native-tasks/master/images-presentation/nextmonth.png)

> View da aplicação - _(Próximo mês)_

# Execução do servidor

- Será necessário ter instalado um software que forneça uma base de dados **MySQL** local **_na porta :3306_**
  - Xampp
  - Wamp
  - Mamp
  - Lamp
  - **entre outros**
- Abrir o servidor MySQL. **Não será necessário fazer criações de tabelas nem inserção de dados de forma manual**.
  - Certifique-se que o servidor está alocado na porta **_3306_**.
  - Tenha em conta que o servidor irá alocar na porta **_3000_**. Verifique, portanto, a **disponibilidade** da mesma.
- Abra um novo separador da sua shell ou do seu editor de comandos

  - Volte ao diretório raiz do projeto e em seguida:
    - `cd backend && nodemon`
  - Servidor em execução **_:)_**

# Instalação e execução da aplicação

`$ npm install -g react-native-cli`

- [Consultar instalação completa do **React Native CLI**](https://facebook.github.io/react-native/docs/getting-started)

`$ git clone https://github.com/bgabrielma/react-native-tasks .`

`$ cd react-native-tasks && npm install`

`$ react-native run-android`

- Ter atenção aos seguintes passos:

  - **Entrar em src/common.js**
    - `$ cd src\common.js`

  ### Caso estiver a utilizar o emulador do [**Genymotion**](https://www.genymotion.com/) altere parte do código para:

  #### Código - (endereço a usar: http://10.0.3.2:3000)

  #### 3000 - porta que será usada pelo servidor

  ```javascript
  import { Alert, Platform } from "react-native";

  const server =
    Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.3.2:3000";

  function showError(err) {
    Alert.alert("Ops!, ocorreu um problema!", `Mensagem: ${err}`);
  }

  export { server, showError };
  ```

  ### Caso estiver a utilizar o emulador do [**Android Studio Emulator**](https://developer.android.com/studio/run/emulator) altere parte do código para:

  #### Código - (endereço a usar: http://10.0.2.2:3000)

  #### 3000 - porta que será usada pelo servidor

  ```javascript
  import { Alert, Platform } from "react-native";

  const server =
    Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.2.2:3000";

  function showError(err) {
    Alert.alert("Ops!, ocorreu um problema!", `Mensagem: ${err}`);
  }

  export { server, showError };
  ```

- [Source](https://stackoverflow.com/questions/5528850/how-do-you-connect-localhost-in-the-android-emulator)
