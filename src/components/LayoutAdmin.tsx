import FooterComponent from "@/components/FooterComponent";
import NavbarAdminComponent from "./NavbarAdminComponent";

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-full grid">
            <div>
                <NavbarAdminComponent />
                {children}
            </div>

            <div className='inline-block self-end'>
                <FooterComponent />
            </div>
        </div>
    )
}