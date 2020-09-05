import React from 'react';
import './Template2.css';

import Topbar from './topbar';
import Footer from './footer';

class Template2 extends React.Component {
    state={
        logo: "https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5da86cc13e54881edfdd15d4_logo-white-p-500.png",
        tag:"YOU DREAM. WE CREATE.",
        tag1:"",
        display: "none",
        size:"90px"
    }

    onHeaderClicked = () => {
        this.setState({display:"block"});
    }

    onSubmit =(e)=> {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({tag: "asdasd"});
        this.setState({display:"none"});
    }

    onChanged = (e) => {
        if(e.target.value !== "")
        this.setState({tag: e.target.value});
        else
        this.setState({tag: this.state.tag})
    }

    onButtonClicked = (e) => {
        e.preventDefault();
        this.setState({display:"none"});
    }

    onLinkClicked = (data) => {
        this.setState({logo:data});
    }
    onSizeClicked = (data) => {
        this.setState({size:data});
    }
    onNewPageClicked = (data1,data2) => {
        this.setState({tag:data1});
        this.setState({display:data2});
    }

        render() {
            return(
                <div><Topbar onLinkClick={this.onLinkClicked} onSizeClick={this.onSizeClicked} onNewPageClick ={this.onNewPageClicked} />
                <section id="bcg">
                    <div id="top-bar">
                        <img style={{width:this.state.size}} class="NUUK-image" src={this.state.logo} alt="NUUK"/>
                        <a class="menu-items">HOME</a>
                        <a class="menu-items">PROJECTS</a>
                        <a class="menu-items">ABOUT</a>
                        <a class="menu-items">SERVICES</a>
                        <a class="menu-items">BLOG</a>
                        <a class="menu-items">PAGES</a>
                        <button class="btn">GET FREE QUOTE</button>
                    </div>
                    <div id="container">
                        <h1 onClick={this.onHeaderClicked} class="header">{this.state.tag}</h1>
                        <form onSubmit={this.onSubmitted} style={{display: this.state.display}} >
                            <input onChange={this.onChanged} class="inputField" type="text" placeholder="Type your tag" />
                            <button class="saveButton" onClick={this.onButtonClicked}>Save</button>
                        </form>
                        <p class="header-para">We turn your ideas to reality, we don't stop until you're satisfied.</p>
                        <button class="header-button">GET FREE QUOTE</button>
                    </div>
                    <div id="information">
                        <div id="info-content1">
                            <img class="icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab349606d077a17cdc1521_phone.svg" alt="telephone-icon"/>
                            <h1 class="decoration">PHONE NUMBER</h1>
                            <p class="decoration-content">1-800-506-266</p>
                            <p class="decoration-content">1-100-777-800</p>
                        </div>
                        <div id="info-content2">
                            <img class="icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab34a1d26b0af297d09501_mail%20(1).svg" alt="contact-icon"/>
                            <h1 class="decoration">CONTACT</h1>
                            <p class="decoration-content">contact@nuuk.com</p>
                            <p class="decoration-content">info@nuuk.com</p>
                        </div>
                        <div id="info-content3">
                            <img class="icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab34b1e9af6e4032e17f18_clock.svg" alt="time-icon"/>
                            <h1 class="decoration">OPENING TIMES</h1>
                            <p class="decoration-content">Mon - Sat 8:00 - 17:30, Sunday - Closed</p>
                            <br/>
                            <a id="underline-style" href="#">FIND ON MAP
                                <div id="underline"></div></a>
                        </div>
                    </div>
                    <div class="social">
                        <a class="social-decoration" href="#"><img class="social-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5db1c0c0ca3871e69b1a7b3f_font-awesome_4-7-0_facebook_100_0_ffffff_none%20(4).png" alt="fb-icon"/></a>
                        <a class="social-decoration" href="#"><img class="social-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5db1c46c127194d1f2a869a9_font-awesome_4-7-0_twitter_100_0_ffffff_none%20(3).png" alt="twitter-icon"/></a>
                        <a class="social-decoration" href="#"><img class="social-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5db1c46c0cf70d54764b75b0_font-awesome_4-7-0_linkedin_100_0_ffffff_none%20(2).png" alt="Linkedin-icon"/></a>
                        <a class="social-decoration1" href="#"><img class="social-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5db1c46c7abe5c77b4c75713_font-awesome_4-7-0_instagram_100_0_ffffff_none%20(2).png" alt="instagram-icon"/></a>
                    </div>
                </section>

                <section id="seventh-section">
                    <div id="ss-logo">
                        <div class="ss-header"><h1 class="ss-h">TRUSTED BY TOP COMPANIES</h1></div>
                        <div id="ss-flex">
                            <a class="ss1" href="#"></a>
                            <a class="ss2" href="#"></a>
                            <a class="ss3" href="#"></a>
                            <a class="ss4" href="#"></a>
                            <a class="ss5" href="#"></a>
                            <h1 id="ss-header1">TRUSTED BY TOP COMPANIES</h1>
                        </div>
                    </div>

                    <div id="footer">
                        <div id="f-width">
                            <div id="f-row">

                                <div id="f-col1">
                                    <div id="f-content">
                                        <div id="header-withline">
                                            <h1 class="f-title">ABOUT NUUK</h1>
                                            <div class="line"></div>
                                        </div>
                                        <p class="f-para">Based on collective work and shared knowledge, Nuuk aims to favor dialogue and debate, to transform individual knowledge into increased creative potential.</p>
                                        <br/>
                                        <a id="underline-style" href="#">FIND ON MAP
                                        <div id="underline1"></div></a>
                                    </div>
                                </div>

                                <div id="f-col1">
                                    <div id="f-content">
                                        <div id="header-withline">
                                            <h1 class="f-title">SERVICES</h1>
                                            <div class="line"></div>
                                        </div>
                                        <div id="f-flex">
                                            <div><a class="f-tag">
                                                <div><a id="underline-style" href="#">FINANCIAL RESULTS<div id="underline2"></div></a></div></a>
                                            </div>
                                            <div><a class="f-tag">
                                                <div><a id="underline-style" href="#">CONSTRUCTION<div id="underline3"></div></a></div></a>
                                            </div>
                                           <div><a class="f-tag">
                                               <div><a id="underline-style" href="#">ARCHITECTURE<div id="underline3"></div></a></div></a>
                                            </div>
                                           <div><a class="f-tag">
                                               <div><a id="underline-style" href="#">RENOVATION<div id="underline4"></div></a></div></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="f-col1">
                                    <div id="f-content">
                                        <div id="header-withline">
                                            <h1 class="f-title">CONTACT US</h1>
                                            <div class="line"></div>
                                        </div>
                                        <div id="f-flex">
                                            <div id="f-phone">
                                                <img class="f-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab349606d077a17cdc1521_phone.svg" alt="p-icon"/>
                                                <div>
                                                    <h1 class="f-htext">PHONE NUMBER</h1>
                                                    <p class="f-hpara">1-800-506-266</p>
                                                </div>
                                            </div>
                                            <div id="f-phone">
                                                <img class="f-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab34b1e9af6e4032e17f18_clock.svg" alt="t-icon"/>
                                                <div>
                                                    <h1 class="f-htext">OPENING TIMES</h1>
                                                    <p class="f-hpara">Mon - Sat 8:00 - 17:30, Sunday - Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="f-phone">
                                            <img class="f-icon" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5dab34a1d26b0af297d09501_mail%20(1).svg" alt="e-icon"/>
                                            <div>
                                                <h1 class="f-htext">CONTACT</h1>
                                                <p class="f-hpara">contact@nuuk.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="copyright">
                                <div id="c-flex">
                                    <div id="c-col">
                                        <a class="c-tag1"><img class="c-img" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5da86cc13e54881edfdd15d4_logo-white.png" alt="Nuuk"/></a>
                                    </div>
                                    <div style={{height: "10px"}}></div>
                                    <div id="c-col">
                                        <div id="c-rightpart">
                                            <pre class="c-para">    Nuuk by Deni Bozo</pre>
                                            <a class="c-tag2">
                                                <img class="c-tagimg" src="https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5db2ca78e800a5265cf39d94_webflow.png" alt="c-tagicon"/>
                                                <div id="c-tagtext">Powered By Webflow</div>
                                            </a>
                                            <a class="c-tag2"><div id="c-tagtext">Style Guide</div></a>
                                            <a class="c-tag2"><div id="c-tagtext">Licensing</div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section><Footer header={this.state.tag} logo={this.state.logo} size={this.state.size} /></div>
            );
        }
}

export default Template2;