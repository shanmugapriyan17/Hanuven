import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Anand Krishnan",
    role: "Chief Siddha Physician",
    bio: "With 25 years of practice, Dr. Krishnan bridges ancient Siddha wisdom with modern wellness.",
    image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY2OTIyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "anand@hanuven.com",
  },
  {
    name: "Meera Patel",
    role: "Master Herbalist",
    bio: "Third-generation herbalist specializing in sourcing and quality assurance of sacred ingredients.",
    image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY2OTIyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "meera@hanuven.com",
  },
  {
    name: "Dr. Suresh Reddy",
    role: "Research Director",
    bio: "Leading research on Siddha medicine efficacy with published papers in international journals.",
    image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY2OTIyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "suresh@hanuven.com",
  },
  {
    name: "Lakshmi Iyer",
    role: "Wellness Consultant",
    bio: "Certified nutritionist and yoga therapist, guiding customers on holistic healing journeys.",
    image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY2OTIyMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "lakshmi@hanuven.com",
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            The Healers Behind Hanuven
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A passionate team of Siddha physicians, herbalists, and wellness experts dedicated to 
            bringing you authentic, transformative healing
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-[var(--timing-slow)]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-[var(--color-neutral-100)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[var(--timing-luxurious)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--timing-slow)]"></div>
                  
                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-[var(--timing-slow)] translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full glass hover:bg-white/30 flex items-center justify-center transition-all duration-[var(--timing-normal)]"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full glass hover:bg-white/30 flex items-center justify-center transition-all duration-[var(--timing-normal)]"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-[var(--color-neutral-900)] mb-1 group-hover:text-[var(--color-hero)] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-[var(--color-accent-2)] mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--color-accent-1)]/20 blur-xl group-hover:bg-[var(--color-accent-1)]/40 transition-all duration-[var(--timing-slow)]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-br from-[var(--color-accent-1)]/10 to-transparent rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-[var(--color-neutral-900)] mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate healers, researchers, and wellness advocates 
            to join our growing team.
          </p>
          <button className="px-8 py-4 bg-[var(--color-hero)] text-white rounded-full hover:bg-[var(--color-accent-2)] transition-all duration-[var(--timing-normal)] hover:scale-105 shadow-lg">
            View Career Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  );
}
