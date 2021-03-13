import GlobalStyle from './theme/globalStyle';
import { Container } from "./components/Container";
import { Contato } from './pages/contato';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Contato/>
      </Container>
    </>
  );
}

export default App;
