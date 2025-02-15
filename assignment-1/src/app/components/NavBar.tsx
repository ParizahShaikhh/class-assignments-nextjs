import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
