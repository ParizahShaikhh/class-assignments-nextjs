import Image from "next/image"; 

const Hero: React.FC = () => {
    return  (
        <div className="min-h-screen flex flex-col items-center justify-center py-2 text-black">
            <Image src="/images/profile-pic.jpeg" alt="profile-picture" width={200} height={200} className="profile-pic border-[#295F98] border-spacing-96 rounded-full mx-40"></Image>
        <h1 className="text-4xl font-bold justify-center flex reveal-text">Hey!!<span>P</span><span>a</span><span>r</span><span>i</span><span>z</span><span>a</span><span>h</span> <span>S</span><span>h</span><span>a</span><span>i</span><span>k</span><span>h</span></h1>
        <p className="text-lg text-center justify-center flex max-w-md">A passionate web developer exploring the world of coding and creativity. This is a simple Next.js application for practice.</p>
        <br /><button className="rounded bg-[#E1D7C6] text-black  mx-10 ">Check Out My Work</button>
        </div>
    )
};

export default Hero;