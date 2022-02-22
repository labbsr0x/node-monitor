import React from 'react';
import { NodeMonitor } from '@labbsr0x/node-monitor'

const App = () => {

  const updateHash = async () => {

    const object = {
      type: 'Counter',
      body: {
        total: 'as',
      }
    }

    await NodeMonitor(object);

    const url = new URL(window.location);
    url.hash = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
    window.history.pushState({}, "Teste React", url);
  }

  return (
    <div className="App">
      <button onClick={updateHash}>Criar</button>
    </div>
  );
}
export default App;