const Index = () => (
  <div className="relative overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl">
      <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              Hello!
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <span className="block text-rose-600 xl:inline">
                I'm Jordan Garcia
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Engineering manager at{" "}
              <a className="color-rose-600" href="https://invitae.com">
                @invitae.com
              </a>
              . An aussie "aw-see" (\ä-s\) currently residing in miami.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full rounded-xl border border-transparent bg-rose-600 px-8 py-3 text-base font-medium text-white hover:bg-rose-700 md:py-4 md:px-10 md:text-lg"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="https://www.jordangarcia.me/static/profile_photo.0983212-a55c887d58fbf09542a9ce8db579a8b8.png"
        alt=""
      />
    </div>
  </div>
);

export default Index;
