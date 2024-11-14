import React from 'react'
import { skills } from '../constants';

const TechStack = () => {
    return (
        <div className="flex items-center gap-5 mb-8">
            <h1 className="font-semibold">Tech Stack</h1>
            <span>|</span>
            <div className="flex items-center flex-wrap gap-3 select-none cursor-pointer">
                {skills.map((skill) => (
                    <div key={skill.id} className="tooltip" data-tip={skill.used}>
                        {skill.tech}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack
