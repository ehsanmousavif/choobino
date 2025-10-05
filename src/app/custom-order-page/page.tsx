import CheckOutDescription from "@/components/custom-order-page/CheckOutDescription";
import CheckOutImageInputSection from "@/components/custom-order-page/CheckOutImageInputSection";
import CheckoutSection from "@/components/custom-order-page/CheckoutSection";
import CustomOrderHeroSection from "@/components/custom-order-page/CustomOrderHeroSection";
import CustomTextContent from "@/components/custom-order-page/CustomTextContent";
import OptionsSelector from "@/components/custom-order-page/OptionsSelector";
import ProductTemplateSelector from "@/components/custom-order-page/ProductTemplateSelector";
import ProductTypeSelector from "@/components/custom-order-page/ProductTypeSelector";

const CustomOrderPage = () => {
  return (
    <div className="flex flex-col font-sans container mx-auto">
      <CustomOrderHeroSection />
      <ProductTypeSelector/>
      <OptionsSelector/>
      <ProductTemplateSelector/>
      <CustomTextContent/>
      <CheckOutImageInputSection/>
      <CheckOutDescription/>
      <CheckoutSection/>
    </div>
  );
};

export default CustomOrderPage;
