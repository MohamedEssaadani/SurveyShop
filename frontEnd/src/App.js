import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import HomeView from "./views/HomeView"
import ProductView from "./views/ProductView"
import CartView from "./views/CartView"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart/:id?" component={CartView} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
