import { Link } from 'react-router-dom';

export default function NavLink({ link, text }) {
    return (
        <>
            <Link to={link} className="link link-hover mx-3">{text}</Link>
        </>
    )
}