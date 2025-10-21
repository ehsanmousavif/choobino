import ProductTemplateSelectorItem from "./product-shape-selector-item";

interface ProductTemplateSelectorItemProp {
  title: string;
  value: string;
  className: string;
}

const templateOptions: ProductTemplateSelectorItemProp[] = [
  { title: "مربعی", value: "square", className: "w-14 h-14 rounded-2xl" },
  { title: "دایره ای", value: "circle", className: "w-14 h-14 rounded-full" },
  { title: "افقی", value: "horizontal", className: "w-28 h-14 rounded-2xl" },
  { title: "عمودی", value: "vertical", className: "w-8 h-14 rounded-lg" },
];

export default function ProductTemplateSelector() {
  return (
    <div className="flex max-md:items-center w-full gap-10 py-10 flex-col">
      <b className="text-lg">انتخاب قالب محصول</b>

      <div className="flex items-center gap-5 max-md:justify-between">
        {templateOptions.map((shape, index) => (
          <ProductTemplateSelectorItem
            title={shape.title}
            value={shape.value}
            key={index}
            className={shape.className}
          />
        ))}
      </div>
    </div>
  );
}
