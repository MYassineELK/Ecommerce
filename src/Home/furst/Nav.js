import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {  Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux';
// Initialization for ES Users


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const NavbarContainer = styled.header`
  position: fixed;
  width: 100%;
  background: ${({ isScrolled }) => (isScrolled ? '#fff' : 'transparent')};
  transition: background-color 0.3s;
  z-index: 1000;
  padding: ${({ isScrolled }) => (isScrolled ? '0.5rem 2rem' : '1rem 2rem')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
  
  @media (max-width: 768px) {
    padding: ${({ isScrolled }) => (isScrolled ? '0.5rem 1rem' : '1rem 1rem')};
     padding-top: ${({ isScrolled }) => (isScrolled ? ' 0.8rem' : '')};
     

  }
`;

const NavbarInner = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem; 
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const NavItems = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  margin-left: 2rem;
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  font-size: 1rem;

  &:hover {
    color: #007bff;
  }
`;

const BurgerMenu = styled.button`
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;

  @media (max-width: 768px) {
    
    display: block;
  }
`;

const BurgerLines = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background: ${({ isScrolled }) => (isScrolled ? '#333' : '#fff')};
  margin: 5px auto;
  transition: all 0.3s ease;

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  &:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;

const OffCanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100vh;
  background-color: black; /* Adjust background color as needed */
  color: #fff; /* Adjust text color as needed */
  padding: 2rem;
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const OffCanvasMenu = styled.ul`
  list-style: none;
  padding: 15px;
`;

const OffCanvasMenuItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const OffCanvas = ({ isOpen,afich }) => {
  
  return (
    <OffCanvasContainer isOpen={isOpen} className={`${afich}`}>
      <OffCanvasMenu>
        <br /><br />
        <OffCanvasMenuItem><Link  to="/Home" className='  hover:text-slate-400  navtext'>HOME</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/Shop" className='  hover:text-slate-400  navtext'>SHOP</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/About" className='  hover:text-slate-400  navtext'>ABOUT</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/Contact" className='  hover:text-slate-400  navtext'>Contact</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/Cart" className='  hover:text-slate-400  navtext'>Cart</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/Signin" className={"hover:text-slate-400  navtext"}>Sign in</Link></OffCanvasMenuItem>
        <OffCanvasMenuItem><Link to="/Signup" className={"hover:text-slate-400  navtext"} >Sign up</Link></OffCanvasMenuItem>

        {/* Add additional menu items here */}
      </OffCanvasMenu>
    </OffCanvasContainer>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const[srch,setsrch]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const shopp=useSelector(state=>state.shopp.shopp)
  const prodwi=shopp.filter((e)=>e.cart!==false)
  var count=prodwi.length

  return (
    <div className=' ' >
      <NavbarContainer isScrolled={isScrolled}>
        <NavbarInner>
        <NavItems className="-ml-20">
            <NavItem href="#features" isScrolled={isScrolled}> 
            
              </NavItem>
             
            <NavItem  isScrolled={isScrolled}><Link to="/Home" className='  hover:text-slate-400  navtext'>HOME</Link></NavItem>
            <NavItem  isScrolled={isScrolled}><Link   to="/Shop"  className='   hover:text-slate-400  navtext'>SHOP</Link></NavItem>
            <NavItem  isScrolled={isScrolled}> <Link to="/About" className='  hover:text-slate-400  navtext'>ABOUT</Link></NavItem>
            <NavItem  isScrolled={isScrolled}>  <Link  to="/News"  className=' hover:text-slate-400  navtext'>NEWS</Link></NavItem>
            <NavItem  isScrolled={isScrolled}><Link to="/Contact" className='   hover:text-slate-400 navtext'>CONTACT</Link></NavItem>
          
          </NavItems>
          <NavItem href="#contact" isScrolled={isScrolled}><div className='   -ml-8 sm:-ml-0  text-3xl flex justify-start transition ease-in-out delay-150 font-serif  animate-pulse'>Luxe</div>
</NavItem>
          <Logo className=' -ml-28'  isScrolled={isScrolled}>                  <div className='text-white hidden sm:hidden font-serif'>Luxe</div>
</Logo>
<NavItem href="#contact" isScrolled={isScrolled}>  <Menu as="div" className="relative ml-3 hidden lg:block">
                  <div className=' flex space-x-4'>
                
                  <Link to="/Shop">                 <img className='mt-1.5 w-10 h-10 ' src={isScrolled?require("./search.png"):require("./search (1).png")} alt="" /></Link>
                 <Link to="/cart"> <button data-quantity={count} style={{color:`${isScrolled?"black":"white"}`}}  className="btn-cart">
          <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
            <path style={{fill:`${isScrolled?"black":"white"}`}} transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
          </svg>
          <span className="quantity"></span>
        </button></Link>









                    
                    <Menu.Button className="relative flex rounded-full mt-2.5   h-8 w-8 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className=" "
                        src={require("./user (2).png")}
                        alt=""
                      />
                      
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                           <Link to="/Signin" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Sign in</Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/Signup" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >Sign up</Link>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
</NavItem>
          <BurgerMenu onClick={handleToggle}>
            <BurgerLines isOpen={isOpen} isScrolled={isScrolled}></BurgerLines>
            <BurgerLines isOpen={isOpen} isScrolled={isScrolled}></BurgerLines>
            <BurgerLines isOpen={isOpen} isScrolled={isScrolled}></BurgerLines>
          </BurgerMenu>
        </NavbarInner>
      </NavbarContainer>
      <OffCanvas isOpen={isOpen} />
    </div>
  );
};

export default Navbar;