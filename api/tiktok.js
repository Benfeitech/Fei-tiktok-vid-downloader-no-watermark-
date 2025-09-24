export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, message: "No URL provided" });
  }

  try {
    const response = await fetch(
      `https://apis.davidcyriltech.my.id/download/tiktokv4?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
