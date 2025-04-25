import './header.css'
import Logo from '../../assets/logo.webp';
import { DropDownMenu } from '../user';
import { Image } from '@chakra-ui/react';

interface HeaderProps {
    handleSignOut: () => void;
}

const Header = ({handleSignOut}: HeaderProps) => {

    return (
        <header className='header'>
            <Image src={Logo} w="10%" alt="Logo" />
            <div className='nav-left'>
                <DropDownMenu handleSignOut={handleSignOut} />
            </div>
        </header>
    );
};

export default Header;