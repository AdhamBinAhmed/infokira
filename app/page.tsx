export default function Home() {
  return (
    <>
      <div className="container">

        {/* Logo */}
        <img src="/logo.png" alt="KIRA Logo" className="logo" />

        <h1>KiraDecorations</h1>
        <p className="tagline">
          ✨ Creative designs for your space! <br />
          Let’s make it beautiful together ✨
        </p>

        {/* Links */}
        <a href="https://wa.me/+201112801502" className="link-btn">WhatsApp</a>
        <a href="https://www.instagram.com/kira.decoration/" className="link-btn">Instagram</a>
        <a href="https://www.tiktok.com/@kira.decoration4" className="link-btn">TikTok</a>
        <a href="https://www.facebook.com/decorkira" className="link-btn">Facebook</a>
        <a href="https://maps.app.goo.gl/PRAx1nZA2jNb678h7?g_st=aw" className="link-btn">Our Location</a>

      </div>

      {/* Call Section */}
      <div className="call-us-bottom">
        <span>📞 Call Us</span>
        <a href="tel:+201112801502">+20 1112801502</a>
      </div>
    </>
  )
}