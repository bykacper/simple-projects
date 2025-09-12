export default function CardProject({ title, content }) {
    return (
        <section className="bg-white p-3 border border-secondary-subtle" style={ {width: "49%"} }> 
            <h2> {title} </h2>
            <hr />
            <p> {content} </p>
            <span> Demo: </span> <br />
            <span> Code: </span> 
        </section>
    )
}