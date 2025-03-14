import { Camera, HandPlatter, MapPinned, Paintbrush, Piano, Utensils } from "lucide-react";

export const servicesConfig = [
    {
        name: 'Catering',
        icon: <HandPlatter className="w-16" />, // Render the icon here
    },
    {
        name: 'Decor',
        icon: <Paintbrush className="w-16" />,
    },
    {
        name: 'Food',
        icon: <Utensils className="w-16" />,
    },
    {
        name: 'Photography',
        icon: <Camera className="w-16" />,
    },
    {
        name: 'Qawali',
        icon: <Piano className="w-16" />,
    },
    {
        name: 'Wedding Venues',
        icon: <MapPinned className="w-16" />,
    }
];