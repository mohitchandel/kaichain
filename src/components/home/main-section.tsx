import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

export function MainSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-muted rounded-full px-4 py-1.5 text-sm mb-6">
            About us
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Transforming Business with Web3 Technology
          </h2>
          <p className="text-muted-foreground mb-8">
            At Spark, we specialize in providing cutting-edge Web3 consulting
            services to help businesses navigate the complexities of
            decentralized technologies.
          </p>
          <Button className="bg-[#D1F96E] text-black hover:bg-[#B8E150]">
            Contact us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="relative">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    WEB3 REVENUE
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">$480,000</h3>
                    <span className="text-green-500 flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +8% vs last month
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    YOUR TOKEN
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">$700</h3>
                    <span className="text-green-500 flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +17% vs last month
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">USERS</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">4,872</h3>
                    <span className="text-green-500 flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +24% vs last month
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
