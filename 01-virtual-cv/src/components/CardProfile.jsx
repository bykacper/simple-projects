import girl_image from '../assets/images/girl-image.jpg';
import post_image from '../assets/images/post.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardProfile() {
    return (
        <section className='d-flex align-items-center justify-content-center gap-5 py-5'>
            <img src={girl_image} className='rounded-circle'/>
            <div>
                <em> This is </em>
                <h1> Alicja Nowak </h1>
                <p> ⚛️ I'm a Frontend Developer passionate about creating new <br/> 
                    websites, currently looking for new job opportunites. </p>
                <button className='btn btn-primary'> <img src={post_image} /> Hire me </button>
            </div>
        </section>
    )
}