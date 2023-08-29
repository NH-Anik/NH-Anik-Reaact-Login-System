import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="grid">
             <div className="flex items-center justify-between px-5 flex-wrap">
                <Link to={"/"} className="font-bold text-2xl text-one">NH : E-Massage</Link>
                <div className="flex items-center gap-5">
                    <Link to={"/"} className="button" >Sign-In</Link>
                    <Link to={"/registration"} className="button">Sign-Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;