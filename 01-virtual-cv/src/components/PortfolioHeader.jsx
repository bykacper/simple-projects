import github_dark from '../assets/images/github.png';
import github_light from '../assets/images/github-light.png';

export default function PortfolioHeader({ isDarkMode }) {
    return (
        <header className={isDarkMode ? 'text-white text-center py-5' : 'text-center py-5'}>
            <img src={isDarkMode ? github_light : github_dark} />
            <h1 className='m-0'> Portfolio </h1>
            <span> My recent projects </span>
        </header>
    )
}