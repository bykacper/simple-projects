import { useState } from "react";
import CardProfile from "./components/CardProfile";
import CardSet from "./components/CardSet";
import PortfolioHeader from "./components/PortfolioHeader";
import CardProject from "./components/CardProject";
import Footer from "./components/Footer";
import Form from 'react-bootstrap/Form'

function App() {
  const [skills, setSkills] = useState(['React.js', 'Styled Components', 'React Hooks', 'Create React App', 'NPM', 'HTML', 'JavaScript', 'CSS: Flex Box', 'CSS: Animation/KeyFrames']);
  const [toLearn, setToLearn] = useState(['next.js', 'tailwind CSS', 'vite', 'TypeScript']);
  const [projects, setProjects] = useState([
    {
      key: 1,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
    {
      key: 2,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
    {
      key: 3,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
    {
      key: 4,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
    {
      key: 5,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
    {
      key: 6,
      title: "Currency-converter",
      content: "Currency-converter is a simple app built with Vanilla JavaScript. It allows you to convert PLN to USD, SEK, EUR, CHF."
    },
  ])
  const [checked, setChecked] = useState(false);
  
  return (
    <section className="bg-light" style={ {boxSizing: "border-box" } }>
      <CardProfile />
      <CardSet title={"My skillset includes 🛠️"} skills={skills}/>
      <CardSet title={"What I want to learn next 🚀"} skills={toLearn}/>
      <PortfolioHeader />
      <div className="d-flex flex-wrap justify-content-around gap-3 mx-auto" style={ {width: '51%'}}>
      { projects && projects.map(project => {
        return <CardProject key={project.key} title={project.title} content={project.content} />
      })}
      </div>
      <Footer />
    </section>
  );
}

export default App;
