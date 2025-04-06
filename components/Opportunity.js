import Image from "next/image";

export default function OpportunitySection() {
  return (
    <section className="section" id="opportunity">
      <div className="container mx-auto">
        <div className="mb-14">
          <h1 className="section-heading">Opportunity</h1>
          <div className="section-sub-text">{` What We Do`}</div>
        </div>
        <div className="opportunity-content p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 flex justify-center">
              <div className="opportunity-card">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Community.svg`}
                      alt="mission"
                      width={36}
                      height={36}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4"> Community Projects</h3>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center">
              <div className="opportunity-card">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Workshops.svg`}
                      alt="mission"
                      width={39}
                      height={36}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4">Workshops & Events</h3>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center">
              <div className="opportunity-card">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Innovate.svg`}
                      alt="mission"
                      width={39}
                      height={36}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4">Innovate</h3>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center">
              <div className="opportunity-card">
                <div className="icon-wrapper mb-6">
                  <div className="icon-inner-wrapper ">
                    <Image
                      src={`/Network.svg`}
                      alt="mission"
                      width={57}
                      height={52}
                    />
                  </div>
                </div>
                <div className="about-card-content text-center">
                  <h3 className="mb-4"> Networking</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
