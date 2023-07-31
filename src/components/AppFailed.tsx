import { FunctionComponent } from 'react';

// when user uses small screen, it is rendered
const AppFailed: FunctionComponent<{}> = () => {
  return (
    <div>
      <h2 className="text-center pt-20">
        Sorry, we are currently supporting for larger screen.
      </h2>
    </div>
  );
};

export default AppFailed;
