import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="section-heading">About</h1>
          <div className="section-sub-text">
            {`At BuilderClan, we believe in building solutions that matter. Whether you're a coder, a designer, or a tech enthusiast, you're part of a community that fosters creativity, learning, and growth.`}
          </div>
        </div>
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:border-r border-border-color">
              <div className="about-card border-border-color border-b lg:border-b-0 lg:pb-0 pb-10">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Mission.svg`}
                      alt="mission"
                      width={52}
                      height={38}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4">MISSION</h3>
                  <p>
                     To empower individuals and teams to create impactful tech
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center">
              <div className="about-card lg:pt-0 pt-10">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Vision.svg`}
                      alt="mission"
                      width={34}
                      height={32}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4">VISION</h3>
                  <p>
                    To become a global hub for innovation and collaboration in
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
