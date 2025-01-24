import { Link } from 'react-router-dom';

export default function Button({link, text, variant}) {
    return (
        <>
            <Link to={link} className={`mx-3 btn ${variant}`} >{text}</Link>
        </>
    )
}