import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div id="contact" className=" border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl  "
      >
        Get in Touch
      </motion.h1>
      <div className=" pt-1 text-center tracking-tighter ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-8 text-2xl "
        >
          <a href="https://www.linkedin.com/in/ajeyanadig/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ajeyanadig" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/aj_codes200" target="_blank">
            <FaTwitter />
          </a>
        </motion.div>
        <a href="mailto:ajeyanadigw@gmail.com" className=" border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
