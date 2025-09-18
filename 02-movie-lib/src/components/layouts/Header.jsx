import '../../styles/App.css';

export default function Header() {
    return (
        <header className='bg-amber-500 flex justify-between px-16 py-5 text-xl'> 
            <h2 className='heading'> 🎬 MovieLib  </h2>
            <input type="text" className='bg-white rounded-3xl px-5' placeholder="Search 🔍"/>
            <p className='content'> --- </p>
        </header>
    )
}