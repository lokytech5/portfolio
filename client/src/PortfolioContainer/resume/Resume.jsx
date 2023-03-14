import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'>
                        <span>{props.heading ? props.heading : ''}</span>
                        {props.fromDate && props.toDate ? (
                            <div className='heading-date'>
                                {props.fromDate + '-' + props.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}

                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className='resume-heading-description'>
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>

            </div>
        )

    };

    const resumeBullets = [
        { label: 'Education', logoSrc: 'graduation-cap.svg' },
        { label: 'Work History', logoSrc: 'work.svg' },
        { label: 'Programming Skills', logoSrc: 'skill.svg' },
        { label: 'Projects', logoSrc: 'project.svg' },
        { label: 'Interests', logoSrc: 'interest.svg' },
    ];

    const programmingSkillsDetails = [
        { skill: 'JavaScipt', ratingPercentage: 65 },
        { skill: 'Python', ratingPercentage: 20 },
        { skill: 'Git', ratingPercentage: 55 },
        { skill: 'React', ratingPercentage: 80 },
        { skill: 'Express', ratingPercentage: 80 },
        { skill: 'Node JS', ratingPercentage: 85 },
        { skill: 'MongoDB', ratingPercentage: 60 },
        { skill: 'Java', ratingPercentage: 45 },
        { skill: 'HTML', ratingPercentage: 80 },
        { skill: 'CSS', ratingPercentage: 60 },
    ];

    const projectDetails = [
        {
            title: 'MontionPic',
            duration: { fromDate: '2023', toDate: 'present' },
            description: 'A customer booking web app for photography services still under development.',
            subHeading: 'Technologies Used: React JS, Node.js, Express, Mongodb'
        },
        {
            title: 'Expense Tracker',
            duration: { fromDate: '2022', toDate: '2022' },
            description: 'a web application designed to help users track their expenses',
            subHeading: 'Technologies Used: React JS, Bootstrap'
        },
        {
            title: 'NoteApp',
            duration: { fromDate: '2023', toDate: '2023' },
            description: 'A simple record-note taking application',
            subHeading: 'Technologies Used: Html, Css, Bootstrap, Node.js, Express'
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container"
            key='education'>
            <ResumeHeading
                heading={'Presbyterian University College Ghana'}
                subHeading={'BACHELOR OF SOFTWARE ENGINNERING'}
                fromDate={'2012'}
                toDate={'2016'}
            />

            <ResumeHeading
                heading={'National Youth Service Corps'}
                subHeading={'Ketu Local Government'}
                fromDate={'2017'}
                toDate={'2018'}
            />

            <ResumeHeading
                heading={'Standard International College'}
                subHeading={'Secondary School certificate'}
                fromDate={'2008'}
                toDate={'2010'}
            />
        </div>,

        <div className="resume-screen-container"
            key={'work-experience'}>

            <ResumeHeading
                heading={'Self-taught Developer'}
                subHeading={'Full-stack MERN'}
                fromDate={'2021'}
                toDate={'present'}
            />

            <div className="experience-description">
                <span className="resume-description-text">
                    A highly skilled self-taught full-stack developer, with experience in technologie such as
                </span>

            </div>

            <div className="experience-description">
                <span className="resume-description-text">
                    React, Node.js, and MongoDB. I have worked on various project and has strong background in delivering high-quality,
                </span>
                <br />

                <span className="resume-description-text">
                    user-friendly products both as part of a team and as an individual. As a self-employed developer i prov

                </span>
                <span className="resume-description-text">
                    ide cost-effective solutions to clients in a timely manner and am a dedicated team player who is always willing to go above and beyond to ensure project success.
                </span>
            </div>


            <div className="resume-screen-container programming-skills-container"
                key={'programming-skills'}>

                {programmingSkillsDetails.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className="heading-bullet"></div>
                        <span>{skill.skill}</span>
                        <div className="skill-percentage">
                            <div style={{ width: skill.ratingPercentage + '%' }}
                                className='active-percentage'>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="resume-screen-container"
                key={'projects'}>
                {projectDetails.map((projectsDetails, index) => (
                    <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        fromDate={projectsDetails.duration.fromDate}
                        toDate={projectsDetails.duration.toDate}
                    />
                ))}
            </div>

            <div className="resume-screen-container" key={'interest'}>
                <ResumeHeading
                    heading='Reading'
                    description='Avid reader of books and constantly seeking new knowledge and information'
                />
                <ResumeHeading
                    heading='Teaching'
                    description='Passionate about sharing my knowledge and experience with others for them to learn and grow in the field of technology'
                />
                <ResumeHeading
                    heading='Traveling'
                    description='Passionate about exploring new cultures and learning about different ways of life'
                />
            </div>

        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>

                <div className='bullet-content'>
                    <img className='bullet-logo bullet-logo-background'
                        src={require(`../../assets/resume/${bullet.logoSrc}`)}
                        alt='oops... no Internet Connection'
                    />

                    <span className="bullet-label">{bullet.label}</span>

                </div>

            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'>

                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    }

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>

                        </div>

                    </div>

                    <div className='resume-bullet-details'>{getResumeScreen()}</div>

                </div>

            </div>

        </div>
    )
}
