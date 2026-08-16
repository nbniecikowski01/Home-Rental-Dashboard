export async function getWeather(lat: number, lng: number) 
{
    try 
    {
        const res = await fetch
        (
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
        );
        if (!res.ok)
        {
            throw new Error("Failed tp fetch weather");
        }
        const data = await res.json();
        return data.current_weather;
    }
    catch (error)
    {
        console.error("Weather fetch error:", error);
        return null;
    }
}