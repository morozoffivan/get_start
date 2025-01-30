import { useState } from "react";

import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedBtn) => {
    setSelectedTopic(selectedBtn);
  };

  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic) {
    tabContent = (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptsItem, id) => <CoreConcepts key={id} {...conceptsItem}/>)}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelect={selectedTopic === 'components'}
              onSelect={() => handleSelect("components")}>
              Component
            </TabButton>
            <TabButton 
              isSelect={selectedTopic === 'jsx'}
              onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton 
              isSelect={selectedTopic === 'props'}
              onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton 
              isSelect={selectedTopic === 'state'}
              onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* {//трюк с логикой "и"
          !selectedTopic && (
            <p>Please select a topic</p>
          )}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
