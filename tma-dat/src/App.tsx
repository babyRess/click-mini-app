import WebApp from '@twa-dev/sdk';
import Menu from './components/menu/menu';
WebApp.enableClosingConfirmation();

function App() {
  return (
    <>
      <Menu />
    </>
  );
}

export default App;
