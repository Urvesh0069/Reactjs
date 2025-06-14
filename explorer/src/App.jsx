import TailwindCard from './components/tailwindcss'
import BootstrapCard from './components/bootstrap'
import MuiUi from './components/muiui'

function App() {
  return (
    <div className="p-6 space-y-10 bg-gray-100 min-h-screen">
      <TailwindCard />
      <BootstrapCard />
      <MuiUi />
    </div>
  )
}

export default App
