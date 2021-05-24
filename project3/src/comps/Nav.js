const Nav = () => {
    return (
        <nav className="bg-gray-900 ">
            <ul className="">
                <li className='inline text-red-900 p-2 hover:bg-white'><a href='/'> Home </a></li>
                <li className='inline text-red-900 p-2 hover:bg-white'><a href='/About'> About </a></li>
                <li className='inline text-red-900 p-2 hover:bg-white'><a href='/Contact'> Contact </a></li>
                <li className='inline text-red-900 p-2 hover:bg-white'><a href='/Todos'> Todos </a></li>
            </ul>
        </nav>
    )
}
export default Nav;