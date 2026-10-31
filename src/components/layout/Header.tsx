import { Search, Bell, Sun, Moon } from "lucide-react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="search"
          placeholder="Search transactions..."
          className="w-64 rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
      </div>
      <div className="flex flex-row gap-4 justify-end items-center">
        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
          aria-label="Toggle theme"
        >
          <Moon size={20} />
        </button>
        <img
          src="/avatar.png"
          alt="User profile"
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
};
