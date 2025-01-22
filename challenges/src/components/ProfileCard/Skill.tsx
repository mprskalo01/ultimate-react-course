interface Props {
  skillName: string;
  color: string;
}

export function Skill(props: Props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>💪</span>
    </div>
  );
}
