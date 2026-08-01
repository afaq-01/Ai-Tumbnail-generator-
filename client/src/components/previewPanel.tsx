import { div } from "motion/react-client";
import type { AspectRatio, IThumbnail } from "../assets/assets"
import { DownloadIcon, Loader2Icon } from "lucide-react";


const PreviewPanle = ({ thumbnail, isloading, aspectRatio }: { thumbnail: IThumbnail, isloading: boolean; aspectRation: AspectRatio }) => {
    const aspectClasses = {
        '16:9': 'aspect-video',
        '1:1': 'aspect-square',
        '9:16': 'aspect-[9/16]',

    } as Record<AspectRatio, String>
    return (
        <>
            <div className="relative max-auto w-full  max-w-2xl">
                <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
                    {/*Loading state */}
                    {isloading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black-25">
                            <Loader2Icon className="size-8 animate-spin text-zinc-400" />
                            <div className="text-center">
                                <p className="text-sm font-medium text-zinc-200">Ai is creating your tumbnail...</p>
                                <p className="mt-1 text-xs text-zinc-400">This may take 10-20 seconds</p>
                            </div>
                        </div>
                    )}

                    {/*Image preview */}
                    {!isloading && thumbnail?.image_url && (
                        <div className="group relative h-full w-full">
                            <img src={thumbnail?.image_url} alt={thumbnail.title} className="h-full w-full object-cover" />
                            <div className="absalute insert-0 flex items-end justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
                                <button type="button" className="mb-6 flex items-center  gap-2 rounded-md  px-5 py-2.5 text-xs font-meduim transition  bg-white/30 ring-2 ring-white/40 backdrop-blur  hover:scale-105 active:scale-95 ">
                                    <DownloadIcon className="size-4" />
                                    Download thumbnail
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default PreviewPanle