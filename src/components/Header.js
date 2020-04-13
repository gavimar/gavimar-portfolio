import React from 'react';
import { Link} from 'react-router-dom';


const Header = props => {
	return(

		<header className="header">
				<div className="group"></div>
				<div className="main-menu">
      	<nav>
      			<ul>
						<li>
									
									<Link className="main__link" to="./About">ABOUT ME</Link>
								</li>
								<li>
								
									<Link className="main__link" to="./Portfolio">PORTFOLIO</Link>
								</li>
							<li>
									<Link className="main__link" to="./Contact">CONTACT</Link>
								</li>
						</ul>
				</nav>
				
				</div>
		</header>

	)
}

export default Header;


