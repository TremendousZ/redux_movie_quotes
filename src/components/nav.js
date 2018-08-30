import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render (){ 
        return (
            <nav>
                <div className = 'navWrapper red'>
                    <Link to ='/' className = 'brand-logo'> Guess that Movie Quote!</Link>
                    <ul className = 'right'>
                        <li>
                        <Link to='/'> Home </Link>
                        </li>
                        <li>
                        <Link to='/about'> About</Link>
                        </li>
                        <li>
                        <Link to = "/secret-list"> Secret List</Link>
                        </li>
                        <li>
                            <Link to='/movie-quote'>Movie Quote</Link>
                        </li>
                        <li>
                            <button className = 'btn blue darken-2'> Sign In </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;