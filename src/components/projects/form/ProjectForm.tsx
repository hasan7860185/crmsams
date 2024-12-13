import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ProjectFileUpload } from "@/components/forms/fields/upload/ProjectFileUpload";
import { projectFormSchema } from "@/components/forms/projectFormSchema";
import type { ProjectFormData } from "@/components/forms/projectFormSchema";
import { supabase } from "@/integrations/supabase/client";

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
  developerId?: string;
}

export function ProjectForm({ onSubmit, onCancel, developerId }: ProjectFormProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      engineeringConsultant: "",
      operatingCompany: "",
      projectSections: "",
      deliveryDate: new Date().toISOString().split('T')[0],
      pricePerMeter: "",
      availableUnits: "",
      unitPrice: "",
      minArea: "",
      rentalSystem: "",
      description: "",
      images: [],
    },
  });

  const handleFileUploadComplete = async (urls: { images: (string | File)[] }) => {
    if (urls.images.length > 0) {
      const uploadedUrls: string[] = [];
      
      for (const image of urls.images) {
        if (image instanceof File) {
          const fileExt = image.name.split('.').pop();
          const fileName = `${Math.random()}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('projects')
            .upload(fileName, image);

          if (uploadError) {
            console.error('Error uploading image:', uploadError);
            continue;
          }

          const { data: { publicUrl } } = supabase.storage
            .from('projects')
            .getPublicUrl(fileName);

          uploadedUrls.push(publicUrl);
        } else {
          uploadedUrls.push(image);
        }
      }

      const currentImages = form.getValues('images') || [];
      form.setValue('images', [...currentImages, ...uploadedUrls]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {/* Project Name */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "اسم المشروع" : "Project Name"}
            </label>
            <Input
              {...form.register("name")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Engineering Consultant */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "الاستشاري الهندسي" : "Engineering Consultant"}
            </label>
            <Input
              {...form.register("engineeringConsultant")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Operating Company */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "شركة الإدارة والتشغيل" : "Operating Company"}
            </label>
            <Input
              {...form.register("operatingCompany")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Project Division */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "تقسيم المشروع" : "Project Division"}
            </label>
            <Input
              {...form.register("projectSections")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Delivery Date */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "تاريخ التسليم" : "Delivery Date"}
            </label>
            <Input
              {...form.register("deliveryDate")}
              type="date"
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Price Per Meter */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "السعر لكل متر" : "Price Per Meter"}
            </label>
            <Input
              {...form.register("pricePerMeter")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Available Units */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "الوحدات المتاحة" : "Available Units"}
            </label>
            <Input
              {...form.register("availableUnits")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Unit Price */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "سعر الوحدة" : "Unit Price"}
            </label>
            <Input
              {...form.register("unitPrice")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Minimum Area */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "بداية المساحات" : "Starting Areas"}
            </label>
            <Input
              {...form.register("minArea")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Rental System */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "نظام الإيجار" : "Rental System"}
            </label>
            <Input
              {...form.register("rentalSystem")}
              className={cn(isRTL && "text-right")}
            />
          </div>

          {/* Project Details */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "تفاصيل المشروع" : "Project Details"}
            </label>
            <Textarea
              {...form.register("description")}
              className={cn("min-h-[100px]", isRTL && "text-right")}
            />
          </div>

          {/* Image Upload */}
          <div className="form-field">
            <label className={cn(
              "block text-sm font-medium mb-2",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "صور المشروع" : "Project Images"}
            </label>
            <ProjectFileUpload
              onUploadComplete={handleFileUploadComplete}
              isRTL={isRTL}
            />
          </div>
        </div>

        <div className={cn(
          "flex gap-4 mt-6",
          isRTL ? "flex-row-reverse" : ""
        )}>
          <Button type="submit" className="flex-1">
            {isRTL ? "حفظ المشروع" : "Save Project"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            {isRTL ? "إلغاء" : "Cancel"}
          </Button>
        </div>
      </form>
    </Form>
  );
}