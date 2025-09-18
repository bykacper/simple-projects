export default function VideoModal({ title, rating, content, modalVisibility }) {
    return (
        <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-amber-500 w-4xl h-1/2 text-white p-12">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold"> {title} </h2>
                <p onClick={modalVisibility}> X </p>
            </div>
            <span className="p-2"> {rating} ⭐ </span>
            <p className="py-12"> {content} </p>
        </section>
    )
}