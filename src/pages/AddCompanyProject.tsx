import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { DashboardSidebar } from "@/components/layouts/DashboardSidebar";
import { DashboardContent } from "@/components/layouts/DashboardContent";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useProjectMutations } from "@/hooks/useProjectMutations";
import { supabase } from "@/integrations/supabase/client";
import { ProjectForm } from "@/components/projects/form/ProjectForm";
import type { ProjectFormData } from "@/components/forms/projectFormSchema";

export default function AddCompanyProject() {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const navigate = useNavigate();
  const { addProject } = useProjectMutations();

  const handleSubmit = async (data: ProjectFormData) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        toast.error(t("auth.errors.notAuthenticated"));
        navigate("/login");
        return;
      }

      // Convert any File objects to URLs before saving
      const imageUrls = data.images || [];

      await addProject.mutateAsync({
        name: data.name,
        description: data.description || null,
        price: data.pricePerMeter,
        location: data.projectSections || null,
        operating_company: data.operatingCompany || null,
        project_area: data.minArea || null,
        project_division: data.projectSections || null,
        available_units: data.availableUnits || null,
        status: "planned",
        user_id: session.user.id,
        developer_id: id,
        floors_count: null,
        images: imageUrls,
        progress: 0,
        start_date: data.deliveryDate || null,
        video: null,
      });
      
      toast.success(isRTL ? 'تم إضافة المشروع بنجاح' : 'Project added successfully');
      navigate(`/companies/${id}`);
    } catch (error) {
      console.error('Error adding project:', error);
      toast.error(isRTL ? 'حدث خطأ أثناء إضافة المشروع' : 'Error adding project');
    }
  };

  return (
    <DashboardLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <DashboardSidebar open={sidebarOpen} />
      <DashboardContent>
        <div className={cn(
          "max-w-4xl mx-auto px-4 pt-6",
          isRTL ? "font-cairo" : ""
        )}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full">
            <h1 className={cn(
              "text-2xl font-semibold mb-6",
              isRTL ? "text-right" : ""
            )}>
              {isRTL ? "إضافة مشروع جديد" : "Add New Project"}
            </h1>

            <ProjectForm
              onSubmit={handleSubmit}
              onCancel={() => navigate(`/companies/${id}`)}
              developerId={id}
            />
          </div>
        </div>
      </DashboardContent>
    </DashboardLayout>
  );
}