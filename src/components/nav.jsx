import React from 'react';

class Nav extends React.Component{
  render() {
		return (
      <nav className="layout__navigation">
        <ul className="navigation">
          <li className="menu_os">ScreenInvaders</li>
          <li><a href="#" className="first">Projects</a>
            <ul>
              <li><a href="#">Smartphones</a></li>
                <ul>
                  <li><a href="#">Berichten</a></li>
                  <li><a href="#">Inkomende gesprekken</a></li>
                </ul>
              <li><a href="#">Laptops</a>
                <ul>
                  <li><a href="#">Zoekmachines</a></li>
                  <li><a href="#">Websites</a></li>
                  <li><a href="#">Hackers &amp; Code</a></li>
                </ul>         
              </li>         
              <li><a href="#">Games</a></li>
            </ul>
          </li>
          <li><a href="#">Clients</a>
            <ul>
              <li><a href="#">Log in</a></li>
            </ul>       
          </li>
          <li><a href="#">Team</a>
            <ul>
              <li><a href="#">Luka van den Dungen</a>
                <ul>
                  <li><a href="#">Production</a></li>
                  <li><a href="#">Luka Art</a></li>
                </ul>
              </li>
              <li><a href="#">Dennis Kleyn</a>
                <ul>
                  <li><a href="#">VFX Supervisor</a></li>
                  <li><a href="#">Planet X FX</a></li>
                </ul>
              </li>
              <li><a href="#">Donald Roos</a>
                <ul>
                  <li><a href="#">UI/UX Designer</a></li>
                  <li><a href="#">Bureaudonald</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#" className="last">Preferences</a>
            <ul>
              <li>    
                <a id="cleanup" href="javascript:history.go(0)"><span id="cleanup">Clean up</span></a>
              </li>
              <li>    
                <a id="fullscreen-hint" href="#"><span id="fullscreen-hint">View Full Screen</span></a>
              </li>
            </ul>         
          </li>
        </ul>
      </nav>
		)
	}
}

export default Nav;