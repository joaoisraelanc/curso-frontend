import Filtro from './assets/componentes/Filtro'
import './App.css'
import BarraDePesquisa from './assets/componentes/BarraDePesquisa'
import Sidebar from './assets/componentes/Sidebar'
import Card from './assets/componentes/Card'

function App() {
  

  return (
    <div className='container'>
   <Sidebar/>
      <div>
   <BarraDePesquisa/>
   <Filtro/>
   <Card/>
      </div>
   </div>

  )
}

export default App
