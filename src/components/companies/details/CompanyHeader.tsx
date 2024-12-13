import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface CompanyHeaderProps {
  name: string;
  description?: string | null;
  isRTL: boolean;
}

export function CompanyHeader({ name, description, isRTL }: CompanyHeaderProps) {
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {name}
        </h1>
        <Button
          asChild
          className={cn(
            "gap-2",
            isRTL ? "flex-row-reverse" : ""
          )}
        >
          <Link to={`/companies/${id}/projects/add`}>
            <Plus className="h-4 w-4" />
            {isRTL ? "إضافة مشروع" : "Add Project"}
          </Link>
        </Button>
      </div>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
          {description}
        </p>
      )}
    </>
  );
}