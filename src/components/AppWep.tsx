import { FunctionComponent } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

//when user uses large screen, rendered this version
const AppWep: FunctionComponent<{}> = () => {
  return (
    <div>
      <h2 className="text-center pt-20">
        We are curreuntly supporting only for mobile size.
      </h2>
      <p className="text-center flex justify-between">
        <FaArrowRight className="animate-move" />
        Please downsize to display screen
        <FaArrowLeft className="animate-moveOpposite" />
      </p>
    </div>
  );
};

export default AppWep;
