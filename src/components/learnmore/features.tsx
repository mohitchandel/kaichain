"use client";
import {
  Code2,
  Rocket,
  Wallet,
  Wrench,
  Gamepad2,
  Construction,
  UsbIcon as UsbCable,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "KaiDex",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "KaiBridge",
      icon: <Construction className="w-8 h-8 text-green-500" />,
    },
    {
      name: "KaiPay",
      icon: <Wallet className="w-8 h-8 text-yellow-500" />,
    },
    {
      name: "KaiLaunch",
      icon: <Rocket className="w-8 h-8 text-red-500" />,
    },
    {
      name: "KaiAudit",
      icon: <Wrench className="w-8 h-8 text-gray-500" />,
    },
    {
      name: "KaiLabs",
      icon: <UsbCable className="w-8 h-8 text-purple-500" />,
    },
    {
      name: "Multi Sender App",
      icon: <Wrench className="w-8 h-8 text-gray-500" />,
    },
    {
      name: "MultiSig Wallet",
      icon: <Wallet className="w-8 h-8 text-yellow-500" />,
    },
    {
      name: "KaiGames",
      icon: <Gamepad2 className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <div className="w-full bg-blue-50 overflow-hidden">
      <div className="relative flex items-center whitespace-nowrap animate-marquee">
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center min-w-[200px] p-6 transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 ${
              feature.name === "Multi Sender App" ? "" : "border-r border-b"
            } last:border-r-0`}
          >
            <div className="mb-3">{feature.icon}</div>
            <span className="text-sm font-medium text-black">
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: calc(
            200px * ${features.length} * 2
          ); /* Adjust width for seamless scrolling */
        }
      `}</style>
    </div>
  );
}
