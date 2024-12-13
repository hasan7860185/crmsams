import { Button } from "@/components/ui/button";
import { Facebook, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Property } from "@/components/forms/propertySchema";

interface PropertyShareButtonsProps {
  property: Property;
  selectedFields: string[];
  isRTL: boolean;
}

export function PropertyShareButtons({ property, selectedFields, isRTL }: PropertyShareButtonsProps) {
  const generateShareText = () => {
    let text = '';
    selectedFields.forEach((field) => {
      switch (field) {
        case 'title':
          text += `${isRTL ? 'العنوان' : 'Title'}: ${property.title}\n`;
          break;
        case 'description':
          if (property.description) {
            text += `${isRTL ? 'الوصف' : 'Description'}: ${property.description}\n`;
          }
          break;
        case 'location':
          if (property.location) {
            text += `${isRTL ? 'الموقع' : 'Location'}: ${property.location}\n`;
          }
          break;
        case 'price':
          if (property.price) {
            text += `${isRTL ? 'السعر' : 'Price'}: ${property.price}\n`;
          }
          break;
        case 'area':
          if (property.area) {
            text += `${isRTL ? 'المساحة' : 'Area'}: ${property.area}\n`;
          }
          break;
        case 'operatingCompany':
          if (property.operatingCompany) {
            text += `${isRTL ? 'شركة الإدارة والتشغيل' : 'Operating Company'}: ${property.operatingCompany}\n`;
          }
          break;
      }
    });
    return text;
  };

  const handleWhatsAppShare = () => {
    const text = generateShareText();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookShare = () => {
    const text = generateShareText();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodeURIComponent(text)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleEmailShare = () => {
    const text = generateShareText();
    const subject = encodeURIComponent(property.title || '');
    const body = encodeURIComponent(text);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  };

  const handleCopyToClipboard = () => {
    const text = generateShareText();
    navigator.clipboard.writeText(text)
      .then(() => toast.success(isRTL ? 'تم نسخ التفاصيل' : 'Details copied'))
      .catch(() => toast.error(isRTL ? 'فشل نسخ التفاصيل' : 'Failed to copy details'));
  };

  return (
    <div className="flex gap-2 justify-center mt-4">
      <Button
        variant="outline"
        size="icon"
        onClick={handleWhatsAppShare}
        title={isRTL ? "مشاركة عبر واتساب" : "Share via WhatsApp"}
      >
        <MessageCircle className="h-4 w-4 text-green-600" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleFacebookShare}
        title={isRTL ? "مشاركة عبر فيسبوك" : "Share via Facebook"}
      >
        <Facebook className="h-4 w-4 text-blue-600" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleEmailShare}
        title={isRTL ? "مشاركة عبر البريد الإلكتروني" : "Share via Email"}
      >
        <Mail className="h-4 w-4 text-purple-600" />
      </Button>
    </div>
  );
}