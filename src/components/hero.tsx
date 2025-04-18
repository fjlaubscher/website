import Image from 'next/image';
import {
  FaHeart,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaMicrosoft,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center pt-16 pb-0 text-center bg-neutral-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-16">
        <div className="flex flex-col items-center">
          <h1 className="w-full text-4xl font-bold text-center md:text-left mb-2">
            Hi! I'm Francois.
          </h1>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-1 text-xl text-gray-600 dark:text-gray-300 mb-2">
              I <FaHeart className="fill-red-700" /> building for the web,
              using:
            </div>
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-lg font-medium m-0 p-0 list-none w-full max-w-sm">
              <li className="flex items-center gap-2 px-3 py-1 rounded bg-blue-200 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                <FaReact className="text-xl" /> React
              </li>
              <li className="flex items-center gap-2 px-3 py-1 rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200">
                <FaJsSquare className="text-xl" /> TypeScript
              </li>
              <li className="flex items-center gap-2 px-3 py-1 rounded bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200">
                <FaCss3Alt className="text-xl" /> CSS
              </li>
              <li className="flex items-center gap-2 px-3 py-1 rounded bg-purple-200 dark:bg-purple-900 text-purple-700 dark:text-purple-200">
                <FaMicrosoft className="text-xl" /> .NET
              </li>
              <li className="flex items-center gap-2 px-3 py-1 rounded bg-indigo-200 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200">
                <FaDatabase className="text-xl" /> SQL
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/me.png"
          alt="Francois profile illustration"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
