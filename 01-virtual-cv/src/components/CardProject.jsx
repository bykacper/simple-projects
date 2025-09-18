export default function CardProject({ title, content, isDarkMode }) {
    return (
        <section className={isDarkMode ? 'bg-dark text-white p-3 border border-secondary-subtle' : 'bg-white p-3 border border-secondary-subtle'} style={ {width: "49%"} }> 
            <h2> {title} </h2>
            <hr />
            <p> {content} </p>
            <span> Demo: <a href=""> LINK </a> </span> <br />
            <span> Code: <a href=""> LINK </a> </span> 
        </section>
    )
}