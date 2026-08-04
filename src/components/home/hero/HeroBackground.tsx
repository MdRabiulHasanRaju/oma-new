import { motion } from "framer-motion";

const HeroBackground = () => {

    return (

        <>

            <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#003B73] to-[#0F172A]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0EA5E955,transparent_40%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#38BDF855,transparent_30%)]" />

            <motion.div
                animate={{
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] top-10 left-10"
            />

            <motion.div
                animate={{
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="absolute w-96 h-96 bg-blue-700/20 rounded-full blur-[120px] bottom-0 right-0"
            />

        </>

    );

};

export default HeroBackground;