import {
  Clock,
  FlowerIcon as Butterfly,
  DollarSign,
  Send,
  Blocks,
  Wallet2,
} from "lucide-react";

export function Stats() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto ">
        <div className="mb-16 mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            Real-Time Metrics Driving Transparency and Performance
          </h1>
          <p className="text-muted-foreground ">
            Showcase the key statistics that define Kaichain's efficiency and
            accessibility, from gas prices to wallet interactions and block
            times—all updated live to keep you informed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#eceef2] rounded-3xl p-6 ">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <Clock className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2">3 Seconds</h2>
            <p className="text-muted-foreground">block time</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6 ">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <Blocks className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2">25970400</h2>
            <p className="text-muted-foreground">Current Block</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6 ">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <DollarSign className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2">0.0001 KEC</h2>
            <p className="text-muted-foreground">Gas Price</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6 ">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <Wallet2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2">33,859</h2>
            <p className="text-muted-foreground">Wallet Interacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
