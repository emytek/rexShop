import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/product/:productId' element={<ProductScreen />} />
                {/* <Route path='/landing' element={<Landing />} />
                <Route path='*' element={<Error />} /> */}
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
