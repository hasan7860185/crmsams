import { UseFormReturn } from "react-hook-form";
import type { ProjectFormData } from "../../projectFormSchema";
import { ProjectGeneralFields } from "./ProjectGeneralFields";
import { ProjectDatesFields } from "./ProjectDatesFields";
import { ProjectDetailsFields } from "./ProjectDetailsFields";

interface BasicProjectFieldsProps {
  form: UseFormReturn<ProjectFormData>;
}

export function BasicProjectFields({ form }: BasicProjectFieldsProps) {
  return (
    <div className="space-y-6">
      <ProjectGeneralFields form={form} />
      <ProjectDatesFields form={form} />
      <ProjectDetailsFields form={form} />
    </div>
  );
}