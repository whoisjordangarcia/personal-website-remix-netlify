import SubHeading from "../shared/SubHeading/SubHeading";

const ContactMe = () => (
  <section id="contact-me" className="mx-auto max-w-7xl lg:w-full">
    <div className="pb-8 sm:pb-16 md:pb-20  lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="Contact Me" />
        <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          i'll try my best to get back to you.
        </p>

        <a
          href="mailto:arickho@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="mt-6 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-rose-400">
            Email Me
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default ContactMe;
