import { largePkg1, largePkg110, largePkg11, largePkg111, largePkg112, largePkg12, largePkg13, largePkg14, largePkg15, largePkg16, largePkg17, largePkg18, largePkg19 } from '@acme/large-pkg1';
import { mediumPkg1 } from '@acme/medium-pkg1';
import { smallPkg1 } from '@acme/small-pkg1';
import { nestedPkg1, nestedPkg12, nestedPkg11, nestedPkg121221 } from '@acme/nested-pkg1';

// Build works but typecheck fails.
// const x: number = '1';

export function App() {
  return (
    <>
      <p>{largePkg1()}</p>
      <p>{largePkg110()}</p>
      <p>{largePkg111()}</p>
      <p>{largePkg112()}</p>
      <p>{largePkg11()}</p>
      <p>{largePkg12()}</p>
      <p>{largePkg13()}</p>
      <p>{largePkg14()}</p>
      <p>{largePkg15()}</p>
      <p>{largePkg16()}</p>
      <p>{largePkg17()}</p>
      <p>{largePkg18()}</p>
      <p>{largePkg19()}</p>
      <p>{mediumPkg1()}</p>
      <p>{smallPkg1()}</p>
      <p>{nestedPkg1()}</p>
      <p>{nestedPkg11()}</p>
      <p>{nestedPkg12()}</p>
      <p>{nestedPkg121221()}</p>
    </>
  );
}

export default App;
