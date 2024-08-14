import NavbarComponent from "./NavbarComponent";
import HeroComponent from "./HeroComponent";
import FooterComponent from "./FooterComponent";

export default function LayoutComponent({ children, passState, heroTags, heroSrc, heroAlt, isHero }: { children: React.ReactNode, passState: string, heroTags: string, heroSrc: string, heroAlt: string, isHero: boolean }) {
    return (
        <div className="min-h-screen h-full grid">
            <div>
                <NavbarComponent checkState={passState} />

                {
                    isHero && <HeroComponent classTags={heroTags} src={heroSrc} alt={heroAlt} />
                }

                {children}
            </div>

            <div className='inline-block self-end'>
                <FooterComponent />
            </div>
        </div>
    )
}