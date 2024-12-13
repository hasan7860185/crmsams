import { z } from "zod";

export const projectFormSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, { 
    message: "يجب أن يكون اسم المشروع أكثر من حرفين" 
  }),
  description: z.string().min(10, {
    message: "يجب أن يكون الوصف أكثر من 10 أحرف"
  }),
  project_type: z.string().optional(),
  project_manager: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  status: z.string().optional(),
  priority: z.string().optional(),
  estimated_budget: z.number().optional(),
  actual_budget: z.number().optional(),
  engineeringConsultant: z.string().min(2, {
    message: "يجب إدخال اسم الاستشاري الهندسي"
  }),
  operatingCompany: z.string().min(2, {
    message: "يجب إدخال اسم شركة الإدارة والتشغيل"
  }),
  projectSections: z.string().min(2, {
    message: "يجب إدخال تقسيم المشروع"
  }),
  deliveryDate: z.string(),
  pricePerMeter: z.string(),
  availableUnits: z.string(),
  unitPrice: z.string(),
  minArea: z.string(),
  rentalSystem: z.string(),
  images: z.array(z.string()).optional(),
  user_id: z.string().optional(),
  developer_id: z.string().optional(),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;