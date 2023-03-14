import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.css'
import './Profile.css'

import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {

    return (
        <div className='profile-container profile-background-image'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://twitter.com/lokosman5'>
                                <i> <TwitterIcon /></i>
                            </a>

                            <a href='https://github.com/lokytech5?tab=repositories'>
                                <i><GitHubIcon /></i>
                            </a>

                            <a href='https://www.linkedin.com/in/lokosman-androiddeveloper/'>
                                <i> <LinkedInIcon /></i>
                            </a>
                        </div>

                    </div>

                    <div className='profile-details-name'>
                        <span className='primary text'>
                            {' '}
                            Discover the world of <span className='highlighted-text'>Lokosman</span>
                        </span>

                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {' '}
                            <TypeAnimation
                                sequence={[
                                    'A Self-taught developer', // Types 'One'
                                    1000, // Waits 1s
                                    'proficient in HTML, CSS,', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'JavaScript, React, Node', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'Express,MongoDB & Java', // Types 'Three' without deleting 'Two'
                                    2000,
                                    () => {
                                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                // style={{ fontSize: '2rem' }}
                                className="TypeAnimation-wrapper" // Add the class name to the component
                            />
                        </span>

                        <span className='profile-role-tagline'>
                            Let's collaborate and work together to bring your idea to FRUITION
                        </span>

                    </div>

                    <div className='profile-options'>
                        <button className='bttn primary-bttn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            Hire me
                        </button>

                        <a className='a-highlight' href='lokos-Resume.pdf' download='lokosman-Resume.pdf'>
                            <button className='bttn highlighted-btn'>Resume</button>
                        </a>

                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>

            </div>

        </div>
    )
}
