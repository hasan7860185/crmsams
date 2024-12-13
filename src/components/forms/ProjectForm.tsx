import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { projectFormSchema } from "./projectFormSchema";
import { cn } from "@/lib/utils";
import { ProjectBasicFields } from "./fields/ProjectBasicFields";
import { PropertyFileUpload } from "./fields/upload/PropertyFileUpload";
import type { ProjectFormData } from "./projectFormSchema";

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<ProjectFormData>;
  isCompanyProject?: boolean;
}

export function ProjectForm({ onSubmit, onCancel, defaultValues, isCompanyProject = false }: ProjectFormProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      engineeringConsultant: defaultValues?.engineeringConsultant || "",
      operatingCompany: defaultValues?.operatingCompany || "",
      projectSections: defaultValues?.projectSections || "",
      deliveryDate: defaultValues?.deliveryDate || "",
      pricePerMeter: defaultValues?.pricePerMeter || "",
      availableUnits: defaultValues?.availableUnits || "",
      unitPrice: defaultValues?.unitPrice || "",
      minArea: defaultValues?.minArea || "",
      rentalSystem: defaultValues?.rentalSystem || "",
      description: defaultValues?.description || "",
      images: defaultValues?.images || [],
    },
  });

  const handleFileUploadComplete = (urls: { images: string[] }) => {
    if (urls.images.length > 0) {
      const currentImages = form.getValues('images') || [];
      form.setValue('images', [...currentImages, ...urls.images]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className={cn("space-y-6", isRTL && "text-right")}>
          <ProjectBasicFields form={form} isCompanyProject={isCompanyProject} />
          
          <PropertyFileUpload 
            onUploadComplete={handleFileUploadComplete}
            isRTL={isRTL}
          />
        </div>

        <div className={cn(
          "flex gap-2 mt-6",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}>
          <Button type="submit" className={cn("flex-1", isRTL && "font-cairo")}>
            {isRTL ? "حفظ المشروع" : "Save Project"}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className={cn(isRTL && "font-cairo")}
          >
            {isRTL ? "إلغاء" : "Cancel"}
          </Button>
        </div>
      </form>
    </Form>
  );
}