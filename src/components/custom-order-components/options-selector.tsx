import OptionsSelectorGender from "./options-selector-gender";
import OptionsSelectorSize from "./options-selector-size";

export default function OptionsSelector(){
  return (
    <div className="flex justify-between gap-10 py-10 max-md:flex-col">
      <OptionsSelectorSize />
      <OptionsSelectorGender />
    </div>
  );
};

