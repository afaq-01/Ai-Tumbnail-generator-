import { ChevronDownIcon, CpuIcon, ImageIcon, PenToolIcon, SparkleIcon, SquareIcon } from "lucide-react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";

interface StyleSelectorProps {
    value: ThumbnailStyle;
    onChange: (style: ThumbnailStyle) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const StyleDescription: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "High contrast, bold typography, striking visuals",
    "Minimalist": "Clean, simple, lots of white space",
    "Photorealistic": "Realistic, detailed, lifelike imagery",
    "Illustrated": "Hand-drawn, artistic, creative",
    "Tech/Futuristic": "Modern, sleek, tech-inspired",
};

const StyleIcon: Record<ThumbnailStyle, JSX.Element> = {
    "Bold & Graphic": <SparkleIcon className="h-4 w-4" />,
    "Minimalist": <SquareIcon className="h-4 w-4" />,
    "Photorealistic": <ImageIcon className="h-4 w-4" />,
    "Illustrated": <PenToolIcon className="h-4 w-4" />,
    "Tech/Futuristic": <CpuIcon className="h-4 w-4" />,
};

const StyleSelector = ({ value, onChange, isOpen, setIsOpen }: StyleSelectorProps) => {
    return (
        <div className="relative space-y-3 dark">
            <label className="block text-sm font-medium text-zinc-200">
                Thumbnail Style
            </label>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100"
            >
                <span className="flex items-center gap-2">
                    {StyleIcon[value]}
                    {value}
                </span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 shadow-lg">
                    {thumbnailStyles.map((styleOption) => (
                        <li key={styleOption}>
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(styleOption);
                                    setIsOpen(false);
                                }}
                                className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm text-zinc-100 hover:bg-zinc-700"
                            >
                                <span className="mt-0.5">{StyleIcon[styleOption]}</span>
                                <span>
                                    <span className="block font-medium">{styleOption}</span>
                                    <span className="block text-xs text-zinc-400">{StyleDescription[styleOption]}</span>
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StyleSelector;