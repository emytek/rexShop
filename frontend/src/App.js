import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3 bc">
          <Container>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/product/:id' component={ProductScreen} />
                {/* <Route path='/product/:productId' element={<ProductScreen />} /> */}
                {/* <Route path='/landing' element={<Landing />} />
                <Route path='*' element={<Error />} /> */}
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
