import React from "react";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div>
        <div className='footer_title'>Social</div>
        <div className='social_icon_title'>
          <a href='https://www.facebook.com/officialpreetithakur/'>
            <div className='icon-div'>
              <BsFacebook />
            </div>
          </a>
          <div>Facebook</div>
        </div>
        <div className='social_icon_title'>
          <a href='https://www.instagram.com/preetithakur.in/'>
            <div className='icon-div'>
              <AiFillInstagram />
            </div>
          </a>
          <div>Instagram</div>
        </div>
        <div className='social_icon_title'>
          <a href='https://github.com/preeti28dec'>
            <div className='icon-div'>
              <BsGithub />
            </div>
          </a>
          <div>Github</div>
        </div>
        <div className='social_icon_title'>
          <a href='https://twitter.com/impreetithakur'>
            <div className='icon-div'>
              <BsTwitter />
            </div>
          </a>
          <div>Twitter</div>
        </div>
        <div className='social_icon_title'>
          <a href='https://www.linkedin.com/in/preeti-thakur-189548212/?originalSubdomain=in'>
            <div className='icon-div'>
              <BsLinkedin />
            </div>
          </a>
          <div>Linkedin</div>
        </div>
      </div>
      <div>
        <div className='footer_title'>About</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Features</div>
        <div className='footer_title_name'>Contact</div>
        <div className='footer_title_name'>404</div>
      </div>
      <div>
        <div className='footer_title'>Projects</div>
        <div className='footer_title_name'>Demos</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
      </div>
      <div>
        <div className='footer_title'>My Skills</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
      </div>
      <div>
        <div className='footer_title'>Service</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
      </div>
      <div>
        <div className='footer_title'>Blogs</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
        <div className='footer_title_name'>Style Guide</div>
      </div>
    </>
  );
}
