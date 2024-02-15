
import './App.css'
import Contador from './paginas/contador/Contador'
import Home from './paginas/home/Home'
import ConcluirTarefa from './paginas/concluirTarefa/ConcluirTarefa';


function App() {


  return (
    <>
      <Home titulo=" Esse é um componete com props"
        texto="agora já estamos trabalhando com props - componente chamado com sucesso" />
        <Contador/>
        <ConcluirTarefa/>
    </>
  )
}

export default App
