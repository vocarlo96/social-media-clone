import { Link } from "react-router-dom";

type LinkType = 'home' | 'explore' | 'notification' |
    'message' | 'list' | 'bookmark' |
    'communities' | 'verified' | 'profile' | 'more'

function NavButton({ linkType, to }: { linkType: LinkType, to: string }) {

    let icon;
    switch (linkType) {
        case 'home': {
            icon = 'house'
            break;
        }
        case 'explore': {
            icon = 'magnifying-glass'
            break;
        }
        case 'notification': {
            icon = 'bell'
            break;
        }
        case 'message': {
            icon = 'envelope'
            break;
        }
        case 'list': {
            icon = 'list'
            break;
        }
        case 'bookmark': {
            icon = 'bookmark'
            break;
        }
        case 'profile': {
            icon = 'user'
            break;
        }
        case 'communities': {
            icon = 'users'
            break;
        }

        default:
            icon = 'home'
            break;
    }

    return (
        <Link to={to} className='flex items-center px-[12.5%] py-2 hover:bg-gray-200'>
            <i className={`fa-solid fa-${icon} mr-3`} />
            <p className='capitalize'>{linkType}</p>
        </Link>
    )
}

export default function Nav() {

    return (
        <nav className='max-w-[25%] w-full h-full'>
            <ul className='pt-14'>
                <NavButton to='/' linkType='home' />
                <NavButton to='/' linkType='explore' />
                <NavButton to='/' linkType='notification' />
                <NavButton to='/' linkType='message' />
                <NavButton to='/' linkType='list' />
                <NavButton to='/' linkType='bookmark' />
                <NavButton to='/' linkType='communities' />
                <NavButton to='/profile' linkType='profile' />
            </ul>
        </nav>
    )
}