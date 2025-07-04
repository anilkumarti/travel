import Image from "next/image";
const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div
        className="padding-container max-container
    w-full pb-24
    "
      >
        <Image src="/camp.svg" alt="Camping icon" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500">
          We Are Here For U
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10"> </div>
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
          Guide You to Easy Path{" "}
        </h2>
        <p className="regular-16 text-gray-400 xl:max-w-[520px]">
          "A camping guide ensures a safe, enjoyable trip with expert tips on
          gear, campsite selection, fire safety, and meal planning. Perfect for
          beginners and seasoned campers alike—explore confidently!"{" "}
        </p>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="Boat on water"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div
          className="absolute flex bg-white py-8 pl-5  pr-7 gap-3 rounded-3xl
        border shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="Meter icon"
            width={22}
            height={158} 
            className="h-full w-auto"/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-400"> Destination </p>
                <p className="bold-16 text-green-400"> 48 min</p>
              </div>
              <p className="bold-20 mt-2">Mugwari camp house </p>
            </div>
   
            <div className="flex w-full flex-col mt-3">
            
                <p className="regular-16 text-gray-400"> Start Track </p>
          
             
              <h4 className="bold-20 mt-2 whitespace-nowrap">Shivpurva cantt </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
