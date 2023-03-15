import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import PopularTag from "./container/PopularTag";
import WhatNew from "./container/whatNew";
import FeaturedPost from "./container/FeaturedPost";
import PreviousPost from "./container/PreviousPost";
import YouLike from "./container/YouLike";
import Footer from "./container/Footer";
const Tabs = ["Home", "My Skills", "Projects", "Blogs", "Service", "Contact"];
export default function Home() {
  const [auth, setAuth] = useState(false);
  const [show, setShow] = useState("show");
  return (
    <div>
      <div className='hello h-[40vh] relative'>
        <div className='hello2'></div>
        <div className='global_content '>
          <header className='header_section'>
            <nav className='header_wrap'>
              <div className='navbar'>
                <img
                  className='w-8'
                  src='https://i.ibb.co/3kvYd7F/d1a39ac21b814d1b8f7e28be8d3848ba-removebg-preview.png'
                  alt='loding..'
                />
                {Tabs.map((i) => {
                  return (
                    <div className='for_hide_nav' key={i}>
                      <div>{i}</div>
                    </div>
                  );
                })}
              </div>

              <div className='navbar hidden_menu'>
                <span>Signup</span>
                <button
                  className='Subscribe_button'
                  onClick={() => setAuth((s) => !s)}
                >
                  {auth ? (
                    <span>Become a subscriber</span>
                  ) : (
                    <span>Account</span>
                  )}
                </button>
              </div>
              <div className='menu_button'>
                <div>
                  <div
                    className={`menu-btn ${show} `}
                    onClick={() => setShow("close")}
                  >
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                  </div>

                  <div className='menu'>
                    <div className='menu-branding'></div>
                    <ul className='menu-nav'>
                      <li className='nav-item'>Demos</li>
                      <li className='nav-item'>Style Guide</li>
                      <li className='nav-item'>Membership </li>
                      <li className='nav-item'> CONTACT ME </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <main className='global_main '>
            <div className='mx-4'>
              <div className='main_heading'>
                <span className='text-3xl'>
                  Hi, I am <span className='span_size'>Preeti Thakur.</span> A
                  web developer building the frontend of websites and web
                  Application that leads to the success of the overall product
                </span>
                <div className='input_button'>
                  <div className='input_section flex items-center gap-4'>
                    <input
                      type='text'
                      className='input_button_section'
                      placeholder='Click here to search for posts'
                    />
                    <div className='search_icon'>
                      <BsSearch className='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='popular-tag-title'>POPULAR TAGS</div>
              <PopularTag />
              <div className='popular-tag-title'>WHAT IS NEW</div>
              <WhatNew />
              <div className='featured_post'>FEATURED POSTS</div>
              <FeaturedPost />
              <div className='previous_post'>PREVIOUS POSTS</div>
              <PreviousPost />

              <div className='text-center my-4'>
                <button className='previous_post_load_more_button '>
                  Load more
                </button>
              </div>
              <div className='like_section'>YOU MIGHT ALSO LIKE</div>
              <YouLike />
              <div className='last_section'>
                <div>
                  <img
                    className='last_logo_image'
                    src='https://reiro-dark.fueko.net/content/images/2022/10/reiro_white.svg'
                    alt='logo image'
                  />
                  <div className='last_desc'>
                    A minimal, functional theme for running a paid-membership
                    publication on Ghost.
                  </div>
                </div>
                <div>
                  <button className='last_button'>Become a subsciber</button>
                  <div className='last_button_title'>
                    Get all the latest posts delivered straight to your inbox.
                  </div>
                </div>
              </div>
              <hr />
              <div className='footer_section'>
                <Footer />
              </div>
              <div className='footer_last_line'>
                <a href='mailto:officialpreetithakur@gmail.com'>
                  © Main Tech 2023. officialpreetithakur@gmail.com
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
