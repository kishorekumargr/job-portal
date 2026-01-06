import PromoCard from "@/components/PromoCard";

const filters = [
  "Full time",
  "Part time",
  "Project work",
  "Flexible schedule",
  "Night shift",
  "Remote work",
];

export default function FiltersSidebar() {
  return (
    <aside className="w-64 hidden lg:flex flex-col gap-6">
      <PromoCard />

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Filters</h3>

        <div className="space-y-2">
          {filters.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-black" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
