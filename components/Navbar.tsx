import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold">HireMee</h1>

        <ul className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <li>Find job</li>
          <li>Messages</li>
          <li>Hiring</li>
          <li>Community</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm">New York, NY</span>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
