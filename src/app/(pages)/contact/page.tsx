import LayoutComponent from '@/components/formatting/LayoutComponent'
import React from 'react'

const Page = () => {
    return (
        <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
            <div className="flex justify-center my-10">
                <main className="w-[70%]">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-xl font-gilda">Phone number: (209) 298-5489</p>
                            <p className="text-xl font-gilda">Email Address: nlplive@live.com</p>
                            <p className="text-xl font-gilda">Shop Address: Aurora Lane</p>
                        </div>

                        <div>
                            <p className="text-xl font-gilda">Please note that the best way to reach NLP is through phone, either text or call. The next best way would be via email. Additionally, any shop address other than Aurora Lane is NOT the location of NLP.</p>
                        </div>
                    </div>
                </main>
            </div>
        </LayoutComponent>
    )
}

export default Page
