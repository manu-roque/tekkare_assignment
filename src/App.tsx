import './App.css';
import Dashboard from './components/Dashboard';
import TopBar from './components/TopBar';
import './i18n';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Dashboard />
    </div>
  );
}

export default App;
