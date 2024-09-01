import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://img.freepik.com/premium-vector/drawing-boy-riding-scooter-with-box-back_1023984-24439.jpg?uid=R157107764&ga=GA1.1.1243745038.1721478049&semt=ais_hybrid"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      RapidRunner: Speed and Reliability, Delivered
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Time is precious, and so is your cargo. That's why RapidRunner is here. We're more than just a delivery service; we're your partners in speed and efficiency. Our commitment to excellence drives us to deliver your packages with unmatched urgency and care.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Leveraging advanced technology and a dedicated team, we ensure your shipments reach their destination swiftly and securely. Whether it's a last-minute rush or a scheduled delivery, we've got you covered. Experience the RapidRunner difference – a blend of speed, reliability, and exceptional customer service.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}