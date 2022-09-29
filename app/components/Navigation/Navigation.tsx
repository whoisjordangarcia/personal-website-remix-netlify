import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const navigationLink = [
  { title: "About", href: "#about-me" },
  { title: "Where I've Worked", href: "#where-ive-worked" },
  { title: "Contribution", href: "#contribution" },
  { title: "Contact", href: "#contact-me" },
];

const Navigation = () => (
  <nav className="nav-bar fixed top-0 left-0 z-20 w-full py-2.5 px-2 sm:px-4 md:bg-gray-900">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <a href="/">
        <h1 className="text-xl font-bold text-white ">@jordangarcia</h1>
      </a>
      <div className="flex">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul className="mt-4 flex flex-col rounded-lg p-4  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
          {navigationLink.map((link) => (
            <li className="link-item">
              <a
                href={link.href}
                className="nav-link block rounded bg-blue-700 py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0 md:text-white"
                aria-current="page"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
