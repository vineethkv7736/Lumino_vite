import React from "react";

const Registration = () => {
  return (
    <section>
      <div className="w-full flex p-4 sm:p-10 lg:px-16">
        <div className="w-1/2 flex justify-center">
          <div className="w-1/2 p-5 shadow shadow-neutral-500 reg-bg pb-16">
            <p className="text-lg text-neutral-400">Enter your credentials</p>
            <form className="flex flex-col items-start gap-6 mt-8" action="">
              <input type="text" className="w-full" placeholder="Name" />
              <input type="text" className="w-full" placeholder="Email" />
              <input type="text" className="w-full" placeholder="Phone" />
              <button className="bg-black border border-blue-400 rounded-3xl p-1 px-3">
                Select phase
              </button>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="p-2 bg-green-500 px-5 font-extrabold text-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="text-lg text-neutral-400">
            <span className="font-bold text-white text-5xl">Register Now</span>
            <p className="mt-8">
              Join us at Procidence College of Engineering for an exclusive
              event designed to ignite your entrepreneurial journey :
            </p>
            <ol className="mt-6">
              <li>◦ Keynote address and panel discussion</li>
              <li>◦ Interactive workshops and one-on-one metorig sessions</li>
              <li>
                ◦ Networkig oppertuities with idustry experts ad like-minded
                indivituals
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
