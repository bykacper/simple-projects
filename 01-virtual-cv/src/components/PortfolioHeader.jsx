import github_logo from '../assets/images/github.png';

export default function PortfolioHeader() {
    return (
        <header className='text-center py-5'>
            <img src={github_logo} />
            <h1 className='m-0'> Portfolio </h1>
            <span> My recent projects </span>
        </header>
    )
}