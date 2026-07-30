import { RectangleHorizontal, Square, RectangleVertical } from "lucide-react";
import { aspectRatios, type AspectRatio } from "../assets/assets";

const iconMap: Record<AspectRatio, JSX.Element> = {
    '16:9': <RectangleHorizontal />,
    '1:1': <Square />,
    '9:16': <RectangleVertical />,
    // ...add an entry for every value in AspectRatio
};

const AspectRatioSelector = ({
    value,
    onChange,
}: {
    value: AspectRatio;
    onChange: (value: AspectRatio) => void;
}) => {
    return (
        <div className="space-y-3 dark">
            <label className="block text-sm font-medium text-zinc-200">
                Aspect Ratio
            </label>
            <div className="flex flex-wrap gap-2">
                {aspectRatios.map((ratio) => {
                    const selected = value === ratio;

                    return (
                        <button
                            key={ratio}
                            type="button"
                            onClick={() => onChange(ratio)}
                            className={`flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10 ${
                                selected ? 'bg-white/10' : 'hover:bg-white/6'
                            }`}
                        >
                            {iconMap[ratio]}
                            <span className="tracking-widest">{ratio}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default AspectRatioSelector;