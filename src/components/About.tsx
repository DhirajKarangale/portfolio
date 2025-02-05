import { personalData } from "../../utils/data/personal-data";

export default function About() {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        Who I am?
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg"
                        dangerouslySetInnerHTML={{
                            __html: personalData.description.replace(
                                '100K+ downloads',
                                `<a href="https://play.google.com/store/apps/details?id=com.playhobo.idlecryptominer" target="_blank" style="color: #16f2b3; font-weight: bold1; font-style: italic1; text-decoration: underline;">100K+ downloads</a>`
                            ).replace(
                                '10K+ downloads',
                                `<a href="https://play.google.com/store/apps/details?id=com.blackwonder3d.thunderworld" target="_blank" style="color: #16f2b3; font-weight: bold1; font-style: italic1; text-decoration: underline;">10K+ downloads</a>`
                            )
                        }}
                    />
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src={personalData.profile}
                        width={280}
                        height={280}
                        alt="DK"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}