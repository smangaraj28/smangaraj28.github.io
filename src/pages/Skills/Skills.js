import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills({ skills = [] }) {
  // Convert efficiency string ("80%") to number
  const processedSkills = skills.map(skill => ({
    ...skill,
    proficiency: parseInt(skill.efficiency.replace("%", "")),
    name: skill.title
  }));

  // Categorize skills
  const expertSkills = processedSkills.filter(skill => skill.proficiency >= 80);
  const proficientSkills = processedSkills.filter(skill => skill.proficiency >= 50 && skill.proficiency < 80);
  const learningSkills = processedSkills.filter(skill => skill.proficiency < 50);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1>My Skills</h1>
          <p>Technologies I've mastered and currently learning</p>
        </div>

        <div className="skills-categories">
          {/* Expert Skills */}
          {expertSkills.length > 0 && (
            <div className="category">
              <h2 className="category-title expert">Expert Level</h2>
              <div className="skills-grid">
                {expertSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          )}

          {/* Proficient Skills */}
          {proficientSkills.length > 0 && (
            <div className="category">
              <h2 className="category-title proficient">Proficient</h2>
              <div className="skills-grid">
                {proficientSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          )}

          {/* Learning Skills */}
          {learningSkills.length > 0 && (
            <div className="category">
              <h2 className="category-title learning">Currently Learning</h2>
              <div className="skills-grid">
                {learningSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ skill, delay }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="skill-icon">
        {skill.icon && <div className="icon-wrapper">{skill.icon}</div>}
      </div>
      <div className="skill-content">
        <h3>{skill.name}</h3>
        <p className="skill-description">{skill.description}</p>
        <div className="progress-container">
          <CircularProgressbar
            value={skill.proficiency}
            text={`${skill.proficiency}%`}
            styles={buildStyles({
              pathTransitionDuration: 1.5,
              pathColor: getProficiencyColor(skill.proficiency),
              textColor: '#333',
              trailColor: '#e0e0e0',
              textSize: '16px',
              strokeLinecap: 'round',
            })}
          />
        </div>
      </div>
    </motion.div>
  );
};

const getProficiencyColor = (proficiency) => {
  if (proficiency >= 80) return '#4CAF50'; // Green for expert
  if (proficiency >= 50) return '#2196F3'; // Blue for proficient
  return '#FF9800'; // Orange for learning
};
