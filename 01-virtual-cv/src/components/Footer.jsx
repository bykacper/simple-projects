import github_sm_dark from '../assets/images/github-sm.png'
import github_sm_light from '../assets/images/github-sm-light.png';
import linkedin_sm from '../assets/images/linkedin-sm.jpg';

export default function Footer({ isDarkMode }) {
    return (
        <footer className={isDarkMode ? 'text-white mx-auto py-5' : 'mx-auto py-5'} style={ {width: "51%"} }>
            <span className="m-0 text-body-tertiary"> LET'S TALK! </span>
            <h2 className="m-0 my-2"> <strong> alicja@nowak.com </strong> </h2>
            <p> I'm always open to new projects. If you need a creative developer who <br /> 
            can built responsive design websites and apps, feel free to contact me. <br /> 
            Your ideas will come to life. 👋 </p>
            <img src={isDarkMode ? github_sm_light : github_sm_dark} className='mx-1'/>
            <img src={linkedin_sm} className='rounded-circle mx-1' />
        </footer>
    )
}