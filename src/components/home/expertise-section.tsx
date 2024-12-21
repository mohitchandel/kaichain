import { Cpu, Puzzle, LifeBuoy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ExpertiseSection() {
  return (
    <section className="py-24 px-4 bg-muted/40">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Innovative Blockchain Technology
          </h2>
          <p className="text-muted-foreground mb-16">
            Discover the pillars of Kaichain's cutting-edge infrastructure,
            offering unmatched features, flawless transactions, and unparalleled
            speed for a seamless blockchain experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-muted rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Expertise in Web3 Technologies
              </h3>
              <p className="text-muted-foreground">
                Our team has deep knowledge and hands-on experience in Web3
                innovative solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-muted rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customized Solutions
              </h3>
              <p className="text-muted-foreground">
                We tailor our services to meet your specific needs, providing
                bespoke solutions for your business.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-muted rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Support
              </h3>
              <p className="text-muted-foreground">
                From consultation to implementation, we offer end-to-end support
                to ensure success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
