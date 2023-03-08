import { Header } from './components/Header/Header';
function App() {
  return (
    <div>
      <Header />
      <div className="w-20 h-20 bg-kc-red sticky top-0">test</div>
      <div className="h-[1000vh]"></div>
    </div>
  );
}

export default App;
