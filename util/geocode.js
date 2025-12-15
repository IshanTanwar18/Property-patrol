const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

export async function geocodeAddress(address) {
  // 1️⃣ Try MapTiler (best free accuracy)
  try {
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${MAPTILER_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data?.features?.length > 0) {
      const [lon, lat] = data.features[0].center;
      return { lat, lon, source: "maptiler" };
    }
  } catch (err) {
    console.log("MapTiler error:", err);
  }

  // 2️⃣ Fallback → Nominatim
  try {
    const nUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    const nRes = await fetch(nUrl, {
      headers: { "User-Agent": "YourApp/1.0" },
    });
    const nData = await nRes.json();

    if (nData?.length > 0) {
      return {
        lat: parseFloat(nData[0].lat),
        lon: parseFloat(nData[0].lon),
        source: "nominatim",
      };
    }
  } catch (err) {
    console.log("Nominatim error:", err);
  }

  return null;
}
