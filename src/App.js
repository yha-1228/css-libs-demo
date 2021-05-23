import DemoBEM from './components/DemoBEM'
import DemoCSSModules from './components/DemoCSSModules'
import DemoStyledComponents from './components/DemoStyledComponents'
import ReactDOMServer from 'react-dom/server'
import './App.css'

const CodeBlock = ({ element }) => {
  return (
    <pre style={{ width: 300, backgroundColor: 'lightgray', whiteSpace: 'pre-wrap' }}>
      <code>{ReactDOMServer.renderToStaticMarkup(element)}</code>
    </pre>
  )
}

const App = () => {
  return (
    <div>
      <h1>Demo</h1>
      <DemoBEM />
      <CodeBlock element={<DemoBEM />} />
      <DemoCSSModules />
      <DemoStyledComponents />
    </div>
  )
}

export default App
