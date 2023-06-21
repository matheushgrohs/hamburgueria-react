import { UserProvider } from './contexts/UserContext';
import RoutesMain from './routes/routes';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <GlobalStyle />
        <RoutesMain />
      </UserProvider>
    </div>
  );
}

export default App;
