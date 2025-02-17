import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
            Quick
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">
            Reads
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-purple-700">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
