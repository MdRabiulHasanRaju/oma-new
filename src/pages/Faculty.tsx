import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import FacultyCard from "@/components/shared/FacultyCard";
import { faculty } from "@/data/faculty";

const departments = [
  "All",
  "Academic",
  "Administration",
  "Engineering",
  "Navigation",
  "Safety",
  "Maritime Studies",
];

export default function Faculty() {
  const [department, setDepartment] = useState("All");
  const filtered = useMemo(
    () =>
      department === "All"
        ? faculty
        : faculty.filter((f) => f.department === department),
    [department],
  );
  return (
    <>
      <Helmet>
        <title>Faculty | Ocean Maritime Academy</title>
        <meta
          name="description"
          content="Meet the experienced faculty at Ocean Maritime Academy — Master Mariners, Chief Engineers, and PhD-qualified instructors."
        />
      </Helmet>
      <Breadcrumb
        items={[{ label: "Faculty" }]}
        title="Our Faculty"
        subtitle="Learn from seasoned maritime professionals with decades of combined sea-going and academic experience."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDepartment(d)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${department === d ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-accent/10"}`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((m, i) => (
              <FacultyCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
