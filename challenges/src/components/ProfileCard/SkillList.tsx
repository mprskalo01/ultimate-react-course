import { Skill } from './Skill';

export function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML/CSS" color="#fa1" />
      <Skill skillName="JavaScript" color="#ff1" />
      <Skill skillName="TyoeScript" color="#18f" />
      <Skill skillName="React" color="#17a" />
    </div>
  );
}
