
import { Link } from 'react-router-dom';
import React, { useState } from 'react';




function Donate() {

    const [response, setResponse] = useState(''); // State to store the response message

    const handleClick = (message) => {
      setResponse(message); // Update state with the corresponding message
    };
    const handleCopy = () => {
        if (response) {
            navigator.clipboard.writeText(response)
                .then(() => {
                    alert('Message copied to clipboard!');
                })
                .catch((err) => {
                    console.error('Failed to copy message: ', err);
                });
        }
    };
    const copyButtonStyle = {
        backgroundColor: '#0077ea',   
        color: 'white',           
        padding: '10px 20px',      
        border: 'none',            
        borderRadius: '5px',       
        cursor: 'pointer',        
        margin: '5px',            
    };

    
    return (
      <div> 
         <section className="dn--ab1-header-area">
          <div className="container position-relative">
            <div className="dn--ab1-header-svg-1">
              <svg width={29} height={55} viewBox="0 0 29 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.47212 28.5211C12.5717 27.5814 12.979 47.2659 13.1523 53.6949H17.199C16.913 43.7827 17.043 30.3348 28.0351 26.1916C29.023 25.8201 29.4042 24.8674 28.4467 24.1987C20.8385 18.8886 16.4018 10.5847 15.9902 1.28875H11.9434C12.2597 6.71685 11.3238 12.0182 8.91053 16.9044C6.66185 21.4627 2.70174 23.9845 0.0761199 27.9966C-0.101521 28.2675 0.0587764 28.7833 0.279745 28.9756L0.587403 29.2465C1.39762 29.9502 2.84473 30.1381 3.7676 29.5044C3.85859 29.4389 3.94958 29.3776 4.04056 29.3121C6.03361 27.931 2.51113 26.5937 1.18098 27.5158C1.09 27.5814 0.999007 27.6426 0.90802 27.7081C1.96953 27.7955 3.0267 27.8786 4.08822 27.966C5.89062 29.535 12.8663 17.5512 13.4469 16.227C15.5136 11.5069 16.2935 6.41966 15.9945 1.29312C15.8948 -0.441949 11.8698 -0.420097 11.9478 1.29312C12.3984 11.402 17.3593 20.2522 25.5915 25.9993C25.7301 25.335 25.8644 24.6707 26.0031 24.0063C13.7328 28.6347 12.8359 42.3186 13.1652 53.7036C13.2172 55.4387 17.2597 55.4256 17.212 53.7036C16.9391 43.3981 15.6869 24.7581 1.41058 26.0823C-1.27137 26.3314 0.422709 28.7221 2.48508 28.5298L2.47212 28.5211Z" fill="#3A86FF" />
              </svg>
            </div>
            <div className="dn--ab1-header-svg-2">
              <svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.7836 58.4457C22.2591 56.4483 19.682 48.9118 18.3667 43.782C16.7395 37.4342 16.2914 30.3313 18.1913 23.9884C19.7624 18.7538 24.2029 12.3793 30.3095 12.3866C38.891 12.3988 38.3234 24.327 36.9228 29.9221C36.6914 30.8453 38.4038 32.8987 39.327 31.9853C41.965 29.3765 45.4433 27.2719 49.0264 26.3049C57.0647 24.1419 65.5877 30.6675 65.7996 39.0881C65.992 46.7634 58.7893 52.5583 52.556 55.625C44.9952 59.3421 35.9631 60.8864 27.7836 58.4457C26.0079 57.9171 27.3817 60.6355 28.4802 60.9643C41.3536 64.8056 60.5065 59.7074 66.886 46.9364C72.6759 35.3394 60.012 20.7463 47.7598 23.6206C43.8308 24.5438 39.9189 26.8725 37.0471 29.7102C37.8484 30.3995 38.6522 31.0864 39.4512 31.7734C41.2269 24.6973 40.9736 15.3047 33.8659 11.1346C27.1308 7.18609 19.8964 12.7251 16.9247 18.8196C13.0809 26.7117 13.8823 36.7985 16.3693 44.9658C18.2985 51.2941 21.8402 58.5577 28.4754 60.9594C30.1951 61.583 28.8407 58.8257 27.7787 58.4408L27.7836 58.4457Z" fill="white" />
                <path d="M59.8692 34.3694C61.0944 37.9672 59.5915 41.7646 56.4298 43.7864C55.4335 44.4221 57.5746 46.7824 58.7048 46.0614C62.3537 43.7279 63.803 39.0925 62.4219 35.0369C62.1954 34.367 61.5742 33.5315 60.8143 33.4292C60.2077 33.344 59.6231 33.646 59.8716 34.3719L59.8692 34.3694Z" fill="white" />
                <path d="M52.3002 48.4392C52.3002 48.5854 52.3002 48.7315 52.3002 48.8777C52.3002 49.6669 52.7728 50.4707 53.5522 50.7387C54.1319 50.9384 55.1185 50.8142 55.1209 49.9884L55.1209 49.55C55.1209 48.7608 54.6483 47.9569 53.8689 47.689C53.2892 47.4892 52.3026 47.6135 52.3002 48.4392Z" fill="white" />
              </svg>         
            </div>
            <div className="mt-65">
              <p className="font-size-24 font-size-24-lih-38 mb-15 color-white dn--text-center ">
                <span>
              
                </span>
              </p>
              <h4 className="font-size-64 color-white dn--text-center ">
                Your Donation significantly contributes 
                <br />
                to improving the lives of  others.
              </h4>
            </div>
          </div>
        </section>
        {/* dn--ab1-header-area End  */}
        {/* dn--dp1-donate-area  */}
        <section className="dn--dp1-donate-area pt-80 pb-160">
          <div className="container">
            <div className="row dn--justify-content-center">
              <div className="col-12 col-md-12 col-lg-10 col-xl-7">
                <div>
                    {/*
                  <div className="dn--dp1-donate-notice-contain mb-32 has_fade_anim">
                    <span>
                      <i className="icon-info-square" />
                    </span>
                     
                    <p className="font-size-18 font-size-18-lih-25 ab1-black ">
                      Notice: Test mode is enabled. While in test mode no live donations are processed. 
                    </p>
                    
                  </div>
                  */}
                  <div className="dn--dp1-donate-notice-border-top" />
                  <div className="dn--dp1-donate-progress-box mb-24 has_fade_anim">
                    <ul className="dn--csd1-progress-bar-info">
                      <li className>
                        <p className="font-size-18 font-size-18-lih-19 ADADAD">
                          Raised
                        </p>
                        <h4 className="font-size-24 font-size-24-lih-26 ab1-black">
                          $27500
                        </h4>
                      </li>
                      <li className>
                        <p className="font-size-18 font-size-18-lih-19 ADADAD dn--text-end">
                          Projected
                        </p>
                        <h4 className="font-size-24 font-size-24-lih-26 ab1-black dn--text-end">
                          $165,000
                        </h4>
                      </li>
                    </ul>
                    <div className="percentage" data-percentage={30}>
                      <div className="dn--csd1-progress-bar-animation animation">
                        <div className="dn--csd1-progress-bar-animation-bar animation-bar" />
                      </div>
                    </div>
                    <ul className="dn--csd1-progress-bar-info dn--dp1-progress-bar-info">
                      <li className="has_char_anim">
                        <p className="font-size-18 font-size-18-lih-19 ab1-black">
                          16.67%
                        </p>
                      </li>
                      <li className="has_char_anim">
                        <p className="font-size-18 font-size-18-lih-19 ab1-black dn--text-end">
                          83.33%
                        </p>
                      </li>
                    </ul>
                  </div>
                  <form className="has_fade_anim">
                    <div className="dn--dp1-donate-amount-box">
                      <input type="number" defaultValue={100.00} required className="dn_default_amount" /> 
                      <span>
                        $
                      </span>
                    </div>
                    <ul className="dn--dp1-donate-amount-button-item-box">
                      <li className="dn--dp1-donate-amount-button-box" data-amount={10}>
                        <span className="dn--hm6-button-text ">
                          $10
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={50}>
                        <span className>
                          $50
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box dn--dp1-donate-amount-button-box-active" data-amount={100}>
                        <span className>
                          $100
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={250}>
                        <span className>
                          $250
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={500}>
                        <span className>
                          $500
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={750}>
                        <span className>
                          $750
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={950}>
                        <span className>
                          $850
                        </span>
                      </li>
                      <li className="dn--dp1-donate-amount-button-box" data-amount={1050}>
                        <span className>
                          $1050
                        </span>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-8 col-xl-5 dn--col-pl-0 dn--col-pr-0">
                <div className="dn--dp1-personal-info-item-box">
                  <div>
                    <h4 className="font-size-32 font-size-32-lih-35 fw-600 color-black mb-25 " data-fade-from="left">
                      Personal Info
                    </h4>
                  </div>
                  <form>
                    <div className="mb-40">
                      <div className="mb-24">
                        <label className="font-size-18 font-size-18-lih-25 color-Dark-blue mb-16 dn--block ">
                          First Name
                          <span className="ml-5 ">
                            <button type="button" className="dn--cns1-backround-transparent" data-bs-container="label" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="First Name">
                              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.06 5C5.21674 4.55445 5.5261 4.17874 5.9333 3.93942C6.3405 3.70011 6.81926 3.61263 7.28478 3.69247C7.75031 3.77232 8.17254 4.01435 8.47672 4.37569C8.78089 4.73702 8.94737 5.19435 8.94667 5.66667C8.94667 7 6.94667 7.66667 6.94667 7.66667M7 10.3333H7.00667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#8EC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </span>
                        </label>
                        <div className="position-relative">
                          <input className="dn--cns1-contain-form-input dn--dp1-personal-info-input" type="text" placeholder="First Name" required />
                          <span className="dn--cns1-contain-form-input-icon">
                            <i className="icon-profile" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-24">
                        <label className="font-size-18 font-size-18-lih-25 color-Dark-blue mb-16 dn--block">
                          Last Name
                          <span className="ml-5 ">
                            <button type="button" className="dn--cns1-backround-transparent" data-bs-container="label" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Last Name">
                              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.06 5C5.21674 4.55445 5.5261 4.17874 5.9333 3.93942C6.3405 3.70011 6.81926 3.61263 7.28478 3.69247C7.75031 3.77232 8.17254 4.01435 8.47672 4.37569C8.78089 4.73702 8.94737 5.19435 8.94667 5.66667C8.94667 7 6.94667 7.66667 6.94667 7.66667M7 10.3333H7.00667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#8EC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </span>
                        </label>
                        <div className="position-relative">
                          <input className="dn--cns1-contain-form-input dn--dp1-personal-info-input" type="text" placeholder="Last Name" required />
                          <span className="dn--cns1-contain-form-input-icon">
                            <i className="icon-profile" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="font-size-18 font-size-18-lih-25 color-Dark-blue mb-16 dn--block ">
                          Email Address
                          <span className="ml-5 ">
                            <button type="button" className="dn--cns1-backround-transparent" data-bs-container="label" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Email Address">
                              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.06 5C5.21674 4.55445 5.5261 4.17874 5.9333 3.93942C6.3405 3.70011 6.81926 3.61263 7.28478 3.69247C7.75031 3.77232 8.17254 4.01435 8.47672 4.37569C8.78089 4.73702 8.94737 5.19435 8.94667 5.66667C8.94667 7 6.94667 7.66667 6.94667 7.66667M7 10.3333H7.00667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#8EC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </span>
                        </label>
                        <div className="position-relative">
                          <input className="dn--cns1-contain-form-input dn--dp1-personal-info-input" type="text" placeholder="Enter your email address" required />
                          <span className="dn--cns1-contain-form-input-icon">
                            <i className="icon-message" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dn_donation_details">
                      <h4 className="font-size-32 font-size-32-lih-35 fw-600 color-black mb-25 ">
                        Donation Details
                      </h4>
                      <div className="dn_priceListing">
                        <ul className="listing">
                          <li className="listItem"><p className="dn_left_tab_inf1">Your Donation</p> <p className=" dn_total_donation_amount">$9000</p></li>
                          <li className="listItem"><p className="dn_left_tab_inf1">Total</p> <p className=" dn_total_donation_amount">$9000</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-56">
                      <h4 className="font-size-32 font-size-32-lih-35 fw-600 color-black mb-25 " data-fade-from="left">
                        Payment Method
                      </h4>
                      <ul className="nav dn--dp1-nav-pills nav-pills mb-24" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link dn--dp1-nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <div className="dn--dp1-payment-option">
                              <span className="dn--dp1-payment-option-icon" />
                              <span className="font-size-18 font-size-18-lih-25 ab2-approx-Tuna">
                                Online Payment
                              </span>
                            </div>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link dn--dp1-nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <div className="dn--dp1-payment-option">
                              <span className="dn--dp1-payment-option-icon" />
                              <span className="font-size-18 font-size-18-lih-25 ab2-approx-Tuna">
                                Offline Payment
                              </span>
                            </div>
                          </button>
                        </li>
                      </ul>
                   <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div className="dn--dp1-payment-item-box">
          {/* PayPal Button */}
          <button
            className="dn--dp1-payment-item"
            type="button"
            onClick={() => handleClick('You selected PayPal as your payment method.')}
          >
            <img src="assets/images/Donate-page/PayPal.png" alt="PayPal" />
          </button>

          {/* MasterCard Button */}
          <button
            className="dn--dp1-payment-item"
            type="button"
            onClick={() => handleClick('You selected Cashapp as your payment method.')}
          >
            <img   style={{ width: '150px', height: 'auto' }}  src="assets/images/Blog-1/CASHAPP.png" alt="Cashapp" />
          </button>

          {/* Visa Button */}
          <button
            className="dn--dp1-payment-item"
            type="button"
            onClick={() => handleClick('You selected Visa as your payment method.')}
          >
            <img src="assets/images/Donate-page/Visa.png" alt="Visa" />
          </button>

          {/* Stripe Button */}
          <button
            className="dn--dp1-payment-item"
            type="button"
            onClick={() => handleClick('bc1qv3fjz2mzh8ecpej9tr580nr6csv42czd2zejmk')}
          >
            <img   style={{ width: '150px', height: 'auto' }}  src="assets/images/Blog-1/bitc.png" alt="Bitcoin" />
          </button>
        </div>
        {response && (
                <div>
                    <p>{response}</p>
                    <button    style={copyButtonStyle} onClick={handleCopy}>Copy</button>
                </div>
            )}
      </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <div className="dn--dp1-cash-on-delivery dn--text-center">
                            <img src="assets/images/Donate-page/cash-on-delivery.png" alt="cash-on-delivery.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dn--dp1-button-item-box">
                      <div className="dn--hm2-button">
                        <button className="dn--button-hover dn--button-hover-2">
                          <span className="dn--button-hover-text ">
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
                        </button>
                      </div>
                      <div className="dn--hm2-button">
                        <a className="dn--button-hover dn--button-hover-20" href="#">
                          <span className="dn--button-hover-text ">
                            Back to cause
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* dn--dp1-donate-area End  */}
        {/* dn--hm1--footer--area Start  */}
        {/*}
        <footer className="dn--hm1--footer--area ">
        <div className="dn--hm1--footer--container position-relative ">
          <div className="dn--hm1--footer--subContainer--1">
            <div className="dn--hm1--footer--subContainer--1--contentBox">
              <h2 className="dn--hm1--footer--title " data-fade-from="left">Make sure not to overlook our monthly updates.</h2>
              <div className="dn--hm1--footer--rightBox">
                <span className="dn--hm1--footer--txt ">The latest news, articles and resources, sent to your inbox weekly.</span>
                <form className="dn--hm1--footer--sbmit--form" action="#">
                  <div className="dn--hm1--footer--input--btnBox">
                    <div className="dn--hm6-button">
                      <button className="dn--button-hover dn--button-hover-2">
                        <span className="dn--button-hover-text">
                          Subscribe
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
                      </button>
                    </div>
                  </div>
                  <input className="dn--hm1--footer--input  rounded-pill" placeholder="Enter your email" type="email" required />
                </form>
              </div>
            </div>
          </div>
        </div></footer> 
        */}
        </div>

    );
}





export default Donate;