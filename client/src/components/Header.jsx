import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(to left, cyan, blue, purple)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
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
          className='w-12 h-10 '
          color='gray'
          pill
        //   onClick={() => dispatch(toggleTheme())}
        >
          {/* {theme === 'light' ? <FaSun /> : <FaMoon />} */}
        </Button>

        <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>

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
