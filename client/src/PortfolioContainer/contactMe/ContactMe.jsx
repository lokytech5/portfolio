import React, { useState } from 'react'
import imgBack from '../../assets/contact/bg.jpg'
import load1 from '../../assets/contact/dot-1.gif'
import axios from 'axios'
import { toast } from 'react-toastify'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService.js'
import Animations from '../../utilities/Animations'
import { TypeAnimation } from 'react-type-animation';
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [banner, setBanner] = useState('')
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)

                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <div className='main-container fade-in' id={props.id || ''}>
            <ScreenHeading
                subHeading={'Connect With Me'}
                title={'Contact Me'}
            />
            <div className='central-form'>
                <div className='col'>

                    <span className='title'>
                        {' '}
                        <TypeAnimation
                            sequence={[
                                'Connect with me 😃', // Types 'One'
                                1000, // Waits 1s
                                'lets work on that', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'project together',
                                2000, // Deletes 'One' and types 'Two'
                                () => {
                                    ''
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            // style={{ fontSize: '2rem' }}
                            className="TypeAnimation-wrapper" // Add the class name to the component
                        />
                    </span>

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

                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="images not found" />

                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            onChange={handleName}
                            value={name}
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email"
                            onChange={handleEmail}
                            value={email} />

                        <label htmlFor="message">Message</label>
                        <textarea type="text"
                            onChange={handleMessage}
                            value={message}
                        />

                        <div className='send-btn'>
                            <button type="submit">
                                <SendIcon /> Send
                                {bool ? (<b className='load'>
                                    <img src={load1} alt='spinner icon' />
                                </b>) : (' ')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
