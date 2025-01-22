interface Props {
  skillName: string;
  color: string;
  level: string;
}

export function Skill({ skillName, color, level }: Props) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}
