import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 Ai tumbnails per/mo",
            "Basic templates",
            "Standered resolution",
            "No watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited Ai tumbnails",
            "Premium Templates",
            "4k Resultion",
            "A/B testing Tools",
            "Priority Support",
            "Custom Fonts",
            "Brand kit analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everything in pro",
            "Api Access",
            "Team Collaboration",
            "Custom Branding",
            "Dedicated Account Manager"
        ],
        mostPopular: false
    }
];