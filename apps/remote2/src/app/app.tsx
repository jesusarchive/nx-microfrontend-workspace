import '../styles.css';
import { Button } from '@nx-microfrontend-workspace/components-ui';

export function App() {
  return (
    <div className="w-full h-full flex flex-col gap-4 bg-blue-500">
      <h1>Welcome to Remote 2</h1>
      <p>This is an example landing page for the Remote 1 application.</p>
      <Button>Learn More</Button>
    </div>
  );
}

export default App;
