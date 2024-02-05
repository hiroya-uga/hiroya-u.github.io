import Link from 'next/link';

export const Header = () => {
  return (
    <header className="py-8 sm:py-16 px-4 sm:pl-10">
      <div className="max-w-content mx-auto">
        <p className="relative -left-4 -top-2">
          <Link
            href="../"
            className="group rounded-md inline-block py-2 px-4 no-underline hover:bg-white focus:bg-white transition-colors delay-0 duration-300"
          >
            <span className="underline">../</span>
            <span className="opacity-0 delay-0 duration-300 transition-opacity ml-4 group-focus:opacity-100 group-hover:opacity-100">
              １つ上のページへ戻る
            </span>
          </Link>
        </p>
      </div>
    </header>
  );
};
