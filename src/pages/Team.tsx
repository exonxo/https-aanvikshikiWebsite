import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  initials: string;
}

// TODO: Replace with real team member details before going live
const members: TeamMember[] = [
  {
    name: "Your Name",
    role: "Founder & Managing Director",
    bio: "Describe your background and what drives you to do this work. What problem did you set out to solve, and what makes your approach different?",
    linkedin: "https://linkedin.com",
    initials: "YN",
  },
];

export function Team() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Team</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
            The people behind the thinking.
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            For a consulting firm, people are the product. Here's who you're
            actually working with.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.name} className="border border-border rounded-lg p-8">
                {/* Avatar */}
                <div className="size-16 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-muted-foreground mb-6">
                  {member.initials}
                </div>

                {/* Name + role */}
                <p className="text-lg font-semibold tracking-tight mb-1">{member.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Work with us
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Want to understand our thinking before you engage?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Start with a conversation. We'll ask the right questions — not give you a deck.
          </p>
          <Button asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
