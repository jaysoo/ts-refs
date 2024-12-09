import { largePkg1 } from '@acme/large-pkg1';
import { mediumPkg1 } from '@acme/medium-pkg1';
import { smallPkg1 } from '@acme/small-pkg1';
import { nestedPkg1 } from '@acme/nested-pkg1';

// Build works but typecheck fails.
const x: number = '1';

export function App() {
  return (
    <>
      <p>{largePkg1()}</p>
      <p>{mediumPkg1()}</p>
      <p>{smallPkg1()}</p>
      <p>{nestedPkg1()}</p>
    </>
  );
}

export default App;
