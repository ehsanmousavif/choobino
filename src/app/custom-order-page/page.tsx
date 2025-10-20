import ProductTypeSelector from "@/components/custom-order-components/product-type-selector";
import CheckOutDescription from "@/components/custom-order-components/check-out-description";
import CheckOutImageInputSection from "@/components/custom-order-components/check-out-image-input-section";
import CheckoutSection from "@/components/custom-order-components/checkout-section";
import CustomTextContent from "@/components/custom-order-components/custom-text-content";
import OptionsSelector from "@/components/custom-order-components/options-selector";
import ProductTemplateSelector from "@/components/custom-order-components/product-shape-selector";

const CustomOrderPage = () => {
  return (
    <div className="flex flex-col font-sans container mx-auto">
      <ProductTypeSelector />
      <OptionsSelector />
      <ProductTemplateSelector />
      <CustomTextContent />
      <CheckOutImageInputSection />
      <CheckOutDescription />
      <CheckoutSection
        productType="گردنبند"
        size="متوسط"
        gender="زنانه"
        shape="مربعی"
        deposit={500000}
      />
    </div>
  );
};

export default CustomOrderPage;
