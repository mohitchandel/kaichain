import { Card } from "@/components/ui/card";

interface EcosystemItem {
  name: string;
  logo: string;
  comingSoon?: boolean;
}

interface EcosystemSection {
  title: string;
  items: EcosystemItem[];
}

const colors = [
  "bg-primary/90",
  "bg-secondary",
  "bg-green-800",
  "bg-purple-800",
  "bg-slate-500",
  "bg-gray-800",
  "bg-zinc-600",
  "bg-neutral-500",
];

const getColor = (index: number) => colors[index % colors.length];

const ecosystemData: EcosystemSection[] = [
  {
    title: "DAPPS",
    items: [
      { name: "EVO", logo: "/dapps/logoipsum-340.svg" },
      { name: "TAMADA", logo: "/dapps/logoipsum-340.svg" },
      { name: "STANDARD", logo: "/dapps/logoipsum-340.svg" },
      { name: "ATMOS", logo: "/dapps/logoipsum-340.svg" },
      { name: "ANYALT", logo: "/dapps/logoipsum-340.svg" },
      { name: "CHIMP EXCHANGE", logo: "/dapps/logoipsum-340.svg" },
      { name: "KANA LABS", logo: "/dapps/logoipsum-340.svg" },
      { name: "TOASTER FINANCE", logo: "/dapps/logoipsum-340.svg" },
      { name: "DEXLYN", logo: "/dapps/logoipsum-340.svg" },
      { name: "DEXTR", logo: "/dapps/logoipsum-340.svg" },
      { name: "SALT", logo: "/dapps/logoipsum-340.svg" },
      { name: "AMPLIFI", logo: "/dapps/logoipsum-340.svg" },
      { name: "ICECREAMSWAP", logo: "/dapps/logoipsum-340.svg" },
      { name: "EYWA", logo: "/dapps/logoipsum-340.svg" },
      { name: "LEGENDS TRADE", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "LENDING",
    items: [
      { name: "CHAINSPOT", logo: "/dapps/logoipsum-340.svg" },
      { name: "PRIMEX", logo: "/dapps/logoipsum-340.svg" },
      { name: "BONZO", logo: "/dapps/logoipsum-340.svg" },
      { name: "SIRIO", logo: "/dapps/logoipsum-340.svg" },
      { name: "TIMESWAP", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "PERPS",
    items: [
      { name: "SUPERFI", logo: "/dapps/logoipsum-340.svg" },
      { name: "FORETOKEN", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "SOCIALFI",
    items: [
      { name: "STORYCHAT", logo: "/dapps/logoipsum-340.svg" },
      { name: "DEFRENZ", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "GAMING",
    items: [
      {
        name: "CARDS OF ETERNITY",
        logo: "/dapps/logoipsum-340.svg",
      },
      { name: "FUN TOKEN", logo: "/dapps/logoipsum-340.svg" },
      { name: "NEURAL HAVOC", logo: "/dapps/logoipsum-340.svg" },
      { name: "FUSEWARS", logo: "/dapps/logoipsum-340.svg" },
      { name: "SKINFI", logo: "/dapps/logoipsum-340.svg" },
      { name: "LYNC", logo: "/dapps/logoipsum-340.svg" },
      { name: "MEADOW MYSTICS", logo: "/dapps/logoipsum-340.svg" },
      { name: "CRYPTARA QUEST", logo: "/dapps/logoipsum-340.svg" },
      { name: "ZAPANKISWAP", logo: "/dapps/logoipsum-340.svg" },
      { name: "MEOW FI", logo: "/dapps/logoipsum-340.svg" },
      { name: "MEOW BOT", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "NODE / INFRA",
    items: [
      { name: "WHISPERNODE", logo: "/dapps/logoipsum-340.svg" },
      { name: "P-OPS", logo: "/dapps/logoipsum-340.svg" },
      { name: "LUGANODES", logo: "/dapps/logoipsum-340.svg" },
      { name: "CHAINBASE", logo: "/dapps/logoipsum-340.svg" },
      { name: "LAVENDER.FIVE", logo: "/dapps/logoipsum-340.svg" },
      { name: "BLOCKSIZE", logo: "/dapps/logoipsum-340.svg" },
      { name: "NODEIFI", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "VRF",
    items: [{ name: "SUPRA DVRF", logo: "/dapps/logoipsum-340.svg" }],
  },
  {
    title: "INDEXERS",
    items: [
      { name: "NOVES", logo: "/dapps/logoipsum-340.svg" },
      { name: "ALENO", logo: "/dapps/logoipsum-340.svg" },
      { name: "CODEX", logo: "/dapps/logoipsum-340.svg" },
      { name: "MOBULA", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "BRIDGES",
    items: [
      { name: "FIAMMA", logo: "/dapps/logoipsum-340.svg" },
      {
        name: "LAYERZERO",
        logo: "/dapps/logoipsum-340.svg",
        comingSoon: true,
      },
      { name: "SUPRANOVA", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "AUTOMATION",
    items: [{ name: "SUPRA AUTOMATION", logo: "/dapps/logoipsum-340.svg" }],
  },
  {
    title: "OTHER",
    items: [
      { name: "CLIQUE", logo: "/dapps/logoipsum-340.svg" },
      { name: "DKLOUD", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "WALLETS",
    items: [{ name: "STARKEY WALLET", logo: "/dapps/logoipsum-340.svg" }],
  },
  {
    title: "ORACLES",
    items: [{ name: "SUPRA ORACLES", logo: "/dapps/logoipsum-340.svg" }],
  },
  {
    title: "WALLET INFRA",
    items: [
      { name: "THIRDFI", logo: "/dapps/logoipsum-340.svg" },
      { name: "PULSAR.MONEY", logo: "/dapps/logoipsum-340.svg" },
    ],
  },
  {
    title: "PAYMENT",
    items: [{ name: "BULKSENDER", logo: "/dapps/logoipsum-340.svg" }],
  },
  {
    title: "LAUNCHPAD",
    items: [{ name: "PUMP IT", logo: "/dapps/logoipsum-340.svg" }],
  },
];

export default function EcosystemMap() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Ecosystem Map</h2>
        </div>
        <div className="columns-4 gap-8">
          {ecosystemData.map((section, sectionIndex) => (
            <div key={section.title} className="inline-block w-full mb-4">
              <h2 className="text-sm font-semibold text-gray-500 border-b pb-2">
                {section.title}
              </h2>
              <div className="flex flex-col">
                {section.items.map((item) => (
                  <Card
                    key={item.name}
                    className={`${getColor(
                      sectionIndex
                    )} hover:opacity-90 transition-opacity text-white p-2 flex items-center space-x-2 mt-1`}
                  >
                    <div className="bg-white p-1 rounded">
                      <img
                        src={item.logo}
                        alt=""
                        className="w-5 h-5"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {item.name}
                      {item.comingSoon && (
                        <span className="ml-2 text-xs bg-black/30 px-2 py-0.5 rounded">
                          COMING SOON
                        </span>
                      )}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
