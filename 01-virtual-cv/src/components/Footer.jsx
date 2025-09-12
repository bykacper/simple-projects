import github_sm from '../assets/images/github-sm.png'
import linkedin_sm from '../assets/images/linkedin-sm.jpg';

export default function Footer() {
    return (
        <footer className="mx-auto py-5" style={ {width: "51%"} }>
            <span className="m-0 text-body-tertiary"> LET'S TALK! </span>
            <h2 className="m-0 my-2"> <strong> alicja@nowak.com </strong> </h2>
            <p> I'm always open to new projects. If you need a creative developer who <br /> 
            can built responsive design websites and apps, feel free to contact me. <br /> 
            Your ideas will come to life. 👋 </p>
            <img src={github_sm} className='mx-1'/>
            <img src={linkedin_sm} className='rounded-circle mx-1' />
        </footer>
    )
}