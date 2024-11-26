const config = {
    domain: "dailystandupbuddy.com",
    title: "Daily Standup Buddy",
    description: "Ambitious doesn't have to be lonely. Build connections with peers in your city to share your journey with.",
    subscribeForm: "https://dashboard.mailerlite.com/forms/631411/101265918935434456/share",

    socials: {
        twitter: "https://x.com/artsofbaniya",
    },

    contents: {
        title: "Meet new peers and grow together on Daily Standup Buddy",
        description: `Say goodbye to loneliness and hello to a supportive community that fuels your progress, within your city.`,
        markOfTitle: "Daily Standup Buddy", // its for marking the title. The text must contain on title. If not, it will be ignored.

        about: [
            {
                id: 1,
                emoji: "💡",
                title: "Execute on Your Goals",
                description: "The buddy system helps you to execute on your goals by getting you to plan, and stick to daily commitments."
            },
            {
                id: 2,
                emoji: "🚀",
                title: "Learn from People",
                description: "Standup is a great way to learn what people are up to, and get feedback on your own progress regularly."
            },
            {
                id: 3,
                emoji: "🌎",
                title: "Create Authentic Connections",
                description: "Grow deeper connections when you interact with your crew on a regular basis and share your journey, without sacrificing hours of your day on small talk."
            }
        ],

        howWorks: [
            {
                title: "Sign up!",
                description: "Sign up to get added to a standup crew."
            },
            {
                title: "Set your preferences",
                description: "Enter your location, time-preference, and other matching preferences."
            },
            {

                title: "Get matched!",
                description: "StandUp Buddy matches forms a crew of 2-3 people who are geographically close to you to have standups with for the next sprint."
            },
            {
                title: "IRL KickOff",
                description: "It works best when you meet your crew in person for the first time over a weekend to get to know each other."
            },
            {
                title: "DailyStandups!",
                description: "A call where you share your learnigns and next steps.!"
            },
            {
                title: "Check-in",
                description: "Your crew members will get nudged to check-in and share progress on daily goals."
            },
            {
                title: "End of Sprint",
                description: "Congratulations on completing your sprint. Get matched with a new crew for the next sprint to keep meeting new people."
            },
        ],

        price: {
            description: "Being ambitious doesn't have to be lonely and sharing growth experiences periodically is the best way to bond.",
            price: "9$",

            advantages: ['Judgement free accountability', 'Meet side-hustlers or self-employed professionals in your city.', 'Natural way to bond with like-minded people.', 'No time wasted on small talk.', 'Get Things Done!']
        },

        faq: [
            {
                question: "What is The Standup Buddy?",
                answer: "The Standup Buddy is the first steps towards a new way of forming authentic connections as busy adults in metropoliton cities."
            },
            {
                question: "How many people are in a crew?",
                answer: "A crew consists of 2-3 people. This number to ensure you are able to genuinely listen to each other's journey."
            },

            {
                question: "Is meeting in person required?",
                answer: "It's optional. But highly recommended based on our experiments so far."
            },
            {
                question: "How long is a sprint?",
                answer: "At the time of launch, sprints are 4 weeks long."
            },
            {
                question: "How often do we meet?",
                answer: "Once in-person over a weekend before the sprint starts. Then virtually for the daily standups. Though the crew can choose to meet irl on their own."
            },
            {
                question: "Is The Product available globally?",
                answer: "We're focusing on San Francisco for now. Will expand to other cities soon."
            },
            {
                question: "Why change crew every sprint?",
                answer: "You should experiment with different people to find the right support system for your goals. Also, there's always a chance people will grow in their goals and not need the existing crew anymore."
            }
        ]
    }
}


export default config;