import { NavLink } from 'react-router-dom';
const Nav = () => {
    let NavNotActive = "text-red-900 p-2 rounded-t hover:bg-white";
    let NavActive = "text-red-900 p-2 bg-white rounded-t";

    return (

        <nav className="bg-gray-900 ">
            <ul>
                <li className="inline">
                    <NavLink className={NavNotActive} activeClassName={NavActive} exact to='/'> Home </NavLink>
                </li>

                <li  className="inline">
                    <NavLink className={NavNotActive} activeClassName={NavActive} exact to='/Todos'> Tasks </NavLink>
                </li>

                <li  className="inline">
                    <NavLink className={NavNotActive} activeClassName={NavActive} exact to='/Contact'> Contact </NavLink>
                </li>
                <li  className="inline">
                    <NavLink className={NavNotActive} activeClassName={NavActive} exact to='/About'> About </NavLink>
                </li>
            </ul>
        </nav>

    )
}
export default Nav;
