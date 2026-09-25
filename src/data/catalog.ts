export type SkillId = "setups" | "lifesteal" | "bots" | "configs" | "builds";

export type Skill = {
  id: SkillId;
  label: string;
  title: string
  blurb: string;
};

export type Product = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  free?: boolean;
  image: string;
  skills: SkillId[];
  rating?: { stars: number; count: number };
  salesLabel: string;
  featured?: boolean;
  href: string;
  features: string[];
};

export type Review = {
  id: string;
  quote: string;
  name: string;
  role: string;
  product: string;
  stars: number;
};

const BBB = "https://builtbybit.com/creators/habibi-studios.490471/";
const BEYOND = "https://builtbybit.com/resources/beyond-survival-setup-habibi-studios.96782/";
const BAZAAR = "https://builtbybit.com/resources/bazzar-multipurpose-bot-habibi-studios.102176/";

export const SKILLS: Skill[] = [
  {
    id: "setups",
    label: "SMP setups",
    title: "Survival & SMP",
    blurb: "Full Paper 1.21 setups with spawn, RTP, menus, economy, and quests — drop in and go live.",
  },
  {
    id: "lifesteal",
    label: "Lifesteal",
    title: "Lifesteal systems",
    blurb: "Heart-steal SMP packs with crates, warzone, ranks, and 50+ features already wired.",
  },
  {
    id: "bots",
    label: "Discord bots",
    title: "Discord bots",
    blurb: "Moderation, tickets, music, hosting, and store bots — source included, branding yours.",
  },
  {
    id: "configs",
    label: "Configs",
    title: "Plugin configs",
    blurb: "TAB, scoreboards, kits, shops, EssentialsX, holograms, and DiscordSRV alerts with gradients.",
  },
  {
    id: "builds",
    label: "Builds",
    title: "Spawns & builds",
    blurb: "Custom spawns with crates, shops, RTP portals, AFK zones, and jail systems.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "beyond-survival",
    title: "Beyond Survival Setup",
    tagline: "Optimisation · DiscordSRV · PvP arena · Quests",
    description:
      "A Paper 1.21 survival network in a box: beautiful spawn, RTP, DiscordSRV chat, leaderboards, custom menus, PvP arena, and quests. Tested on survival.habibidevolopment.com.",
    price: "$9.99",
    image: "/products/beyond.jpg",
    skills: ["setups"],
    rating: { stars: 5, count: 4 },
    salesLabel: "11 purchases",
    featured: true,
    href: BEYOND,
    features: [
      "Beautiful optimized spawn",
      "Random teleportation",
      "DiscordSRV integration & custom alerts",
      "Leaderboards and GUI menus",
      "PvP arena and quests",
      "Paper 1.21.x",
    ],
  },
  {
    id: "lifesteal-premium",
    title: "Custom Lifesteal Premium SMP",
    tagline: "50+ features · fully configured · plug-and-play",
    description:
      "Premium lifesteal SMP with hearts, crates, shops, and combat systems already balanced. Drop the pack on Paper and open the doors.",
    price: "$14.99",
    image: "/products/lifesteal.jpg",
    skills: ["lifesteal", "setups"],
    rating: { stars: 5, count: 1 },
    salesLabel: "3 purchases",
    featured: true,
    href: BBB,
    features: [
      "50+ preconfigured features",
      "Heart steal combat",
      "Crates, shops, and ranks",
      "Plug-and-play Paper setup",
    ],
  },
  {
    id: "solar-node",
    title: "Solar Node Hosting Bot",
    tagline: "Powerful, modern, all-in-one hosting bot",
    description:
      "A hosting control bot with emoji-first UI for spinning up and managing game nodes from Discord. Built for studios that sell or run servers.",
    price: "$19.99",
    image: "/products/solar.jpg",
    skills: ["bots"],
    salesLabel: "1 purchase",
    featured: true,
    href: BBB,
    features: [
      "All-in-one hosting controls",
      "Emoji-driven modern UI",
      "Node status and power actions",
      "Ready for studio branding",
    ],
  },
  {
    id: "dynamic-survival",
    title: "Dynamic Survival Setup",
    tagline: "Modified spawn · custom config · optimization",
    description:
      "A survival pack with a rewritten spawn, custom configs, and performance passes so the server feels fast on first join.",
    price: "$19.99",
    image: "/products/dynamic.jpg",
    skills: ["setups"],
    salesLabel: "2 purchases",
    href: BBB,
    features: ["Modified custom spawn", "Hand-tuned configs", "Optimization pass", "Survival-ready on Paper"],
  },
  {
    id: "survival-premium",
    title: "Custom Survival Premium Setup",
    tagline: "50+ features · fully configured · plug-and-play",
    description:
      "A complete survival SMP stack: economy, kits, claims-friendly defaults, and a premium spawn — no weekend of YAML required.",
    price: "$14.99",
    image: "/products/survival.jpg",
    skills: ["setups"],
    salesLabel: "4 purchases",
    href: BBB,
    features: ["50+ features configured", "Premium survival spawn", "Economy and kits", "Plug-and-play install"],
  },
  {
    id: "moderation-bot",
    title: "Habibi Moderation Source",
    tagline: "Tickets · utility · fun · music",
    description:
      "All-in-one Discord bot on discord.js v14 with MongoDB, Lavalink, Components V2 UI, and 22 feature systems. Free installation with your branding.",
    price: "$14.99",
    image: "/products/moderation.jpg",
    skills: ["bots"],
    salesLabel: "4 purchases",
    href: BBB,
    features: [
      "discord.js v14.21 + MongoDB + Lavalink",
      "22 feature systems",
      "Tickets, moderation, music, fun",
      "Components V2 UI",
      "Install with your branding",
    ],
  },
  {
    id: "bazaar-bot",
    title: "Bazaar Multipurpose Bot",
    tagline: "Moderation · giveaway · embed builder",
    description:
      "ForgeScript store bot for digital products: catalog, payments, voucher generator, giveaways, welcome banners, and a full moderation suite.",
    price: "$4.99",
    image: "/products/bazaar.jpg",
    skills: ["bots"],
    salesLabel: "New",
    href: BAZAAR,
    features: [
      "Product catalog with categories",
      "Payments and voucher generator",
      "Giveaways and welcome banners",
      "Embed builder, no coding",
      "Full ForgeScript source",
    ],
  },
  {
    id: "tab-free",
    title: "TAB + Scoreboard Config",
    tagline: "The best free TAB configuration",
    description:
      "Animated TAB and scoreboard config used by hundreds of servers. Gradients, headers, and placeholders — free on BuiltByBit.",
    price: "Free",
    free: true,
    image: "/products/tab.jpg",
    skills: ["configs"],
    salesLabel: "621 downloads",
    featured: true,
    href: BBB,
    features: ["Animated TAB header and footer", "Scoreboard included", "Placeholder-ready", "Free forever"],
  },
  {
    id: "tab-themes",
    title: "TAB + Scoreboard · 58 Themes",
    tagline: "58 premium gradient configs",
    description:
      "Fifty-eight gradient TAB and scoreboard themes so any network can match its brand without designing from scratch.",
    price: "$4.99",
    image: "/products/themes.jpg",
    skills: ["configs"],
    salesLabel: "New",
    href: BBB,
    features: ["58 gradient themes", "TAB + scoreboard pairs", "Works on any server brand", "Drop-in TAB plugin config"],
  },
  {
    id: "playerkits",
    title: "PlayerKits 2 Advance Config",
    tagline: "Pre-made kits · main menu · messages",
    description:
      "A fully configured kit system: pre-made kits, a main GUI, and customizable messages for PlayerKits 2.",
    price: "$2.99",
    image: "/products/kits.jpg",
    skills: ["configs"],
    rating: { stars: 1, count: 1 },
    salesLabel: "7 purchases",
    href: BBB,
    features: ["Pre-made kits", "Main menu GUI", "Customizable messages", "PlayerKits 2 ready"],
  },
  {
    id: "discordsrv",
    title: "50+ DiscordSRV Alert Config",
    tagline: "Minecraft ↔ Discord, already written",
    description:
      "Fifty-plus custom DiscordSRV alerts for deaths, joins, advancements, and server events — so the Discord side feels alive.",
    price: "$4.99",
    image: "/products/discordsrv.jpg",
    skills: ["configs"],
    salesLabel: "New",
    href: BBB,
    features: ["50+ custom alerts", "Join, death, and event coverage", "Themed embeds", "Drop into DiscordSRV"],
  },
  {
    id: "leaderboard",
    title: "Leaderboard Config V1",
    tagline: "6 animated hologram boards + Top 10 menu",
    description:
      "Six premium animated hologram leaderboards, each with its own color theme, plus a clean in-game Top 10 menu.",
    price: "$2.49",
    image: "/products/leaderboard.jpg",
    skills: ["configs"],
    salesLabel: "2 purchases",
    href: BBB,
    features: ["6 themed hologram boards", "Animated updates", "In-game Top 10 menu", "Color-matched themes"],
  },
  {
    id: "essentialsx",
    title: "EssentialsX Messages Config",
    tagline: "Editable messages with gradients",
    description:
      "A purple-gradient EssentialsX message pack. Every mail, teleport, and economy line is branded and easy to edit.",
    price: "$1.99",
    image: "/products/essentials.jpg",
    skills: ["configs"],
    salesLabel: "1 purchase",
    href: BBB,
    features: ["Gradient branded messages", "Fully editable", "Purple studio theme", "EssentialsX drop-in"],
  },
  {
    id: "shop",
    title: "Shop Configuration",
    tagline: "EconomyShopGUI · themed menus · balanced prices",
    description:
      "EconomyShopGUI configuration with clean, themed GUI shop menus and balanced buy/sell prices.",
    price: "$6.99",
    image: "/products/shop.jpg",
    skills: ["configs"],
    salesLabel: "New",
    href: BBB,
    features: ["Themed GUI shop menus", "Balanced buy/sell prices", "EconomyShopGUI", "Category layout included"],
  },
  {
    id: "medieval-spawn",
    title: "Medieval Lifesteal Spawn",
    tagline: "Spawn · crates · shop · RTP · AFK · jail",
    description:
      "A professional medieval spawn built for lifesteal: custom spawn, crates, shop, RTP portal, AFK zone, and jail.",
    price: "$5.99",
    image: "/products/medieval.jpg",
    skills: ["builds", "lifesteal"],
    salesLabel: "New",
    href: BBB,
    features: [
      "Custom medieval spawn",
      "Crates and shop",
      "RTP portal",
      "AFK zone and jail system",
    ],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    quote:
      "Beyond Survival is the first pack I have opened that actually felt finished. Spawn, DiscordSRV, arena, and quests all talked to each other on first boot.",
    name: "Kai",
    role: "Survival network owner",
    product: "Beyond Survival Setup",
    stars: 5,
  },
  {
    id: "r2",
    quote:
      "The lifesteal setup saved us two weeks. Hearts, crates, and the combat loop were already balanced — we just reskinned ranks.",
    name: "Mira",
    role: "Lifesteal SMP staff",
    product: "Custom Lifesteal Premium",
    stars: 5,
  },
  {
    id: "r3",
    quote:
      "We started on the free TAB config. Players noticed the animations the same night. Upgraded to the 58-theme pack the next morning.",
    name: "Jonah",
    role: "Community manager",
    product: "TAB + Scoreboard Config",
    stars: 5,
  },
  {
    id: "r4",
    quote:
      "Support on Discord was faster than our host ticket. They walked the install and left us with a server that looked like a real network.",
    name: "Rae",
    role: "Paper 1.21 operator",
    product: "Habibi Studios",
    stars: 5,
  },
];

export function productsForSkill(skill: SkillId | "all"): Product[] {
  if (skill === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.skills.includes(skill));
}
