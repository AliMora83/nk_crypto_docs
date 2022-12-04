export default function Footer() {
  return (
    <div className="my-5 flex justify-center w-4xl">
<footer className="p-4 align-middle rounded-lg shadow-md md:flex md:items-center md:justify-between md:p-6 bg-gray-800 content-center space-x-16">
    <span className="text-sm pr-10 text-gray-500 sm:text-center dark:text-gray-400"> All Rights Reserved © 2022 <a href="openmindi.co.za" className="hover:underline">NAMKA™</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

    </div>
  )
}
