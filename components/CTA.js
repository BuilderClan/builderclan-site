import Button from "./Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section px-4 py-8" id="joinclan">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-heading text-2xl md:text-4xl font-bold">
              <span className="text-white">Join the</span> Clan!
            </h1>
            <motion.div
              className="section-sub-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {`Visit our website.`}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              content="Join Discord"
              active
              href="https://discord.gg/GFnBvjc5tj"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
