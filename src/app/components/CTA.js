import Button from "./Button";

export default function CTA() {
  return (
    <section className="section px-4 py-8">
      <div className="container mx-auto">
        <div className="cta-wrapper flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h1 className="section-heading text-2xl md:text-4xl font-bold">
              <span className="text-white">Join the</span> Clan!
            </h1>
            <div className="section-sub-text">{`Visit our website.`}</div>
          </div>
          <Button content="Join Discord" active />
        </div>
      </div>
    </section>
  );
}
