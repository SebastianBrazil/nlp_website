import LayoutComponent from '@/components/LayoutComponent'
import React from 'react'

const notFound = () => {
    return (
        <div>
            <LayoutComponent isHero={false} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
                <div className="flex justify-center my-10">
                    <main className="w-[70%]">
                        <div className="grid mt-20">
                            <p className="text-6xl text-center font-gilda">404 NOT FOUND</p>
                            <p className="text-2xl text-center font-gilda">The page you are looking for was not found.</p>
                        </div>
                    </main>
                </div>
            </LayoutComponent>
        </div>
    )
}

export default notFound
