import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface JobCardProps {
  date: string;
  company: string;
  title: string;
  pay: string;
  location: string;
  tags: string[];
  color: string; // bg-orange-100, bg-blue-100 etc.
}

export default function JobCard({
  date,
  company,
  title,
  pay,
  location,
  tags,
  color,
}: JobCardProps) {
  return (
    <Card className={`${color} rounded-xl`}>
      <CardContent className="p-5">
        <div className="text-sm text-gray-600">{date}</div>

        <div className="flex items-center justify-between mt-2">
          <div>
            <h3 className="font-semibold text-lg">{company}</h3>
            <div className="text-gray-800">{title}</div>
          </div>

          <div className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center">
            🏢
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-white/80 border px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold">{pay}</div>
          <Button className="rounded-full">Details</Button>
        </div>

        <div className="text-sm text-gray-500 mt-2">{location}</div>
      </CardContent>
    </Card>
  );
}
