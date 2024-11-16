import React from 'react';
import { skills } from '../constants';
import { motion } from 'framer-motion';

const TechStack = () => {

    // Variants for animation
    const wordVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.5 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className="flex items-center gap-5 mb-8">
            <h1 className="font-semibold text-nowrap">Tech Stack</h1>
            <span>|</span>
            <motion.div
                className="flex items-center flex-wrap gap-3 select-none cursor-pointer"
                initial="hidden"
                animate="visible"
                transition={{
                    staggerChildren: 0.2, 
                }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="tooltip"
                        data-tip={skill.used}
                        variants={wordVariants}
                    >
                        {skill.tech}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;
