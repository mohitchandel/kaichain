import React from "react";
import {
  ArrowRight,
  Blocks,
  Shield,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const MainSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Pioneering the Future of Digital Business
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Spark, we empower businesses to harness the revolutionary
            potential of Web3 technologies. Our expertise bridges the gap
            between traditional systems and decentralized solutions.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <Shield className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">ISO 27001 Certified</span>
            </div>
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <CheckCircle className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Enterprise Ready</span>
            </div>
            <div className="flex rounded-3xl items-center gap-2 bg-gray-100 px-4 py-2">
              <Award className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                Top Web3 Consultant 2024
              </span>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <Blocks className="h-8 w-8 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Blockchain Solutions</h3>
            <p className="text-gray-600">
              Custom blockchain architecture and smart contract development for
              your business needs
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Shield className="h-8 w-8 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Security First</h3>
            <p className="text-gray-600">
              Enterprise-grade security protocols ensuring your digital assets
              remain protected
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Users className="h-8 w-8 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Strategic consulting from industry veterans with proven Web3
              implementation experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
