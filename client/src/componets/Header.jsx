export default function Header() {
    return (
  
      <header className="container">
        <h1 className="d-none text-danger">Circuit Chasers</h1>
        <nav className="d-inline-block"> 
          <ul className="list-inline">
            <li className="d-inline m-2"><a href="/Community">Community</a></li>
            <li className="d-inline m-2"><a href="/Browse">Browse</a></li>
            <li className="d-inline m-2"><a href="/Merch">Merch</a></li>
            <li className="d-inline m-2"><a href="/News">News</a></li>
            <li className="d-inline m-2"><a href="/Support">Support Us</a></li>
          </ul>
        </nav>
      </header>
  
    );
      
  }