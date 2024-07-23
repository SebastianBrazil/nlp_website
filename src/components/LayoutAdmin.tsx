import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "./NavbarComponent";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-full grid">
            <div>
                <NavbarComponent />
                {children}
            </div>

            <div className='inline-block self-end'>
                <FooterComponent />
            </div>
        </div>
    )
}