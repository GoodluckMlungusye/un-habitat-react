import { NavLink, Outlet } from 'react-router-dom';
import Copyright from "../components/CopyRight";
import Footer from "../components/Footer";

export default function RootLayout() {
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
                            <li><a href="link">English</a></li>
                            <li><a href="link">普通话</a></li>
                            <li><a href="link">Español</a> </li>
                            <li><a href="link">العربية</a></li>
                            <li><a href="link">Türkçe</a></li>
                            <li><a href="link">Français</a></li>
                            <li><a href="link">Deutsch</a></li>
                            <li><a href="link">Italiano</a></li>
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
                        <li><NavLink className="anchor" to="/">home</NavLink></li>
                        <li><NavLink className="anchor" to="/">about</NavLink></li>
                        <li><NavLink className="anchor" to="courses">courses</NavLink></li>
                        <li><NavLink className="anchor" to="courses">webinars</NavLink></li>
                        <li><NavLink className="anchor" to="courses">Online Classroom</NavLink></li>
                        <li><NavLink className="anchor" to="courses">Global Urban Lectures</NavLink></li>
                        <li><NavLink className="anchor" to="faq">FAQ</NavLink></li>
                    </ul>
                </nav>
        
                <div class="auth">

                    <div class="register">
                        register    
                    </div>

                    <div class="login-container">
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
