import {useState, useEffect,React} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import styled from '@emotion/styled';
import CarousalSection from "./Carousal";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
 
const  Header = () => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center hover:bg-gray-light rounded-lg p-2">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about-us" className="flex items-center hover:bg-gray-light rounded-lg p-2">
          Screen2
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/no-page" className="flex items-center hover:bg-gray-light rounded-lg p-2">
         404 Page
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="flex items-center hover:bg-gray-light rounded-lg p-2">
          MegaMenu
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a  className="flex items-center hover:bg-gray-light rounded-lg p-2">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="flex items-center hover:bg-gray-light rounded-lg p-2">
          Contact Us
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="text-black mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 backdrop-blur-sm relative bg-transparent sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        > 
          LOGO
        </Typography>
        <div className="hidden lg:block ">{navList}</div>
        <Button  size="sm" className="hidden lg:inline-block bg-blue text-white">
          <span> <ArrowRightAltIcon /> Get a quote</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button  variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Get a quote</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Header;