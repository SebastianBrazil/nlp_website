import LayoutComponent from '@/components/formatting/LayoutComponent'
import React from 'react'

const Page = () => {
    return (
        <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
            <div className="flex justify-center my-10">
                <main className="w-[70%]">
                    <div className="grid">
                        <p className="text-xl font-gilda">This is the About page.</p>
                        <p className="text-xl font-gilda">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </main>
            </div>
        </LayoutComponent>
    )
}

export default Page