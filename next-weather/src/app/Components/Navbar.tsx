import Link from 'next/link';

import Page from '@/app/today/page';

const Navbar = () => {
      return (
            <header className="bg-black sticky top-0 z-10">
                  <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
                        <Link href="/">Home</Link>
                        <Link href="/today">Today</Link>
                  </nav>
            </header>
      );
};

export default Navbar;
