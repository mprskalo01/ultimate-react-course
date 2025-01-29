import { useState } from 'react';
import { Fact } from '../App';
import DifferentContent from './DifferentContent';
import Tab from './Tab';
import TabContent from './TabContent';

interface Props {
  content: Fact[];
}

function Tabbed({ content }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab)?.summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

export default Tabbed;
