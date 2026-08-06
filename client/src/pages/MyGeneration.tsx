import { useEffect, useState } from "react";
import SoftBackdrop from "../components/Softbackdrop";
import type { dummyThumbnails, IThumbnail } from "../assets/assets";
import { div } from "motion/react-client";

const MyGeneration = () => {
    const [thumbnails, setThumbnails] = useState<IThumbnail>([])
    const [Loading, setLoading] = useState(true)

    const fetchthumbnails = async () => {
        setThumbnails(dummyThumbnails as unknown as IThumbnail[])
        // setLoading(false)
    }

    const handleDownload = () => {
        window.open(image_url, '_blank')
    }

    useEffect(() => {
        fetchthumbnails()
    }, [])


    return (
        <>
            <SoftBackdrop />
            <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
                {/*HEADERS */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-zinc-200">My-Generations</h1>
                    <p className="text-sm text-zinc-400 mt-1">View and mange all your Ai generated thumbnails</p>
                </div>

                {/*Loading */}
                {Loading && (
                    <div className="grid grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="rounded-2xl bg-white/6 border border-white/10 animate-pluse h-[260px]">

                            </div>
                        ))}
                    </div>
                )}

                {/*EMPTY STATE */}

                {!Loading && thumbnails.lenght === 0 && (
                    <div className="text-center py-24">
                        <h3 className="text-lg font-semiBold text-zinc-200">No thumbnails yet</h3>
                        <p className="text-">Generate your first thumbnail to see it here </p>

                    </div>
                )}

            </div>
        </>
    )
};

export default MyGeneration;