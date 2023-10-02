import '../style/pages/Home.scss';
import { motion } from "framer-motion";

import home1 from '../assets/img/home1.jpg';
import home2 from '../assets/img/home2.jpg';

function HomePage() {
    return (
        <div className="HomePage">
            <motion.section
                initial={{ opacity: 0, y: 130}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    type: "spring", bounce: 0.25,
                }}
                id="hero" className="grid2">
                <div className="left">
                    <h2 className="titre3">The Art of Digital Creativity based in <span className="primary">London</span></h2>
                    <h2 className="titre3">ROMIE Studio, a creative <span className="primary">haven</span>, brings your boldest digital ideas to life.</h2>
                    <h2 className="titre3">Explore our digital creative design studio, where every pixel tells a unique story.</h2>
                </div>
                <figure className="right">
                    <img src={home2} width="1565" height="203" alt="Photo by Romie Studio"/>
                </figure>
            </motion.section>
            <motion.h1
                 initial={{ opacity: 0, y: 130}}
                 animate={{ opacity: 1, y: 0}}
                 transition={{
                     duration: 2.5,
                     ease: "easeOut",
                     delay: .5,
                     type: "spring", bounce: 0.25,
                 }} className="romie_title">ROMIE Studio</motion.h1>
        </div>
    )
}

export default HomePage