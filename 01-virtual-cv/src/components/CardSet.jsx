export default function CardSet({ title, skills, isDarkMode }) {
    return (
        <section className={isDarkMode ? 'bg-dark text-white border border-secondary-subtle mx-auto mt-3 p-3' : 'bg-white border border-secondary-subtle mx-auto mt-3 p-3'} style={ {width: "51%"} }>
            <h2> {title} </h2>
            <hr />
            <ul className="d-flex flex-wrap">
            {skills && skills.map(item => {
                return <li className="w-50"> {item} </li>
            })}
            </ul>
        </section>
    )
}