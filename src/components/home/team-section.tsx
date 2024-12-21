import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Peter Kane",
    role: "CEO",
    bio: "Visionary leader driving innovation and growth with a strategic mindset and a passion for building transformative Web3 solutions.",
    image: "/placeholder.svg",
  },
  {
    name: "Adam Smith",
    role: "CTO",
    bio: "Tech-savvy strategist pioneering cutting-edge technology integrations with a focus on scalable solutions and continuous improvement in development.",
    image: "/placeholder.svg",
  },
  {
    name: "Alice Cooper",
    role: "Lead designer",
    bio: "Creative powerhouse blending aesthetics with functionality, crafting visually stunning and user-centric designs that elevate digital experiences.",
    image: "/placeholder.svg",
  },
  {
    name: "Lucy Aston",
    role: "Lead marketer",
    bio: "Data-driven marketer with a knack for storytelling, spearheading brand strategies and campaigns that resonate and convert in competitive markets.",
    image: "/placeholder.svg",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Meet our Team</h2>
        <p className="text-muted-foreground mb-16">
          A squad of web3 professionals ready to
          <br />
          help you transform your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-muted-foreground mb-1">
                  {member.role}
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 border rounded-full hover:bg-muted"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
