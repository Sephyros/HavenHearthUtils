const characters = [
  {
    name: "Sephyros",
    world: 15
  },
  {
    info: {
      avatar_link: "https://www.havenandhearth.com/portal/avatar?u=Sephyros&c=Sephyros%20II",
      name: "Sephyros II",
      world: 16,
      Created_at: "2024-11-02 22:33",
      Last_played_at: "2024-11-23 13:37",
      Direct_ancestor: "Sephyros",
      Learning_points_collected: {
        actual: 50069,
        total: 950804
      },
      Experience_points_collected: {
        actual: 13861,
        total: 21058
      },
      Age: "2 weeks, 1 days"
    },
    Stats: {
      baseStats: {
        "values": {
          "Strength": 50,
          "Agility": 56,
          "Intelligence": 62,
          "Constitution": 62,
          "Perception": 61,
          "Charisma": 52,
          "Dexterity": 51,
          "Will": 55,
          "Psyche": 50,
          "Unarmed Combat": 60,
          "Melee Combat": 20,
          "Marksmanship": 45,
          "Exploration": 50,
          "Stealth": 10,
          "Sewing": 30,
          "Smithing": 40,
          "Masonry": 50,
          "Carpentry": 50,
          "Cooking": 25,
          "Farming": 65,
          "Survival": 40,
          "Lore": 25
        }
      },
      bonus: {
        "values": {
          "Strength": 0,
          "Agility": 0,
          "Intelligence": 0,
          "Constitution": 0,
          "Perception": 0,
          "Charisma": 0,
          "Dexterity": 0,
          "Will": 0,
          "Psyche": 0,
          "Unarmed Combat": 0,
          "Melee Combat": 0,
          "Marksmanship": 0,
          "Exploration": 0,
          "Stealth": 0,
          "Sewing": 0,
          "Smithing": 0,
          "Masonry": 0,
          "Carpentry": 0,
          "Cooking": 0,
          "Farming": 0,
          "Survival": 0,
          "Lore": 0
        }
      }
    },
    Skills: [
      "Alchemy",
      "Ancestral Worship",
      "Animal Husbandry",
      "Archery",
      "Baking",
      "Basic Mechanics",
      "Beekeeping",
      "Boat Building",
      "Carpentry",
      "Charcoal Burning",
      "Cheesemaking",
      "Cooking",
      "Druidic Rite",
      "Farming",
      "Firecrafts",
      "First Aid",
      "Fishing",
      "Foraging",
      "Forestry",
      "Forging",
      "Gardening",
      "Glass Blowing",
      "Hearth Magic",
      "Hunting",
      "Jewelry",
      "Landscaping",
      "Lawspeaking",
      "Locks & Bolts",
      "Lumberjacking",
      "Metal Working",
      "Metallurgy",
      "Mining",
      "Music",
      "Oral Tradition",
      "Painting",
      "Plant Lore",
      "Pottery",
      "Primitive Tools",
      "Rope Twining",
      "Sausage Making",
      "Sewing",
      "Silkfarming",
      "Steelmaking",
      "Stone Working",
      "Swimming",
      "Tanning",
      "The Will to Power",
      "Trade",
      "Tunneling",
      "Wheelwrighting",
      "Wilderness Survival",
      "Winemaking",
      "Woodsmanship",
      "Yeomanry"
    ]
  }]

const maxLevelSeen = 380
const maxColorSteps = 6

const fishingLines = ["Bushcraft Fishline",
  "Farmer's Fishline",
  "Fine Fishline",
  "Macabre Fishline",
  "Shepherd's Fishline",
  "Shoreline Fishline",
  "Tanner's Fishline",
  "Woodsman's Fishline"]

const fishingHooks = ["Bone Hook",
  "Chitin Hook",
  "Gold Hook",
  "Metal Hook"]

const baits = [
  "Ant Empress",
  "Ant Larvae",
  "Ant Pupae",
  "Ant Queen",
  "Ant Soldiers",
  "Aphids",
  "Bee Larvae",
  "Brimstone Butterfly",
  "Cave Moth",
  "Chum Bait",
  "Earthworm",
  "Emerald Dragonfly",
  "Entrails",
  "Firefly",
  "Grasshopper",
  "Grub",
  "Ladybug",
  "Leech",
  "Monarch Butterfly",
  "Moonmoth",
  "Raw Crab",
  "Raw Lobster",
  "Ruby Dragonfly",
  "Sand Flea",
  "Silkmoth",
  "Silkworm",
  "Silkworm Egg",
  "Springtime Bumblebee",
  "Stag Beetle",
  "Waterstrider",
  "Woodworm"
]
const lures = ["Copper Comet", "Copperbrush Snapper", "Feather Fly", "Gold Spoon-Lure", "Pinecone Plug", "Poppy Wobbler", "Rock Lobster", "Steelbrush Plunger", "Tin Fly", "Woodfish"]

var subjectObject = {
  "Bushcraft Fishingpole": {
    "Fishing Line": fishingLines,
    "Fishing Hook": fishingHooks,
    "Bait": baits
  },
  "Primitive Casting-Rod": {
    "Fishing Line": fishingLines,
    "Fishing Hook": fishingHooks,
    "Lure": lures
  }
}


window.onload = function () {
  var rodType = document.getElementById("RodType");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    rodType.options[rodType.options.length] = new Option(x, x);
  }
  rodType.onchange = function () {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function () {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[rodType.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
