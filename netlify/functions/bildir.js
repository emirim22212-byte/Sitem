exports.handler = async (event) => {
  const { lat, lon } = event.queryStringParameters || {};
  const harita = `https://maps.google.com/?q=${lat},${lon}`;
  await fetch("https://ntfy.sh/emir-site-7x9qz2", {
    method: "POST",
    body: `Konum paylaşıldı: ${harita}`
  });
  return { statusCode: 200, body: "ok" };
};
