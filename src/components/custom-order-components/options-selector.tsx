import OptionsSelectorGender from "./options-selector-gender";
import OptionsSelectorSize from "./options-selector-size";
import LeaftIcon from "../icons/leaft-icon";

export default function OptionsSelector() {
  return (
    <div className="flex justify-between relative gap-5 lg:gap-10 py-10 max-md:flex-col">
      <LeaftIcon className="top-1/2 -translate-y-1/2 rotate-30 -right-20" />
      <OptionsSelectorSize />
      <OptionsSelectorGender />
    </div>
  );
}
