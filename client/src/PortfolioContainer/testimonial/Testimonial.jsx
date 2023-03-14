import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import CeoT from '../../assets/img/ceo-tuti.jpg'
import Cto from '../../assets/img/cto.jpg'
import UncleTee from '../../assets/img/teee.jpg'

import './Testimonial.css'
import Footer from '../home/footer/Footer'

export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: 'bounceInRight',
        animateOut: 'bounceOutRight',
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        }
    }

    return (
        <div>
            <ScreenHeading
                title={'Testimonial'}
                subHeading={'What My Client Say About Me'}
            />

            <section className='testimonial-section fade-in' id={props.id || ''}>

                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                        <p>
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                            I had the privilege of working with Lokosman on a web application project and
                                            was blown away by his skills and dedication
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                        </p>

                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i> <StarHalfIcon /></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='client-info'>
                                        <img src={UncleTee} alt="no internet connection">
                                        </img>
                                        <h5>Mr Emmanuel</h5>
                                        <p>Manager TJ Cosmetics</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                        <p>
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                            Lokosman is a team player who is always willing to go the extra mile to ensure the project's success.
                                            I would recommend him to any company
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                        </p>

                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='client-info'>
                                        <img src={CeoT} alt="no internet connection">
                                        </img>
                                        <h5>Mrs Adaeze</h5>
                                        <p>CEO Tuti Hair</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                        <p>
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                            Lokosman's expertise in React, Node.js, and MongoDB was evident in his ability to quickly
                                            implement complex features and slove problems.
                                            <i className='quote-color'><FormatQuoteIcon /></i>
                                        </p>

                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                            <li>
                                                <i><StarIcon /></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='client-info'>
                                        <img src={Cto} alt="no internet connection">
                                        </img>
                                        <h5>Mr Francis</h5>
                                        <p>Managing Director CTO global</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>

                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}
