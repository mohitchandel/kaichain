import React from "react";
import { Shield, Users, TreeDeciduous } from "lucide-react";
import { FaEthereum } from "react-icons/fa";
import { TbTransactionDollar } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";

const MainSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Pioneering the Future of Sustainable Blockchain
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Kaichain, we empower businesses and developers with a
            high-performance, sustainable blockchain solution. Our technology
            bridges the gap between traditional systems and next-generation
            decentralized applications.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <TbTransactionDollar className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                100,000 TPS Capacity
              </span>
            </div>
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <FaEthereum className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">EVM Compatible</span>
            </div>
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <TreeDeciduous className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Eco-Friendly Design</span>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <CgPerformance className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">High Performance</h3>
            <p className="text-gray-600">
              Delivering lightning-fast transactions at 100,000 TPS with
              compressed block sizes and optimized validation times for maximum
              efficiency.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Shield className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Sustainable Design</h3>
            <p className="text-gray-600">
              Zero carbon footprint through Proof of Authority consensus,
              ensuring eco-friendly and economically efficient operations.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Users className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Universal Access</h3>
            <p className="text-gray-600">
              Built for everyone - from developers to everyday users - with EVM
              compatibility and near-zero transaction fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
