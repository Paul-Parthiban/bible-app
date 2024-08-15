const booksList = {
  genesis: {
    name: "Genesis",
    howToType: "genesis",
    summary:
      "Genesis explains the creation of the world and the beginnings of humanity, including the stories of Adam and Eve, Noah, and the patriarchs Abraham, Isaac, and Jacob.",
  },
  exodus: {
    name: "Exodus",
    howToType: "exodus",
    summary:
      "Exodus recounts the Israelites' escape from slavery in Egypt, their journey through the wilderness, and the establishment of the covenant with God at Mount Sinai.",
  },
  leviticus: {
    name: "Leviticus",
    howToType: "leviticus",
    summary:
      "Leviticus provides detailed laws and regulations for worship, sacrifices, and holy living for the Israelites.",
  },
  numbers: {
    name: "Numbers",
    howToType: "numbers",
    summary:
      "Numbers describes the Israelites' 40 years of wandering in the desert, including their trials, rebellions, and census data.",
  },
  deuteronomy: {
    name: "Deuteronomy",
    howToType: "deuteronomy",
    summary:
      "Deuteronomy is a series of speeches by Moses, reiterating the laws and covenant before the Israelites enter the Promised Land.",
  },
  joshua: {
    name: "Joshua",
    howToType: "joshua",
    summary:
      "Joshua details the conquest of Canaan under Joshua's leadership and the division of the land among the twelve tribes of Israel.",
  },
  judges: {
    name: "Judges",
    howToType: "judges",
    summary:
      "Judges tells the stories of various leaders (judges) who deliver Israel from oppression and the cycles of sin and redemption.",
  },
  ruth: {
    name: "Ruth",
    howToType: "ruth",
    summary:
      "Ruth is a story of loyalty and redemption, focusing on the Moabite woman Ruth and her relationship with her mother-in-law Naomi and Boaz.",
  },
  "1samuel": {
    name: "1 Samuel",
    howToType: "1samuel",
    summary:
      "1 Samuel covers the life of Samuel, the rise and fall of King Saul, and the anointing of David as king.",
  },
  "2samuel": {
    name: "2 Samuel",
    howToType: "2samuel",
    summary:
      "2 Samuel focuses on King David's reign, his successes, and his personal and political struggles.",
  },
  "1kings": {
    name: "1 Kings",
    howToType: "1kings",
    summary:
      "1 Kings recounts the reign of Solomon, the division of the kingdom, and the subsequent kings of Israel and Judah.",
  },
  "2kings": {
    name: "2 Kings",
    howToType: "2kings",
    summary:
      "2 Kings continues the history of the divided kingdoms, leading to the fall of Israel and Judah.",
  },
  "1chronicles": {
    name: "1 Chronicles",
    howToType: "1chronicles",
    summary:
      "1 Chronicles retells the history of Israel from Adam to King David, emphasizing David's reign.",
  },
  "2chronicles": {
    name: "2 Chronicles",
    howToType: "2chronicles",
    summary:
      "2 Chronicles continues the history from Solomon's reign to the Babylonian exile, focusing on the kings of Judah.",
  },
  ezra: {
    name: "Ezra",
    howToType: "ezra",
    summary:
      "Ezra describes the return of the exiles to Jerusalem and the rebuilding of the temple.",
  },
  nehemiah: {
    name: "Nehemiah",
    howToType: "nehemiah",
    summary:
      "Nehemiah focuses on the rebuilding of Jerusalem's walls and the spiritual renewal of the people.",
  },
  esther: {
    name: "Esther",
    howToType: "esther",
    summary:
      "Esther tells the story of a Jewish queen in Persia who saves her people from a plot to destroy them.",
  },
  job: {
    name: "Job",
    howToType: "job",
    summary:
      "Job explores the themes of suffering and faith through the story of a righteous man tested by God.",
  },
  psalms: {
    name: "Psalms",
    howToType: "psalms",
    summary:
      "Psalms is a collection of songs and prayers expressing a wide range of emotions, from praise and thanksgiving to lament and supplication.",
  },
  proverbs: {
    name: "Proverbs",
    howToType: "proverbs",
    summary:
      "Proverbs offers practical wisdom and moral guidance through a collection of sayings and teachings.",
  },
  ecclesiastes: {
    name: "Ecclesiastes",
    howToType: "ecclesiastes",
    summary:
      "Ecclesiastes reflects on the meaning of life and the pursuit of fulfillment, often with a tone of skepticism and contemplation.",
  },
  songofsolomon: {
    name: "Song of Solomon",
    howToType: "songofsolomon",
    summary:
      "Song of Solomon is a poetic dialogue celebrating love and desire between a bride and groom.",
  },
  isaiah: {
    name: "Isaiah",
    howToType: "isaiah",
    summary:
      "Isaiah contains prophecies of judgment and redemption, focusing on the coming of the Messiah and the restoration of Israel.",
  },
  jeremiah: {
    name: "Jeremiah",
    howToType: "jeremiah",
    summary:
      "Jeremiah records the prophet's warnings of Jerusalem's impending destruction and calls for repentance.",
  },
  lamentations: {
    name: "Lamentations",
    howToType: "lamentations",
    summary:
      "Lamentations is a series of poetic laments mourning the fall of Jerusalem.",
  },
  ezekiel: {
    name: "Ezekiel",
    howToType: "ezekiel",
    summary:
      "Ezekiel includes visions and prophecies of judgment and restoration for Israel.",
  },
  daniel: {
    name: "Daniel",
    howToType: "daniel",
    summary:
      "Daniel recounts the experiences and visions of Daniel, emphasizing God's sovereignty and faithfulness.",
  },
  hosea: {
    name: "Hosea",
    howToType: "hosea",
    summary:
      "Hosea uses the prophet's troubled marriage as a metaphor for Israel's unfaithfulness to God.",
  },
  joel: {
    name: "Joel",
    howToType: "joel",
    summary:
      "Joel warns of a locust plague and calls for national repentance, promising future blessings.",
  },
  amos: {
    name: "Amos",
    howToType: "amos",
    summary:
      "Amos delivers messages of social justice and divine judgment against Israel's corruption and complacency.",
  },
  obadiah: {
    name: "Obadiah",
    howToType: "obadiah",
    summary:
      "Obadiah prophesies the downfall of Edom and the restoration of Israel.",
  },
  jonah: {
    name: "Jonah",
    howToType: "jonah",
    summary:
      "Jonah tells the story of a reluctant prophet who is sent to preach repentance to the city of Nineveh.",
  },
  micah: {
    name: "Micah",
    howToType: "micah",
    summary:
      "Micah warns of judgment against Israel and Judah but also promises future restoration and peace.",
  },
  nahum: {
    name: "Nahum",
    howToType: "nahum",
    summary: "Nahum prophesies the fall of Nineveh, the capital of Assyria.",
  },
  habakkuk: {
    name: "Habakkuk",
    howToType: "habakkuk",
    summary:
      "Habakkuk questions God's justice but ultimately trusts in His plan for judgment and salvation.",
  },
  zephaniah: {
    name: "Zephaniah",
    howToType: "zephaniah",
    summary:
      "Zephaniah warns of the coming Day of the Lord and calls for repentance.",
  },
  haggai: {
    name: "Haggai",
    howToType: "haggai",
    summary:
      "Haggai encourages the rebuilding of the temple and promises God's blessings.",
  },
  zechariah: {
    name: "Zechariah",
    howToType: "zechariah",
    summary:
      "Zechariah contains visions and prophecies encouraging the returnees to complete the temple and look forward to the coming Messiah.",
  },
  malachi: {
    name: "Malachi",
    howToType: "malachi",
    summary:
      "Malachi addresses the spiritual apathy of the people and calls for renewed faithfulness to God.",
  },
  matthew: {
    name: "Matthew",
    howToType: "matthew",
    summary:
      "Matthew presents Jesus as the promised Messiah, emphasizing His teachings and fulfillment of Old Testament prophecies.",
  },
  mark: {
    name: "Mark",
    howToType: "mark",
    summary:
      "Mark focuses on the actions and miracles of Jesus, portraying Him as the suffering servant and Son of God.",
  },
  luke: {
    name: "Luke",
    howToType: "luke",
    summary:
      "Luke provides a detailed account of Jesus' life, ministry, death, and resurrection, highlighting His compassion and inclusivity.",
  },
  john: {
    name: "John",
    howToType: "john",
    summary:
      "John emphasizes the divinity of Jesus and His role as the Word made flesh, offering eternal life to believers.",
  },
  acts: {
    name: "Acts",
    howToType: "acts",
    summary:
      "Acts chronicles the early church's growth and the spread of the gospel through the apostles, particularly Peter and Paul.",
  },
  romans: {
    name: "Romans",
    howToType: "romans",
    summary:
      "Romans outlines the core doctrines of Christianity, including justification by faith and the righteousness of God.",
  },
  "1corinthians": {
    name: "1 Corinthians",
    howToType: "1corinthians",
    summary:
      "1 Corinthians addresses various issues in the Corinthian church, offering guidance on unity, morality, and spiritual gifts.",
  },
  "2corinthians": {
    name: "2 Corinthians",
    howToType: "2corinthians",
    summary:
      "2 Corinthians is a personal letter from Paul, defending his apostleship and encouraging reconciliation.",
  },
  galatians: {
    name: "Galatians",
    howToType: "galatians",
    summary:
      "Galatians emphasizes salvation by grace through faith, countering the influence of Judaizers.",
  },
  ephesians: {
    name: "Ephesians",
    howToType: "ephesians",
    summary:
      "Ephesians explores the unity of the church in Christ and the spiritual blessings of believers.",
  },
  philippians: {
    name: "Philippians",
    howToType: "philippians",
    summary:
      "Philippians is a letter of joy and encouragement, urging believers to live humbly and faithfully.",
  },
  colossians: {
    name: "Colossians",
    howToType: "colossians",
    summary:
      "Colossians highlights the supremacy of Christ and warns against false teachings.",
  },
  "1thessalonians": {
    name: "1 Thessalonians",
    howToType: "1thessalonians",
    summary:
      "1 Thessalonians encourages the church to remain steadfast in faith and look forward to Christ's return.",
  },
  "2thessalonians": {
    name: "2 Thessalonians",
    howToType: "2thessalonians",
    summary:
      "2 Thessalonians addresses misunderstandings about the Day of the Lord and encourages perseverance.",
  },
  "1timothy": {
    name: "1 Timothy",
    howToType: "1timothy",
    summary:
      "1 Timothy provides instructions for church leadership and sound doctrine.",
  },
  "2timothy": {
    name: "2 Timothy",
    howToType: "2timothy",
    summary:
      "2 Timothy is Paul's final letter, urging Timothy to remain faithful and strong in the face of persecution.",
  },
  titus: {
    name: "Titus",
    howToType: "titus",
    summary:
      "Titus offers guidance on church organization and the importance of good works.",
  },
  philemon: {
    name: "Philemon",
    howToType: "philemon",
    summary:
      "Philemon is a personal letter from Paul, appealing for the forgiveness and restoration of a runaway slave.",
  },
  hebrews: {
    name: "Hebrews",
    howToType: "hebrews",
    summary:
      "Hebrews emphasizes the superiority of Christ and encourages perseverance in faith.",
  },
  james: {
    name: "James",
    howToType: "james",
    summary:
      "James offers practical advice on living out one's faith through good works and righteous behavior.",
  },
  "1peter": {
    name: "1 Peter",
    howToType: "1peter",
    summary:
      "1 Peter encourages believers to endure suffering and remain faithful, highlighting their identity in Christ.",
  },
  "2peter": {
    name: "2 Peter",
    howToType: "2peter",
    summary:
      "2 Peter warns against false teachers and emphasizes the certainty of Christ's return.",
  },
  "1john": {
    name: "1 John",
    howToType: "1john",
    summary: "1 John focuses on love, truth, and assurance of salvation.",
  },
  "2john": {
    name: "2 John",
    howToType: "2john",
    summary:
      "2 John warns against false teachers and emphasizes the importance of abiding in the truth.",
  },
  "3john": {
    name: "3 John",
    howToType: "3john",
    summary:
      "3 John commends hospitality and faithfulness, contrasting it with the behavior of a disruptive church leader.",
  },
  jude: {
    name: "Jude",
    howToType: "jude",
    summary:
      "Jude warns against false teachers and urges believers to contend for the faith.",
  },
  revelation: {
    name: "Revelation",
    howToType: "revelation",
    summary:
      "Revelation contains apocalyptic visions of the end times, emphasizing the ultimate victory of Christ and the establishment of God's kingdom.",
  },
};

export default booksList