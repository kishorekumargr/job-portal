import FiltersSidebar from "@/components/FiltersSidebar";
import Navbar from "@/components/Navbar";
import TopFilters from "@/components/TopFilters";
import JobGrid from "@/components/JobGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <TopFilters />
        <div className="mt-8 flex gap-10">
          <FiltersSidebar />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Recommended jobs</h2>
            <JobGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
