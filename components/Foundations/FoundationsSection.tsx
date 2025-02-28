import Image from "next/image";

const FoundationsSection = () => {
	return <div className="w-full flex">
		<Image src="/Assets/Images/education-lebanon.jpeg" width={1920} height={1080} alt="Foundations" />
		<Image src="/Assets/Images/foundation.jpg" width={1920} height={1080} alt="Foundations" />
		<Image src="/Assets/Images/humanitarian-aid.jpg" width={1920} height={1080} alt="Foundations" />
	</div>;
};

export default FoundationsSection;