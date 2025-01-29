import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Image
        src="/goal.svg"
        alt="Next.js logo"
        width={100}
        height={100}
        priority
      />
      <h1 className="text-lg font-bold">
        For a Better Tomorrow - Goal Setting made easy
      </h1>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/create"
          rel="noopener noreferrer"
        >
          <span className="py-2">✅</span> Create a Goal
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/dashboard"
          rel="noopener noreferrer"
        >
          <span className="py-2">📋 &nbsp;</span> View Progress
        </a>
      </div>
    </>
  );
};
