import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Property } from "@/components/forms/propertySchema";
import { PropertyShareButtons } from "./PropertyShareButtons";
import { useTranslation } from "react-i18next";

interface PropertyShareDialogProps {
  property: Property;
}

const shareableFields = [
  { id: "title", label: { ar: "العنوان", en: "Title" } },
  { id: "description", label: { ar: "الوصف", en: "Description" } },
  { id: "location", label: { ar: "الموقع", en: "Location" } },
  { id: "price", label: { ar: "السعر", en: "Price" } },
  { id: "area", label: { ar: "المساحة", en: "Area" } },
  { id: "operatingCompany", label: { ar: "شركة الإدارة والتشغيل", en: "Operating Company" } },
];

export function PropertyShareDialog({ property }: PropertyShareDialogProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedFields, setSelectedFields] = useState<string[]>([
    "title", "description", "location", "price", "area"
  ]);

  const toggleField = (field: string) => {
    setSelectedFields(current =>
      current.includes(field)
        ? current.filter(f => f !== field)
        : [...current, field]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-right font-cairo">
            مشاركة تفاصيل العقار
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-right mb-2">
              اختر الحقول المراد مشاركتها
            </h4>
            <div className="grid grid-cols-2 gap-2 text-right">
              {shareableFields.map((field) => (
                <div key={field.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={field.id}
                    checked={selectedFields.includes(field.id)}
                    onCheckedChange={() => toggleField(field.id)}
                  />
                  <label 
                    htmlFor={field.id} 
                    className="mr-2 text-sm"
                  >
                    {isRTL ? field.label.ar : field.label.en}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <PropertyShareButtons 
            property={property}
            selectedFields={selectedFields}
            isRTL={isRTL}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}