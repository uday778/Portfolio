import { motion } from "framer-motion";



function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20 ">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get In Touch </motion.h2>
            <div className="text-center tracking-tighter  ">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">Yusufguda ,Krishna nagar zone 2 </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                ><a
                    href="tel:+919347494330" className="my-4">+91 9347494330</a> <br />
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                ><a href="mailto:uday33379@gmail.com" className="my-4 border-b">Uday33379@gmail.com</a></motion.p>

            </div>

        </div>
    );
}
export default Contact;
