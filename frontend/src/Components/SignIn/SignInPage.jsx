import { Outlet } from "react-router-dom";

function SignInPage() {
  return (
    <>
      <main className="flex flex-col bg-white h-screen overflow-hidden">
        <header className="grid grid-cols-2 grid-rows-1 relative w-full bg-sky-900 h-1/2 max-md:h-1/3">
          {/* Circle Half Inside and Half Outside */}
          <div className="relative col-span-1 flex items-center justify-start">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 rounded-full w-96 h-96 max-md:w-64 max-md:h-64" />
          </div>

          {/* Second Circle, Positioned Half Inside and Half Outside */}
          <div className="relative col-span-1 flex items-center justify-end">
            <div className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 rounded-full w-64 h-64 max-md:w-48 max-md:h-48" />
          </div>
        </header>

        <section className="flex flex-col w-full bg-lime-400 h-1/2 max-md:h-2/3 max-md:px-5">
          <div className="flex w-full h-full">
            <div className="flex flex-col w-2/3 max-md:w-full items-center justify-center">
              {/* Your content here */}
            </div>
            <aside className="flex w-1/3 max-md:w-full items-center justify-center">
              <div className="flex shrink-0 bg-lime-500 bg-opacity-50 w-4/5 h-full rounded-full" />
            </aside>
          </div>
        </section>
      </main>

      {/* Centering SignInForm */}
      <div className="flex justify-center items-center absolute rounded-lg  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Outlet />
      </div>
    </>
  );
}

export default SignInPage;
