import OptionsSelectorGender from "./OptionsSelectorGender";
import OptionsSelectorSize from "./OptionsSelectorSize";

const OptionsSelector = () => {
  return (
    <div className="flex justify-between gap-10 py-10 max-md:flex-col">
      <OptionsSelectorSize />
      <OptionsSelectorGender />
    </div>
  );
};

export default OptionsSelector;
