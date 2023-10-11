import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "../assets/images/logo.svg";

const MyFooter = () => {
  return (
    <Footer container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="space-y-4 mb-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="logo" className="w-10 inline-block items-center" />
                  <span className="text-NeutralBlack">NEXCENT</span>
          </a>
          <div>
            <p>Copyright © 2023 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="">
                Nexcent
              </Footer.Link>
              <Footer.Link href="#">
                Tailwind CSS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Github
              </Footer.Link>
              <Footer.Link href="#">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          by="Nexcent™"
          href="#"
          year={2023}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="#"
            icon={BsGithub}
          />
          
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter