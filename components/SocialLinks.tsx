const links = [
  {
    name: "WhatsApp",
    url: "https://wa.me/+201112801502",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kira.decoration/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@kira.decoration4",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/decorkira",
  },
  {
    name: "Location",
    url: "https://maps.app.goo.gl/PRAx1nZA2jNb678h7?g_st=aw",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="bg-white hover:bg-purple-500 hover:text-white text-gray-800 py-3 rounded-xl shadow-md transition font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}