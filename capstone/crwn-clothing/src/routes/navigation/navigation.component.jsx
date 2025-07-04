import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/' >
                    <div>Logo</div>
                </Link>
                <div className="linkscontainer">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;