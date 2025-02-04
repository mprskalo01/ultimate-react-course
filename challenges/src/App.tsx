import './App.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
// import AccordionList from './components/Accordion/AccordionList';
// import FlashCardList from './components/FlashCards/FlashCardList';
// import DateCounter from './components/DateCounter/DateCounter';
// import ProfileCard from './components/ProfileCard/ProfileCard';
// import TipCalculator from './components/TipCalculator/TipCalculator';
// import TextExpander from './components/TextExpander/TextExpander';

function App() {
  return (
    <>
      {/* <ProfileCard /> */}
      {/* <DateCounter /> */}
      {/* <FlashCardList /> */}
      {/* <AccordionList /> */}
      {/* <TipCalculator /> */}
      {/* <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander> */}
      <CurrencyConverter />
    </>
  );
}

export default App;
