window.PROJECTS = {
  "son-of-ithaca": {
    title: "Son Of Ithaca",
    heroImage: "images/covers/portadaSOI.png",
    description: [
      "Son of Ithaca is a story-driven action RPG inspired by Tunic, following Telemachus on his journey through a reimagined Greek underworld in search of his missing father, Odysseus. Developed entirely with Wave Engine, a custom C++ and OpenGL engine created by the development team, the project combines exploration, combat, and environmental puzzles while expanding the engine with new systems such as Lua scripting, physics, shaders, particles, audio, and animation."
    ],
    youtubeId: "PYzuc0fsHpM",
    downloadLink: "https://nobody-games-studio.itch.io/son-of-ithaca",
    githubLink: "https://github.com/NobodyGamesStudio/WaveEngine",
    info: {
      language: "C++, Lua",
      engine: "Wave Engine (custom, OpenGL)",
      devTime: "5 months",
      team: "33 members",
      year: "2026"
    },
    role: {
      title: "Gameplay Programmer",
      paragraphs: [
        "Implemented the entire player character using the engine's Lua scripting system. Developed the combat mechanics, input handling for keyboard and gamepad, state machine, animation controller, and player VFX. Designed and programmed the game's three main mask mechanics, integrating them with combat, exploration, and progression systems."
      ]
    },
    contributions: [
      {
        title: "Gameplay Programming",
        paragraphs: [
          "Designed and implemented the complete player controller for Telemachus using the engine's Lua scripting system. This included movement, combat, keyboard and controller input, state management, animation integration, orbiting mechanics, cutscene interactions, and other core gameplay systems."
        ],
        image: ""
      },
      {
        title: "Core Gameplay Mechanics",
        paragraphs: [
          "Developed and integrated the game's three main mask mechanics, each introducing unique abilities that expand combat, exploration, and puzzle-solving while supporting the overall progression of the adventure."
        ],
        image: ""
      },
      {
        title: "Game Feel & Visual Feedback",
        paragraphs: [
          "Enhanced the overall player experience by implementing visual effects and gameplay polish, including particles, lighting effects, camera shake, combat feedback, textures, and other elements to improve responsiveness and game feel."
        ],
        image: ""
      }
    ]
  },

  "kims-underworld": {
    title: "Kim's Underworld",
    heroImage: "images/covers/portadaKim.png",
    description: [
      "Kim's Underworld is an original metroidvania developed in SDL and C++ by a multidisciplinary team of five programmers, working alongside artists and game designers. Set deep within the underworld, the game follows Kim on a journey to reunite with her late father while exploring a vast interconnected world filled with enemies, platforming challenges, and environmental puzzles. The gameplay is built around a climbing-focused movement system, making vertical exploration and traversal the core of the player's progression."
    ],
    youtubeId: "X6UPdr4N0RM",
    downloadLink: "https://github.com/XaviFast05/Kims-Underworld/releases/tag/GOLD",
    githubLink: "https://github.com/XaviFast05/Kims-Underworld",
    info: {
      language: "C++",
      engine: "SDL",
      devTime: "4 months",
      team: "20 members",
      year: "2025"
    },
    role: {
      title: "Gameplay Programmer",
      paragraphs: [
        "Worked alongside the Lead Programmer to design and implement the player's gameplay systems and state machine. Developed most of the core gameplay mechanics, including traversal, progression, and the in-game shop system."
      ]
    },
    contributions: [
      {
        title: "Player Gameplay Systems",
        paragraphs: [
          "Co-designed and implemented the player's state machine, programming the majority of its states and transitions. Developed core gameplay features including movement, combat interactions, and the game's signature climbing mechanics, where players throw climbing picks that attach to walls and create temporary platforms for traversal."
        ],
        image: "images/gifs/ku1.gif"
      },
      {
        title: "Progression & Economy",
        paragraphs: [
          "Designed and implemented the game's progression system. Programmed enemy orb drops, the in-game currency system, shops, and most of the available upgrades, balancing both their functionality and player progression."
        ],
        image: "images/gifs/ku2.gif"
      },
      {
        title: "Gameplay Design",
        paragraphs: [
          "Contributed to the design of several core gameplay mechanics, with a particular focus on the upgrade system and player progression. Worked closely with the Lead Programmer to ensure that gameplay systems remained scalable, responsive, and aligned with the overall game design."
        ],
        image: "images/gifs/ku3.gif"
      }
    ]
  },

  "jump-king-sdl": {
    title: "Jump King in SDL",
    heroImage: "images/covers/portadaJK.png",
    description: [
      "Jump King in SDL is an academic reinterpretation of Jump King, developed in SDL and C++. Using the original game's visual assets and level layouts as inspiration, our team recreated part of the experience while adapting it to our own engine framework and expanding it with new gameplay systems. In addition to faithfully reproducing the signature jumping mechanics and interconnected vertical progression, we introduced original features such as enemies, a final boss, checkpoints, save/load functionality, debugging tools, and additional levels designed specifically for the project."
    ],
    youtubeId: "",
    downloadLink: "https://github.com/XaviFast05/Jump-King-in-SDL/releases/tag/1.0",
    githubLink: "https://github.com/XaviFast05/Jump-King-in-SDL",
    info: {
      language: "C++",
      engine: "SDL",
      devTime: "3 months",
      team: "2 members",
      year: "2024"
    },
    role: {
      title: "Gameplay Programmer",
      paragraphs: [
        "Implemented the majority of the game's core gameplay systems, level management, and progression mechanics. Developed new gameplay features, enemies, items, and the final boss while collaborating with my teammate on project organization, polishing, and content production."
      ]
    },
    contributions: [
      {
        title: "Level & World Systems",
        paragraphs: [
          "Designed and implemented the level management architecture, including map loading, dynamic collision generation, level transitions, checkpoint handling, save/load systems, and fast travel between campfires. Expanded the game with additional levels and integrated new tiles and backgrounds into the existing world."
        ],
        image: "images/gifs/jk1.gif"
      },
      {
        title: "Gameplay Programming",
        paragraphs: [
          "Implemented multiple gameplay systems, including the player death and respawn logic, entity and item systems, enemy interactions, collectibles, and the final boss with its own behavior and attack patterns. Also improved the existing collision and hitbox systems while fixing gameplay issues throughout development."
        ],
        image: "images/gifs/jk2.gif"
      },
      {
        title: "Content & Polish",
        paragraphs: [
          "Created and integrated new gameplay content, balancing enemy placement, checkpoints, upgrades, and overall difficulty. Collaborated on debugging, optimization, asset integration, project organization, and final polishing to deliver a complete and polished reinterpretation of the original game."
        ],
        image: "images/gifs/jk3.gif"
      }
    ]
  },

  "super-soukoban": {
    title: "Super Soukoban in Raylib",
    heroImage: "images/covers/portadaSS.png",
    description: [
      "Super Soukoban in Raylib is a faithful recreation of the NES classic Super Soukoban, developed using the Raylib library. The project replicates the original game's mechanics, menus, user interface, audio, music, and visual presentation by extracting and adapting assets from the original release. After analyzing the game's behavior and systems through technical documentation and community resources, the first eight levels were recreated to provide a complete experience from the title screen to the final stage."
    ],
    youtubeId: "ybXSLJoaFLY",
    downloadLink: "https://github.com/Bekun67/Super-Soukoban/releases/tag/Patch",
    githubLink: "https://github.com/Bekun67/Super-Soukoban",
    info: {
      language: "C++",
      engine: "Raylib",
      devTime: "3 months",
      team: "Solo",
      year: "2024"
    },
    role: {
      title: "Solo Programmer",
      paragraphs: [
        "Performed the initial technical analysis of the original game alongside a teammate before independently implementing the entire recreation in Raylib. Responsible for all gameplay systems, menus, UI, audio integration, and overall game flow."
      ]
    },
    contributions: [
      {
        title: "Gameplay Programming",
        paragraphs: [
          "Implemented all core gameplay mechanics, including player movement, box pushing, collision handling, win and lose conditions, and level progression while accurately reproducing the behavior of the original game."
        ],
        image: ""
      },
      {
        title: "UI & Game Flow",
        paragraphs: [
          "Developed the complete user interface and navigation flow, recreating the original menus, HUD, controls, step and level counters, screen transitions, and the frame-by-frame introductory animation."
        ],
        image: ""
      },
      {
        title: "Audio & Polish",
        paragraphs: [
          "Integrated all music and sound effects from the original game, ensuring they were synchronized with gameplay and menus to faithfully recreate the audiovisual experience. The final result delivers a fully playable recreation of the first eight levels from start to finish."
        ],
        image: ""
      }
    ]
  },

  "odyssey-more-or-less": {
    title: "The Odyssey More Or Less",
    heroImage: "images/covers/portadaOdisea.png",
    description: [
      "The Odyssey More or Less is a Unity game jam project created for the 9th Gran CITM Game Jam, based on the theme of The Odyssey. Rather than faithfully retelling Homer's epic, the game presents a humorous, cartoonish parody through a collection of 14 fast-paced WarioWare-style minigames, each inspired by a different chapter of the story. Alongside the main campaign, the game features an endless mode with dynamic difficulty scaling, delivering increasingly faster and more challenging gameplay as players progress."
    ],
    youtubeId: "tmW5O-J5AN0",
    downloadLink: "https://asigamer.itch.io/la-odisea-ms-o-menos",
    githubLink: "https://github.com/XaviFast05/TheOdysseyMoreOrLess",
    info: {
      language: "C#",
      engine: "Unity",
      devTime: "1 week",
      team: "6 members",
      year: "2025"
    },
    role: {
      title: "Gameplay Programmer",
      paragraphs: [
        "Designed and implemented six of the game's fourteen minigames, developed the endless mode's adaptive difficulty system, and was responsible for integrating most of the game's assets while adding visual polish and gameplay feedback."
      ]
    },
    contributions: [
      {
        title: "Minigame Development",
        paragraphs: [
          "Designed and programmed six unique minigames, implementing their gameplay mechanics, objectives, and interactions while ensuring they fit the fast-paced WarioWare-style experience."
        ],
        image: "images/gifs/omol1.gif"
      },
      {
        title: "Endless Mode & Difficulty Scaling",
        paragraphs: [
          "Developed the endless mode system, preventing repeated minigames and organizing them into randomized rounds. Implemented adaptive difficulty by progressively increasing each minigame's challenge through gameplay parameters, timers, and pacing as the player advanced."
        ],
        image: "images/gifs/omol2.gif"
      },
      {
        title: "Visual Polish & Integration",
        paragraphs: [
          "Integrated the majority of the game's assets and enhanced the overall game feel by implementing visual effects such as camera shake, particle systems, animations, and responsive feedback, making every minigame feel dynamic and impactful."
        ],
        image: "images/gifs/omol3.gif"
      }
    ]
  },

  "granota-go": {
    title: "Granota Go",
    heroImage: "images/covers/portadaGGo.png",
    description: [
      "Granota Go is a browser-based educational game developed in Unity to introduce children aged 6 to 8 to computational thinking through interactive puzzles. Players solve challenges by programming a frog's movements using a drag-and-drop block-based coding system. Created for the 3rd Premis Ludi Game Jam, organized by 3Cat and GameBCN, the game features a fully responsive interface designed to provide a seamless experience across desktop, mobile, and tablet devices."
    ],
    youtubeId: "qXzJzuXgems",
    downloadLink: "https://oalonsoo.itch.io/granotago",
    githubLink: "https://github.com/oscaralonsoo/GranotaGo",
    info: {
      language: "C#",
      engine: "Unity",
      devTime: "1 week",
      team: "4 members",
      year: "2025"
    },
    role: {
      title: "Gameplay Programmer & Level Designer",
      paragraphs: [
        "Implemented the level creation system using color-coded maps within the Unity Editor, developed the frog's interactions with the environment and all interactive block behaviors, and designed every puzzle level together with its optimal solution."
      ]
    },
    contributions: [
      {
        title: "Level Creation Tools",
        paragraphs: [
          "Designed and implemented the level creation system using Unity's editor, allowing puzzle layouts to be built from color-coded maps. This workflow enabled fast level iteration and simplified the creation of new stages."
        ],
        image: "images/gifs/gg1.gif"
      },
      {
        title: "Gameplay Programming",
        paragraphs: [
          "Implemented the frog's interactions with the environment, including collision handling and the behavior of all interactive tiles. This included mechanics such as disappearing platforms, teleporters, moving tiles, and other puzzle elements that define the gameplay."
        ],
        image: "images/gifs/gg2.gif"
      },
      {
        title: "Level Design",
        paragraphs: [
          "Designed, implemented, and balanced every puzzle in the game, creating each level and defining its intended optimal solution to ensure a smooth learning curve and engaging progression."
        ],
        image: "images/gifs/gg3.gif"
      }
    ]
  },

  "evolution-tale": {
    title: "Evolution Tale",
    heroImage: "images/covers/portadaET.png",
    description: [
      "Evolution Tale is a crafting and exploration game developed in Unity as one of my first game development projects. Created during high school by a two-person team, the project was built while learning Unity and C# from scratch. Players gather resources across eight historical eras, craft hundreds of unique items, and progressively unlock new technologies while advancing through the evolution of civilization."
    ],
    youtubeId: "7VWWzC0UzgE",
    downloadLink: "https://store.steampowered.com/app/2079680/Evolution_Tale/",
    githubLink: "",
    info: {
      language: "C#",
      engine: "Unity",
      devTime: "7 months",
      team: "2 members",
      year: "2021"
    },
    role: {
      title: "Gameplay Programmer & UI Designer",
      paragraphs: [
        "Implemented the complete inventory, crafting menus, shop systems, world building, and visual assets. Collaborated on the core gameplay systems, including resource gathering, crafting mechanics, and player interactions."
      ]
    },
    contributions: [
      {
        title: "Inventory & Crafting Systems",
        paragraphs: [
          "Designed and implemented the entire inventory interface, crafting menus, and shop systems. Focused on creating an intuitive workflow for managing resources, crafting new items, and progressing through the different historical eras."
        ],
        image: "images/gifs/et1.gif"
      },
      {
        title: "World Building & Art Integration",
        paragraphs: [
          "Created the game's maps, visual assets, user interface, and environmental effects, integrating them into Unity to build the eight explorable worlds and provide a cohesive visual experience."
        ],
        image: "images/gifs/et2.gif"
      },
      {
        title: "Core Gameplay Development",
        paragraphs: [
          "Worked alongside my teammate to implement the game's fundamental mechanics, including resource gathering, mining, tree chopping, crafting, and overall progression systems that drive the player's journey through the different eras."
        ],
        image: "images/gifs/et3.gif"
      }
    ]
  },

  "bullet-heaven": {
    title: "Bullet Heaven",
    heroImage: "images/covers/portadaBH.png",
    description: [
      "Bullet Heaven is an upcoming solo project developed as my Bachelor's Thesis in Unity. The project aims to merge the fast-paced combat of the bullet heaven genre with the precision and movement of 2D platformers, creating a unique gameplay experience that blends both genres in a new way. Development will focus on designing a responsive player controller, engaging combat systems, and a series of handcrafted boss encounters that culminate in a complete boss rush experience."
    ],
    youtubeId: "",
    downloadLink: "",
    githubLink: "",
    info: {
      language: "C#",
      engine: "Unity",
      devTime: "TBD",
      team: "Solo",
      year: "2026 onwards"
    },
    role: { title: "", paragraphs: [] },
    contributions: []
  },

  "oil-rig-game": {
    title: "Untitled Oil Rig Game",
    heroImage: "images/covers/portadaOilrig.png",
    description: [
      "Untitled Oil Rig Game is an upcoming multiplayer horror game inspired by titles such as Lethal Company and R.E.P.O., with a stronger emphasis on narrative and environmental storytelling. Set aboard a remote offshore oil rig off the coast of Australia, players must explore the facility during the day to gather resources, uncover its secrets, and prepare for the night. As darkness falls, paranormal and biological threats emerge from the depths below, forcing players to survive through teamwork, resource management, and strategic decision-making. With a strong focus on underwater exploration and thalassophobia, the project aims to create a tense and immersive cooperative horror experience."
    ],
    youtubeId: "",
    downloadLink: "",
    githubLink: "",
    info: {
      language: "C#",
      engine: "Unity",
      devTime: "TBD",
      team: "6 members",
      year: "2026 onwards"
    },
    role: { title: "", paragraphs: [] },
    contributions: []
  }
};
