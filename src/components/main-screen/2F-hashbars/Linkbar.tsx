import { FunctionComponent as FC } from 'react';

const Linkbar: FC<{}> = () => {
  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 px-3 py-2 mx-1 my-3 border rounded-full border-black"
    >
      # ad or recommandation
    </a>
  );
};

export default Linkbar;
