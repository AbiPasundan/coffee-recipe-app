import { Link as RouterLink } from 'react-router-dom';

export default function Link({ link, text }) {
    return (
        <>
            <RouterLink to={link} className="link link-hover mx-3">{text}</RouterLink>
        </>
    )
}