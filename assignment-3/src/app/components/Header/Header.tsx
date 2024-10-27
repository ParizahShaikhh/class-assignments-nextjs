import Link from 'next/link';



const Header = () => {
    return (
        <header>
            <nav className='hover:underline flex justify-center space-x-4 py-4 bg-[#295f98] text-white'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/services'>Services</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>
    )
};

export default Header;