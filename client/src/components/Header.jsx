import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

import {FaSun, FaMoon} from 'react-icons/fa';

export default function Header() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(to left, cyan, blue, purple)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  

  return (
    <Navbar className='border-b-2 fixed top-0 left-0 w-full z-50'>
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        Bu
        <span style={gradientStyle}>zz</span>
        Chapter
      </Link>

      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
           className='hidden lg:inline'
           sizing={'sm'}
        //   value={searchTerm}
        //   onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch  className='text-xl'/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-12 mr-2'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon className='text-lg' /> : <FaSun className='text-lg  text-yellow-300' />}

        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />

            }
          >
            <Dropdown.Header>
              <span className='block text-sm mb-3 mt-2'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout} >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'>
                   Home
                </Link>
            </Navbar.Link>

            <Navbar.Link active={path === '/about'} as={'div'}>
                <Link to='/about'>
                    About
                
                </Link>
            </Navbar.Link>

            <Navbar.Link active={path === '/projects'} as={'div'}>
                <Link to='/projects'>
                    Projects
                
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
