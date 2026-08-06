import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colorSchemes, dummyThumbnails, type AspectRatio, type IThumbnail, type ThumbnailStyle } from "../assets/assets";
import SoftBackdrop from "../components/Softbackdrop";
import AspectRatioSelector from "../components/Aspectratioselector";
import StyleSelector from "../components/StlyeSelector";
import ColorSchemeSelector from "../components/colorSchemeSelector";
import PreviewPanle from "../components/previewPanel";


const Generate = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [additionalDetails, setAdditionalDetail] = useState('')

    const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null)
    const [loading, setLoading] = useState(false)

    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9')
    const [colorScheme, setColorScheme] = useState<string>(colorSchemes[0].id)
    const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic')

    const [styleDropdownOpen, setStyleDropdownOpen] = useState(false)

    const handle_generate = async () => {

    }

    const fetchThumbnail = async () => {
        if (id) {
            const found: any = dummyThumbnails.find((t) => t._id === id);
            if (!found) {
                setLoading(false);
                return;
            }
            setThumbnail(found)
            setAdditionalDetail(found.user_prompt || '')
            setTitle(found.title)
            setAspectRatio(found.aspect_ratio || '16:9')
            setColorScheme(found.color_scheme || colorSchemes[0].id)
            setStyle(found.style)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            fetchThumbnail();
        }
    }, [id])

    return (
        <>
            <SoftBackdrop />
            <div className="pt-24 min-h-screen">
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
                    <div className="grid lg:grid-cols-[400px_1fr] gap-8">
                        {/* left panel*/}
                        <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
                            <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-100">Create your thumbnail</h2>
                                    <p className="text-small text-zinc-100">Describe your vision and let AI bring it into life</p>
                                </div>
                                <div className="space-y-5">
                                    {/*Title input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">Title or Topic</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            maxLength={100}
                                            placeholder="e.g 10 tips for better sleep"
                                            className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        />
                                        <div className="flex justify-end">
                                            <span>{title.length}/100</span>
                                        </div>
                                    </div>
                                    {/*AspectRatioSelector */}
                                    <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio} />
                                    {/*Styleselector */}
                                    <StyleSelector
                                        value={style}
                                        onChange={setStyle}
                                        isOpen={styleDropdownOpen}
                                        setIsOpen={setStyleDropdownOpen}
                                    />
                                    {/*Colorschemaselector */}
                                    <ColorSchemeSelector value={colorScheme} onChange={setColorScheme} />

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Additional Prompt
                                            <span className="text-zinc-400 text-xs"> (Optional)</span>
                                        </label>
                                        <textarea
                                            value={additionalDetails}
                                            onChange={(e) => setAdditionalDetail(e.target.value)}
                                            rows={3}
                                            placeholder="Add any specific element, mood or style preferences..."
                                            className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                                        />
                                    </div>

                                </div>
                                {/*Button */}
                                {
                                    !id && (
                                        <button
                                            onClick={handle_generate}
                                            disabled={loading}
                                            className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-gradient-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {loading ? 'Generating...' : 'Generate Thumbnail'}
                                        </button>
                                    )
                                }
                            </div>
                        </div>

                        {/* Right panel */}
                        <div>
                            <div className="p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
                                <h2>preview </h2>
                                <PreviewPanle thumbnail={thumbnail} isloading={loading} aspectRatio={aspectRatio} />
                            </div>
                        </div>

                    </div>

                </main>

            </div>

        </>
    )
};

export default Generate;