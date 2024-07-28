import { NavLink, Outlet } from 'react-router-dom';
import Copyright from "../components/CopyRight";
import Footer from "../components/Footer";
import { navigate } from '../actions/navigate';
import navigationLinks from '../data/navigation_links';
import locales from '../data/locales';

export default function RootLayout() {


 const languages = locales.map((locale) => (
    <li key={locale.label}><a href={locale.href}>{locale.label}</a></li>
 ));

  const navLinks = navigationLinks.map((link) => (
    <li key={link.to}>{link.isInnerLink?<NavLink className="anchor" to={link.to}>{link.label}</NavLink> : <a href={link.to}>{link.label}</a>}</li>
  ));

  return (
    <div >

        <header>
            <div className="control">
                <div className="logo">
                    <img src="/assets/images/logo/logo.png" alt="un_habitat"/>
                </div>
                
                <div className="container">
                    <div className="locales">
                        <ul>
                            {languages}
                        </ul>
                  </div>
                    <div className="search-container">
                        <input type="text" placeholder="Search on learn platform"/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>                      
                        </button>
                    </div>
                </div>
            </div>

            <div className="menu">
                <input type="checkbox"  id="menu-bar"/>
                <label for="menu-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ width: '30px', height: '50px' }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
        
                <nav className="navbar">
                    <ul>
                        {navLinks}
                    </ul>
                </nav>
        
                <div class="auth">

                    <div class="register"  onClick={() => navigate('https://learn.unhabitat.org/login/signup.php')}>
                        register    
                    </div>

                    <div class="login-container" onClick={() => navigate('https://learn.unhabitat.org/login/index.php')}>
                        <div class="login" data-name="l-1">
                          Login
                        </div>
                    </div>

                </div>
            </div>
        </header>
        <main>
            <Outlet/>
            <Footer />
            <Copyright />
        </main>
    </div>
  )
}
