import './App.css';
import LinkComponent from './LinkComponent';
import LabelContainerComponent from './LabelContainerComponent';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <Container>
        <LinkComponent />
        <LabelContainerComponent />
      </Container>
    </div>
  );
}

export default App;
