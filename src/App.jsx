// Hooks são funções que permitem adicionar funcionalidades a componentes funcionais, como o gerenciamento de estado.
// Para usar o useState, você precisa importá-lo do React. Sem isso, o código não funcionaria, pois o React não saberia o que é o useState.

import { useState } from "react";
import lampadaMagica from "./assets/lampadaMagica.png"; // Imagem inicial que será exibida.
import genioComLampada from "./assets/genioComLampada.png"; // Imagem que será exibida quando o usuário clicar no botão.
import "./App.scss";

export default function App() {
  const [lampada, setLampada] = useState(lampadaMagica);

  const genioLampada = () => {
    setLampada(genioComLampada);
  };

  return (
    <main>
      <h1>"Liberte a magia da programação com a lâmpada de Aladdim".</h1>
      <img src={lampada} alt="" />
      <button onClick={genioLampada}>Clique Aqui</button>
    </main>
  );
}
