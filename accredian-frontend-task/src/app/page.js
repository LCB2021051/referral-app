import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 leading-tight">
          Welcome to Our <span className="text-blue-500">Referral Program</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Invite your friends and earn exciting rewards! Start referring today
          and enjoy exclusive benefits.
        </p>
      </div>

      {/* CTA Button */}
      <Link href="/refer">
        <button className="mt-6 px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-48 bg-gradient-to-t from-blue-100 to-transparent"></div>
    </div>
  );
}
