import React from 'react';
import './Template3.css';

import Topbar from './topbar';
import Footer from './footer';

class Template3 extends React.Component {
    state={
        header: "Vegan Store Simple Template",
        logo: "https://mobirise.com/extensions/organicamp/assets/images/logo1.jpg",
        display: "none",
        size:"40px"
    }

    onHeaderClicked = () => {
        this.setState({display:"block"});
    }

    onChanged = (e) => {
        if(e.target.value !== "")
        this.setState({header: e.target.value});
        else
        this.setState({header: this.state.header})
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
        this.setState({header:data1});
        this.setState({display:data2});
    }

    render () {
        return(
            <div style={{overflow: "hidden"}}> <Topbar onLinkClick={this.onLinkClicked} onSizeClick={this.onSizeClicked} onNewPageClick ={this.onNewPageClicked} />
            <div style={{marginTop: "100px"}}>
                <header>
	                <nav id="topbar">
	    	            <div>
			                <i id="hamburger-menu" class="fas fa-bars"></i>
			                <img style={{width:this.state.size}} id="logo" src={this.state.logo} alt="Vegan Store Logo" />
		                </div>
		                <div>
			                <a class="menu-item">Demo Pages<i class="fas fa-caret-down"></i></a>
			                <a class="menu-item">Watch Video</a>
			                <a class="menu-item">Blocks<i class="fas fa-caret-down"></i></a>
			                <button class="btn-primary">Buy Now</button>
		                </div>
		                <div id="sidebar">
			                <div id="header"></div>
			                <ul id="sidebar-menu-items">
				                <li>Menu Item 1</li>
				                <li>Menu Item 2</li>
				                <li>Menu Item 3</li>
				                <li>Menu Item 4</li>
			                </ul>
		                </div>
	                </nav>
	                <section id="landing-section">
                        <h1 onClick={this.onHeaderClicked}>{this.state.header}</h1>
                        <form onSubmit={this.onSubmitted} style={{display: this.state.display}} >
                            <input onChange={this.onChanged} class="inputField" type="text" placeholder="Type your tag" />
                            <button class="saveButton" onClick={this.onButtonClicked}>Save</button>
                        </form>
		                <p>With nutrition, all the vital functions of the body are connected. It is the source of the development of tissues and cells, their constant renewal, the saturation of man with energy.</p>
	                </section>
                </header>
                <main>
	                <section id="steps-section">
		                <div id="first-step" class="step-item">
			                <i class="fas fa-cut"></i>
			                <h3>Step 01.</h3>
			                <p>Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion.</p>
		                </div>
		                <div id="second-step" class="step-item">
			                <i class="fas fa-cut"></i>
			                <h3>Step 02.</h3>
			                <p>Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion.</p>
		                </div>
		                <div id="third-step" class="step-item">
			                <i class="fas fa-cut"></i>
			                <h3>Step 03.</h3>
			                <p>Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion.</p>
		                </div>
		                <div id="fourth-step" class="step-item">
			                <i class="fas fa-cut"></i>
			                <h3>Step 04.</h3>
			                <p>Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion.</p>
		                </div>
	                </section>
                </main>
                <section id="store-section">
                    <p class="fresh-food">fresh food</p>
                    <h3 class="">our vergan store</h3>
                    <p id="fresh-foodd-dise">Radish contains a lot of fiber, pectin and mineral salts.</p>
                    <div id="store-items-wrapper">
                        <div class="store-cart">
                            <div class="icon-wrapper">
                                <i class="fa fa-camera"></i>
                            </div>
                            <h3 class="">Fresh Vagetables</h3>
                            <p> Use for cooking several types of vegetable oil.</p>
                        </div>
                        <div class="store-cart">
                            <div class="icon-wrapper">
                                <i class="fa-rocket fa"></i>
                            </div>
                            <h3 class="">High Quality</h3>
                            <p>This is the best source of essential fatty acids for the body.</p>
                        </div>
                        <div class="store-cart">
                            <div class="icon-wrapper">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <h3>Sale</h3>
                            <p>It is very good, if in the kitchen there will always be several bottles with different oils.</p>
                        </div>
                        <div class="store-cart">
                            <div class="icon-wrapper">
                                <i class="fab fa-weixin"></i>
                            </div>
                            <h3 class="">Best price</h3>
                            <p> Remember that unrefined oils are not suitable for heat treatment.</p>
                        </div>
                    </div>
                </section>
                <section id="testimonials-section">
                    <p class="fresh-food">fresh food</p>
                    <h3 class="">Our Vegan Shop!</h3>
                    <p id="fresh-foodd-dise">According to experts, any habit can be formed in 21 days.
                    <br/> same statement applies to
                    healthy eating.</p>
                    <div id="testimonials-wrapper">
                        <div class="testimonial-cart">
                            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-6.jpg" alt=""/>
                            <p class="textimonical-msg">Sales consultants are very polite. Many of the products have tried and are ready to
                            prompt and recommend to customers. The staff shows that they completely share the philosophy of proper
                            nutrition, if you can say so.</p>
                            <h4 class="textimonical-name">VERONICA KING</h4>
                            <p class="job">Cook</p>
                        </div>
                        <div class="testimonial-cart">
                            <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""/>
                            <p class="textimonical-msg">Sales consultants are very polite. Many of the products have tried and are ready to
                            prompt and recommend to customers. The staff shows that they completely share the philosophy of proper
                            nutrition, if you can say so.</p>
                            <h4 class="textimonical-name">VERONICA KING</h4>
                            <p class="job">Cook</p>
                        </div>
                        <div class="testimonial-cart">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyErV8_GyQeY69pgGHL2oPpTKetzGguDBKsz2j1wcaxHSdcJOh"alt=""/>
                            <p class="textimonical-msg">Sales consultants are very polite. Many of the products have tried and are ready to
                            prompt and recommend to customers. The staff shows that they completely share the philosophy of proper
                            nutrition, if you can say so.</p>
                            <h4 class="textimonical-name">VERONICA KING</h4>
                            <p class="job">Cook</p>
                        </div>
                    </div>
                </section>
                </div>
                <Footer header={this.state.header} logo={this.state.logo} size={this.state.size} />
            </div>
        );
    }
}
export default Template3;