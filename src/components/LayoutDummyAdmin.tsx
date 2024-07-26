import FooterComponent from "@/components/FooterComponent";
import NavbarDummyAdminComponent from "./NavbarDummyAdminComponent";

export default function LayoutDummyAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-full grid">
            <div>
                <NavbarDummyAdminComponent />
                {children}
            </div>

            <div className='inline-block self-end'>
                <FooterComponent />
            </div>
        </div>
    )
}