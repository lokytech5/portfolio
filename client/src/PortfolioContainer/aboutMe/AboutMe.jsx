import React from 'react'
import { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTSANTS = {
        description: 'Am Lokosman a talented and driven self-taught developer with a Bachelor Degree in Software Engineer from Presbyterian University College Ghana. i have a passion for using technology to drive self-development with a keen eye for problem-solving and a drive to constantly improve my skills',
        highlights: {
            bullets: [
                'MERN stack Developer',
                'Built several impressive projects including NoteApp, Simon Game, Expenses Tracker, Meetup, and MotionPic',
                'I honed my skills by designing and developing "Kwahu Tour Guide" android application',
                'Interests in reading books about finance and exploring new cultures through travel.',
            ],

            heading: 'Lokosman at a Glance'
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container fade-in'
            id={props.id || ''}>
            <div className='about-me-parent'>
                <ScreenHeading
                    title={'About Me'}
                    subHeading={'Why Opt For me'}
                />

                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTSANTS.description} </span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='bttn primary-bttn'
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                Hire me
                            </button>

                            <a className='a-highlight' href='lokos-Resume.pdf' download='lokosman-Resume.pdf'>
                                <button className='bttn highlighted-btn'
                                    style={{ width: "250px" }}>Get Resume</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
