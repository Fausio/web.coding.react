import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes'

function Nav() {
    return (

        <div  >
            <p>
                <center>  Nano suit</center>
                <center>  <h5>React: PHP API and MySQL </h5> </center>

            </p>


            <BrowserRouter>




                <nav>
                    <ul>
                        <li>
                            <Link to="/">List users</Link>
                        </li>
                        <li>
                            <Link to="user/create">Create user</Link>
                        </li>
                    </ul>
                </nav>

                <AppRoutes />

            </BrowserRouter>
        </div>

    );
}

export default Nav;