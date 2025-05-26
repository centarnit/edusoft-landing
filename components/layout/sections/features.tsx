import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "UserCheck",
    title: "Student Profiles",
    description:
      "Maintain detailed student records, including academic progress, attendance, and financial status—all in one place.",
  },
  {
    icon: "CreditCard",
    title: "Financial Tracking",
    description:
      "Easily monitor tuition payments, outstanding balances, and generate financial reports for your school or center.",
  },
  {
    icon: "BarChart3",
    title: "Analytics Dashboard",
    description:
      "Visualize trends in enrollment, payments, and student performance with real-time analytics and easy-to-read charts.",
  },
  {
    icon: "Bell",
    title: "Automated Reminders",
    description:
      "Send automatic notifications to parents and staff about upcoming payments, events, or important updates.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure & Compliant",
    description:
      "Protect sensitive student and financial data with robust security and compliance features built for education.",
  },
  {
    icon: "Cloud",
    title: "Cloud Access",
    description:
      "Access Edusoft securely from anywhere—at school, at home, or on the go—with our reliable cloud platform.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
