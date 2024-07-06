import {
  HiOutlineMenu,
  HiOutlineShoppingBag,
  HiOutlineViewGrid,
} from 'react-icons/hi';
import { HiMiniMagnifyingGlass, HiOutlineChevronDown } from 'react-icons/hi2';
import { navlinks } from '../../constants';

export default function Navbar() {
  return (
    <header
      className={
        'sticky bg-white top-0 z-50 shadow-lg border-b border-blue-600'
      }>
      <nav
        className={
          'flex items-center w-full justify-between px-2 py-4 lg:py-0'
        }>
        <div className={'inline-flex items-center w-full'}>
          <div className={''}>
            <img
              src='	https://getmasum.com/themes-wp/edumoon/wp-content/themes/edumoon/assets/img/logo.svg'
              alt='nav-logo'
              width={300}
              height={200}
              className={'object-cover h-8 w-full'}
            />
          </div>
          <div className={'inline-flex items-center gap-x-1'}>
            <span>
              <HiOutlineViewGrid />
            </span>
            <span>Categories</span>
          </div>
        </div>

        <div className={'block lg:hidden'}>
          <HiOutlineMenu className={'size-6'} />
        </div>

        <ul className={'hidden lg:flex justify-start gap-x-4 w-full'}>
          {navlinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={'inline-flex items-center gap-x-1'}>
                <span>{link.name}</span>
                <span>
                  <HiOutlineChevronDown />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className={
            'hidden lg:flex lg:py-4 bg-blue-700 relative w-full h-full'
          }>
          <div className='absolute right-0 top-0 h-full w-full origin-bottom skew-x-[50deg] -z-20 transform bg-blue-700' />
          {/* <div className='bg-[url("/header.svg")] absolute -top-6 -right-4 h-16 w-full bg-no-repeat -z-20' /> */}
          <div className={'aspect-[6/1] flex items-center gap-x-4 ml-40'}>
            <span>
              <HiMiniMagnifyingGlass
                className={'fill-white size-6 hover:cursor-pointer'}
              />
            </span>
            <span>
              <HiOutlineShoppingBag
                className={'stroke-white size-6 hover:cursor-pointer'}
              />
            </span>

            <button
              className={
                'bg-white font-medium rounded-full px-6 py-3 hover:bg-blue-600 hover:text-white'
              }>
              Log in / Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
