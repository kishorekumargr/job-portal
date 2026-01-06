import { Button } from "@/components/ui/button";

export default function PromoCard() {
  return (
    <div className="bg-black text-white p-6 rounded-xl h-60 flex flex-col justify-between">
      <div className="text-xl font-semibold">Get your best profession with LuckyJob</div>

      <Button className="bg-blue-500 hover:bg-blue-600 rounded-full self-start">Learn more</Button>
    </div>
  );
}
