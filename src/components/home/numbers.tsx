export default function Numbers() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto">
        <div className="flex flex-col  items-center font-poppins">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <div className="text-4xl text-white font-bold">24 Seconds</div>
              <div className="text-gray-300 font-medium text-lg">
                Block Time
              </div>
            </div>

            <div className="rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <div className="text-4xl text-white font-bold">25,883,699</div>
              <div className="text-gray-300 font-medium text-lg">
                Current Blocks
              </div>
            </div>

            <div className="rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <div className="text-4xl text-white font-bold">33,854</div>
              <div className="text-gray-300 font-medium text-lg">
                Wallets Interacted
              </div>
            </div>

            <div className="rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <div className="text-4xl text-white font-bold">0.0001 KEC</div>
              <div className="text-gray-300 font-medium text-lg">Gas Price</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
