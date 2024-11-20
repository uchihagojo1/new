import  React from 'react';
import { Link } from 'react-router-dom'; 

function Home(){

  return (
<main>
  {/* ==============================================
                hero area code
=======================================================*/}
  <div className="dn--hm1--hero   position-relative dn--overflow-hidden">
    <div className="dn--hm1--hero-container ">
      <div className="dn--hm1--hero-sub--container ">
        <div className="dn--hm1--hero--content-box">
          <div className>
            <h1 className="dn--hm1--hero-title has_fade_anim" data-fade-from="left">People Are 
              Universally Adored 
              By Everyone.</h1>
          </div>
          <div className="dn--hm1--hero--btn--or--tex d-flex align-items-center">
            <div className="dn--hm6-button">
            <Link className="dn--button-hover dn--button-hover-1" to="/donate">
                <span className="dn--button-hover-text">
                  Donate Now
                </span>
                <span className="dn--button-hover-arrow">
                  <svg className="dn--button-hover-svg-arrow" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 9.8 9.8">
                    <g>
                      <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                    </g>
                    <g><path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                    </g>
                  </svg>
                </span>
                </Link>
            </div>
            <p className="dn--hm1--hero--text  dn--hm1--text has_fade_anim">We can improve the lives of those in need
              and create a brighter future for all.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="dn--hm1--hero--svg--container">
      <div className="dn--hm1--hero--svg--box">
        <span className="dn--hm1--hero--svg dn--hm1--hero--svg--1">
          <svg width={29} height={55} viewBox="0 0 29 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.47212 28.5211C12.5717 27.5814 12.979 47.2659 13.1523 53.6949H17.199C16.913 43.7827 17.043 30.3348 28.0351 26.1916C29.023 25.8201 29.4042 24.8674 28.4467 24.1987C20.8385 18.8886 16.4018 10.5847 15.9902 1.28875H11.9434C12.2597 6.71685 11.3238 12.0182 8.91053 16.9044C6.66185 21.4627 2.70174 23.9845 0.0761199 27.9966C-0.101521 28.2675 0.0587764 28.7833 0.279745 28.9756L0.587403 29.2465C1.39762 29.9502 2.84473 30.1381 3.7676 29.5044C3.85859 29.4389 3.94958 29.3776 4.04056 29.3121C6.03361 27.931 2.51113 26.5937 1.18098 27.5158C1.09 27.5814 0.999007 27.6426 0.90802 27.7081C1.96953 27.7955 3.0267 27.8786 4.08822 27.966C5.89062 29.535 12.8663 17.5512 13.4469 16.227C15.5136 11.5069 16.2935 6.41966 15.9945 1.29312C15.8948 -0.441949 11.8698 -0.420097 11.9478 1.29312C12.3984 11.402 17.3593 20.2522 25.5915 25.9993C25.7301 25.335 25.8644 24.6707 26.0031 24.0063C13.7328 28.6347 12.8359 42.3186 13.1652 53.7036C13.2172 55.4387 17.2597 55.4256 17.212 53.7036C16.9391 43.3981 15.6869 24.7581 1.41058 26.0823C-1.27137 26.3314 0.422709 28.7221 2.48508 28.5298L2.47212 28.5211Z" fill="#3A86FF" />
          </svg>
        </span>
        <span className="dn--hm1--hero--svg dn--hm1--hero--svg--2">
          <svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7826 58.4457C22.2582 56.4483 19.6811 48.9118 18.3657 43.782C16.7386 37.4342 16.2904 30.3313 18.1903 23.9884C19.7614 18.7538 24.2019 12.3793 30.3086 12.3866C38.89 12.3988 38.3224 24.327 36.9218 29.9221C36.6904 30.8453 38.4028 32.8987 39.326 31.9853C41.964 29.3765 45.4424 27.2719 49.0255 26.3049C57.0637 24.1419 65.5867 30.6675 65.7986 39.0881C65.991 46.7634 58.7883 52.5583 52.555 55.625C44.9942 59.3421 35.9621 60.8864 27.7826 58.4457C26.0069 57.9171 27.3807 60.6355 28.4793 60.9643C41.3526 64.8056 60.5055 59.7074 66.885 46.9364C72.675 35.3394 60.0111 20.7463 47.7588 23.6206C43.8299 24.5438 39.9179 26.8725 37.0461 29.7102C37.8475 30.3995 38.6513 31.0864 39.4502 31.7734C41.2259 24.6973 40.9726 15.3047 33.8649 11.1346C27.1298 7.18609 19.8954 12.7251 16.9237 18.8196C13.08 26.7117 13.8813 36.7985 16.3683 44.9658C18.2975 51.2941 21.8392 58.5577 28.4744 60.9594C30.1941 61.583 28.8398 58.8257 27.7777 58.4408L27.7826 58.4457Z" fill="white" />
            <path d="M59.8682 34.3694C61.0934 37.9672 59.5905 41.7646 56.4288 43.7864C55.4325 44.4221 57.5736 46.7824 58.7039 46.0614C62.3527 43.7279 63.802 39.0925 62.4209 35.0369C62.1944 34.367 61.5733 33.5315 60.8133 33.4292C60.2068 33.344 59.6222 33.646 59.8706 34.3719L59.8682 34.3694Z" fill="white" />
            <path d="M52.2992 48.4392C52.2992 48.5854 52.2992 48.7315 52.2992 48.8777C52.2992 49.6669 52.7718 50.4707 53.5512 50.7387C54.131 50.9384 55.1175 50.8142 55.1199 49.9884L55.1199 49.55C55.1199 48.7608 54.6474 47.9569 53.8679 47.689C53.2882 47.4892 52.3017 47.6135 52.2992 48.4392Z" fill="white" />
          </svg>
        </span>
        <span className="dn--hm1--hero--svg dn--hm1--hero--svg--3">
          <svg width={47} height={43} viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5505 26.5173C13.6798 18.453 23.8091 10.3843 33.9384 2.32004C32.7467 1.99571 31.555 1.67574 30.3678 1.35141C28.7237 14.8153 26.17 28.117 22.7115 41.2477H26.7479C22.3889 28.0381 18.0299 14.8285 13.6708 1.61881C12.394 1.96943 11.1217 2.32439 9.84488 2.67501C14.0158 6.72907 19.1499 9.29303 24.2571 12.0279C30.6321 15.4464 37.0116 18.8606 43.3867 22.2791C43.8795 21.499 44.3723 20.7189 44.8651 19.9387C30.3813 20.469 15.8795 22.3712 1.51656 24.2207C-1.22968 24.5757 0.414471 27.1484 2.6276 26.8635C16.6231 25.0622 30.7486 23.1951 44.8606 22.678C45.9493 22.6385 48.0818 21.2711 46.3391 20.3376C40.5419 17.2302 34.7448 14.1228 28.9476 11.0154C23.5806 8.14033 17.8417 5.55014 13.4513 1.28571C12.4971 0.36095 8.97128 0.356529 9.62537 2.34192C13.9844 15.5516 18.3435 28.7612 22.7025 41.9709C23.1416 43.2989 26.3627 43.3865 26.739 41.9709C30.2648 28.6035 32.8721 15.0564 34.5477 1.34708C34.7313 -0.169358 31.7925 -0.270198 30.9771 0.378451C20.8478 8.44274 10.7185 16.5114 0.58917 24.5757C-1.39099 26.1535 2.1393 27.6349 3.54602 26.5129L3.5505 26.5173Z" fill="#FFDC24" />
          </svg>
        </span>
      </div>
    </div>
  </div>
  {/* =============================================================
             learnMore card section
==================================================================*/}
  <section className="dn--hm1--learnMore--card--section">
    <div className="container px-xxl-0 mx-auto">
      <div className="dn--hm1--learnMore--card--box ">
        <div className="row g-5 g-md-3 g-xl-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="dn--hm1-single-card position-relative has_fade_anim" data-fade-from="left">
              <div className="dn--hm1--learnMore--card--imgBox ">
                <img className="dn--hm1--learnMore--card--img w-100 h-100 " src="assets/images/bn--hm1--learnMore--card-image(2).png" alt="" />
              </div>
              <h3 className="dn--hm1--learnMore--card--img-title  position-absolute  ">Education</h3>
              <div className="dn--hm1--learnMore--card--bg position-absolute ">
                <a className="dn--hm1--learnMore--card--a " href="#">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="dn--hm1-single-card position-relative has_fade_anim">
              <div className="dn--hm1--learnMore--card--imgBox">
                <img className="dn--hm1--learnMore--card--img w-100 h-100 " src="assets/images/bn--hm1--learnMore--card-image(3).png" alt="" />
              </div>
              <h3 className="dn--hm1--learnMore--card--img-title  position-absolute ">Child Care</h3>
              <div className="dn--hm1--learnMore--card--bg position-absolute ">
                <a className="dn--hm1--learnMore--card--a " href="#">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="dn--hm1-single-card position-relative dn--hm1-single-card--3 has_fade_anim" data-fade-from="right">
              <div className="dn--hm1--learnMore--card--imgBox ">
                <img className="dn--hm1--learnMore--card--img w-100 h-100 " src="assets/images/bn--hm1--learnMore--card-image(1).png" alt="" />
              </div>
              <h3 className="dn--hm1--learnMore--card--img-title  position-absolute  ">Homeless</h3>
              <div className="dn--hm1--learnMore--card--bg position-absolute ">
                <a className="dn--hm1--learnMore--card--a " href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =============================================================
              Beginning Story section
==================================================================*/}
  <section className="dn--hm1--BeginningStory--section dn--overflow-hidden">
    <div className="dn--hm1--BeginningStory--container  container px-xxl-0">
      <div className="dn--hm1--BeginningStory--leftBox position-relative ">
        <div className="dn--hm1--BeginningStory--leftBox--imgBox">
          <img className="dn--hm1--BeginningStory--leftBox--img" src="assets/images/Beginning--Story--img.png" alt="" />
        </div>
        <div className="dn--hm1--BeginningStory--blueBox  rounded-pill user-select-none has_fade_anim" data-fade-from="left">
          <div className="dn--hm1--BeginningStory--blueSingleBox">
            <h2 className="dn--hm1--BeginningStory--blueSingleBox-h2">
              <span className="odometer" data-count={2}>1</span>
              <span className="dn--hm1--BeginningStory--blueSingleBox-h2--span   dn--hm2-ml">
                M+
              </span>
            </h2>
            <p className="dn--hm1--BeginningStory--blueSingleBox-p">Fund Raised</p>
          </div>
          <div className="dn--hm1--BeginningStory--blueSingleBox">
            <h2 className="dn--hm1--BeginningStory--blueSingleBox-h2">
              <span className="odometer" data-count={140}>2</span>
              <span className="dn--hm1--BeginningStory--blueSingleBox-h2--span   dn--hm2-ml">
                K
              </span>
            </h2>
            <p className="dn--hm1--BeginningStory--blueSingleBox-p">Projects Done</p>
          </div>
        </div>
      </div>
      <div className="dn--hm1--BeginningStory--rightBox">
        <p className="dn--hm1--subTitle mb-2 dn--hm1--BeginningStory--rightBox--subTitle has_fade_anim">{/*Our Beginning Story*/}</p>
        <h2 className="dn--hm1--title mb-16 dn--hm1--BeginningStory--rightBox--title has_fade_anim" data-fade-from="left">Collaborative Efforts Can Create A Brighter World For All.</h2>
        <span className="dn--hm1--text mb-4 pb-3 dn--hm1--BeginningStory--rightBox--txt has_fade_anim">SpringLife is a nonprofit that supports other nonprofits by connecting them to donors and companies, Since 2002. We are dedicated to providing for the less privileged ones.</span>
        <div className="dn--hm1--BeginningStory--rightBox--btnBox">
          <div className="dn--hm6-button">
          <Link className="dn--button-hover dn--button-hover-1" to="/donate">
              <span className="dn--button-hover-text">
                Donate Now
              </span>
              <span className="dn--button-hover-arrow">
                <svg className="dn--button-hover-svg-arrow" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 9.8 9.8">
                  <g>
                    <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                  </g>
                  <g><path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                  </g>
                </svg>
              </span>
              </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="dn--hm1--BeginningStory--svg--container">
      <div className="dn--hm1--BeginningStory--svg--box">
        <span className="dn--hm1--BeginningStory--svg  dn--hm1--BeginningStory--svg--1">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M32 11.9851C31.6574 12.9791 31.6124 13.8188 31.1743 14.2301C30.124 15.2184 28.9614 16.1439 27.7089 16.8408C25.0353 18.3204 22.2775 19.6343 19.5197 21.0339C18.8177 23.1875 19.6377 25.2098 19.6545 27.2378C19.6658 28.4031 19.7107 29.5971 19.4805 30.7225C19.2277 31.9792 17.6214 32.4363 16.6946 31.5108C15.8858 30.7053 15.1893 29.7228 14.6445 28.7059C13.8863 27.2949 13.3077 25.7753 12.645 24.2843C10.5668 23.8445 8.88181 25.0498 7.03393 25.2155C5.01755 25.3983 3.00679 25.644 0.990408 25.7811C0.659025 25.8039 0.0243433 25.404 0.00749333 25.1584C-0.0318232 24.6442 0.0804988 23.8616 0.417498 23.6274C1.96769 22.5477 3.57972 21.5366 5.24225 20.6454C7.15192 19.6228 9.14021 18.7488 11.0667 17.8177C11.6452 11.8937 10.8645 6.08394 12.6225 0C13.5886 0.799767 14.3468 1.11968 14.5659 1.66237C15.1613 3.15908 15.5544 4.74147 15.9757 6.30102C16.6721 8.84313 17.3293 11.391 18.0089 13.9502C22.6932 13.3447 26.681 10.2142 31.9944 11.9736L32 11.9851Z" fill="#3A86FF" />
          </svg>
        </span>
        <span className="dn--hm1--BeginningStory--svg  dn--hm1--BeginningStory--svg--2">
          <svg width={26} height={43} viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1567 20.8599C24.7131 20.4189 24.1574 20.0797 23.626 19.7356C20.594 17.7827 18.5905 15.0689 17.7813 11.5846C17.1817 9.00168 16.7918 6.37028 16.3482 3.75343C16.2019 2.886 16.2751 1.97013 16.0752 1.11723C15.8071 -0.0312697 14.0084 -0.414076 13.3064 0.540587C12.7166 1.34502 12.3168 2.29484 11.8684 3.20104C10.4109 6.1571 9.01185 9.14706 7.50071 12.074C6.26743 14.4583 4.62953 16.5566 2.55293 18.306C1.78274 18.9554 1.08079 19.7065 0.451961 20.4964C-0.210991 21.3202 -0.162225 22.3379 0.715211 22.8225C4.16159 24.727 5.4046 28.0271 6.44777 31.4678C7.21796 34.0168 7.87604 36.5948 8.64136 39.1438C8.93384 40.1033 9.28483 41.0822 9.81129 41.9303C10.7228 43.4083 12.7312 43.3453 13.5599 41.7994C14.0912 40.8109 14.4081 39.6866 14.6957 38.5914C15.1149 36.9971 15.3245 35.3494 15.7876 33.7745C16.9429 29.825 19.1998 26.7235 23.0216 24.8966C23.7089 24.567 24.445 24.2715 25.0153 23.7966C25.454 23.4283 25.6734 22.8031 26 22.2749C25.6685 21.7031 25.4979 21.2039 25.1567 20.8696V20.8599ZM14.6762 27.6104C13.282 29.6602 12.5021 32.122 11.3371 34.6516C9.33845 29.665 8.87536 24.1115 4.14695 20.6079C8.12954 17.4095 10.5035 13.3873 12.8579 8.6964C13.9206 11.5749 14.5397 14.0125 15.695 16.1641C16.8113 18.2479 18.4735 20.0409 19.8579 21.9066C18.1713 23.7239 16.1239 25.4684 14.6713 27.6104H14.6762Z" fill="#FFDC24" />
          </svg>
        </span>
      </div>
    </div>
  </section>
  {/* =============================================================
              Donate to Us section
==================================================================*/}
  <section className="dn--hm1--DonateUs--section position-relative dn--overflow-hidden">
    <div className="dn--hm1--DonateUs--container">
      <div className="dn--hm1--DonateUs--leftBox">
        <p className="dn--hm1--subTitle has_fade_anim">Donate to Us</p>
        <h2 className="dn--hm1--title has_fade_anim" data-fade-from="left">Discover the popular causes and make a donation to support them</h2>
        <span className="dn--hm1--text has_fade_anim">SpringLife supports a number of projects including education, childcare and homeless people Since 2002.</span>
      </div>
      <div className="dn--hm1--DonateUs--rightBox">
        <div className="dn--hm1-DonateUs-single-card  position-relative ">
          <div className="dn--hm1-DonateUs-single-card-container">
            <div className="dn--hm1-DonateUs-single-card--imgBox ">
              <img className="dn--hm1-DonateUs-single-card--img" src="assets/images/DonateUscardimg(1).png" alt="" />
            </div>
            <div className="dn--hm1-single-cardBody  position-relative ">
              <div className="dn--hm1--cardProgress  rounded-pill ">
                <div className="dn--hm1-single-cdProg-valu--1 position-relative rounded-pill">
                  <span className="dn--hm1-single-cd-prg-round position-absolute translate-middle start-100 top-50 ">
                    <span className="dn--hm1-single-cd-prg-round--2  " />
                  </span>
                  <span className="dn--hm1-single-cd-prg-pop position-absolute bottom-0  start-100 translate-middle  ">30%</span>
                </div>
              </div>
              <div className="dn--hm1-single-cd--raisedGold">
                <p className="dn--hm1-single-cd--raisedGold-item">Raised: $1500</p>
                <p className="dn--hm1-single-cd--raisedGold-item">Goal: $5000</p>
              </div>
              <h3 className="dn--hm1--cardTitle">
                <a href="#">
                  Supporting Health Initiatives Worldwide
                </a>
              </h3>
              <span className="dn--hm1--cardTxt">is vital for ensuring that everyone has access to essential healthcare services and promoting overall well-being in communities around the globe.</span>
            </div>
          </div>
          <div className="dn--hm1--DonateUs--single--card-BG position-absolute ">
            <a className="dn--hm1--DonateUs--single--card-BG-link" href="#">Donate Now</a>
          </div>
        </div>
        <div className="dn--hm1-DonateUs-single-card  position-relative ">
          <div className="dn--hm1-DonateUs-single-card-container">
            <div className="dn--hm1-DonateUs-single-card--imgBox ">
              <img className="dn--hm1-DonateUs-single-card--img" src="assets/images/DonateUscardimg(2).png" alt="" />
            </div>
            <div className="dn--hm1-single-cardBody  position-relative ">
              <div className="dn--hm1--cardProgress  rounded-pill ">
                <div className="dn--hm1-single-cdProg-valu--2 position-relative rounded-pill">
                  <span className="dn--hm1-single-cd-prg-round position-absolute translate-middle start-100 top-50 ">
                    <span className="dn--hm1-single-cd-prg-round--2  " />
                  </span>
                  <span className="dn--hm1-single-cd-prg-pop position-absolute bottom-0  start-100 translate-middle  ">70%</span>
                </div>
              </div>
              <div className="dn--hm1-single-cd--raisedGold">
                <p className="dn--hm1-single-cd--raisedGold-item">Raised: $3500</p>
                <p className="dn--hm1-single-cd--raisedGold-item">Goal: $5000</p>
              </div>
              <h3 className="dn--hm1--cardTitle">
                <a href="#">
                  Breaking the Stigma and Providing Support
                </a>
              </h3>
              <span className="dn--hm1--cardTxt">In today’s world many people die without eating and it’s heartbreaking to see such widespread hunger and food insecurity. Supporting intiatives that provide food aid and address hunger issues is crucial in making a positive impact.</span>
            </div>
          </div>
          <div className="dn--hm1--DonateUs--single--card-BG position-absolute ">
            <a className="dn--hm1--DonateUs--single--card-BG-link" href="#">Donate Now</a>
          </div>
        </div>
        <div className="dn--hm1-DonateUs-single-card  position-relative ">
          <div className="dn--hm1-DonateUs-single-card-container">
            <div className="dn--hm1-DonateUs-single-card--imgBox ">
              <img className="dn--hm1-DonateUs-single-card--img" src="assets/images/donate-to-us--card--img--(1).jpg" alt="" />
            </div>
            <div className="dn--hm1-single-cardBody  position-relative ">
              <div className="dn--hm1--cardProgress  rounded-pill ">
                <div className="dn--hm1-single-cdProg-valu--3 position-relative rounded-pill">
                  <span className="dn--hm1-single-cd-prg-round position-absolute translate-middle start-100 top-50 ">
                    <span className="dn--hm1-single-cd-prg-round--2  " />
                  </span>
                  <span className="dn--hm1-single-cd-prg-pop position-absolute bottom-0  start-100 translate-middle  ">55%</span>
                </div>
              </div>
              <div className="dn--hm1-single-cd--raisedGold">
                <p className="dn--hm1-single-cd--raisedGold-item">Raised: $2750</p>
                <p className="dn--hm1-single-cd--raisedGold-item">Goal: $5000</p>
              </div>
              <h3 className="dn--hm1--cardTitle">
                <a href="#">
                  Supporting Health Initiatives Worldwide
                </a>
              </h3>
              <span className="dn--hm1--cardTxt">Is essential for improving the quality of life and ensuring access to necessary medical care for all communities.</span>
            </div>
          </div>
          <div className="dn--hm1--DonateUs--single--card-BG position-absolute ">
            <a className="dn--hm1--DonateUs--single--card-BG-link" href="#">Donate Now</a>
          </div>
        </div>
        <div className="dn--hm1-DonateUs-single-card  position-relative ">
          <div className="dn--hm1-DonateUs-single-card-container">
            <div className="dn--hm1-DonateUs-single-card--imgBox ">
              <img className="dn--hm1-DonateUs-single-card--img" src="assets/images/donate-to-us--card--img--(2).webp" alt="" />
            </div>
            <div className="dn--hm1-single-cardBody  position-relative ">
              <div className="dn--hm1--cardProgress  rounded-pill ">
                <div className="dn--hm1-single-cdProg-valu--4 position-relative rounded-pill">
                  <span className="dn--hm1-single-cd-prg-round position-absolute translate-middle start-100 top-50 ">
                    <span className="dn--hm1-single-cd-prg-round--2  " />
                  </span>
                  <span className="dn--hm1-single-cd-prg-pop position-absolute bottom-0  start-100 translate-middle  ">85%</span>
                </div>
              </div>
              <div className="dn--hm1-single-cd--raisedGold">
                <p className="dn--hm1-single-cd--raisedGold-item">Raised: $4500</p>
                <p className="dn--hm1-single-cd--raisedGold-item">Goal: $5000</p>
              </div>
              <h3 className="dn--hm1--cardTitle">
                <a href="#">
                  Breaking the Stigma and Providing Support
                </a>
              </h3>
              <span className="dn--hm1--cardTxt">for mental health awarness can lead to a more compasionate society for those facing challanges.</span>
            </div>
          </div>
          <div className="dn--hm1--DonateUs--single--card-BG position-absolute ">
            <a className="dn--hm1--DonateUs--single--card-BG-link" href="#">Donate Now</a>
          </div>
        </div>
      </div>
    </div>
    <div className="dn--hm1--DonateUs--sectionBg-svg   position-absolute ">
      <svg viewBox="0 0 1728 544" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3.28711C78.5002 3.28711 78.5002 57.3878 157.027 57.3878C235.555 57.3878 235.528 3.28711 314.055 3.28711C392.582 3.28711 392.582 57.3878 471.082 57.3878C549.582 57.3878 549.582 3.28711 628.11 3.28711C706.637 3.28711 706.637 57.3878 785.137 57.3878C863.637 57.3878 863.664 3.28711 942.164 3.28711C1020.66 3.28711 1020.66 57.3878 1099.19 57.3878C1177.72 57.3878 1177.72 3.28711 1256.22 3.28711C1334.72 3.28711 1334.75 57.3878 1413.25 57.3878C1491.77 57.3878 1491.77 3.28711 1570.3 3.28711C1648.83 3.28711 1648.83 57.3878 1727.36 57.3878" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.0898438 56.9805C78.59 56.9805 78.59 111.081 157.117 111.081C235.644 111.081 235.617 56.9805 314.145 56.9805C392.672 56.9805 392.672 111.081 471.172 111.081C549.672 111.081 549.672 56.9805 628.199 56.9805C706.727 56.9805 706.727 111.081 785.227 111.081C863.727 111.081 863.754 56.9805 942.254 56.9805C1020.75 56.9805 1020.75 111.081 1099.28 111.081C1177.81 111.081 1177.81 56.9805 1256.31 56.9805C1334.84 56.9805 1334.84 111.081 1413.34 111.081C1491.84 111.081 1491.86 56.9805 1570.39 56.9805C1648.92 56.9805 1648.92 111.081 1727.45 111.081" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.160156 110.676C78.6603 110.676 78.6603 164.777 157.188 164.777C235.688 164.777 235.688 110.676 314.215 110.676C392.742 110.676 392.742 164.777 471.242 164.777C549.742 164.777 549.743 110.676 628.27 110.676C706.797 110.676 706.797 164.777 785.297 164.777C863.797 164.777 863.824 110.676 942.325 110.676C1020.82 110.676 1020.82 164.777 1099.35 164.777C1177.88 164.777 1177.88 110.676 1256.38 110.676C1334.88 110.676 1334.91 164.777 1413.41 164.777C1491.91 164.777 1491.93 110.676 1570.46 110.676C1648.99 110.676 1648.99 164.777 1727.52 164.777" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.207031 164.373C78.7072 164.373 78.7072 218.474 157.234 218.474C235.762 218.474 235.735 164.373 314.262 164.373C392.789 164.373 392.789 218.474 471.289 218.474C549.789 218.474 549.789 164.373 628.317 164.373C706.844 164.373 706.844 218.474 785.344 218.474C863.844 218.474 863.871 164.373 942.371 164.373C1020.87 164.373 1020.87 218.474 1099.4 218.474C1177.93 218.474 1177.93 164.373 1256.43 164.373C1334.93 164.373 1334.95 218.474 1413.45 218.474C1491.95 218.474 1491.98 164.373 1570.51 164.373C1649.04 164.373 1649.04 218.474 1727.56 218.474" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.296875 218.068C78.797 218.068 78.797 272.169 157.324 272.169C235.851 272.169 235.824 218.068 314.352 218.068C392.879 218.068 392.879 272.169 471.379 272.169C549.879 272.169 549.879 218.068 628.406 218.068C706.934 218.068 706.934 272.169 785.434 272.169C863.961 272.169 863.961 218.068 942.461 218.068C1020.96 218.068 1020.96 272.169 1099.49 272.169C1178.02 272.169 1178.02 218.068 1256.52 218.068C1335.02 218.068 1335.04 272.169 1413.54 272.169C1492.04 272.169 1492.07 218.068 1570.6 218.068C1649.13 218.068 1649.13 272.169 1727.65 272.169" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.347656 271.762C78.8478 271.762 78.8478 325.862 157.375 325.862C235.902 325.862 235.875 271.762 314.402 271.762C392.93 271.762 392.93 325.862 471.43 325.862C549.93 325.862 549.93 271.762 628.457 271.762C706.984 271.762 706.984 325.862 785.485 325.862C863.985 325.862 864.012 271.762 942.512 271.762C1021.01 271.762 1021.01 325.862 1099.54 325.862C1178.07 325.862 1178.07 271.762 1256.57 271.762C1335.07 271.762 1335.09 325.862 1413.59 325.862C1492.09 325.862 1492.12 271.762 1570.65 271.762C1649.18 271.762 1649.18 325.862 1727.7 325.862" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.433594 325.457C78.9338 325.457 78.9338 379.558 157.461 379.558C235.988 379.558 235.961 325.457 314.488 325.457C393.016 325.457 393.016 379.558 471.516 379.558C550.016 379.558 550.016 325.457 628.543 325.457C707.07 325.457 707.07 379.558 785.571 379.558C864.071 379.558 864.098 325.457 942.598 325.457C1021.1 325.457 1021.1 379.558 1099.63 379.558C1178.15 379.558 1178.15 325.457 1256.65 325.457C1335.15 325.457 1335.18 379.558 1413.68 379.558C1492.18 379.558 1492.21 325.457 1570.73 325.457C1649.26 325.457 1649.26 379.558 1727.79 379.558" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.515625 379.152C79.0158 379.152 79.0158 433.253 157.543 433.253C236.043 433.253 236.043 379.152 314.57 379.152C393.098 379.152 393.098 433.253 471.598 433.253C550.098 433.253 550.098 379.152 628.625 379.152C707.152 379.152 707.152 433.253 785.653 433.253C864.153 433.253 864.18 379.152 942.68 379.152C1021.18 379.152 1021.18 433.253 1099.71 433.253C1178.23 433.253 1178.23 379.152 1256.73 379.152C1335.23 379.152 1335.26 433.253 1413.76 433.253C1492.26 433.253 1492.29 379.152 1570.82 379.152C1649.34 379.152 1649.34 433.253 1727.87 433.253" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.570312 432.852C79.0705 432.852 79.0705 486.952 157.598 486.952C236.125 486.952 236.098 432.852 314.625 432.852C393.152 432.852 393.152 486.952 471.653 486.952C550.153 486.952 550.153 432.852 628.68 432.852C707.207 432.852 707.207 486.952 785.707 486.952C864.207 486.952 864.234 432.852 942.735 432.852C1021.23 432.852 1021.23 486.952 1099.76 486.952C1178.29 486.952 1178.29 432.852 1256.79 432.852C1335.32 432.852 1335.32 486.952 1413.82 486.952C1492.32 486.952 1492.34 432.852 1570.87 432.852C1649.4 432.852 1649.4 486.952 1727.93 486.952" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
        <path d="M0.640625 486.543C79.1408 486.543 79.1408 540.644 157.668 540.644C236.195 540.644 236.168 486.543 314.695 486.543C393.223 486.543 393.223 540.644 471.723 540.644C550.223 540.644 550.223 486.543 628.75 486.543C707.277 486.543 707.277 540.644 785.778 540.644C864.278 540.644 864.305 486.543 942.805 486.543C1021.31 486.543 1021.31 540.644 1099.83 540.644C1178.36 540.644 1178.36 486.543 1256.86 486.543C1335.36 486.543 1335.39 540.644 1413.89 540.644C1492.39 540.644 1492.41 486.543 1570.94 486.543C1649.47 486.543 1649.47 540.644 1728 540.644" stroke="#D9EAFF" strokeWidth={5} strokeMiterlimit={10} />
      </svg>              
    </div>
    <div className="dn--hm1--DonateUs--svg">
      <svg width={34} height={33} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.5551 12.6273C31.5837 12.8597 31.7757 13.185 31.9697 13.2497C32.1556 13.3123 32.5008 13.1507 32.6621 12.9809C32.8786 12.7546 33.0502 12.4455 33.1339 12.1423C33.4362 11.0471 33.8059 9.95389 33.9427 8.83642C34.1796 6.88843 33.6731 5.06168 32.5865 3.41882C30.4175 0.14119 26.637 -0.895451 23.0893 0.814091C22.4541 1.12124 21.8435 1.50317 21.2716 1.91742C19.7888 2.99245 18.6512 4.37058 17.779 5.96697C17.5789 6.33474 17.3399 6.68231 17.1868 6.92681C16.0083 6.80961 14.9748 6.5934 13.9495 6.62977C11.4843 6.71666 9.58901 7.9392 8.10418 9.82454C6.75619 11.5361 6.05154 13.5144 5.73292 15.6402C5.65327 16.1697 5.59199 16.7031 5.52255 17.2225C5.22844 17.4023 5.00174 17.5498 4.76687 17.6791C3.55163 18.3561 2.53862 19.2513 1.77476 20.4112C0.171467 22.8462 -0.324828 25.5135 0.202114 28.3507C0.598341 30.4785 1.94634 31.9233 3.83352 32.9054C4.03776 33.0105 4.41354 33.0428 4.57489 32.9256C4.89964 32.6912 4.74035 32.3295 4.54632 32.0627C4.25834 31.6687 3.94176 31.2928 3.61701 30.9251C2.87358 30.0824 2.44872 29.1125 2.30575 27.999C2.077 26.2228 2.40177 24.5436 3.14725 22.933C3.58637 21.9873 4.16644 21.1346 5.00995 20.49C5.20602 20.3405 5.44905 20.2515 5.75132 20.0899C6.00458 20.7547 6.18433 21.3185 6.42942 21.852C7.25251 23.6423 8.45955 25.073 10.3917 25.756C12.4504 26.4815 14.26 25.5964 14.9687 23.5514C15.7203 21.3872 14.8155 18.8916 12.7915 17.5781C11.8071 16.9395 10.7123 16.6223 9.54 16.5556C9.06003 16.5273 8.58006 16.499 8.10623 16.4707C8.0858 14.2944 9.04162 12.0029 10.5305 10.5318C11.9194 9.16174 13.5696 8.64445 15.4895 9.05668C15.8367 9.13144 16.1513 9.34969 16.4597 9.49114C16.3963 10.0893 16.331 10.5702 16.2963 11.0552C16.1819 12.6455 16.3677 14.1954 16.9641 15.6847C17.2684 16.4465 17.6606 17.1598 18.2631 17.7377C19.5703 18.9926 21.3492 18.8087 22.3418 17.3053C22.9361 16.4061 23.1016 15.3957 22.9995 14.3449C22.8013 12.3161 21.8761 10.6308 20.4587 9.18601C20.1258 8.84652 19.7929 8.50501 19.413 8.11703C19.7561 7.47242 20.0176 6.87428 20.3689 6.33676C21.4023 4.75453 22.7503 3.51581 24.5292 2.77016C26.3306 2.01643 27.9707 2.29731 29.4187 3.55825C29.9048 3.98261 30.3419 4.49588 30.683 5.03945C31.3223 6.06397 31.7369 7.19759 31.7553 8.41609C31.7716 9.44263 31.6817 10.4712 31.6307 11.4977C31.6123 11.8736 31.5082 12.2555 31.5531 12.6213L31.5551 12.6273ZM11.1351 19.4897C12.3013 20.0818 12.8977 21.2114 12.72 22.442C12.573 23.4585 11.9112 23.8343 10.9636 23.4423C10.0077 23.0462 9.35412 22.3268 8.85373 21.464C8.4718 20.8073 8.17157 20.1121 8.14093 19.1907C9.26017 18.9684 10.2242 19.027 11.1372 19.4918L11.1351 19.4897ZM20.4424 15.5998C20.4158 15.6867 20.3076 15.8059 20.232 15.808C20.0911 15.814 19.8685 15.7898 19.8174 15.7009C19.5499 15.2421 19.2332 14.7834 19.1046 14.2803C18.9065 13.5084 18.835 12.7041 18.7431 11.912C18.7227 11.7301 18.835 11.5341 18.8983 11.2977C20.2627 12.4798 20.8692 14.2237 20.4444 15.5998H20.4424Z" fill="#3A86FF" />
      </svg>
    </div>
  </section>
  {/* =============================================================
              Upcoming Events section
==================================================================*/}
  <section className="dn--hm1--events--section dn--overflow-hidden">
    <div className="dn--hm1--events--container  container px-xxl-0">
      <div className="dn--hm1--events--titlsBox">
        <p className="dn--hm1--subTitle  dn--hm1--events--subTitle has_fade_anim">Charity Events</p>
        <h2 className="dn--hm1--title   dn--hm1--events--title has_fade_anim">Upcoming Events</h2>
      </div>
      <div className="dn--hm1-main-eventsBox">
        <div className="row dn--lg-row-reverse dn--evn2-contain-row mb-40 has_fade_anim" data-fade-from="right">
          <div className="col-12 col-md-10 col-lg-6 dn--d-flex dn--align-items-center dn--justify-content-center">
            <div className="dn--evn2-post-contain-box">
              <h4 className="font-size-48 font-size-48-lih-72 ab3-bg-blue underline dn--hm1-h4-hover-color mb-30 ">
                <a href="#">
                  Trustee Leadership Programme’23
                </a>
              </h4>
              <ul className="dn--evn2-post-contain-ul">
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 color-Dark-blue dn--cs2-h4-hover-color underline ">
                    <span className="ab3-bg-blue">
                      <i className="ri-calendar-2-line" />
                    </span>
                    <a href="#">
                      25 December, 2024
                    </a>
                  </p>
                </li>
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 evn1-black">
                    <span className="ab3-bg-blue">
                      <i className="ri-time-line" />
                    </span>
                    08:00 AM
                  </p>
                </li>
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 evn1-black">
                    <span className="ab3-bg-blue">
                      <i className="ri-map-pin-line" />
                    </span>
                    142 Charity Avenue, Hopeville, USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 dn--evn2-p-0 dn--d-flex dn--align-items-center">
            <div className="dn--evn2-contain-img-box">
              <img src="assets/images/EventsSectionImg(2).png" alt="EventsSectionImg(2).png" />
              <div className="dn--hm6-button dn--evn2-contain-img-box-button">
                <a className="dn--button-hover dn--button-hover-1" href="donate-page.html">
                  <span className="dn--button-hover-text">
                    Donate Now
                  </span>
                  <span className="dn--button-hover-arrow">
                    <svg className="dn--button-hover-svg-arrow" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 9.8 9.8">
                      <g>
                        <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                      </g>
                      <g><path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row dn--lg-row-reverse dn--evn2-contain-row mb-40 has_fade_anim" data-fade-from="left">
          <div className="col-12 col-md-10 col-lg-6 dn--d-flex dn--align-items-center dn--justify-content-center">
            <div className="dn--evn2-post-contain-box">
              <h4 className="font-size-48 font-size-48-lih-72 ab3-bg-blue underline dn--hm1-h4-hover-color mb-30 ">
                <a href="#">
                  The American Cancer Society Relay for Life
                </a>
              </h4>
              <ul className="dn--evn2-post-contain-ul">
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 color-Dark-blue dn--cs2-h4-hover-color underline">
                    <span className="ab3-bg-blue">
                      <i className="ri-calendar-2-line" />
                    </span>
                    <a href="#">
                      25 December, 2024
                    </a>
                  </p>
                </li>
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 color-Dark-blue ">
                    <span className="ab3-bg-blue">
                      <i className="ri-time-line" />
                    </span>
                    08:00 AM
                  </p>
                </li>
                <li>
                  <p className="font-size-24 font-size-24-lih-43 fw-400 color-Dark-blue ">
                    <span className="ab3-bg-blue">
                      <i className="ri-map-pin-line" />
                    </span>
                    142 Charity Avenue, Hopeville, USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 dn--evn2-p-0 dn--d-flex dn--align-items-center">
            <div className="dn--evn2-contain-img-box">
              <img src="assets/images/EventsSectionImg(1).png" alt="EventsSectionImg(1).png" />
              <div className="dn--hm6-button dn--evn2-contain-img-box-button">
              <Link className="dn--button-hover dn--button-hover-1" to="/donate">
                  <span className="dn--button-hover-text">
                    Donate Now
                  </span>
                  <span className="dn--button-hover-arrow">
                    <svg className="dn--button-hover-svg-arrow" xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 9.8 9.8">
                      <g>
                        <path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                      </g>
                      <g><path d="m.4 9.4 9-9" /><path d="M.4.5h8.9" /><path d="M9.3 9.4V.5" />
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dn--hm1-events--svg--1">
        <svg width={29} height={25} viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.9341 2.84021C22.405 3.83248 21.669 3.85966 20.9697 3.80982C19.4285 3.70108 17.8873 3.54703 16.3507 3.36127C14.0735 3.08035 11.833 3.13019 9.66156 3.95481C7.33369 4.83834 5.57169 6.33807 4.59178 8.63071C3.68547 10.7512 3.86496 12.8263 5.35553 14.5979C9.09576 19.0382 13.9815 21.0817 19.8103 20.991C20.1646 20.9865 20.5234 20.9321 20.8731 20.8596C24.2913 20.1392 25.6484 16.9676 23.6196 14.1494C22.0186 11.9247 19.7551 10.7104 16.9028 10.7829C15.7342 10.8146 15.1638 11.458 15.3432 12.6089C15.4491 13.2976 15.656 13.9772 15.8584 14.6523C16.0287 15.2096 16.3185 15.7397 16.4611 16.3015C16.6636 17.1171 16.7004 17.9644 15.9091 18.5353C15.3938 18.9068 14.2023 18.5942 13.7192 17.8149C12.7393 16.22 11.6398 14.6251 11.0693 12.8762C10.1032 9.93108 11.4879 7.50252 14.4737 6.48759C15.4582 6.1523 16.5808 5.97107 17.6205 6.04809C22.3866 6.38791 25.9934 8.57634 28.0821 12.8898C30.5341 17.9417 27.8889 23.4649 22.3452 24.6747C20.6384 25.0462 18.7752 25.0734 17.027 24.8876C12.1596 24.3666 7.83972 22.4726 4.21911 19.1923C3.2668 18.3314 2.3881 17.3346 1.68882 16.2653C-1.43033 11.4942 -0.114571 5.57235 4.69297 2.38259C6.708 1.04597 8.90703 0.189627 11.3453 0.0401074C14.8509 -0.177376 18.2231 0.506791 21.4941 1.67577C22.0599 1.87966 22.4879 2.46867 22.9341 2.84474V2.84021Z" fill="#3A86FF" />
        </svg>                
      </div>
      <div className="dn--hm1-events--svg--2">
        <svg width={49} height={44} viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.689 21.1325C19.3858 22.6072 20.0114 23.8265 20.5328 25.0843C21.0968 26.4434 21.9595 27.706 22.1348 29.2771C19.3004 31.547 16.5419 33.7012 13.8497 35.9277C12.4088 37.1181 11.0485 38.4193 9.70235 39.7253C9.43219 39.9903 9.39901 40.5108 9.18098 41.1373C11.2381 41.3446 12.5794 40.3325 13.935 39.5663C16.6509 38.0385 19.2862 36.3614 21.9737 34.7855C22.6847 34.3663 23.4857 34.0964 24.4289 33.6771C25.41 35.6578 26.2632 37.4699 27.2017 39.2337C28.1212 40.959 28.9175 42.8337 31.2589 44C31.5765 39.2434 28.5904 35.9229 27.6046 31.7735C28.9602 30.8964 30.3015 30.0241 31.6429 29.1566C32.9748 28.2988 34.3066 27.4409 35.8471 26.4482C36.8756 28.1928 37.6956 29.7349 38.6625 31.1807C39.6342 32.6265 40.2456 34.5494 42.4828 34.853C42.5681 34.294 42.7103 33.9181 42.6629 33.5759C42.1937 30.2458 39.9233 27.6916 38.7668 24.4675C39.3403 23.9759 39.8664 23.4554 40.4541 23.0313C42.1794 21.7928 43.9663 20.641 45.6632 19.3638C46.6538 18.6217 47.5686 17.7542 48.4075 16.8337C48.744 16.4626 48.782 15.8024 49 15.1325C47.1847 14.6843 45.7912 15.1036 44.4545 15.8265C42.4828 16.8964 40.53 18.0048 38.5488 19.0554C37.8141 19.4458 37.0225 19.7253 36.1646 20.0964C35.3162 18.7807 34.5721 17.6241 33.8279 16.4723C33.1075 15.3494 32.387 14.2217 31.6429 13.0602C34.0886 10.7229 37.5107 9.75421 38.7526 6.19758C34.7854 5.63373 32.2353 8.66024 28.9033 9.7253C27.7278 8.11084 26.6661 6.56385 25.5096 5.09879C24.2725 3.52288 22.9643 2 21.6277 0.510842C21.3812 0.236143 20.8456 0.236145 20.1062 0C20.8361 4.73735 24.372 7.653 25.8177 11.7108C23.7369 12.8675 21.9879 14.2699 19.7033 14.9398C18.4283 12.6024 17.2813 10.3663 16.0158 8.2024C14.7218 5.99035 13.7881 3.46023 11.475 1.9518C11.2381 2.34216 10.9821 2.56386 11.0058 2.74217C11.7215 7.84096 15.1816 11.8265 16.6462 16.8048C15.9399 17.3494 15.2953 17.9084 14.5938 18.3807C11.4893 20.4771 8.35152 22.5253 5.25643 24.6409C3.81553 25.6289 2.42677 26.6988 1.07119 27.8024C0.63039 28.159 0.369704 28.7373 0 29.253C0.417102 29.4602 0.663571 29.6964 0.843683 29.653C7.23767 28.1542 12.2666 23.6915 18.6653 21.1325H18.689ZM28.2539 15.147C30.3442 17.012 31.4438 19.5036 32.9511 21.6337C31.003 23.6578 28.6378 25.2 25.3247 26.6217C23.9502 24.4434 23.0354 22.0193 21.9073 19.2337C24.1208 17.8072 26.0831 16.5446 28.2539 15.147Z" fill="#3A86FF" />
        </svg>                             
      </div>
    </div>
  </section>
  {/* =============================================================
              Our Team section
==================================================================*/}
  <section className="dn--hm1--ourTeam--section dn--overflow-hidden">
    <div className="dn--hm1--ourTeam--section-container container px-xxl-0">
      <div className="dn--hm1--ourTeam--titlesBox text-center ">
        <p className="dn--hm1--subTitle  dn--hm1--ourTeam--subTitle has_fade_anim">Our Team</p>
        <h2 className="dn--hm1--title  dn--hm1--ourTeam--Title has_fade_anim">Meet with Team</h2>
      </div>
      <div className="dn--hm1--ourTeam--main-cardBox ">
        <div className="row g-4 ">
          <div className="col-lg-4 has_fade_anim" data-fade-from="left" data-delay="5s">
            <div className="dn--hm1--single-card   dn--hm1--ourTeam--single-card  dn--hm1--ourTeam--single-card--1 data-fade-from" data-fade-from="left">
              <div className="dn--hm1--ourTeam--single-card--imgBox ">
                <img className="dn--hm1--ourTeam--single-card--img" src="assets/images/team01.jpg" alt="" />
                <div className="dn--hm1--ourTeam--card--titelBox dn--hm1--ourTeam--card--titelBox--1">
                  <h3 className="dn--hm1--ourTeam--cardTitle underline">
                    <a href="#">
                      Henry Ethan
                    </a>
                  </h3>
                  <p className="dn--hm1--ourTeam--card--subTitle">Founder &amp; CEO</p>
                </div>
              </div>
              <div className="dn--hm1--card-Bg">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-facebook" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-instagram" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 has_fade_anim" data-delay="5s">
            <div className="dn--hm1--single-card   dn--hm1--ourTeam--single-card  dn--hm1--ourTeam--single-card--2">
              <div className="dn--hm1--ourTeam--single-card--imgBox">
                <img className="dn--hm1--ourTeam--single-card--img" src="assets/images/team02.jpg" alt="" />
                <div className="dn--hm1--ourTeam--card--titelBox  dn--hm1--ourTeam--card--titelBox--1">
                  <h3 className="dn--hm1--ourTeam--cardTitle underline">
                    <a href="#">
                      Donna T. Lindsay
                    </a>
                  </h3>
                  <p className="dn--hm1--ourTeam--card--subTitle">Marketing Officer</p>
                </div>
              </div>
              <div className="dn--hm1--card-Bg">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-facebook" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-instagram" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 has_fade_anim" data-fade-from="right" data-delay="5s">
            <div className="dn--hm1--single-card   dn--hm1--ourTeam--single-card  dn--hm1--ourTeam--single-card--3">
              <div className="dn--hm1--ourTeam--single-card--imgBox">
                <img className="dn--hm1--ourTeam--single-card--img" src="assets/images/team03.jpg" alt="" />
                <div className="dn--hm1--ourTeam--card--titelBox  dn--hm1--ourTeam--card--titelBox--1">
                  <h3 className="dn--hm1--ourTeam--cardTitle underline">
                    <a href="#">
                      Dorathy J. Hague
                    </a>
                  </h3>
                  <p className="dn--hm1--ourTeam--card--subTitle">Production Manager</p>
                </div>
              </div>
              <div className="dn--hm1--card-Bg">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-facebook" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-instagram" />
                  </a>
                  <a className="dn--hm1--card-icibLink" href="#">
                    <i className="dn--hm1--card-Icon  icon-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dn--hm1--ourTeam--svg-container">
        <div className="dn--hm1--ourTeam--svg--box">
          <span className="dn--hm1--ourTeam--svg dn--hm1--ourTeam--svg--1">
            <svg width={28} height={39} viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M28 19.3236C27.1612 21.0149 25.7239 21.3458 24.1585 21.5244C21.1559 21.8606 18.1586 22.244 15.3163 22.5854C14.2317 23.9195 14.3492 25.3219 14.1782 26.6455C13.831 29.3348 13.6012 32.0397 13.1845 34.7237C13.0028 35.9003 12.6074 37.0873 12.0839 38.1641C11.5442 39.2776 10.0697 39.2513 9.38044 38.2481C8.57902 37.0873 8.30119 35.7795 8.23708 34.3981C8.09282 31.2834 7.92183 28.1687 7.74552 25.054C7.69744 24.2714 7.5692 23.4888 7.47303 22.6642C5.8328 22.2755 4.3582 21.9971 2.93167 21.5559C2.03409 21.2775 1.18463 20.7996 0.367182 20.3164C-0.209838 19.9749 -0.0816036 18.8667 0.575558 18.6356C1.60671 18.2784 2.65919 17.9475 3.73309 17.7689C5.07947 17.5431 6.45791 17.4853 8.07677 17.333C8.37597 16.3193 8.73395 15.3266 8.96369 14.3076C9.67962 11.1299 10.3047 7.9364 11.0581 4.7692C11.368 3.45609 11.8435 2.1745 12.3777 0.92968C12.5487 0.535749 13.1417 0.320397 13.5692 0C14.9583 1.50219 14.7766 3.17246 14.8033 4.7692C14.846 7.61601 14.7873 10.4681 14.8033 13.3149C14.8033 14.2393 14.9102 15.1585 14.9797 16.3403C16.2192 16.4191 17.2824 16.4716 18.3403 16.5504C20.4026 16.6974 22.4702 16.7762 24.5165 17.0388C25.8843 17.2122 27.2253 17.6324 28 19.3289V19.3236Z" fill="#3A86FF" />
            </svg>
          </span>
          <span className="dn--hm1--ourTeam--svg dn--hm1--ourTeam--svg--2">
            <svg width={66} height={57} viewBox="0 0 66 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.0946 6.25723C47.347 2.84344 42.0678 0.660855 36.1869 0.138527C27.3026 -0.649629 19.3885 1.95736 12.2624 7.14333C8.6341 9.78296 6.03176 13.2807 4.35751 17.422C2.20757 22.7386 1.39144 28.2463 2.38946 33.9593C2.56202 34.9433 2.58531 35.9647 2.83249 36.9254C3.72324 40.3532 3.24292 43.6037 1.75988 46.7703C0.743206 48.9436 0.38873 51.2987 0.0296294 53.6492C-0.147589 54.8198 0.482001 55.6359 1.60128 55.6966C2.21688 55.7292 2.86051 55.7245 3.46212 55.5893C4.80059 55.2908 6.13902 54.9597 7.44484 54.5306C10.9892 53.3647 14.4916 53.2295 18.1339 54.2368C24.0708 55.8784 30.1848 56.3448 34.1676 56.48C41.1117 56.6153 45.8174 56.1116 50.3271 54.4187C56.3199 52.1662 60.9182 48.3233 63.5998 42.4331C66.0576 37.0233 66.5799 31.3337 65.386 25.5601C63.6791 17.2961 58.8056 11.0934 52.09 6.2619L52.0946 6.25723ZM58.7869 40.036C56.8795 44.3592 53.5263 47.2787 49.2264 49.1301C45.9712 50.5292 42.5435 51.1961 39.0131 51.3267C32.7312 51.5552 26.4772 51.2101 20.3678 49.7178C15.7229 48.5845 11.2224 48.5052 6.72201 50.1701C6.49815 50.2541 6.24162 50.2448 5.40683 50.3613C5.8079 49.2747 5.98044 48.5519 6.32555 47.9269C8.25164 44.4478 8.28896 40.7542 7.67802 36.972C7.44017 35.489 7.25362 33.9966 6.97381 32.5229C6.37686 29.3796 6.73129 26.2643 7.43083 23.2096C8.80195 17.1842 12.1039 12.5065 17.5044 9.35857C21.5617 6.9941 25.9129 5.51105 30.5626 4.94675C33.1975 4.62962 35.8278 4.78352 38.3881 5.47374C49.1845 8.38386 56.8749 14.7218 60.0275 25.7186C61.4126 30.5548 60.8249 35.4284 58.7869 40.0314V40.036Z" fill="#3A86FF" />
              <path d="M41.6001 16.9078C41.0871 16.073 40.3968 15.2895 39.6273 14.6833C37.5753 13.0603 34.9217 13.2375 33.2335 15.2103C32.3614 16.2269 31.6851 17.4954 31.2234 18.7593C30.6778 20.2656 30.4586 21.8886 29.9969 23.9219C28.9615 23.6888 28.1081 23.5489 27.2873 23.3017C24.9648 22.6068 22.5863 22.5555 20.2125 22.77C19.1213 22.868 17.974 23.1804 17.0086 23.6841C15.0685 24.6961 14.3784 26.8181 15.3531 28.8141C15.8894 29.9101 16.6775 30.9407 17.545 31.8082C19.2425 33.5104 21.3318 34.6577 23.5377 35.5951C27.6371 37.3346 31.923 37.9502 36.3534 38.0621C38.1256 38.1088 39.2496 37.4978 40.0983 36.1454C43.2323 31.1506 44.3656 25.7687 42.9665 19.9812C42.7053 18.9039 42.1924 17.8545 41.6047 16.9078H41.6001ZM39.0444 28.7675C38.3028 30.8754 37.3888 32.9181 36.5074 35.096C28.5605 34.5504 21.6816 31.3371 19.3451 27.1538C19.7975 26.972 20.2126 26.7015 20.6556 26.6502C23.1833 26.361 25.6317 26.7854 28.0148 27.6295C28.6024 27.8394 29.1621 28.1285 29.7451 28.3477C32.7065 29.4623 33.9237 28.6649 34.1988 25.5449C34.362 23.6934 34.6186 21.842 34.931 20.0092C35.029 19.4215 35.4067 18.8619 35.7378 18.3442C35.9197 18.0598 36.2788 17.8825 36.6519 17.5841C38.5593 18.3442 39.0443 20.0698 39.3895 21.7347C39.8791 24.0805 39.8465 26.4823 39.0397 28.7675H39.0444Z" fill="#3A86FF" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* =============================================================
              Testimonials section
==================================================================*/}
  <section className="dn--hm1--testimonials--section  dn--overflow-hidden">
    <div className="dn--hm1--testimonials--container container px-xxl-0">
      <div className="dn--hm1--testimonials--titlesBox ">
        <p className="dn--hm1--testimonials--subTitle  dn--hm1--subTitle has_fade_anim">Testimonials</p>
        <h2 className="dn--hm1--testimonials--title  dn--hm1--title has_fade_anim ">Review from Partners</h2>
      </div>
      <div className>
        <div className="row g-4 dn--hm1--main-testoBox">
          <div className="col-12 col-xxl-6 has_fade_anim" data-fade-from="left" data-delay="5s">
            <div className="dn--hm1--single--reviewBox">
              <p className="dn--hm1--review--txt">I have had the pleasure of volunteering with this foundation, and I can attest to the amazing work they do. Their commitment to helping those in need is truly inspiring.</p>
              <div className="dn--hm1--review--person--main--dataBox">
                <div className="dn--hm1--review--person--imgBox">
                  <img className="dn--hm1--review--person--img" src="assets/images/testosectionimg(2).png" alt="" />
                </div>
                <div className="dn--hm1--review--person--data">
                  <h4 className="dn--hm1--review--person--name underline">
                    <a href="#">
                      George Niran
                    </a>
                  </h4>
                  <span className="dn--hm1--review--person--profession">{/*, Artful Antics*/}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6 has_fade_anim" data-fade-from="right" data-delay="5s">
            <div className="dn--hm1--single--reviewBox">
              <p className="dn--hm1--review--txt">The team at SpringLife foundation is incredibly knowledgeable and passionate about their work. They have a deep understanding of the issues they are addressing</p>
              <div className="dn--hm1--review--person--main--dataBox">
                <div className="dn--hm1--review--person--imgBox">
                  <img className="dn--hm1--review--person--img" src="assets/images/testosectionimg(1).png" alt="" />
                </div>
                <div className="dn--hm1--review--person--data">
                  <h4 className="dn--hm1--review--person--name underline">
                    <a href="#">
                      Emberlynn Flora
                    </a>
                  </h4>
                  <span className="dn--hm1--review--person--profession">{/*Project Manager, Mosaic Makers*/}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6 has_fade_anim" data-fade-from="left" data-delay="5s">
            <div className="dn--hm1--single--reviewBox">
              <p className="dn--hm1--review--txt">Donating to SpringLife has been one of the most fulfilling experiences of my life. I've seen firsthand the impact they have on the community</p>
              <div className="dn--hm1--review--person--main--dataBox">
                <div className="dn--hm1--review--person--imgBox">
                  <img className="dn--hm1--review--person--img" src="assets/images/testo--img(1).jpg" alt="" />
                </div>
                <div className="dn--hm1--review--person--data">
                  <h4 className="dn--hm1--review--person--name underline">
                    <a href="#">
                      John R. Lea
                    </a>
                  </h4>
                  <span className="dn--hm1--review--person--profession">{/*Founder, Artful Antics*/}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6 has_fade_anim" data-fade-from="right" data-delay="5s">
            <div className="dn--hm1--single--reviewBox">
              <p className="dn--hm1--review--txt">Supporting projects in education and childcare not only transforms lives but also helps build a better future for our community</p>
              <div className="dn--hm1--review--person--main--dataBox">
                <div className="dn--hm1--review--person--imgBox">
                  <img className="dn--hm1--review--person--img" src="assets/images/testo--img(2).jpg" alt="" />
                </div>
                <div className="dn--hm1--review--person--data">
                  <h4 className="dn--hm1--review--person--name underline">
                    <a href="#">
                      Ken L. Parker
                    </a>
                  </h4>
                  <span className="dn--hm1--review--person--profession">{/*Project Manager, Mosaic Makers*/}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =============================================================
              News & Blogs section
==================================================================*/}
  <section className="dn--hm1--newsBlogs--section dn--overflow-hidden">
    <div className="dn--hm1--newsBlogs--container  container px-xxl-0">
      <div className="dn--hm1--newsBlogs-titleBox">
        <p className="dn--hm1--newsBlogs-subTitle  dn--hm1--subTitle has_fade_anim">News &amp; Blogs</p>
        <h2 className="dn--hm1--newsBlogs-title  dn--hm1--title   dn--hm1--title has_fade_anim">Our Latest Stories</h2>
      </div>
      <div className="dn--hm1--newsBlog--main--cardBox">
        <div className="row g-4 g-lg-5 g-xl-4  justify-content-center ">
          <div className="col-lg-6  col-xl-4">
            <div className="dn--hm1--newsBlog--singleCard has_fade_anim" data-fade-from="left">
              <div className="dn--hm1--newsBlog--singleCard--details ">
                <div className="dn--hm1--newsBlog--card--imgBox">
                  <img className="dn--hm1--newsBlog--card--img" src="assets/images/News%26BlogsCardImg(1).png" alt="" />
                </div>
                <div className="dn--hm1--newsBlog--cardBody">
                  <h3 className="dn--hm1--newsBlog--cardTitle">
                    <a href="#">
                      How Micro-Donations Can Change the World
                    </a>
                  </h3>
                  <div className="dn--hm1--newsBlog--card--main--iconTxt--box">
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2800)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 11C10 11 9 10 9 8C9 6 10 5 12 5C14 5 15 6 15 8C15 10 14 11 12 11Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 19C5 16.2 6 14 12 14C18 14 19 16.2 19 19" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2800">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt dn--hm1--newsBlog--card--iconTxt-1">
                        <a className="dn--hm1--newsBlog--card--iconTxt--link" href="#">Norman Ronin</a>
                      </span>
                    </div>
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box dn--hm1--newsBlog--card--singel--iconTxt--box--2">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2798)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 19C9.733 19 9 17.75 9 14C9 10.25 9.733 9 14.5 9C19.267 9 20 10.25 20 14C20 17.75 19.267 19 14.5 19Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 18C5.267 18 5 17.25 5 15C5 12.75 5.267 12 7 12C8.733 12 9 12.75 9 15C9 17.25 8.733 18 7 18Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 10C10 10 12 5 13 5C13.89 5 13.99 6.57 13.99 9.01" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2798">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt  dn--hm1--newsBlog--card--iconTxt-4">12,882</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dn--hm1--newsBlog--singleCard--BG">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink  dn--hm1--card--linkTxt" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-xl-4">
            <div className="dn--hm1--newsBlog--singleCard has_fade_anim">
              <div className="dn--hm1--newsBlog--singleCard--details ">
                <div className="dn--hm1--newsBlog--card--imgBox ">
                  <img className="dn--hm1--newsBlog--card--img" src="assets/images/News%26BlogsCardImg(3).png" alt="" />
                </div>
                <div className="dn--hm1--newsBlog--cardBody">
                  <h3 className="dn--hm1--newsBlog--cardTitle">
                    <a href="#">
                      The Impact of Long-Term Charity Support
                    </a>
                  </h3>
                  <div className="dn--hm1--newsBlog--card--main--iconTxt--box">
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2800)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 11C10 11 9 10 9 8C9 6 10 5 12 5C14 5 15 6 15 8C15 10 14 11 12 11Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 19C5 16.2 6 14 12 14C18 14 19 16.2 19 19" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2800">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt dn--hm1--newsBlog--card--iconTxt-2">
                        <a className="dn--hm1--newsBlog--card--iconTxt--link" href="#">Samuel Sanjay</a>
                      </span>
                    </div>
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box dn--hm1--newsBlog--card--singel--iconTxt--box--2">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2798)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 19C9.733 19 9 17.75 9 14C9 10.25 9.733 9 14.5 9C19.267 9 20 10.25 20 14C20 17.75 19.267 19 14.5 19Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 18C5.267 18 5 17.25 5 15C5 12.75 5.267 12 7 12C8.733 12 9 12.75 9 15C9 17.25 8.733 18 7 18Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 10C10 10 12 5 13 5C13.89 5 13.99 6.57 13.99 9.01" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2798">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt dn--hm1--newsBlog--card--iconTxt-5">90,563</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dn--hm1--newsBlog--singleCard--BG ">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink  dn--hm1--card--linkTxt" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-xl-4 ">
            <div className="dn--hm1--newsBlog--singleCard mt-lg-5 mt-xl-0 has_fade_anim" data-fade-from="right">
              <div className="dn--hm1--newsBlog--singleCard--details ">
                <div className="dn--hm1--newsBlog--card--imgBox ">
                  <img className="dn--hm1--newsBlog--card--img" src="assets/images/News%26BlogsCardImg(2).png" alt="" />
                </div>
                <div className="dn--hm1--newsBlog--cardBody">
                  <h3 className="dn--hm1--newsBlog--cardTitle ">
                    <a href="#">
                      Social Enterprises Making a Difference
                    </a>
                  </h3>
                  <div className="dn--hm1--newsBlog--card--main--iconTxt--box">
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2800)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 11C10 11 9 10 9 8C9 6 10 5 12 5C14 5 15 6 15 8C15 10 14 11 12 11Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 19C5 16.2 6 14 12 14C18 14 19 16.2 19 19" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2800">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt dn--hm1--newsBlog--card--iconTxt-3">
                        <a href="#" className="dn--hm1--newsBlog--card--iconTxt--link">Asha Gurmeet</a>
                      </span>
                    </div>
                    <div className="dn--hm1--newsBlog--card--singel--iconTxt--box dn--hm1--newsBlog--card--singel--iconTxt--box--2">
                      <span className="dn--hm1--newsBlog--card--singel--icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_204_2798)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 19C9.733 19 9 17.75 9 14C9 10.25 9.733 9 14.5 9C19.267 9 20 10.25 20 14C20 17.75 19.267 19 14.5 19Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 18C5.267 18 5 17.25 5 15C5 12.75 5.267 12 7 12C8.733 12 9 12.75 9 15C9 17.25 8.733 18 7 18Z" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 10C10 10 12 5 13 5C13.89 5 13.99 6.57 13.99 9.01" stroke="#3A86FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_204_2798">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>                            
                      </span>
                      <span className="dn--hm1--newsBlog--card--iconTxt  dn--hm1--newsBlog--card--iconTxt-6">47,463</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dn--hm1--newsBlog--singleCard--BG">
                <div className="dn--hm1--card--iconBox">
                  <a className="dn--hm1--card-icibLink  dn--hm1--card--linkTxt" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dn--hm1--newsBlog--svg">
        <svg width={71} height={68} viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.5294 48.032C50.4222 47.944 49.9013 48.063 49.6428 47.8535C48.675 47.0709 47.7671 46.2046 46.8812 45.3256C43.9776 42.4324 41.085 39.5329 38.2066 36.6154C36.8244 35.2171 35.197 34.211 33.4581 33.3183C30.3169 31.7072 27.1735 30.0924 24.1008 28.3533C22.4235 27.4055 20.8288 26.2773 19.3229 25.0732C18.4579 24.3836 17.6859 23.4633 17.1453 22.493C15.7173 19.9174 17.445 17.2591 20.4048 17.4665C21.4042 17.5381 22.449 17.8243 23.3466 18.2641C24.9768 19.0623 26.591 19.9434 28.0808 20.9749C37.0286 27.1541 44.2352 34.9725 49.7228 44.3581C50.286 45.3252 50.7166 46.3688 51.5251 48.0246L51.5294 48.032Z" fill="#3A86FF" />
          <path d="M59.2784 43.0043C57.4574 43.0926 56.7054 41.8071 55.8476 40.8234C52.0915 36.4963 48.9632 31.7332 46.5839 26.5228C45.6927 24.5708 45.1233 22.4526 44.5862 20.3649C44.1307 18.5888 44.1653 16.7509 44.6692 14.9515C45.1103 13.3751 45.8647 12.0011 47.1717 10.9713C49.376 9.23191 52.1131 9.57284 53.7709 11.8144C54.6008 12.937 55.0377 14.2129 55.2597 15.5931C55.6689 18.1231 55.4335 20.6175 54.7075 23.0364C53.2986 27.7364 54.2583 32.0369 56.6401 36.1452C57.4379 37.5271 58.28 38.8835 59.0705 40.2697C59.5279 41.0619 59.9153 41.8946 59.2696 43.0143L59.2784 43.0043Z" fill="#3A86FF" />
          <path d="M43.9286 54.6177C42.9358 54.3704 41.9679 54.03 40.9844 53.7478C37.9959 52.9035 34.951 52.5143 31.8704 53.0252C27.842 53.6902 24.1735 55.0467 21.8048 58.7138C21.4525 59.2611 20.8702 59.6907 20.3144 60.0557C20.2318 60.1084 20.1449 60.1536 20.0495 60.1841C19.3913 60.3971 18.522 60.049 18.2513 59.478C18.1812 59.263 18.052 59.0477 18.0468 58.8345C17.9883 55.763 18.6602 52.9183 21.0994 50.8369C26.4021 46.3112 37.4543 43.974 45.0036 51.8499C45.081 51.933 45.1621 52.0139 45.2395 52.0969C45.9795 52.9276 46.1974 53.7304 45.7979 54.2215C45.2882 54.845 44.5886 54.7821 43.9323 54.6156L43.9286 54.6177Z" fill="#3A86FF" />
        </svg>
      </div>
    </div>
  </section>
</main>

  )
}



export default Home;