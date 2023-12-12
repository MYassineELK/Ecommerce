import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import {  Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import "./Furstpage.css"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Navbare() {
  const [navbare,setnavbae]=useState(false)
  const cheg=()=>{
   if (window.scrollY>=100) {
    setnavbae(true)
   }else{
    setnavbae(false)
   }
  }
  window.addEventListener("scroll",cheg)
  return (
    <>
      {[ 'lg'].map((expand) => (
       
          <Navbar key={expand} expand={expand} className="bg-body-tertiary fixed  ">
          <Container fluid className={" "} >
            <Navbar.Brand href="#"> <div className='text-white sm:hidden  text'>Luxe</div ></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  <div className='text-white font-serif'>Luxe</div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className=' flex sm:space-x-72'>
              <div className=' lg:flex-col flex-row space-y-9 mt-2 nave  text-white lg:space-x-7'>

                <Link className=' navtext'>HOME</Link>
                <Link className=' navtext'>SHOP</Link>
                <Link className=' navtext'>ABOUT</Link>
                <Link className=' navtext'>NEWS</Link>
                <Link className=' navtext'>CONTACT</Link>
              </div>
              <div className='w-24 '>
                 <div className='text-white text-3xl flex justify-start transition ease-in-out delay-150 font-serif  animate-pulse'>Luxe</div>
              </div>
              <div className=' flex justify-end w-64'>
              <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  h-7 w-7 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>
              



             




              </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbare;