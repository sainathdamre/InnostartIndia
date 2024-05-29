import { Link } from "react-router-dom"


function Header() {
    return (
        <>
            <nav className="flex justify-between bg-transparent mb-3">
                <div className="items-center p-3">
                    <h4 className="text-xl font-semibold">
                        <span className="text-orange-500 font-bold text-3xl">INNO</span><span className="font-bold text-3xl">START</span> <span className="text-green-600 text-3xl font-bold">   INDIA</span>
                    </h4>
                </div>
                <div className="flex gap-5 p-1 items-center px-5">
                    <Link>HOME </Link>
                    <Link>GLOBALLY COLLABORATE</Link>
                    <Link>ENTREPRENEURSHIP</Link>
                    <Link>PROJECTS</Link>
                    <Link to='/profile'>PROFILE</Link>
                </div>
            </nav>
        </>
    )
}

export default Header