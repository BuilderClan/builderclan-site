import Button from "./Button";

export default function CTA() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="cta-wrapper flex justify-between items-center">
          <div>
            <h1 className="section-heading">
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
