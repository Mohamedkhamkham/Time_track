import Navigation from './components/Navigation/Navigation'
import BottomNav from './components/Footer/BottomNav'
import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <BottomNav />
    </div>
  )
}

export default App
