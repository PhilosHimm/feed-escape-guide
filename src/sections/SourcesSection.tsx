import React from "react";

const sources = [
  {
    desc: "Unsplash placeholder images used with CC0 license:",
    links: [
      {
        label: "Photo by Agê Barros (glitchy phone feed)",
        url: "https://unsplash.com/photos/photo-1488590528505-98d2b5aba04b",
      },
      {
        label: "Photo by Vishnu Mohanan (algorithm diagram)",
        url: "https://unsplash.com/photos/photo-1518770660439-4636190af475",
      },
      {
        label: "Photo by Chris Ried (fake news infographic)",
        url: "https://unsplash.com/photos/photo-1487058792275-0ad4aaf24ca7",
      },
      {
        label: "Photo by Marvin Meyer (mental health infographic)",
        url: "https://unsplash.com/photos/photo-1605810230434-7631ac76ec81",
      },
      {
        label: "Photo by Markus Spiske (privacy lock)",
        url: "https://unsplash.com/photos/photo-1526374965328-7f61d4dc18c5",
      },
    ],
  },
  {
    desc: "External resources cited:",
    links: [
      { label: "Center for Humane Tech", url: "https://www.humanetech.com/" },
      { label: "MediaSmarts", url: "https://mediasmarts.ca" },
      { label: "News Literacy Project", url: "https://newslit.org" },
      { label: "Privacy Badger", url: "https://privacybadger.org" },
      { label: "CBC Reset Podcast", url: "https://www.cbc.ca/radio/podcastnews/reset" },
      { label: "Stolen Focus – Johann Hari", url: "https://johnhari.com/stolen-focus/" },
    ],
  },
];

const SourcesSection = () => (
  <section id="sources" className="py-16 bg-white border-t border-purpleblue-100">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold font-playfair mb-3 text-purpleblue-600 flex items-center gap-2">
        Sources & Credits
      </h2>
      <ul className="mt-4 space-y-5">
        {sources.map((src, idx) => (
          <li key={idx}>
            <div className="mb-2 text-base text-muted-foreground">{src.desc}</div>
            <ul className="pl-3 list-disc space-y-1">
              {src.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xs text-muted-foreground">All images used under Creative Commons or with consent. Please report any content issues to the course team.</div>
    </div>
  </section>
);

export default SourcesSection;
