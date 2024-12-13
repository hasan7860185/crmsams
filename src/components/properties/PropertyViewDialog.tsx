import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/components/forms/propertySchema";
import { PropertyViewFields } from "@/components/forms/fields/PropertyViewFields";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { PropertyShareButtons } from "./share/PropertyShareButtons";

interface PropertyViewDialogProps {
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

export function PropertyViewDialog({ property }: PropertyViewDialogProps) {
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
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className={cn(
        "max-w-4xl max-h-[90vh]",
        isRTL ? "font-cairo" : ""
      )}>
        <DialogHeader>
          <DialogTitle className={isRTL ? "text-right" : ""}>
            {property.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          <h4 className={cn(
            "font-medium mb-2",
            isRTL ? "text-right" : ""
          )}>
            {isRTL ? "اختر الحقول المراد مشاركتها" : "Select fields to share"}
          </h4>
          <div className={cn(
            "grid grid-cols-2 gap-2",
            isRTL ? "text-right" : ""
          )}>
            {shareableFields.map((field) => (
              <div key={field.id} className="flex items-center space-x-2">
                <Checkbox
                  id={field.id}
                  checked={selectedFields.includes(field.id)}
                  onCheckedChange={() => toggleField(field.id)}
                />
                <label 
                  htmlFor={field.id} 
                  className={cn(
                    "text-sm",
                    isRTL ? "mr-2" : "ml-2"
                  )}
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

        <ScrollArea className="h-[calc(90vh-8rem)]">
          <PropertyViewFields 
            property={property} 
            isRTL={isRTL} 
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}