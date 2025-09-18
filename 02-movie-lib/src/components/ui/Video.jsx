import { useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoModal from "./VideoModal";

export default function Video({ src, title, rating, content }) {
  const [titleVisibility, setTitleVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <section className="relative cursor-pointer">
      <img
        src={src}
        alt={title}
        onMouseEnter={() => setTitleVisibility(true)}
        onMouseLeave={() => setTitleVisibility(false)}
        onClick={() => setModalVisibility(true)}
      />

      {titleVisibility && <VideoTitle title={title}/>}
      {modalVisibility && <VideoModal title={title} rating={rating} content={content} modalVisibility={() => setModalVisibility(false)}/>}
    </section>
  );
}
