import OptionsSelectorGender from "./options-selector-gender";
import OptionsSelectorSize from "./options-selector-size";

const OptionsSelector = () => {
  return (
    <div className="flex justify-between gap-10 py-10 max-md:flex-col">
      <OptionsSelectorSize />
      <OptionsSelectorGender />
    </div>
  );
};

export default OptionsSelector;
