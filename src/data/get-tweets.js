import _ from "underscore"

const statusUpdates = [
  "The real story here is why are there so many illegal leaks coming out of Washington? Will these leaks be happening as I deal on N.Korea etc?",
  "Wonderful meeting with Canadian PM @JustinTrudeau and a group of leading CEO's & business women from Canada🇨🇦and the United States🇺🇸",
  "Our legal system is broken! '77% of refugees allowed into U.S. since travel reprieve hail from seven suspect countries.'' (WT)  SO DANGEROUS!",
  "AMAZING",
  "Sure, our country is run by money addicts, but it's also run by blackmailed money addicts HAPPY VALENTINES DAY!  с днем ​​Святого Валентина!",
  "I'll say this, when I'm brilliant that's real fun and nice, but when I'm astoundingly stupid, that's when I know who my friends are.",
  "In interviews during the election campaign, Bannon openly described Trump as a “blunt instrument” for his ideological goals.",
  "What's worked 4 the right 4 a long time is 2 point to others & accuse them of doing what they themselves r doing.  Trump nails it daily",
  "To restore hope for communities left behind, leaders must enable new business creation across the entire US.",
  "Congratulations @RepFredUpton, @RepDianaDeGette, @SenAlexander and @PattyMurray for leadership in passing the 21st Century #CuresAct",
  "Great talk with @CliftonLeaf at #FortuneHealth about @ParkerICI and the future of philanthropy. http://for.tn/2fgMbdX",
  "Today is Friends Day! To celebrate, members of our community came together to talk about the importance of friendship on #friendsday",
  "Today we're proud to announce the first test flight of Aquila — it flies on roughly the power of three blowdryers!",
  "One billion people now use Messenger every month. Celebrate with us by sending a balloon emoji in any conversation!",
  "Today Mark and @POTUS talked about the importance of entrepreneurship. Tune in here to watch what they had to say: http://bit.ly/292H8vE "
]

const users = [
  { username: "Donald J. Trump", profile_image_url: "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_bigger.jpg" },
  { username: "Sarah Silverman", profile_image_url: "https://pbs.twimg.com/profile_images/533405266658615296/ULwCXwFs_bigger.jpeg" },
  { username: "Sean Parker", profile_image_url: "https://pbs.twimg.com/profile_images/667460178762035200/zs67WqsI_bigger.jpg" },
  { username: "Mark Zuckerberg", profile_image_url: "https://pbs.twimg.com/profile_images/1146014416/mark-zuckerberg_bigger.jpg" },
  { username: "All Dogs Matter", profile_image_url: "https://pbs.twimg.com/profile_images/567703458162413569/WOGZ2nlT_bigger.jpeg" }
]

const generateTweet = (offset, id) => {
  return {
    id: id + offset,
    created_at: new Date(_.random(1480000000658, 1487092516658)).toString(),
    text: _.sample(statusUpdates),
    user: _.sample(users)
  }
}

export const getTweets = (num = 10, offset = 0) => {
  return _.times(num, _.partial(generateTweet, offset))
}
