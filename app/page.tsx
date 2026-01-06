import FiltersSidebar from "@/components/FiltersSidebar";
import Navbar from "@/components/Navbar";
import TopFilters from "@/components/TopFilters";

export default function LuckyJob() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <TopFilters />
        <div className="mt-8 flex gap-10">
          <FiltersSidebar />
        </div>
      </div>
    </main>
  );
}
