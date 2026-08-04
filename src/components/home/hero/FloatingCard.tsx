import { motion } from "framer-motion";

const FloatingCard = ({
    icon,
    title,
    subtitle,
    className = "",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
            }}
            whileHover={{
                y: -6,
            }}
            className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl ${className}`}
        >
            <div className="text-3xl mb-2">{icon}</div>

            <h4 className="text-white font-bold">
                {title}
            </h4>

            <p className="text-gray-300 text-sm">
                {subtitle}
            </p>
        </motion.div>
    );
};

export default FloatingCard;