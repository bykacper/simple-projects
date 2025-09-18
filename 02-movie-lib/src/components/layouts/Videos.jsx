import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch"
import Video from "../ui/Video";

export default function Videos() {
    const { data, loading, error } = useFetch("https://api.tvmaze.com/shows");

    return (
        <section className="flex flex-wrap justify-around gap-5 py-1">
        { data && data.map(video => {
            return <Video title={video.name} src={video.image.medium} rating={video.rating.average} content={video.summary}/>
        })}
        </section>
    )
}