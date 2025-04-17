import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaMicrosoft,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center pt-8 pb-0 md:pb-0 text-center bg-sky-50 dark:bg-gray-900 overflow-hidden min-h-[340px] md:min-h-0">
      {/* Text above image on mobile, right on desktop */}
      <div className="z-10 relative w-full md:w-1/2 flex flex-col items-center md:items-start order-1 md:order-2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-2 text-center md:text-left w-full">
          Hi! I'm Francois
        </h1>
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="flex flex-wrap items-center gap-2 text-xl text-gray-600 dark:text-gray-300 text-center md:text-left w-full justify-center md:justify-start">
            I <FaHeart className="fill-red-700" /> building for the web, using:
          </div>
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-lg font-medium m-0 p-0 list-none w-full mt-2">
            <li className="flex items-center gap-2 px-3 py-1 rounded bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
              <FaReact className="text-xl" /> React
            </li>
            <li className="flex items-center gap-2 px-3 py-1 rounded bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200">
              <FaJsSquare className="text-xl" /> TypeScript
            </li>
            <li className="flex items-center gap-2 px-3 py-1 rounded bg-pink-50 dark:bg-pink-900 text-pink-700 dark:text-pink-200">
              <FaCss3Alt className="text-xl" /> CSS
            </li>
            <li className="flex items-center gap-2 px-3 py-1 rounded bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-200">
              <FaMicrosoft className="text-xl" /> .NET
            </li>
            <li className="flex items-center gap-2 px-3 py-1 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200">
              <FaDatabase className="text-xl" /> SQL
            </li>
          </ul>
        </div>
      </div>
      {/* Image on left (desktop), below text on mobile, anchored bottom on both */}
      <div className="w-full flex justify-center md:justify-center md:w-1/2 order-2 md:order-1 relative md:h-[300px]">
        <div className="flex justify-center w-full md:w-auto md:absolute md:inset-x-0 md:bottom-0">
          <Image
            src="/me.png"
            alt="Francois profile illustration"
            width={300}
            height={300}
            priority
            className="border-none bg-transparent shadow-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
