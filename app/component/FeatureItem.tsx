import Image from "next/image";

 type FeatureItem = {
  title: string;
  icon: string;

  description: string;
}
const FeatureItem = ({title,icon,description}: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
     <div className="rounded-full p-4 lg:p-7 bg-green-400"> 
<Image
        src={icon}
        alt='map'
        width={28}
        height={28} />

     </div>
     <h2 className="bold-20 lg:bold mt-5 capitalize"> 
{title}

     </h2>
     <p className='regular-16 mt-5 bg-white/80'>{description}</p>
    </li>
  )
}

export default FeatureItem
