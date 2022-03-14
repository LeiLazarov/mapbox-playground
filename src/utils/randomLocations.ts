
type randomLocationsProps = {
    count: number
}

export const randomLocations = ({ count }: randomLocationsProps) => {
    const latlngs = [];
    for (let i = 0; i < count; i++) {
        latlngs.push({
            type: "Feature" as const,
            properties: { 
                id: `test${i}`,
                title: `test${i}`, 
                description: "Fizz is building his IT world!",
                address: "1 Oxford St",
                icon: "inspace-marker"
            }, 
            geometry: { 
                type: "Point" as const, 
                coordinates: [150.7 + Math.random() * 0.55, -33.6 - Math.random() * 0.35]
            }
        });
    }

    return latlngs;
}


