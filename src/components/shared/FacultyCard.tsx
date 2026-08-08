import { motion } from "framer-motion";
import { GraduationCap, Mail, Briefcase } from "lucide-react";
import type { FacultyMember } from "@/types";

export default function FacultyCard({
  member,
  index = 0,
}: {
  member: FacultyMember;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-[25%_20%] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xs font-medium uppercase tracking-wider text-ocean-200">
            {member.department}
          </p>
          <h3 className="font-display text-lg font-bold">{member.name}</h3>
          <p className="text-sm text-white/80">{member.designation}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="space-y-2.5 text-sm">
          {/* <div className="flex items-start gap-2 text-muted-foreground">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{member.qualification}</span>
          </div> */}
          <div className="flex items-start gap-2 text-muted-foreground">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{member.specialization}</span>
          </div>
          {/* <div className="flex items-start gap-2 text-muted-foreground">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{member.experience}</span>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
