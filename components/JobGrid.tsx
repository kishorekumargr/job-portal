import JobCard from "@/components/JobCard";

const JOBS = [
  {
    date: "20 May, 2023",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    pay: "$250/hr",
    location: "San Francisco, CA",
    tags: ["Part time", "Senior level", "Remote"],
    color: "bg-orange-100",
  },
  {
    date: "4 Feb, 2023",
    company: "Google",
    title: "Junior UI/UX Designer",
    pay: "$150/hr",
    location: "California, CA",
    tags: ["Full time", "Junior level", "Flexible schedule"],
    color: "bg-green-100",
  },
];

export default function JobGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {JOBS.map((job) => (
        <JobCard key={job.title} {...job} />
      ))}
    </div>
  );
}
