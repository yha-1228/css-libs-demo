import DemoBEM from './components/DemoBEM'
import DemoCSSModules from './components/DemoCSSModules'
import DemoStyledComponents from './components/DemoStyledComponents'
import './normalize.css'

const App = () => {
  return (
    <div>
      <h1>Demo</h1>
      <DemoBEM />
      <DemoCSSModules />
      <DemoStyledComponents />
    </div>
  )
}

export default App
