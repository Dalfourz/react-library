// import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" element={Home} />
      <Route path="/books" exact render = {() => <Books books={books}/>} />
      <Route path="/books/1" render={() => <BookInfo book={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
