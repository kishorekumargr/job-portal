import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function TopFilters() {
  return (
    <div className="w-full bg-black text-white p-4 rounded-xl flex flex-wrap items-center gap-4 mt-4">
      <Button variant="secondary" className="rounded-full">
        Designer
      </Button>

      <Button variant="secondary" className="rounded-full">
        Work location
      </Button>

      <Button variant="secondary" className="rounded-full">
        Experience
      </Button>

      <Button variant="secondary" className="rounded-full">
        Per month
      </Button>

      <div className="flex-1" />

      <div className="text-sm opacity-80">Salary range</div>

      <Slider defaultValue={[1200, 20000]} max={20000} min={0} step={100} className="w-52" />
    </div>
  );
}
