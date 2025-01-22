import { Avatar } from './Avatar';
import { Intro } from './Intro';
import { SkillList } from './SkillList';
import './profileCard.css';

function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
    for each web dev skill that you have,
    customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default ProfileCard;
