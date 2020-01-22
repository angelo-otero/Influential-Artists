//jshint esversion: 6

const Artists = [{
    id: "1",
    artistImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/1280px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
    name: "Leonardo da Vinci",
    years: "1452-1519",
    artMovement: "Renaissance",
    bio: "Leonardo da Vinci was an Italian master whose accomplishments extended to the world of science and mathematics. His paintings are among the most recognizable and most valuable artworks in the world, while his sketchbooks contain a level of scientific and technical understanding of nature never before seen. He is also accredited with conceiving many modern-day inventions, though very few were manufactured in his time due to technological limitations.",
    topWorks: [{
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
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
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      },
      {
        workImg: "",
        title: "",
        year: "",
      }
    ]
  }
];

export default Artists;
