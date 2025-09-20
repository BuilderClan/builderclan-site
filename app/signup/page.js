import Button from "@/components/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center h-screen md:px-8">
        <div className="max-w-lg mx-auto flex flex-col justify-between text-center py-16">
          <div>
            <div className="pb-6">
              <Image
                src="https://github.com/BuilderClan.png"
                width={150}
                height={150}
                alt="BuilderClan"
                className="mx-auto"
              />
            </div>
            <h3 className="text-[#caff33] text-4xl font-semibold sm:text-5xl">
              Page not found
            </h3>
            <p className="text-white mt-3">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
          </div>

          {/* Button pinned lower */}
          <Button
            content="Go Back Home"
            active
            href="/"
            className="mt-8 px-4 py-2 text-black rounded transition"
          />
        </div>
      </div>
    </main>
  );
}
