import type { Weather } from "../types/weather";

export const analyzeOpenWeatherDayHelper = (hourlyData: Weather['list']): string => {
    if (!hourlyData || hourlyData.length === 0) return "unknown";

    let cloudSum = 0;
    let maxPop = 0;
    const totalHours = hourlyData.length;

    for (const item of hourlyData) {
        cloudSum += item.clouds?.all ?? 0;
        if ((item.pop ?? 0) > maxPop) maxPop = item.pop ?? 0;
    }

    const avgCloud = cloudSum / totalHours;
    const maxPopPercent = maxPop * 100;

    if (maxPopPercent >= 50) return "rainy";
    if (avgCloud <= 20) return "sunny";
    if (avgCloud <= 50) return "partly cloudy";

    return "mostly cloudy";
}
