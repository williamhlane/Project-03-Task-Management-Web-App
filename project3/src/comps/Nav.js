import { useLocation } from 'react-router-dom';
const Nav = () => {
    const location = useLocation();
    const pathname = location.pathname;


    return (
        
        <nav className="bg-gray-900 ">
            <ul className="">
                <li className={(pathname === '/') ? 
                'inline text-red-900 p-2 bg-white rounded-t' : 
                'inline text-red-900 p-2 rounded-t hover:bg-white' }>
                    <a href='/'> Home </a>
                </li>

                <li className={(pathname === '/Todos') ? 
                'inline text-red-900 p-2 bg-white rounded-t' : 
                'inline text-red-900 p-2 rounded-t hover:bg-white' }>
                    <a href='/Todos'> Tasks </a>
                </li>

                <li className={(pathname === '/Contact') ? 
                'inline text-red-900 p-2 bg-white rounded-t' : 
                'inline text-red-900 p-2 rounded-t hover:bg-white' }>
                    <a href='/Contact'> Contact </a>
                </li>
                <li className={(pathname === '/About') ? 
                'inline text-red-900 p-2 bg-white rounded-t' : 
                'inline text-red-900 p-2 rounded-t hover:bg-white' }>
                    <a href='/About'> About </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;