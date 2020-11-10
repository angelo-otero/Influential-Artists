//jshint esversion: 6

const Artists = [{
    id: "1",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/1280px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    name: "Leonardo da Vinci",
    years: "1452-1519",
    artMovement: "Renaissance",
    bio: "Leonardo da Vinci was an Italian master whose accomplishments extended to the world of science and mathematics. His paintings are among the most recognizable and most valuable artworks in the world, while his sketchbooks contain a level of scientific and technical understanding of nature never before seen. He is also accredited with conceiving many modern-day inventions, though very few were manufactured in his time due to technological limitations.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        title: "Mona Lisa",
        year: "1503-1516",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1280px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
        title: "The Last Supper (restored)",
        year: "1490s",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg",
        title: "Vitruvian Man",
        year: "c. 1490",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Leonardo_da_Vinci_-_Superficial_anatomy_of_the_shoulder_and_neck_%28recto%29_-_Google_Art_Project.jpg/713px-Leonardo_da_Vinci_-_Superficial_anatomy_of_the_shoulder_and_neck_%28recto%29_-_Google_Art_Project.jpg",
        title: "Superficial Anatomy of the Shoulder and Neck",
        year: "c. 1510",
      }
    ]
  },
  {
    id: "2",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/926px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    name: "Rembrandt van Rijn",
    years: "1606-1669",
    artMovement: "Baroque",
    bio: "Rembrandt was a Dutch painter, draftsman, and printmaker. His understanding and mastery of light and shadow have influenced visual artists for several centuries, earning him the praise of other masters. He is considered one of the greatest artists of all time, and the most important in Dutch history. His works would remain high in demand throughout his life, but due to his notoriously extravagant collection of other artworks and exotic goods, Rembrandt died a poor man.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_WGA19232.jpg",
        title: "Aristotle with a Bust of Homer",
        year: "1653",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
        title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
        year: "1632",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Rembrandt-Belsazar.jpg",
        title: "Belshazzar's Feast",
        year: "c. 1635-1638",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1222px-The_Night_Watch_-_HD.jpg",
        title: "The Night Watch",
        year: "1642",
      }
    ]
  },
  {
    id: "3",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/John_Constable_by_Daniel_Gardner%2C_1796.JPG/440px-John_Constable_by_Daniel_Gardner%2C_1796.JPG",
    name: "John Constable",
    years: "1776-1837",
    artMovement: "Romanticism",
    bio: "John Constable was an English landscape painter. His love of landscapes developed in his youth when he would take sketching trips to draw the surrounding Suffolk and Essex countrysides. In his lifetime, he found little success in England, but he quickly grew popular in France. He had refused to travel to promote his art stating, “I would rather be a poor man in England than a rich man abroad.” Later in life, he would become a respected lecturer at the Royal Academy of Arts.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/The_Leaping_Horse_%281825%29_by_John_Constable_-_Google_Art_Project.jpg",
        title: "The Leaping Horse",
        year: "1825",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flatford_Mill_%28Scene_on_a_Navigable_River%29_by_John_Constable%2C_Tate_Britain.JPG",
        title: "Flatford Mill",
        year: "1816",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/1/15/John_Constable_-_Wivenhoe_Park%2C_Essex_-_Google_Art_Project.jpg",
        title: "Wivenhoe Park, Essex",
        year: "1816",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/7/78/John_Constable_%281776-1837%29_-_Ann_Constable_-_T03902_-_Tate.jpg",
        title: "Ann Constable",
        year: "c. 1810-1815",
      }
    ]
  },
  {
    id: "4",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1880_Frederic_Leighton_-_Self_portrait.jpg/440px-1880_Frederic_Leighton_-_Self_portrait.jpg",
    name: "Frederic Leighton",
    years: "1830-1896",
    artMovement: "Neo-Classicism",
    bio: "Frederic Leighton was an English painter, draftsman, and sculptor whose works centered around Biblical and Greco-Roman subjects. He received art training all throughout the European continent. His sculptures helped inspire other English sculptors ushering a movement called New Sculpture. He would eventually become president of the Royal Academy of Arts. He is also the first painter to be designated as a baron, though he only held the title shortly as he died the next day.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Leighton_Athlete_Wrestling_with_a_Python_01_Tate_Britain.jpg",
        title: "An Athlete wrestling with a Python",
        year: "1877",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg",
        title: "Flaming June",
        year: "1895",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/0/06/Lord_Leighton%2C_Frederic%2C_After_Vespers%2C_1871.jpg",
        title: "After Vespers",
        year: "1871",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Leighton_Moses_views_the_Promised_Land.jpg",
        title: "Moses Views the Promised Land",
        year: "1881",
      }
    ]
  },
  {
    id: "5",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Thomas_Cole.jpg/440px-Thomas_Cole.jpg",
    name: "Thomas Cole",
    years: "1801-1848",
    artMovement: "Hudson River School",
    bio: "Thomas Cole was an American landscape painter and is the founder of the Hudson River School, an art movement revolving around a romantic portrayal of the American wilderness. Along with painting scenery, he also painted historical and allegorical subjects and dabbled in poetry and architecture. Cole lived and worked in Catskill, NY, and in his honor, the 4th highest peak of the Catskill Mountains is named after him. Cedar Grove, his farm studio is now a National Historic Site.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cole_Thomas_Expulsion_from_the_Garden_of_Eden_1828.jpg",
        title: "Expulsion from the Garden of Eden",
        year: "1828",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/85/Distant_View_of_Niagara_Falls_1830_Thomas_Cole.jpg",
        title: "Distant View of Niagra Falls",
        year: "1830",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Thomas_Cole_-_Prometheus_Bound_-_Google_Art_Project.jpg",
        title: "Prometheus Unbound",
        year: "1847",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Thomas_Cole_-_Architect%E2%80%99s_Dream_-_Google_Art_Project.jpg/1280px-Thomas_Cole_-_Architect%E2%80%99s_Dream_-_Google_Art_Project.jpg",
        title: "Architect's Dream",
        year: "1840",
      }
    ]
  },
  {
    id: "6",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg",
    name: "Claude Monet",
    years: "1840-1926",
    artMovement: "Impressionism",
    bio: "Claude Monet was a French painter and founder of the Impressionist movement. He wasn’t satisfied with the traditional academic study of art which mostly revolved around copying the old masters. Instead, he and other like-minded artists preferred to study the effect of the changing light en plein air. Monet would often paint the same scenery several times to capture the different colors seen throughout the day. In order to do so, Monet adapted a fast painting style using short, broken brushstrokes.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
        title: "Impression, Sunrise",
        year: "1872",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Claude_Monet-Madame_Monet_en_costume_japonais.jpg",
        title: "Madame Monet Wearing a Kimono",
        year: "1875",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg",
        title: "Water Lilies and Japanese Bridge",
        year: "c. 1897-1899",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Claude_Monet_La_Grenouill%C3%A9re.jpg/1280px-Claude_Monet_La_Grenouill%C3%A9re.jpg",
        title: "La Grenouillère",
        year: "c. 1869",
      }
    ]
  },
  {
    id: "7",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Whistler_Selbstportr%C3%A4t.jpg/440px-Whistler_Selbstportr%C3%A4t.jpg",
    name: "James McNeil Whistler",
    years: "1834-1903",
    artMovement: "Realism",
    bio: "James McNeill Whistler was a London-based American artist who was well-versed in many forms of art and several subjects. His color palette tended to be more subdued and limited, in contrast with the Impressionist movement which was gaining popularity at the time. Due to his personality, Whistler made friends and enemies with other notable creatives which helped spread his name. He believed that art doesn’t need a deeper meaning and that artists should make art for art’s sake.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/6/66/James_Abbot_McNeill_Whistler_006.jpg",
        title: "Nocturne in Blue and Gold: Old Battersea Bridge",
        year: "c. 1872-1875",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Whistlers_Mother_high_res.jpg",
        title: "Arrangement in Grey and Black No. 1: Whistler's Mother",
        year: "1871",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/8c/James_Abbot_McNeill_Whistler_011.jpg",
        title: "Nocturne in Pink and Gray: Portrait of Lady Meux",
        year: "1881",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Arrangement_in_Pink_Red_and_Purple_by_James_Abbott_McNeill_Whistler.jpeg",
        title: "Arrangement in Pink, Red and Purple",
        year: "c. 1883-1884",
      }
    ]
  },
  {
    id: "8",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/440px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    name: "Vincent van Gogh",
    years: "1853-1890",
    artMovement: "Post-Impressionism",
    bio: "Vincent van Gogh was a Dutch painter, who sold only one painting in his lifetime, but whose works are among the most beloved and most replicated in the world. He was a prolific artist, creating over 800 oil paintings in a span of nine years. He had struggled with mental illness throughout his life, and he admitted himself to an asylum where he created his best works. Van Gogh ended up taking his own life at the age of 37, though there are recent investigations that suggest he was murdered.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg",
        title: "Head of a Skeleton with a Burning Cigarette",
        year: "1886",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        title: "The Starry Night",
        year: "1889",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg",
        title: "The Church at Auvers",
        year: "1890",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Vincent_van_Gogh_-_Portret_van_de_postbode_Joseph_Roulin.jpg/819px-Vincent_van_Gogh_-_Portret_van_de_postbode_Joseph_Roulin.jpg",
        title: "Postman Joseph Roulin",
        year: "1888",
      }
    ]
  },
  {
    id: "9",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Edwin_Austin_Abbey_cropped.jpg/440px-Edwin_Austin_Abbey_cropped.jpg",
    name: "Edwin Austin Abbey",
    years: "1852-1911",
    artMovement: "Golden Age of Illustration",
    bio: "Edwin Austin Abbey was an American muralist, painter, and illustrator. From an early age, Abbey illustrated for Harper’s Weekly and Scribner’s Magazine. He also illustrated several beloved works such as Christmas Stories by Charles Dickens and some Shakesperean plays. He painted the royal portrait of King Edward VII of Great Britain for his coronation and was said to have been offered a knighthood. He finished murals for the Boston Public Library and the Royal Exchange in London.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/8/82/Edwin_Austin_Abbey_King_Lear%2C_Act_I%2C_Scene_I_The_Metropolitan_Museum_of_Art.jpg",
        title: "King Lear, Act 1, Scene 1",
        year: "1898",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Abbey_-_The_Queen_in_Hamlet.jpg",
        title: "The Queen in Hamlet",
        year: "1895",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/6/62/Edwin_Austin_Abbey_richard_duke_of_gloucester_and_the_lady_anne_1896.jpg",
        title: "Richard III of England and the Lady Anne",
        year: "1890",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/The_Play_Scene_in_Hamlet.jpg/1280px-The_Play_Scene_in_Hamlet.jpg",
        title: "The Play Scene in Hamlet",
        year: "1897",
      }
    ]
  },
  {
    id: "10",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/John_Singer_Sargent_1903.jpg/440px-John_Singer_Sargent_1903.jpg",
    name: "John Singer Sargent",
    years: "1856-1925",
    artMovement: "Early Modernism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "11",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rose_O%27Neill_by_Gertrude_K%C3%A4sebier_crop.jpg",
    name: "Rose O'Neill",
    years: "1874-1944",
    artMovement: "Golden Age of Illustration",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "12",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/0/05/Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg",
    name: "Artemisia Gentileschi",
    years: "1593-1656",
    artMovement: "Baroque",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "13",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mary_Stevenson_Cassatt_-_Mary_Cassatt_Self-Portrait_-_Google_Art_Project.jpg",
    name: "Mary Cassatt",
    years: "1844-1926",
    artMovement: "Impressionism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "14",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/0/05/Frederic_Edwin_Church_-_Brady-Handy_%28cropped%29.jpg",
    name: "Frederic Edwin Church",
    years: "1826-1900",
    artMovement: "Hudson River School",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "15",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg",
    name: "Elisabeth Louise Vigée Le Brun",
    years: "1755-1842",
    artMovement: "Neo-Classicism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "16",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/1/14/Eakins%2C_Henry_Ossawa_Tanner_1902.jpg",
    name: "Henry Ossawa Tanner",
    years: "1859-1937",
    artMovement: "Realism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "17",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/7/76/Georges_Seurat_1888.jpg",
    name: "Georges Seurat",
    years: "1859-1891",
    artMovement: "Post-Impressionism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "18",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/e/e9/F%C3%A9lix_Nadar_1820-1910_portraits_Eug%C3%A8ne_Delacroix_restored.jpg",
    name: "Eugène Delacroix",
    years: "1798-1863",
    artMovement: "Romanticism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "19",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/5/56/Self-portrait_at_the_Easel_Painting_a_Devotional_Panel_by_Sofonisba_Anguissola.jpg",
    name: "Sofonisba Anguissola",
    years: "1532-1625",
    artMovement: "Renaissance",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "20",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Amrita_Sher-Gil_Self-portrait.jpg/654px-Amrita_Sher-Gil_Self-portrait.jpg",
    name: "Amrita Sher-Gil",
    years: "1913-1941",
    artMovement: "Early Modernism",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  },
  {
    id: "21",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Self-portrait_by_N._C._Wyeth%2C_1940%2C_National_Academy_of_Design.JPG",
    name: "Newell Convers Wyeth",
    years: "1882-1945",
    artMovement: "Golden Age of Illustration",
    bio: "John Singer Sargent was an American painter who is considered as the leading portrait artist of his time. Sargent was well-traveled and worked on commissions from nobles, politicians and the wealthy from around the globe. In his spare time, he painted peoples and cultures he met and the landscapes he saw in his travels. He was an extremely productive artist, creating over 900 oil and 2000 watercolor paintings. Sargent was high in demand all through his life, though in his later years he preferred painting for himself.",
    topWorks: [{
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
        title: "Madame X",
        year: "1883-84",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/2/22/Theodore_Roosevelt_by_John_Singer_Sargent%2C_1903.jpg",
        title: "Theodore Roosevelt",
        year: "1903",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sargent_-_Muddy_Alligators.jpg",
        title: "Muddy Alligators",
        year: "1917",
      },
      {
        workImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG/807px-Edinburgh_NGS_Singer_Sargent_Lady_Agnew.JPG",
        title: "Portrait of Lady Agnew of Lochnaw",
        year: "1892",
      }
    ]
  }
];

export default Artists;
