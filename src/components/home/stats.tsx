"use client";
import { Wallet2 } from "lucide-react";
import { PiCubeFocus } from "react-icons/pi";
import { RiGasStationLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

type WebSocketMessage = [string, null, string, string, Record<string, any>];

export function Stats() {
  const [blockTime, setBlockTime] = useState("3 Seconds");
  const [currentBlock, setCurrentBlock] = useState<number | undefined>();
  const [gasPrice, setGasPrice] = useState("0.0001 KEC");
  const [walletInteracted, setWalletInteracted] = useState(33859);

  const blockTimeRef = useRef<HTMLHeadingElement>(null);
  const currentBlockRef = useRef<HTMLHeadingElement>(null);
  const gasPriceRef = useRef<HTMLHeadingElement>(null);
  const walletInteractedRef = useRef<HTMLHeadingElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const statsSectionRef = useRef<HTMLDivElement | null>(null); // Ref for stats section

  useEffect(() => {
    const connectWebSocket = () => {
      wsRef.current = new WebSocket(
        "wss://explorer.kaichain.net/socket/websocket?locale=en&vsn=2.0.0"
      );

      wsRef.current.onopen = () => {
        console.log("Connected to WebSocket");
        const messages = [
          ["12", "12", "blocks:new_block", "phx_join", {}],
          ["9", "9", "addresses:new_address", "phx_join", {}],
          ["15", "15", "transactions:new_transaction", "phx_join", {}],
          ["18", "18", "transactions:stats", "phx_join", {}],
        ];

        messages.forEach((message) => {
          if (wsRef.current) {
            wsRef.current.send(JSON.stringify(message));
          }
        });
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data) as WebSocketMessage;

          if (Array.isArray(data) && data.length === 5) {
            const [_, __, channel, ___, payload] = data;

            if (_ || __ || channel || ___ || payload) {
              console.log("Received WebSocket message:", data);
            }
            switch (channel) {
              case "blocks:new_block":
                if (
                  payload.block_number &&
                  payload.block_number !== currentBlock
                ) {
                  setCurrentBlock(payload.block_number);
                }
                if (
                  payload.average_block_time &&
                  payload.average_block_time !== blockTime
                ) {
                  setBlockTime(payload.average_block_time);
                }
                break;

              case "addresses:new_address":
                if (payload.count) {
                  const count = parseInt(payload.count.replace(/,/g, ""), 10);
                  if (!isNaN(count) && count !== walletInteracted) {
                    setWalletInteracted(count);
                  }
                }
                break;

              case "transactions:stats":
                if (payload.gas_price && payload.gas_price !== gasPrice) {
                  setGasPrice(payload.gas_price);
                }
                break;
            }
          }
        } catch (error) {
          console.log("Error processing WebSocket message:", error);
        }
      };

      wsRef.current.onclose = () => {
        console.log("WebSocket connection closed");
        setTimeout(connectWebSocket, 5000);
      };

      wsRef.current.onerror = () => {
        if (wsRef.current) {
          wsRef.current.close();
        }
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [blockTime, currentBlock, gasPrice, walletInteracted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            statsSectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        }
      },
      { threshold: 0.5 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-4" ref={statsSectionRef}>
      <div className="container mx-auto">
        <div className="mb-16 mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            Real-Time Metrics Driving Transparency and Performance
          </h1>
          <p className="text-muted-foreground">
            Showcase the key statistics that define Kaichain&apos;s efficiency
            and accessibility, from gas prices to wallet interactions and block
            times—all updated live to keep you informed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#eceef2] rounded-3xl p-6">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <IoIosTimer className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2" ref={blockTimeRef}>
              {blockTime}
            </h2>
            <p className="text-muted-foreground">Block Time</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <PiCubeFocus className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2" ref={currentBlockRef}>
              {currentBlock ? currentBlock.toLocaleString() : "Loading..."}
            </h2>
            <p className="text-muted-foreground">Current Block</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <RiGasStationLine className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2" ref={gasPriceRef}>
              {gasPrice}
            </h2>
            <p className="text-muted-foreground">Gas Price</p>
          </div>

          <div className="bg-[#eceef2] rounded-3xl p-6">
            <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-secondary p-3 text-white">
              <Wallet2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-2" ref={walletInteractedRef}>
              {walletInteracted.toLocaleString()}
            </h2>
            <p className="text-muted-foreground">Wallet Interacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
