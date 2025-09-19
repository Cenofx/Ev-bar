// Inisialisasi OneSignal
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "cc7451e9-84e9-4e05-abf5-6342fbf2fac7", // ganti dengan App ID dari OneSignal
  });
});

// Fungsi konversi link YouTube ke embed
function getEmbedUrl(url) {
  let videoId = null;
  try {
    let u = new URL(url);

    if (u.hostname === "youtu.be") {
      // contoh: https://youtu.be/dQw4w9WgXcQ
      videoId = u.pathname.slice(1);
    } else if (u.hostname.includes("youtube.com")) {
      // contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ
      videoId = u.searchParams.get("v");
    }
  } catch (e) {
    return null;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

// Event tombol Play
document.getElementById("play-btn").addEventListener("click", function () {
  const link = document.getElementById("yt-link").value.trim();
  const embedUrl = getEmbedUrl(link);

  if (embedUrl) {
    document.getElementById("yt-player").src = embedUrl;
  } else {
    alert("Masukkan link YouTube yang benar!");
  }
});

// Event tombol Notifikasi
document.getElementById("notif-btn").addEventListener("click", function () {
  OneSignal.showSlidedownPrompt();
});
