export type TimelineEntry = {
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  quote?: string;
  quoteAttribution?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "1978",
    title: "Birth and family",
    location: "El Paso, Texas",
    description:
      "Ben Swann was born here and grew up in nearby Canutillo. He was one of ten children in a homeschooling family. Four of his brothers worked in television, three of them as cameramen, so the media world was familiar to him from childhood.",
    image: "/media/timeline/1978.webp",
    imageAlt: "Ben Swann standing at a lectern in an early-life editorial portrait",
  },
  {
    year: "1993",
    title: "Bachelor's degree at age 15, BYU",
    location: "Brigham Young University",
    description:
      "Ben Swann earned a bachelor's degree in Liberal Arts at age 15. His homeschooling gave him a fast, self-driven academic path, and this early degree became one of the most cited facts in his public profile.",
    image: "/media/timeline/1993.webp",
    imageAlt: "Ben Swann with family on the Brigham Young University campus",
  },
  {
    year: "1994",
    title: "Master's degree at age 16",
    location: "Cal State Dominguez Hills",
    description:
      "One year later, Swann earned a master's degree in History at age 16. The history training gave him research and sourcing skills he later used in his investigative work. Two degrees before most students finish high school became a key part of his public image.",
    image: "/media/timeline/1994.webp",
    imageAlt: "Ben Swann in graduation attire at Cal State Dominguez Hills",
  },
  {
    year: "1994 – 2000",
    title: "Youth pastor",
    location: "Canutillo, Texas & Portland, Oregon",
    description:
      "Before journalism, Swann worked as a youth pastor at a Baptist church in Canutillo and preached at revival events across Texas. He later served as an assistant pastor in Portland, Oregon. He met Jasmine in 1999 and married her shortly before the move. The moral tone of his later reporting carried clear echoes of a preacher.",
    image: "/media/timeline/1994-2000.webp",
    imageAlt: "Ben Swann speaking from a church lectern during his years in ministry",
  },
  {
    year: "1997 – 1998",
    title: "Into television",
    location: "El Paso, Texas",
    description:
      "Encouraged by his brothers, Swann entered TV. He worked briefly at KDBC-TV, then joined KFOX-TV in 1998 as a cameraman. He moved into reporting to support his growing family and eventually became a morning co-anchor and managing editor. Starting behind the camera gave him hands-on skills in filming and editing.",
    image: "/media/timeline/1997-1998.webp",
    imageAlt: "Ben Swann reporting beside a KFOX television camera in El Paso",
  },
  {
    year: "Early 2000s",
    title: "New Mexico reporting",
    location: "Las Cruces, New Mexico",
    description:
      "As a bureau chief, Swann covered deadly child abuse cases. His reporting helped pass the Baby Brianna Act, which changed state law on fatal child abuse. Governor Bill Richardson recognized him for the work.",
    image: "/media/timeline/early-2000s.webp",
    imageAlt: "Ben Swann reporting outside a New Mexico courthouse",
  },
  {
    year: "2002 – 2004",
    title: "Murrow and Emmy awards",
    location: "El Paso, Texas",
    description:
      "Swann won a National Edward R. Murrow Award in 2002 for his coverage of the Alexandra Flores case, one of broadcast journalism's top honors. He also won regional Murrow awards, a Lone Star Emmy in 2005, and a regional Emmy in 2009. He launched the KFOX morning newscast and led it to number one in the market within three years.",
    image: "/media/timeline/2002-2004.webp",
    imageAlt: "Ben Swann at the KFOX morning news desk with journalism awards",
  },
  {
    year: "2008 – 2010",
    title: "Anchor at KTSM-TV",
    location: "El Paso, Texas & Juarez, Mexico",
    description:
      "Swann moved to NBC affiliate KTSM-TV and anchored the evening news for nearly three years, taking it to number one in the market. He crossed daily into Juarez, Mexico to cover the cartel drug war, and also reported for CBN. In December 2010 he left El Paso for a larger market in Cincinnati.",
    image: "/media/timeline/2008-2010.webp",
    imageAlt: "Ben Swann presenting the number-one evening news at KTSM-TV",
  },
  {
    year: "2010 – 2013",
    title: "Fox 19 and the birth of Reality Check",
    location: "Cincinnati, Ohio",
    description:
      "At WXIX-TV, Swann co-anchored and launched Reality Check to cover overlooked issues like the Federal Reserve and warrantless surveillance, drawing millions of YouTube views and featuring a praised 2012 interview with President Obama regarding his drone \"kill list,\". ",
    image: "/media/timeline/2010-2013.webp",
    imageAlt: "Ben Swann at the Fox 19 news desk ",
    quote: "You are the first journalist to get me to discuss this publicly.",
    quoteAttribution:
      "President Obama to Ben, on the drone “kill list” policy, 2012",
  },
  {
    year: "2013",
    title: "Leaving Fox 19 for Truth in Media",
    location: "Chicago, Illinois",
    description:
      "Swann left WXIX-TV and launched a crowdfunded independent venture called Truth in Media at BenSwann.com, continuing Reality Check with a Chicago-based team. Leaving a stable anchor salary for a crowdfunded platform was a real gamble, but it quickly built an audience skeptical of mainstream media.",
    image: "/media/timeline/2013.webp",
    imageAlt: "Ben Swann presenting Truth in Media from an independent studio",
  },
  {
    year: "2013 – 2015",
    title: "First stint at RT America",
    location: "Ferguson, Missouri & Baltimore, Maryland",
    description:
      "Swann appeared regularly on RT America, the Russian state-funded network, as a freelance anchor. During this time he was among the first national journalists to cover Jeffrey Epstein, and he reported from Ferguson, Missouri and Baltimore during the protests after the deaths of Michael Brown and Freddie Gray.",
    image: "/media/timeline/2013-2015.webp",
    imageAlt: "Ben Swann at a national news desk during his RT America reporting",
  },
  {
    year: "2015",
    title: "Chief anchor at CBS46, Atlanta",
    location: "Atlanta, Georgia",
    description:
      "Swann was hired as chief evening news anchor at WGCL-TV (CBS46), a major-market step up. He anchored alongside Sharon Reed and revived his segment as “Reality Check With Ben Swann.”",
    image: "/media/timeline/2015.webp",
    imageAlt: "Ben Swann and Sharon Reed presenting the CBS46 evening news in Atlanta",
  },
  {
    year: "Dec 2016",
    title: "Syria segment",
    location: "Aleppo, Syria",
    description:
      "Swann aired a Reality Check segment questioning the mainstream narrative about Assad's siege of Aleppo. It went viral with over 67,000 shares. The Daily Beast noted it mirrored RT's framing. The segment stayed a point of controversy.",
    image: "/media/timeline/dec-2016.webp",
    imageAlt: "Ben Swann presenting a Reality Check segment about Aleppo",
  },
  {
    year: "Jan 2017",
    title: "Pizzagate segment",
    location: "Washington, D.C.",
    description:
      "Swann aired a segment on the Pizzagate conspiracy, which claimed a Washington, pizza restaurant was tied to a child trafficking, and he called for a police investigation. Although management approved the story, the backlash led CBS46 to suspend him and order the removal of his Truth in Media website and social accounts.",
    image: "/media/timeline/jan-2017.webp",
    imageAlt: "Ben Swann presenting the January 2017 Reality Check segment",
    quote:
      "Media is telling you the entire story is a hoax or fake news, but what does that even mean?",
    quoteAttribution:
      "Ben Swann on CBS46, questioning the debunking of the Pizzagate theory, January 2017",
  },
  {
    year: "Jan 2018",
    title: "Fired from CBS46",
    location: "Atlanta, Georgia",
    description:
      "Swann moved to relaunch Truth in Media using cryptocurrency funding. He told station management he would begin operating it again, and CBS46 fired him. This ended his time in mainstream broadcast television.",
    image: "/media/timeline/jan-2018.webp",
    imageAlt: "Ben Swann in a meeting about the return of Truth in Media",
  },
  {
    year: "2018",
    title: "Truth in Media relaunched",
    location: "Atlanta, Georgia",
    description:
      "One day after the firing, Swann announced the return of Truth in Media, framing it as a stand for editorial freedom funded by Dash cryptocurrency. He launched Isegoria, a blockchain platform whose name means “equality in freedom of speech,” and positioned the site as an uncensored home for deplatformed voices.",
    image: "/media/timeline/2018.webp",
    imageAlt: "Ben Swann announcing the relaunch of Truth in Media and Isegoria",
  },
  {
    year: "Aug 2022",
    title: "Registered as a foreign agent",
    location: "Washington, D.C.",
    description:
      "Swann registered Rebel Media Productions LLC under the Foreign Agents Registration Act, disclosing an agreement with TV Novosti, the Russian government-backed owner of RT, to produce video content. He acknowledged that TV Novosti receives Russian state funding. Axios, Politico, and OpenSecrets covered his foreign-agent status.",
    image: "/media/timeline/aug-2022.webp",
    imageAlt: "Ben Swann at a news desk with a FARA registration timeline graphic",
  },
  {
    year: "2023 – 2024",
    title: "January 6 series",
    location: "Washington, D.C.",
    description:
      "Over six months, Truth in Media published a 10-part series amplifying conspiracy theories about the January 6, 2021 Capitol attack, produced in a polished newsmagazine style. Outlets noted the series did not disclose Swann's concurrent Russian-media work.",
    image: "/media/timeline/2023-2024.webp",
    imageAlt: "Ben Swann presenting the ten-part January 6 series",
  },
  {
    year: "Apr 2024",
    title: "Zelenskyy Unmasked",
    location: "Ukraine",
    description:
      "Swann released a 12-part series portraying Ukrainian President Zelenskyy as corrupt and unworthy of Western support, timed as Congress debated more aid to Ukraine. A marketing firm and paid influencers helped promote it. Guests included Douglas MacGregor and Ron Paul.",
    image: "/media/timeline/apr-2024.webp",
    imageAlt: "Ben Swann presenting the Zelenskyy Unmasked series",
  },
  {
    year: "2024 – 2025",
    title: "Current status",
    location: "Miami, Florida & Atlanta, Georgia",
    description:
      "Swann continues as CEO of Truth in Media, Sovren, and ISE Media Network. He is active on X, keeps residences in Miami and Atlanta, and his FARA registrations remain on file. Media Bias/Fact Check rates Truth in Media as right-leaning and conspiracy-promoting. He retains a dedicated audience but has not returned to mainstream television.",
    image: "/media/timeline/2024-2025.webp",
    imageAlt: "Ben Swann in his Miami office with Truth in Media and Sovren screens",
  },
];

export const pressLogos = [
  { src: "/media/press/el-paso-times.webp", alt: "El Paso Times" },
  { src: "/media/press/fox-news.webp", alt: "Fox News" },
  { src: "/media/press/fox19.webp", alt: "Fox 19" },
  { src: "/media/press/cbs.webp", alt: "CBS" },
  { src: "/media/press/washington-post.webp", alt: "The Washington Post" },
  { src: "/media/press/new-york-times.webp", alt: "The New York Times" },
  { src: "/media/press/the-daily-show.webp", alt: "The Daily Show" },
  { src: "/media/press/wsoc-tv.avif", alt: "WSOC-TV" },
  { src: "/media/press/ftv-live.webp", alt: "FTVLive" },
];

export const gallery = [
  {
    src: "/media/gallery/ben-event-01.webp",
    alt: "Ben Swann in conversation during a live media event",
  },
  {
    src: "/media/gallery/ben-event-02.webp",
    alt: "Ben Swann with guests at a live stage event",
  },
  {
    src: "/media/gallery/ben-event-03.webp",
    alt: "Ben Swann with attendees at a Sons and Daughters event",
  },
  {
    src: "/media/gallery/ben-event-04.webp",
    alt: "Ben Swann with the Sons and Daughters event team",
  },
];





