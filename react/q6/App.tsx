import { Pointer } from './Pointer';
import { useZenoParadox } from './useZenoParadox';

import './index.css';

function App() {
  const { time, turtlePosition, achillesPosition, step } = useZenoParadox(
    5,
    1,
    5,
  );

  return (
    <main className="flex flex-col justify-center items-center container mx-auto h-screen ">
      <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-64 min-w-64 mb-32">
        <div className="max-h-full">
          <pre>
            <code
              id="code-block"
              className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre"
            >
              time = {time} s
              <br />
              achilles position = {achillesPosition} m
              <br />
              turtle position = {turtlePosition} m
            </code>
          </pre>
        </div>
      </div>

      <div className="h-64 w-full">
        <div className="ruler relative">
          {new Array(10).fill(null).map((_, i) => (
            <div className="cm" key={i}>
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
              <div className="mm" />
            </div>
          ))}
          <div className="cm" />
          <Pointer label="A" position={achillesPosition} />
          <Pointer label="T" position={turtlePosition} />
        </div>
      </div>
      <button
        type="button"
        onClick={step}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Next Step
      </button>
    </main>
  );
}

export default App;
