import {
  BsSearch,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
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
                  className='logo_image'
                  src='https://reiro-dark.fueko.net/content/images/2022/10/reiro_white.svg'
                  alt='loding..'
                />
                <div className='for_hide_nav'>
                  <div>Demos</div>
                  <div>Style Guide</div>
                  <div>Membership</div>
                  <div>...</div>
                </div>
              </div>

              <div className='navbar hidden_menu'>
                <span className='sreach_logo'>
                  <BsSearch className='' />
                </span>
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
                <span className='site-title'>
                  <span className='span_size'>This is Reiro.</span>A digital
                  magazine that promises to deliver
                  <span className='span_size'> inspiring stories </span>
                  from all disciplines.
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
              <div className='popular_tags'>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1529307474719-3d0a417aaf8a.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1540932239986-30128078f3c5.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
                <div className='card_imag'>
                  <img
                    className='card_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg'
                    alt='card image'
                  />
                  <div className='card_title'>Idea</div>
                </div>
              </div>
              <div>
                <div className='popular-tag-title'>WHAT IS NEW</div>
                <div className='image_card'>
                  <div className='big_image'>
                    <img
                      className='big_card-image'
                      src='https://reiro-dark.fueko.net/content/images/size/w1600/2022/10/photo-1551734465-bf8cc92570f5.jpeg'
                      alt='big image '
                    />
                    <div className='small__title'>
                      <div className='small_card_title'>Story</div>
                      <div className='small_card_title'>Concepts</div>
                      <div className='small_card_title'>Idea</div>
                    </div>
                    <div className='small__desc'>
                      The trick to getting more done is to have the freedom to
                      roam around
                    </div>
                    <p className='small_paragraph'>
                      Vel lectus vel velit pellentesque dignissim nec id magna.
                      Cras molestie ornare quam at semper. Proin a ipsum ex.
                      Curabitur eu venenatis justo. Nullam felis augue,
                      imperdiet at sodales. Nullam felis libero, congue quis
                      ipsum et, lacinia maximus eros. Vestibulum ante ipsum
                      primis in faucibus.
                    </p>

                    <div className='big_image_profile_section'>
                      <div>
                        <img
                          className='big_image_profile_image'
                          src='https://reiro-dark.fueko.net/content/images/size/w1600/2022/10/photo-1551734465-bf8cc92570f5.jpeg'
                          alt='profile image'
                        />
                      </div>
                      <div className='profile_name_date'>
                        <div>by Damian Erdman</div>
                        <div>October 12,2022 -3 min red</div>
                      </div>
                    </div>
                  </div>

                  <div className='image_card_section'>
                    <div className='small_card card_1'>
                      <div className='card1_main'>
                        <div className='crad1_title'>NEWSLETTER</div>
                        <div className='crad1_desc'>
                          Get all the latest posts delivered straight to your
                          inbox.
                        </div>
                        <div className='text-center'>
                          <input
                            className='card1_input'
                            placeholder='Your email address'
                            type='text'
                          />
                        </div>
                        <div className='text-center'>
                          <button className='card1_button'>Subscribe</button>
                        </div>
                      </div>
                    </div>
                    <div className='small_card card_2'>
                      <img
                        className='left_image'
                        src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1584539094584-c4231ff84bd4.jpeg'
                        alt='small card image'
                      />
                    </div>
                    <div>
                      <div className='small__title'>
                        <div className='small_card_title'>Story</div>
                        <div className='small_card_title'>Concepts</div>
                      </div>
                      <div className='left_title'>
                        There are still many questions left to answer
                      </div>
                      <div className='person_name'>by Damian Erdman</div>
                    </div>
                    <div className='small_card card_2'>
                      <img
                        className='left_image'
                        src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                        alt='small card image'
                      />
                    </div>
                    <div>
                      <div className='small__title'>
                        <div className='small_card_title'>Story</div>
                        <div className='small_card_title'>Concepts</div>
                      </div>
                      <div className='left_title'>
                        There are still many questions left to answer
                      </div>
                      <div className='person_name'>by Damian Erdman</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='featured_post'>FEATURED POSTS</div>
              <div className='featured_section'>
                <div className='global-cover bg-image-black'></div>
                <small className='featured-subtitle'>Editor s Choice</small>
                <h2 className='featured-title'>
                  Get started with our best stories
                </h2>

                <div className='featured_card'>
                  <div className='featured_card1 featured_card_post'>
                    <img
                      className='featured_card1_image'
                      src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1665406510231-6a3615a7c00e.jpeg'
                      alt='loding image'
                    />
                    <div className='text-[#1a1a1c] text-lg font-bold sm:text-2xl'>
                      It s a new era in design, there are no rules
                    </div>
                    <div className='featured_card1_desc'>
                      by Breana Flatley & Daryl Wehner
                    </div>
                  </div>
                  <div className='featured_card2 featured_card_post'>
                    <img
                      className='featured_card1_image'
                      src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/dillon-wanner-qrCmguAfqAg-unsplash.jpg'
                      alt='loding image'
                    />
                    <div className='text-[#1a1a1c] text-lg font-bold sm:text-2xl'>
                      The secret is to work less as individuals and more as a
                      team
                    </div>
                    <div className='featured_card1_desc'>
                      by Breana Flatley & Daryl Wehner
                    </div>
                  </div>
                  <div className='featured_card3 featured_card_post'>
                    <img
                      className='featured_card1_image'
                      src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/jacek-dylag-PR-B3hhcOZY-unsplash.jpg'
                      alt='loding image'
                    />
                    <div className='text-[#1a1a1c] text-lg font-bold sm:text-2xl'>
                      I have my own definition of minimalism
                    </div>
                    <div className='featured_card1_desc'>
                      by Breana Flatley & Daryl Wehner
                    </div>
                  </div>
                </div>

                <div className='featured_more_posts'>
                  See all featured posts{" "}
                </div>
              </div>
              <div className='previous_post'>PREVIOUS POSTS</div>
              <div className='md:flex justify-between items-center gap-12'>
                <div className='my-2'>
                  <a href='#'>
                    <img
                      className='previous_post_image'
                      src='https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000'
                      alt='{{title}}'
                    />
                  </a>
                  <div className='small__title'>
                    <div className='small_card_title'>Story</div>
                    <div className='small_card_title'>Concepts</div>
                    <div className='small_card_title'>Idea</div>
                  </div>
                  <div className='mx-2'>
                    <div className='sm:text-3xl  text-lg font-bold'>
                      The Best friend that never was
                    </div>
                    <p className='previous_post_paragraph'>
                      Image by PublicDomainArchive from Pixabay Susan stood in
                      line for the tour bus with her family. This was their
                      second tour of the day. The same tour to be exact. Only
                      difference
                    </p>
                    <div className='flex justify-between items-center my-2'>
                      <div className='text-[#d8d6d3]'>by preeti thakur</div>
                      <div className='text-[#d8d6d3] text-sm'>
                        23 march 2023
                      </div>
                    </div>
                  </div>
                </div>
                <div className='my-2'>
                  <a href='#'>
                    <img
                      className='previous_post_image'
                      src='https://images.unsplash.com/photo-1670315194416-17645cbfc9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000'
                      alt='{{title}}'
                    />
                  </a>
                  <div className='small__title'>
                    <div className='small_card_title'>Story</div>
                    <div className='small_card_title'>Concepts</div>
                    <div className='small_card_title'>Idea</div>
                  </div>
                  <div className='mx-2'>
                    <div className='sm:text-3xl  text-lg font-bold'>
                      The Best friend that never was
                    </div>
                    <p className='previous_post_paragraph'>
                      Image by PublicDomainArchive from Pixabay Susan stood in
                      line for the tour bus with her family. This was their
                      second tour of the day. The same tour to be exact. Only
                      difference
                    </p>
                    <div className='flex justify-between items-center my-2'>
                      <div className='text-[#d8d6d3]'>by preeti thakur</div>
                      <div className='text-[#d8d6d3] text-sm'>
                        23 march 2023
                      </div>
                    </div>
                  </div>
                </div>
                <div className='my-2'>
                  <a href='#'>
                    <img
                      className='previous_post_image'
                      src='https://images.unsplash.com/photo-1670272506154-080063eee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000'
                      alt='{{title}}'
                    />
                  </a>
                  <div className='small__title'>
                    <div className='small_card_title'>Story</div>
                    <div className='small_card_title'>Concepts</div>
                    <div className='small_card_title'>Idea</div>
                  </div>
                  <div className='mx-2'>
                    <div className='sm:text-3xl  text-lg font-bold'>
                      The Best friend that never was
                    </div>
                    <p className='previous_post_paragraph'>
                      Image by PublicDomainArchive from Pixabay Susan stood in
                      line for the tour bus with her family. This was their
                      second tour of the day. The same tour to be exact. Only
                      difference
                    </p>
                    <div className='flex justify-between items-center my-2'>
                      <div className='text-[#d8d6d3]'>by preeti thakur</div>
                      <div className='text-[#d8d6d3] text-sm'>
                        23 march 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center my-4'>
                <button className='previous_post_load_more_button '>
                  Load more
                </button>
              </div>
              <div className='like_section'>YOU MIGHT ALSO LIKE</div>
              <div className='like_all_card'>
                <div className='like_card'>
                  <img
                    className='like_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                    alt='loding...'
                  />
                  <div className='like_title'>
                    You have to fight to reach your dream
                  </div>
                  <div className='like_name'>by Daryl Wehner</div>
                </div>
                <div className='like_card'>
                  <img
                    className='like_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                    alt='loding...'
                  />
                  <div className='like_title'>
                    You have to fight to reach your dream
                  </div>
                  <div className='like_name'>by Daryl Wehner</div>
                </div>
                <div className='like_card'>
                  <img
                    className='like_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                    alt='loding...'
                  />
                  <div className='like_title'>
                    You have to fight to reach your dream
                  </div>
                  <div className='like_name'>by Daryl Wehner</div>
                </div>
                <div className='like_card'>
                  <img
                    className='like_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                    alt='loding...'
                  />
                  <div className='like_title'>
                    You have to fight to reach your dream
                  </div>
                  <div className='like_name'>by Daryl Wehner</div>
                </div>
                <div className='like_card'>
                  <img
                    className='like_image'
                    src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
                    alt='loding...'
                  />
                  <div className='like_title'>
                    You have to fight to reach your dream
                  </div>
                  <div className='like_name'>by Daryl Wehner</div>
                </div>
              </div>
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
                <div>
                  <div className='footer_title'>Social</div>
                  <div className='social_icon_title'>
                    <div className='icon-div'>
                      <BsFacebook />
                    </div>
                    <div>Facebook</div>
                  </div>
                  <div className='social_icon_title'>
                    <div className='icon-div'>
                      <AiFillInstagram />
                    </div>
                    <div>Instagram</div>
                  </div>
                  <div className='social_icon_title'>
                    <div className='icon-div'>
                      <BsGithub />
                    </div>
                    <div>Github</div>
                  </div>
                  <div className='social_icon_title'>
                    <div className='icon-div'>
                      <BsTwitter />
                    </div>
                    <div>Twitter</div>
                  </div>
                  <div className='social_icon_title'>
                    <div className='icon-div'>
                      <BsLinkedin />
                    </div>
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
                  <div className='footer_title'>Features</div>
                  <div className='footer_title_name'>Demos</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                </div>
                <div>
                  <div className='footer_title'>Membership</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                </div>
                <div>
                  <div className='footer_title'>Resources</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                </div>
                <div>
                  <div className='footer_title'>Company</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                  <div className='footer_title_name'>Style Guide</div>
                </div>
              </div>
              <div className='footer_last_line'>
                © Reiro 2022. Published with Ghost and Reiro
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
