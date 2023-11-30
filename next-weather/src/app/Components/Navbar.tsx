import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
      setSelectedNavItem: Dispatch<SetStateAction<string>>;
}

function Navbar({ setSelectedNavItem }: NavbarProps) {
      const handleNavigation = (selectedItem: string) => {
            setSelectedNavItem(selectedItem);
      };

      return (
            <>
                  <nav className="w-full mx-auto">
                        <ul className="flex flex-wrap p-3 w-full lg:w-1/3 justify-between items-center">
                              <li>
                                    <Link
                                          className="cursor-pointer py-3 px-4 rounded-lg font-bold text-lg text-slate-700 hover:bg-[#7FD4FC]"
                                          href="/today"
                                          onClick={() =>
                                                handleNavigation('today')
                                          }
                                    >
                                          10 Hours
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          className="cursor-pointer py-3 px-4 rounded-lg font-bold text-lg text-slate-700 hover:bg-[#7FD4FC]"
                                          href="/tomorrow"
                                          onClick={() =>
                                                handleNavigation('tomorrow')
                                          }
                                    >
                                          Tomorrow
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          className="cursor-pointer py-3 px-4 rounded-lg font-bold text-lg text-slate-700 hover:bg-[#7FD4FC]"
                                          href="/forecast"
                                          onClick={() =>
                                                handleNavigation('forecast')
                                          }
                                    >
                                          Next 6 days
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          className="cursor-pointer py-3 px-4 rounded-lg font-bold text-lg text-slate-700 hover:bg-[#7FD4FC]"
                                          href="/weatherMap"
                                          onClick={() =>
                                                handleNavigation('weatherMap')
                                          }
                                    >
                                          Map
                                    </Link>
                              </li>
                        </ul>
                  </nav>
            </>
      );
}

export default Navbar;
