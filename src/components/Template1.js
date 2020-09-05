import React from 'react';
import './Template1.css';

class Template1 extends React.Component {

    state ={}

    render() {
        return (
       <div><nav id="topNav" class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand page-scroll" href="#first"><i class="ion-ios-analytics-outline"></i> Landing Zero</a>
                    </div>
                    <div class="navbar-collapse collapse" id="bs-navbar">
                        <ul class="nav navbar-nav">
                            <li>
                                <a class="page-scroll" href="#one">Intro</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#two">Highlights</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#three">Gallery</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#four">Features</a>
                            </li>
                            <li>
                                <a class="page-scroll" href="#last">Contact</a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a class="page-scroll" data-toggle="modal" title="A free Bootstrap video landing theme" href="#aboutModal">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header id="first">
                <div class="header-content">
                    <div class="inner">
                        <h1 class="cursive">Simple, One Page Design</h1>
                        <h4>A free landing page theme with video background</h4>
                        <hr/>
                        <a href="#video-background" id="toggleVideo" data-toggle="collapse" class="btn btn-primary btn-xl">Toggle Video</a> &nbsp; <a href="#one" class="btn btn-primary btn-xl page-scroll">Get Started</a>
                    </div>
                </div>
                <video autoplay="" loop="" class="fillWidth fadeIn wow collapse in" data-wow-delay="0.5s" poster="https://s3-us-west-2.amazonaws.com/coverr/poster/Traffic-blurred2.jpg" id="video-background">
                    <source src="https://s3-us-west-2.amazonaws.com/coverr/mp4/Traffic-blurred2.mp4" type="video/mp4"></source>
                </video>
            </header>
            <section class="bg-primary" id="one">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 text-center">
                            <h2 class="margin-top-0 text-primary">Built On The Bootstrap Grid</h2>
                            <br/>
                            <p class="text-faded">Bootstrap's responsive grid comes in 4 sizes or "breakpoints": tiny (xs), small(sm), medium(md) and large(lg). These 4 grid sizes enable you create responsive layouts that behave accordingly on different devices.</p>
                            <a href="#three" class="btn btn-default btn-xl page-scroll">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="margin-top-0 text-primary">Flexible Layouts</h2>
                            <hr class="primary"/>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="feature">
                                <i class="icon-lg ion-android-laptop wow fadeIn" data-wow-delay=".3s"></i>
                                <h3>Responsive</h3>
                                <p class="text-muted">Your site looks good everywhere</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="feature">
                                <i class="icon-lg ion-social-sass wow fadeInUp" data-wow-delay=".2s"></i>
                                <h3>Customizable</h3>
                                <p class="text-muted">Easy to theme and customize with SASS</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="feature">
                                <i class="icon-lg ion-ios-star-outline wow fadeIn" data-wow-delay=".3s"></i>
                                <h3>Consistent</h3>
                                <p class="text-muted">A mature, well-tested, stable codebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="three" class="no-padding">
                    <div class="container-fluid">
                        <div class="row no-gutter">
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1430916273432-273c2db881a0%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3Df047e8284d2fdc1df0fd57a5d294614d">
                                    <img src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1430916273432-273c2db881a0%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3Df047e8284d2fdc1df0fd57a5d294614d" class="img-responsive" alt="Image 1"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/getrefe/regular/tumblr_nqune4OGHl1slhhf0o1_1280.jpg">
                                    <img src="//splashbase.s3.amazonaws.com/getrefe/regular/tumblr_nqune4OGHl1slhhf0o1_1280.jpg" class="img-responsive" alt="Image 2"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1433959352364-9314c5b6eb0b%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3D3b9bc6caa190332e91472b6828a120a4">
                                    <img src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1433959352364-9314c5b6eb0b%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3D3b9bc6caa190332e91472b6828a120a4" class="img-responsive" alt="Image 3"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-moto-drawing-illusion-nabeel-1440x960.jpg">
                                    <img src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-moto-drawing-illusion-nabeel-1440x960.jpg" class="img-responsive" alt="Image 4"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-new-york-crosswalk-nabeel-1440x960.jpg">
                                    <img src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-new-york-crosswalk-nabeel-1440x960.jpg" class="img-responsive" alt="Image 5"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a href="#galleryModal" class="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-clothes-exotic-travel-nabeel-1440x960.jpg">
                                    <img src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-clothes-exotic-travel-nabeel-1440x960.jpg" class="img-responsive" alt="Image 6"/>
                                    <div class="gallery-box-caption">
                                        <div class="gallery-box-content">
                                            <div>
                                                <i class="icon-lg ion-ios-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
            </section>
            <section class="container-fluid" id="four">
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                        <h2 class="text-center text-primary">Features</h2>
                        <hr/>
                        <div class="media wow fadeInRight">
                            <h3>Simple</h3>
                            <div class="media-body media-middle">
                                <p>What could be easier? Get started fast with this landing page starter theme.</p>
                            </div>
                            <div class="media-right">
                                <i class="icon-lg ion-ios-bolt-outline"></i>
                            </div>
                        </div>
                        <hr/>
                        <div class="media wow fadeIn">
                            <h3>Free</h3>
                            <div class="media-left">
                                <a href="#alertModal" data-toggle="modal" data-target="#alertModal"><i class="icon-lg ion-ios-cloud-download-outline"></i></a>
                            </div>
                            <div class="media-body media-middle">
                                <p>Yes, please. Grab it for yourself, and make something awesome with this.</p>
                            </div>
                        </div>
                        <hr/>
                        <div class="media wow fadeInRight">
                            <h3>Unique</h3>
                            <div class="media-body media-middle">
                                <p>Because you don't want your Bootstrap site, to look like a Bootstrap site.</p>
                            </div>
                            <div class="media-right">
                                <i class="icon-lg ion-ios-snowy"></i>
                            </div>
                        </div>
                        <hr/>
                        <div class="media wow fadeIn">
                            <h3>Popular</h3>
                            <div class="media-left">
                                <i class="icon-lg ion-ios-heart-outline"></i>
                            </div>
                            <div class="media-body media-middle">
                                <p>There's good reason why Bootstrap is the most used frontend framework in the world.</p>
                            </div>
                        </div>
                        <hr/>
                        <div class="media wow fadeInRight">
                            <h3>Tested</h3>
                            <div class="media-body media-middle">
                                <p>Bootstrap is matured and well-tested. It's a stable codebase that provides consistency.</p>
                            </div>
                            <div class="media-right">
                                <i class="icon-lg ion-ios-flask-outline"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <aside class="bg-dark">
                <div class="container text-center">
                    <div class="call-to-action">
                        <h2 class="text-primary">Get Started</h2>
                        <a href="http://www.bootstrapzero.com/bootstrap-template/landing-zero" target="ext" class="btn btn-default btn-lg wow flipInX">Free Download</a>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1">
                            <div class="row">
                                <h6 class="wide-space text-center">BOOTSTRAP IS BASED ON THESE STANDARDS</h6>
                                <div class="col-sm-3 col-xs-6 text-center">
                                    <i class="icon-lg ion-social-html5-outline" title="html 5"></i>
                                </div>
                                <div class="col-sm-3 col-xs-6 text-center">
                                    <i class="icon-lg ion-social-sass" title="sass"></i>
                                </div>
                                <div class="col-sm-3 col-xs-6 text-center">
                                    <i class="icon-lg ion-social-javascript-outline" title="javascript"></i>
                                </div>
                                <div class="col-sm-3 col-xs-6 text-center">
                                    <i class="icon-lg ion-social-css3-outline" title="css 3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <section id="last">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 text-center">
                            <h2 class="margin-top-0 wow fadeIn">Get in Touch</h2>
                            <hr class="primary"/>
                            <p>We love feedback. Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>
                        <div class="col-lg-10 col-lg-offset-1 text-center">
                            <form class="contact-form row">
                                <div class="col-md-4">
                                    <label></label>
                                    <input type="text" class="form-control" placeholder="Name"/>
                                </div>
                                <div class="col-md-4">
                                    <label></label>
                                    <input type="text" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="col-md-4">
                                    <label></label>
                                    <input type="text" class="form-control" placeholder="Phone"/>
                                </div>
                                <div class="col-md-12">
                                    <label></label>
                                    <textarea class="form-control" rows="9" placeholder="Your message here.."></textarea>
                                </div>
                                <div class="col-md-4 col-md-offset-4">
                                    <label></label>
                                    <button type="button" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Send <i class="ion-android-arrow-forward"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <div id="galleryModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
        	            <div class="modal-body">
        		            <img src="//placehold.it/1200x700/222?text=..." id="galleryImage" class="img-responsive" />
        		            <p>
        		                <br/>
        		                <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true">Close <i class="ion-android-close"></i></button>
        	    	        </p>
        	            </div>
                    </div>
                </div>
            </div>
            <div id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
        	            <div class="modal-body">
        		            <h2 class="text-center">Landing Zero Theme</h2>
        		            <h5 class="text-center">A free, responsive landing page theme built by BootstrapZero.</h5>
        		            <p class="text-justify">
        		                This is a single-page Bootstrap template with a sleek dark/grey color scheme, accent color and smooth scrolling.
        		                There are vertical content sections with subtle animations that are activated when scrolled into view using the jQuery WOW plugin. There is also a gallery with modals
        		                that work nicely to showcase your work portfolio. Other features include a contact form, email subscribe form, multi-column footer. Uses Questrial Google Font and Ionicons.
        		            </p>
        		            <p class="text-center"><a href="http://www.bootstrapzero.com">Download at BootstrapZero</a></p>
        		            <br/>
        		            <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true"> OK </button>
        	            </div>
                    </div>
                </div>
            </div>
            <div id="alertModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
        	            <div class="modal-body">
        		            <h2 class="text-center">Nice Job!</h2>
        		            <p class="text-center">You clicked the button, but it doesn't actually go anywhere because this is only a demo.</p>
        		            <p class="text-center"><a href="http://www.bootstrapzero.com">Learn more at BootstrapZero</a></p>
        		            <br/>
        		            <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true">OK <i class="ion-android-close"></i></button>
        	            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Template1;

            // <header className={classes.header}>
            //      <div className={classes.container}>
            //          <div className={classes.siteHeaderInner}>

            //              <div className={classes.brand}>
            //                  <h1><a href="#"><img style={{width:"32px", height:"32px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABEVBMVEX/////vgCfB6khKzb/vAD+vxf/ugCYAKP/1oacAKaXALD/uQCcAKf///3/8M7/wQDw3fEbJjL/13/z5PT/8tb/5Kr68vr/+u3nzOm5YsD//P/MkdH//PTr1e3cteD16vbWqdrIh83gvOOpMrL/5rP/6bzlxuf/9d+zUrv/ykf/35z/0mvDfcn/3ZQAFjgOHCrQm9WvRbf/xTP/8dK9bMT/1HXJi8//xjv/zVrAdMayTrqsObT/z2Dv7/AAFSUABhxES1Pg4OIAABSChooAHTi4jhvMzc+mIa+0trh/g4ifoaVdYmkxOUNiZ27lrA27vb/SnxREQTFVSy+xiR0AEDkBIjZoVyyJbibuswk2ODOceiJEw5mmAAAMzElEQVR4nO2d+1viOBfHCxZqhwLCiChUxQsgCIq38S46zgwzzm1335l5Z/f//0O2RaFJe5ImaVJcn35/2We0SD57kpNzTtJE0xIlSpQoUaJEiRIlSpQoUaJEiRIlSgRpvX4w2tpp1GbdDmXaMEzLkWFtzrolinRgpB9lGYNZt0WJjs30VEZr1q1RoGXDA0xb6Vk3R4FWLIQwbbzAoWiigGnzfNbtka51AyO0DmbdIOnyE45m3SDpqvkIL2bdIPlKY57mBY5D7QInfIFz/gbmTI3lWbdHvjaxgWguzbo98oU50xc4WTjaQgaiWZ91a1Sojkbeq7NujQoteN30RQbeGtpNX2Yn1bTBtJsar2fdFkj56lFzu9vvz8+Xy+e9jY36Wmt1iaviUpsQWiuqGikmu73dvTotZnNZV7qj1CvTlWEY1uVOfW2BlXMy6T8jP2MXurvFJ66Up8yrqcuwLJf0oL7MQlmzxiPRfCYmtJvlwzFbKiCPcAJqGtbOYCH0b47jGst6DvHMYv8wB8LBhE+Uo0GYBxkYjs19/yfWW5trm/G6nqNyhkxHJHyEvFij/+3WSm8d+efqYCftDGe3o8dWfVucT9HxKIQupGH2WO2xfG65JeLJB4+Vcj3JrhyG4tEJXUdirDD4yqV62sFDPxcD4uKJ41hC8UIJXXvshHmdgYnjjREVVxibp2x4DIQu48o65btejwzoQ0qrU5UMMx8LodtX3xC/bNUI2O/RiOHzjaDylRQHHxuhw2iR/OoIBkybDUWADh8HHjOhOxzBuX0d6qJjQjXlqWaGk4+Z0GVsQF+ZjtOG7Q5b/9R1JDRlJnSG1goQsLZI41B+AS5fztH5HCwnNs1lU5nD086pzk/ojEag2S3LBB5VkPk3aQPQZdMzu/OVwmI1n3cfX8wKEMILvkvHRpAR7tIRZJ/liHQOXGe+2c5jHygIEbo9Ffj2hZ5/zjd3JANWSOGZ7tB1j4BPiBKmzUvIpy41DkwvcLMMySVU+wzuoA7eSdOGPyNM6IwwOMJZ2jx3UotxvcBqyAUsgAbUs6mTAuVDwoRO1ksMxpeWG4P6QHbuNA+NQD3XaeZpn4pA6KSOcdZmqqdAD83q89WQz0UhdMZZfKtNQA91umeXMPjQD0YhjBGxEuyh2WKF5ZNHHqHhypwm6IyI8XTUcqCHZlOhfPZiodKfv5rGNLWl9dXlzUHPLbIEM1kiohlDvSkfmCT0bJ/mXqrN/m4nlctidcWM9/v1Vn3HZKW00srriPah7ufbJY6//FH3KgVWTDP4g7WWM6sxMVqXigGrGV9jsxnS9HfU7ejEqk0m+PzyOVB4CUpxubudwlvsdFDwuXzhhExHIHQsubbFYEil+y7bvu6WzSxCjzV3Q0saIKGjFgOjQocaACxDD5V1hoyYRKhpm6GMlqVqD3Qbb7mebQafaTIm/GRCTVtLQ8ltDEPRZ8HsYSBEs7vMBTcaoVbrhZjRCFnaEFMVdzLZ3cADTN2ThVDTVkd0M5q0YrGgbHyayHX9fCd89dKw7zsm1Qsfh6LsZN4RNtEHhqBd5uJjINQa1J4qv5+eYYC6b5LoM6w28RJqq6Sa6NiIsv0pFmzrKdzHUOtt4oTa0hZlMJo9qYAVDDCDxaHVM84OykyoaRcURKkbahbRfFA/xBKJrggfKyH2ColCZ2Oj8wQO2IaqGRIJtRUyosTg7RQFxLpoN6SiH52Qgihvg+k8YiY9hQBWO4IG5CHULokeVZYRC+ggzLaRX3BPEUKENdJiqKyRaKMcWSTbBQumCgi118ToRo47vUIAc169KVitUUbo28COSMqcuI1YCkkHA8UMlYRaj+RtjOhlKRt1o53pjyMNQX5CbAc7ZsRGZEKkjyJudDvSEBQgXCD0U2srKmATQclNvUw/OiAnoe9tGaSbRpww8kgw4xXVyhIAeQlJey+i+hoko9BPJz88ieZEBQkJ/jTizoQ26kcnCZMcQG5C7UDF7pIO0kcnRQtJgPyEq7ARzY0IgAWkjx4+/Sy47BQXobYDGjHSZkRkUp+Eo31ZgAKEBCNGiNyaHs0kmAFWRuMjJCQZESZ9xIT6Y9LblAcoQtgCjSj+8sw2YsLHgLstrYuKEcJzovh84U32T27GjhyLRiV8AwY2ogMRMWHusfrrX/uNnxCOTk3B2nDGb8IrmX1UjBDe+iwYuKGOdBxxV+QCihHWwS2lYkcreOW1x4B0UTKgGCE8JVoifwoBGq/B5KOm9MyEdx/vP326f/hwDf4W9KaGyErbrmfCDP5vtYQPt8ObfVc3w88fgN+vgIQCOaKNmHBbk5LTsxB+vLkpzU1UGn4JMg6ggSjiTBG34oYztnQLQoTXn4dziErDzw+BrroMDUSRt7q9qU93I9KzOAjvSvsY4O0d0LAl8F0n/lNcED+Ta8sNR4mE16USBvgFbho0IwpMF2VsqsinFJgwQHiLAc4NIQtqsKsR2OmG5IUViUkvjfDhBgMsfSU0DaoN85cUkdw+W8WKNYCKxaIEwuu3GODczUdC2xoQYZp3Sf/E66RnWLEG4vv2/v1vEUic8H7fR/id0LY1MG7jre177XU6KdXNFP/4c+/du72/vvEj4oT4IKTYECwq8h42dIR1Ulq4Vvzfj3HTSj/+4EbECD8MfYSlT4TGgZEp7/rMvNdJO2iaGAT8tjdp0M/fkQj9ndQxojfZX6OhDZgi8gamntWyXa1IM+Gvn5MG/fw/rxExws/+XjpX+jz95S3aY8HVUk4bVr2Bl23Ts8KfXoPmIhF+CRDO3Xx9cpBf3z5IJkT6pa5RJ/vfe16DfkQiDPA52t9/+HD34aG0v38fRsjpaZDEabdJNWEGIdyTbUOX8cZJpZz/oDYEPQ0nITIMK/TiU/HvacNKf0UivAUJJ6AoIZRccM74VaSThsRrxX/eTU34PhLhp4AvRUck6kvXIEK+pQt0eqCGM67+fvI1P7lNiBN+vKEQDtEsEYza+OLSMkciUfz9517JmQz3fvHy+Qjv/DM+otIt+iRUbePc/cVX9y2+/1Wa+8Uf0fijNspAvEGHIZg98RVM85ypUnEsfkAf4XeyEYfYg9BKMN9BEVJXX9gJCfNFwIRa9EoULQ5VSRiIvSejEK9mwGEpVzWxr6JiwUCoPcCIvmoGmB7yBW0qympMhNonCPGtr2QKFjH4FhDlLqHxEGr3AcTSjb8mDO1v41sEzscFCNW8v+/jFdPhrb8iDJ67Y5KPWgIUUnZSS+iYcVrWL+0PvwRrNfAw5DpLoRCXKyWszFx//Lo/dPXlnnlhhu8lr9gmC8r64fXd3R2cLNQknF8mb0eQOCFZUGLBu8jNE3fHT3gBrh7yHWkifyVUIiG8Z9/gK3iHZoSzJAT3CfMuPMU24QsQgn6Ge1tbXHwihOAKN3c1ODYT8hPWwGNeuN/uesaE4G4h7k6qYkuCJEJwBd8h5Fw6jC/w5iaEXybl36QwPi6dWTESgttMRHbqz/MoUgDESQi/gxj9pSC67CipFh8h4aUgNcdjeIqPkNBHlV/iEckv8RDWSC89Kb/wKcqWTB5CMKdwD45QRjZRlDidg3CD8PKh9NNYgzqJhbBBersyhqt0uhEqAsyE8HskMThSV0cxEBIBlZ9M54p3oUqAkHSodVwXzURwNWyExDfx47r8MMJLGEyEJCcjsh9RTFW1hG/Ih2HF4WbGEl+qCies7ZAB47sMib6lKBLhAuXEtrj6qCtRwFDCOu0sszjv5xSe9OmEC5e08+goV5fIV16FDWsb1MPopB+eT5fohEEhDDn6Ms5BOJZgCkUk3BzRz72M5TRoTAWxTB8mrDVC+GZyC7DYORIQ4ULPCj1iN4akMCihfhogfD3YYjjT25jJ7aNCb9BihOubvRHTkeWG3OMgmSVymMQT4dJ6q3E+Yj133pjZbeoCQzFzfn58sTWyDIP97oBZWdAVf6KYeWW5YmR7BIwzlPErf8qLyH+/hdKj2BkQeR0qL6Gl+mbDcEROK3ISWmllt/6xI/Id9clHCN/2FLt2eRB5CK1ZOlFMPCfSchBa5qyHoKdF9te+2QmNg2fRQ5+UZz7FhpXQVHbtpqi2GZf32QgtY+U5GfBR9hXTAd9MhMYo/mSQRQWWW3MZCE31a7zCYrhZNpTQNOsx12O4FH47MJ3Qcvie3wD0afuQykgjtIxRY9bNZ1LhjHLjE5HQMo2d2O65jyy7e5gjQMKEDt7lQMEVMirV7p5C164BhJaT718O4i6GSlG1eeKaEsfECC3HdsbofO3ZOxeK7EL/KqOPb9F7RHUIx2UM02EzRzv11n+Zbiq73az0T646Gfc65FdWOn25ctxrbC78xwZeokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRIlj/ApgIIGDBCEskAAAAAElFTkSuQmCC" alt="open"/></a></h1>
            //              </div>

            //              <button className={classes.headerNavToggle}></button>

            //              <nav className={classes.headerNav}>
            //                  <div className={classes.headerNavInner}>
            //                      <ul className={classes.headerNavRight1}>
            //                          <li><a href="#">Documentation</a></li>
            //                      </ul>
            //                      <ul className={classes.headerNavRight2}>
            //                          <li><a className={classes.tag} href ="#">Sign up</a></li>
            //                      </ul>
            //                  </div>
            //              </nav>
            //          </div>
            //      </div>
            //  </header>

            //  <footer id="footer">
            //     <div class="container-fluid">
            //         <div class="row">
            //             <div class="col-xs-6 col-sm-3 column">
            //                 <h4>Information</h4>
            //                 <ul class="list-unstyled">
            //                     <li><a href="">Products</a></li>
            //                     <li><a href="">Services</a></li>
            //                     <li><a href="">Benefits</a></li>
            //                     <li><a href="">Developers</a></li>
            //                 </ul>
            //             </div>
            //             <div class="col-xs-6 col-sm-3 column">
            //                 <h4>About</h4>
            //                 <ul class="list-unstyled">
            //                     <li><a href="#">Contact Us</a></li>
            //                     <li><a href="#">Delivery Information</a></li>
            //                     <li><a href="#">Privacy Policy</a></li>
            //                     <li><a href="#">Terms &amp; Conditions</a></li>
            //                 </ul>
            //             </div>
            //             <div class="col-xs-12 col-sm-3 column">
            //                 <h4>Stay Posted</h4>
            //                 <form>
            //                     <div class="form-group">
            //                         <input type="text" class="form-control" title="No spam, we promise!" placeholder="Tell us your email">
            //                     </div>
            //                     <div class="form-group">
            //                         <button class="btn btn-primary" data-toggle="modal" data-target="#alertModal" type="button">Subscribe for updates</button>
            //                     </div>
            //                 </form>
            //             </div>
            //             <div class="col-xs-12 col-sm-3 text-right">
            //                 <h4>Follow</h4>
            //                 <ul class="list-inline">
            //                     <li><a rel="nofollow" href="" title="Twitter"><i class="icon-lg ion-social-twitter-outline"></i></a>&nbsp;</li>
            //                     <li><a rel="nofollow" href="" title="Facebook"><i class="icon-lg ion-social-facebook-outline"></i></a>&nbsp;</li>
            //                     <li><a rel="nofollow" href="" title="Dribble"><i class="icon-lg ion-social-dribbble-outline"></i></a></li>
            //                 </ul>
            //             </div>
            //         </div>
            //         <br/>
            //         <span class="pull-right text-muted small"><a href="http://www.bootstrapzero.com">Landing Zero by BootstrapZero</a> ©2015 Company</span>
            //     </div>
            // </footer>
