
import './style.css';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [dropdownOpen1, setDropdownOpen1] = useState(true);
  const [dropdownOpen2, setDropdownOpen2] = useState(true);
  const [dropdownOpen3, setDropdownOpen3] = useState(true);
  const [dropdownOpen4, setDropdownOpen4] = useState(true);
  const [dropdownOpen5, setDropdownOpen5] = useState(true);

  return (
    <div className="App">
      <div className="articles">
        <article className="article-1">
          <div className='navbar'>
            <span className='nav-item'>
              <img src="kidspay-logo.png" alt='logo' className='logo' />

              <p className='home-button'>Home</p>
            </span>
            <span className='nav-item'>
              <p>What's Kids Pay</p>
            </span>
            <span className='nav-item'>
              <p>FAQ</p>
            </span>
            <span className='nav-item'>
              <p>Our Team</p>
            </span>
            <p className='nav-logo'>Kids Pay</p>
          </div>
          <div className='pic1-contaier'>

          </div>
          <div className='container1'>
            <div className='container1-title'>
              <div className='title1'>
                <p>Discover the Kidspay</p>
                <p> App for Your Kids</p>
              </div>
            </div>
            <div className='container1-content'>
              <div className='content1'>
                <p>Manage your kids allowance and teach them financial responsibility with</p>
                <p>the Kidspay app.</p>
              </div>
              <div className='buttons'>
                <button className='but1'>Download</button>
                <button className='but2'>Learn More </button>
              </div>
            </div>
          </div>

        </article>
        <article className="article-2">
          <div className='container2'>
            <div className='container2-title'>
              <div className='title2'>
                <p>Manage your kids' allowances</p>
                <p>hassle-free with our</p>
                <p>registration-free app</p>
              </div>
              <div className='container2-content'>
                <p>With Kidspay, you can easily manage your kids' allowances.</p>
                <p>eliminating the nd for registration. Download now and start managing</p>
                <p>their money easily.</p>

              </div>
            </div>
            <div className='container2-img'>

            </div>
          </div>

        </article>
        <article className="article-3">
          <div className='container3'>
            <div className='container3-part1'>
              <div className='container3-title'>
                Discover the Simplicity of<br></br>
                Kidspay-Start Using today
              </div>
              <div className='container3-content'>
                Kidspay is a easy-to-use app thatallows yourk ids toleam about money
                management wile having fun. Simply downlod the app and get started
                immediately
              </div>
            </div>
            <div className='container3-part2'>
              <div className='container3-element'>
                <div className='element-img'>
                  <img src='cube.png' alt='cube' />
                </div>
                <div className='element-title'>Teach Your Kids Financial Responsiliy with Kidspay</div>
                <div className='element-content'>Kidspay provides a safe and integrative platform for kids to learn about saving, spending, and budgeting</div>
                <div className='element-button'>Download <span>&#62;</span></div>
              </div>
              <div className='container3-element'>
                <div className='element-img'>
                  <img src='cube.png' alt='cube' />
                </div>
                <div className='element-title'>Empower Your Kids to Make Smart Money Choices</div>
                <div className='element-content'>With Kidspay your kids can track their allowance, set Savings goals, and leam the value of money.</div>
                <div className='element-button'>Download <span>&#62;</span></div>
              </div>
              <div className='container3-element'>
                <div className='element-img'>
                  <img src='cube.png' alt='cube' />
                </div>
                <div className='element-title'>Start Your Kids' Financial Journey with Kidspay</div>
                <div className='element-content'>Kidspayofer a funand eduatinal way fo ids to developassential mony managementsill.</div>
                <div className='element-button'>Download <span>&#62;</span></div>
              </div>


            </div>
          </div>
        </article>
        <article className="article-4">
          <div className='container4'>
            <div className='container4-part1'>
              <div className='title2'>
                Download the Kidspay App
              </div>
              <div className='container2-content'>
                <p>Mange your kids allowancs and teach them financia responsilty with the Kidspay app</p>

              </div>
              <div className='buttonz'>
                <button className='but2'>Learn More </button>
              </div>
            </div>
            <div className='container4-part2'>
              <div className='container4-img'>

              </div>

            </div>
          </div>

        </article>
        <article className="article-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='slide1'>
                <div className='slide-content'>The Kidspay app has been a game-changer for my family It's made managing my kids' allowances and teaching them about money so much easier.</div>
                <div className='slide1-img'></div>
                <div className='slide1-details'>
                  <div className='slide1-name'>John Doe</div>
                  <div className='slide1-position'>Parent, ABC Company</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide1'>
                <div className='slide-content'>The Kidspay app has been a game-changer for my family It's made managing my kids' allowances and teaching them about money so much easier.</div>
                <div className='slide1-img'></div>
                <div className='slide1-details'>
                  <div className='slide1-name'>John Doe</div>
                  <div className='slide1-position'>Parent, ABC Company</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide1'>
                <div className='slide-content'>The Kidspay app has been a game-changer for my family It's made managing my kids' allowances and teaching them about money so much easier.</div>
                <div className='slide1-img'></div>
                <div className='slide1-details'>
                  <div className='slide1-name'>John Doe</div>
                  <div className='slide1-position'>Parent, ABC Company</div>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>

        </article>
        <article className="article-6">
          <div className='container6'>
            <div className='container6-title'>
              FAQs
            </div>
            <div className='container6-subtitle'>
              Find answers to common questions about the Kidspay app including ease of use and security.
            </div>
            <div className='container6-content'>
              <div className='content-item'>
                {/* Clicking on the title toggles the dropdown */}
                <div className='content-item-title' onClick={() => setDropdownOpen1(!dropdownOpen1)}>
                  <p>Is Kidspay easy to use?</p>
                  {/* Based on the state, change the arrow direction */}
                  <i className={`arrow ${dropdownOpen1 ? 'down' : 'right'}`}></i>
                </div>
                {/* Render content if the dropdown is open */}
                {dropdownOpen1 && (
                  <div className='content-item-content'>
                    Yes, Kidspay is designed to be user-friendly and intuitive. We have made sure that even young children can easily navigate the app.
                  </div>
                )}
              </div>
              <div className='content-item'>
                {/* Clicking on the title toggles the dropdown */}
                <div className='content-item-title' onClick={() => setDropdownOpen2(!dropdownOpen2)}>
                  <p>Is Kidspay secure?</p>
                  {/* Based on the state, change the arrow direction */}
                  <i className={`arrow ${dropdownOpen2 ? 'down' : 'right'}`}></i>
                </div>
                {/* Render content if the dropdown is open */}
                {dropdownOpen2 && (
                  <div className='content-item-content'>
                    Absolutely! Kidspay takes the security and privacy of your child's information very seriously. We use the latest encryption technology to safeguard their data.                </div>
                )}
              </div>
              <div className='content-item'>
                {/* Clicking on the title toggles the dropdown */}
                <div className='content-item-title' onClick={() => setDropdownOpen3(!dropdownOpen3)}>
                  <p>How do I download Kidspay?</p>
                  {/* Based on the state, change the arrow direction */}
                  <i className={`arrow ${dropdownOpen3 ? 'down' : 'right'}`}></i>
                </div>
                {/* Render content if the dropdown is open */}
                {dropdownOpen3 && (
                  <div className='content-item-content'>
                    Downloading Kidspay is easy. Simply visit the App Store or Google Play Store, search for Kidspay, and click on the download button. The app is available for both iOS and Android devices.                </div>
                )}
              </div>
              <div className='content-item'>
                {/* Clicking on the title toggles the dropdown */}
                <div className='content-item-title' onClick={() => setDropdownOpen4(!dropdownOpen4)}>
                  <p>Can I use Kidspay without registering?</p>
                  {/* Based on the state, change the arrow direction */}
                  <i className={`arrow ${dropdownOpen4 ? 'down' : 'right'}`}></i>
                </div>
                {/* Render content if the dropdown is open */}
                {dropdownOpen4 && (
                  <div className='content-item-content'>
                    Yes, you can use Kidspay without registering. There is no need for any personal information or account creation. Simply download the app and start using it right away.                </div>
                )}
              </div>
              <div className='content-item'>
                {/* Clicking on the title toggles the dropdown */}
                <div className='content-item-title' onClick={() => setDropdownOpen5(!dropdownOpen5)}>
                  <p>How can contact support?</p>
                  {/* Based on the state, change the arrow direction */}
                  <i className={`arrow ${dropdownOpen5 ? 'down' : 'right'}`}></i>
                </div>
                {/* Render content if the dropdown is open */}
                {dropdownOpen5 && (
                  <div className='content-item-content'>
                    If you have any further questions or need assistance, you can contact our support team through the app. We are available 24/7 to help you.                </div>
                )}
              </div>
            </div>
            {/* Repeat the above structure for other dropdown items */}
          </div>
        </article>
        <article className="article-7">
          <div className='container7'>
            <div className='container7-title'>
              Our Team
            </div>
            <div className='container7-subtitle'>
            Meet the dedicated team behind Kidspay, creators of the family-friendly app.
            </div>
            <div className='container7-content'>

              <div className='content-item'>
                <div className='content-item-img'></div>
                <div className='content-item-details'>
                  <div className='content-item-name'>John Doe</div>
                  <div className='content-item-position'>CEO & Co-founder</div>
                  <div className='content-item-description'>John is a passionate entrepreneur with a background in finance.</div>
                  <div className='content-item-socials'>
                    <i className='socials-icon facebook'><img src='facebook.png' alt='facebook' /></i>
                    <i className='socials-icon twitter'><img src='twitter.png' alt='twitter' /></i>
                    <i className='socials-icon linkedin'><img src='linkedin.png' alt='linkedin' /></i>
                  </div>
                </div>
              </div>

              <div className='content-item'>
                <div className='content-item-img'></div>
                <div className='content-item-details'>
                  <div className='content-item-name'>Jane Smith</div>
                  <div className='content-item-position'>CTO</div>
                  <div className='content-item-description'>Jane leads the technical team, ensuring a seamless user experience for parents and kids.</div>
                  <div className='content-item-socials'>
                    <i className='socials-icon facebook'><img src='facebook.png' alt='facebook' /></i>
                    <i className='socials-icon twitter'><img src='twitter.png' alt='twitter' /></i>
                    <i className='socials-icon linkedin'><img src='linkedin.png' alt='linkedin' /></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer'>
                  <div className='footer-part1'>
                    <div className='footer-content'>
                      <div className='footer-logo'>
                        <img src='footer-logo.png' alt='logo' />
                      </div>
       
                    <div className='footer-rest-content'>
                                     <div className='footer-address'>
                        <p>123 Main Street</p>
                        <p>City, State, 12345</p>
                    </div>
                    <div className='footer-contact'>
                        <p> Email : kidspay@email.com </p>
                        <p> Phone : +213658785221</p>
                    </div>
                    <div className='footer-socials'>
                        <i className='socials-icon facebook'><img src='facebook.png' alt='facebook' /></i>
                        <i className='socials-icon twitter'><img src='twitter.png' alt='twitter' /></i>
                        <i className='socials-icon linkedin'><img src='linkedin.png' alt='linkedin' /></i>
                        <i className='socials-icon instagram'><img src='instagram.png' alt='instagram' /></i>
                        <i className='socials-icon tiktok'><img src='tiktok.png' alt='tiktok' /></i>
                        <i className='socials-icon youtube'><img src='youtube.png' alt='youtube' /></i>
                    </div>
                    </div>
                
                    </div>
                    <div className='footer-links'>
                      <p>Home</p>
                      <p>What's Kids Pay</p>
                      <p>FAQ</p>
                      <p>Our Team</p>
                    </div>
                  </div>
                  <div className='footer-line'></div>
                  <div className='footer-part2'>
                    <div className='footer-copyrights'>
                      <p>© 2024 Kids Pay. All rights reserved.</p>
                    </div>
                    <div className='footer-terms'>
                      <p>Terms of Service</p>
                      <p>Privacy Policy</p>
                      <p>Cookies Settings</p>
                  </div>
                  </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
