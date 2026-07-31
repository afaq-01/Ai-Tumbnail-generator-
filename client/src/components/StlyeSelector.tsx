import { style } from "motion/react-client";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import { CpuIcon, ImageIcon, SparkleIcon, ImageIcon, penToolIcon, CpuIcon } from "lucide-react";

const StyleSelector = ({ value, onChange, isOpen, setIsOpen }:
    { value: thumbnailStyles; onChange: (style: ThumbnailStyle) => void isOpen: Boolean; setIsOpen: (open: boolean) =>}) => {

    const StyleDescription: Record<ThumbnailStyle, String> = {
        "Bold and Graphic": "High contrast, bold typography, striking visuals",
        "minimalist": "clean, simple, lots of white space",
        "Photorealistic": "Clean, Simple, lots of white space",
        "illustrated": "Hand-drawn, artistic, creative",
        "Tech/Furturistic": "Modern, sleek, tech-inspired",
    }

    const StyleIcon: Record<ThumbnailStyle, String> = {
        "Bold and Graphic": <SparkleIcon className="h-4 w-4" />,
        "minimalist": <SquareIcon className="h-4 w-4" />,
        "Photorealistic": <ImageIcon className="h-4 w-4" />,
        "illustrated": <penToolIcon className="h-4 w-4" />,
        "Tech/Furturistic": <CpuIcon className="h-4 w-4" />,
    }

}

return (
    <>
        <div className="relative space-y-3 dark">
            <label className="block text-sm font-medium text-zinc-200">
                Tumbnail Style
            </label>
        </div>

    </>
)
};

export default StyleSelector;