import { Link } from "react-router-dom";

function HeaderBar(){
    return (
        <div className="sticky flex flex-row items-center justify-between w-full h-[6vh] border-b-4 pt-4 border-b-violet-600" >
            <nav className="flex items-center justify-start gap-4">
                <div><Link to="/playground">Playground</Link></div>
                <div><Link to="/">Homepage</Link></div>
            </nav>
        </div>
    )
}

export default HeaderBar;