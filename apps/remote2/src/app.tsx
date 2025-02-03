import './styles.css';
import { Button } from '@nx-microfrontend-workspace/components-ui';

export function App() {
  return (
    <div className="w-full h-full flex flex-col gap-4 bg-red-500">
      <h1 className="text-white text-2xl">Remote Microfrontend Test Page</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">john.doe@example.com</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">jane.smith@example.com</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}

export default App;
