// Prompt Library Database with Predefined Examples & Categories
const promptLibrary = [
    {
        id: 1,
        keyword: "Explain simply",
        category: "learning",
        bestFor: "Your content is too technical or complex. You need a version that anyone can understand.",
        whyItWorks: "Simplicity builds understanding and confidence. People engage with content they can follow.",
        time: "2 min",
        template: `Task: Explain this concept in simple language.\nContext: [Describe what you're explaining: "How AI content creation works" or "What machine learning is"]\nAudience: [Who is reading: "a 14-year-old" or "someone with no tech background" or "busy business owners"]\nPurpose: [Why they need to know: "to understand the basics before training" or "to explain to their team"]\nTone: Friendly, conversational, no jargon.\nFormat: 2-3 short paragraphs or bullet points.\nMust include: A relatable everyday analogy or comparison.`,
        exampleValues: {
            "Describe what you're explaining": "How machine learning algorithms recognize images",
            "Who is reading": "a 14-year-old student with no computer science background",
            "Why they need to know": "to understand the basic logic behind modern smartphone photo apps"
        },
        examplePrompt: `Task: Explain this concept in simple language.\nContext: How machine learning algorithms recognize images\nAudience: a 14-year-old student with no computer science background\nPurpose: to understand the basic logic behind modern smartphone photo apps\nTone: Friendly, conversational, no jargon.\nFormat: 2-3 short paragraphs or bullet points.\nMust include: A relatable everyday analogy or comparison.`
    },
    {
        id: 2,
        keyword: "Summarise",
        category: "productivity",
        bestFor: "You have a long document, email thread, meeting, or article and need the key points fast.",
        whyItWorks: "Summarisation saves time and pulls out what actually matters. It's one of the highest-ROI uses of AI.",
        time: "2 min",
        template: `Task: Summarise the following content into key points, decisions, and action items.\nContent: [Paste or describe what you're summarizing]\nAudience: [Who will read the summary: "a team lead" or "executives" or "a client"]\nPurpose: [What do they need from this: "to understand what was decided" or "to know what action comes next"]\nFormat: [Specific format: "5 bullet points" or "a 1-paragraph summary" or "a table with issues, decisions, and actions"]\nTone: Professional, clear, direct.\nLength: [Maximum words: "under 200 words" or "one page"]`,
        exampleValues: {
            "Paste or describe what you're summarizing": "An email thread regarding a delay in the web app launch from Q2 to Q3 due to security compliance auditing.",
            "Who will read the summary": "the marketing and sales team leads",
            "What do they need from this": "to know when they can start scheduling promotional campaigns and new launch materials",
            "Specific format": "3 clear bullet points summarizing the cause, new date, and immediate adjustments needed",
            "Maximum words": "under 150 words"
        },
        examplePrompt: `Task: Summarise the following content into key points, decisions, and action items.\nContent: An email thread regarding a delay in the web app launch from Q2 to Q3 due to security compliance auditing.\nAudience: the marketing and sales team leads\nPurpose: to know when they can start scheduling promotional campaigns and new launch materials\nFormat: 3 clear bullet points summarizing the cause, new date, and immediate adjustments needed\nTone: Professional, clear, direct.\nLength: under 150 words`
    },
    {
        id: 3,
        keyword: "Compare",
        category: "learning",
        bestFor: "You need to understand the differences between two or more options, approaches, or ideas.",
        whyItWorks: "Comparison highlights trade-offs and helps you choose. It surfaces what one option does better than another.",
        time: "3 min",
        template: `Task: Compare these [items/ideas/approaches/tools] and show the key differences.\nItems to compare: [List the 2-4 things you're comparing: "AI tool A vs. AI tool B" or "Traditional method vs. AI method"]\nContext: [Your specific situation: "We're deciding which AI tool to use for social media" or "I need to explain why AI is faster"]\nDimensions to compare: [What matters to you: "cost, ease of use, output quality" or "time saved, features, learning curve"]\nFormat: [Table, side-by-side bullets, or narrative]\nTone: Neutral, factual, no bias.\nFocus: [What's most important: "practical differences" or "advantages and disadvantages"]`,
        exampleValues: {
            "items/ideas/approaches/tools": "workspace communication applications",
            "List the 2-4 things you're comparing": "Slack vs. Microsoft Teams vs. Discord for work",
            "Your specific situation": "A remote-first startup with 15 employees looking for an affordable, informal yet organized communication platform",
            "What matters to you": "pricing, integration options, ease of configuration, file searchability, and mobile app performance",
            "Table, side-by-side bullets, or narrative": "A comparison table with columns for Tool, Pros, Cons, and Startup Recommendation",
            "What's most important": "practical workflow speed and budget constraints"
        },
        examplePrompt: `Task: Compare these workspace communication applications and show the key differences.\nItems to compare: Slack vs. Microsoft Teams vs. Discord for work\nContext: A remote-first startup with 15 employees looking for an affordable, informal yet organized communication platform\nDimensions to compare: pricing, integration options, ease of configuration, file searchability, and mobile app performance\nFormat: A comparison table with columns for Tool, Pros, Cons, and Startup Recommendation\nTone: Neutral, factual, no bias.\nFocus: practical workflow speed and budget constraints`
    },
    {
        id: 4,
        keyword: "List ideas",
        category: "creative",
        bestFor: "You need brainstorm output, options, or inspiration. You're stuck creatively or strategically.",
        whyItWorks: "Listing generates volume. You pick the best ideas and discard the rest. Quantity first, curation second.",
        time: "3 min",
        template: `Task: Generate a list of [ideas/suggestions/options] for [your specific need].\nContext: [What you're working on: "social media campaign for a beauty brand" or "blog post topics for a SaaS company"]\nConstraints: [Who is the audience: "Gen Z" or "busy professionals" or "corporate executives"]\nTone/Style: [What vibe: "playful and trendy" or "professional and authoritative" or "educational and approachable"]\nQuantity: [How many ideas: "10 ideas" or "20 options"]\nFormat: [Brief description or title and 1-2 sentence explanation for each]\nMust include: [Any specific requirement: "at least 3 ideas about sustainability" or "include trend-based options"]`,
        exampleValues: {
            "ideas/suggestions/options": "interactive workshop activities",
            "your specific need": "a virtual team-building session",
            "What you're working on": "A quarterly reset meeting for an remote engineering team of 25 people who are feeling zoom-fatigued",
            "Who is the audience": "highly technical, introverted software engineers and product managers",
            "What vibe": "lighthearted, interactive, and zero cheesy corporate icebreakers",
            "How many ideas": "8 distinct ideas",
            "Brief description or title and 1-2 sentence explanation for each": "Title, time required, materials needed, and step-by-step description for each",
            "Any specific requirement": "at least 3 options that do not require turning video cameras on"
        },
        examplePrompt: `Task: Generate a list of interactive workshop activities for a virtual team-building session.\nContext: A quarterly reset meeting for an remote engineering team of 25 people who are feeling zoom-fatigued\nConstraints: highly technical, introverted software engineers and product managers\nTone/Style: lighthearted, interactive, and zero cheesy corporate icebreakers\nQuantity: 8 distinct ideas\nFormat: Title, time required, materials needed, and step-by-step description for each\nMust include: at least 3 options that do not require turning video cameras on`
    },
    {
        id: 5,
        keyword: "Give examples",
        category: "learning",
        bestFor: "You're explaining something and need concrete, relatable illustrations.",
        whyItWorks: "Examples make abstract ideas stick. They prove your point and make people say 'oh, I get it now.'",
        time: "2 min",
        template: `Task: Provide [number] concrete examples of [concept/approach/strategy].\nConcept: [What you need examples of: "ways to use AI for content repurposing" or "examples of good social media hooks"]\nContext: [Your industry or situation: "for a B2B SaaS company" or "for a small business with one marketer"]\nAudience: [Who will use these: "learners with no AI experience" or "experienced marketers looking to improve"]\nStyle: [Should be: "relatable and workplace-based" or "trending and Gen Z" or "professional and formal"]\nFormat: [Structure: "title + 2-sentence explanation for each example" or "a short scenario for each"]\nMust show: [What's important: "before and after" or "the problem and the solution" or "step-by-step process"]`,
        exampleValues: {
            "number": "4",
            "concept/approach/strategy": "ethical ways to integrate generative AI in college essays",
            "Your industry or situation": "higher education and student learning resources",
            "Who will use these": "undergraduate students looking for academic integrity guidelines",
            "Should be": "clear, academic, supportive, and realistic",
            "Structure": "a brief scenario describing the student task + the approved AI method + why it's considered ethical",
            "What's important": "how the student remains the active author while using AI as a cognitive assistant"
        },
        examplePrompt: `Task: Provide 4 concrete examples of ethical ways to integrate generative AI in college essays.\nConcept: ethical ways to integrate generative AI in college essays\nContext: higher education and student learning resources\nAudience: undergraduate students looking for academic integrity guidelines\nStyle: clear, academic, supportive, and realistic\nFormat: a brief scenario describing the student task + the approved AI method + why it's considered ethical\nMust show: how the student remains the active author while using AI as a cognitive assistant`
    },
    {
        id: 6,
        keyword: "Create a checklist",
        category: "productivity",
        bestFor: "You need to ensure nothing is missed. You want learners or team to follow a repeatable process.",
        whyItWorks: "Checklists reduce errors and give people confidence. They turn vague instructions into actionable steps.",
        time: "4 min",
        template: `Task: Create a checklist for [process/task/review].\nProcess: [What are they checking: "reviewing AI-generated social media captions" or "writing a good AI prompt" or "planning a content campaign"]\nContext: [Who will use it: "marketers with varied experience levels" or "facilitators teaching others" or "solo content creators"]\nUse case: [When/why they'll use it: "before posting content" or "when they're stuck and need guidance" or "to ensure consistency"]\nDetail level: [How detailed: "quick checklist (5-8 items)" or "comprehensive checklist (15-20 items)"]\nFormat: [Checkbox style: "Yes/No questions" or "Action items to complete" or "Things to verify"]\nMust include: [Any specific focus: "safety considerations" or "brand alignment checks" or "quality standards"]`,
        exampleValues: {
            "process/task/review": "pre-publishing review of AI-assisted blog posts",
            "What are they checking": "reviewing AI-generated blog content for human tone, structure, and readability",
            "Who will use it": "junior content editors and freelance writers",
            "When/why they'll use it": "immediately after drafting in the AI editor, before submitting to the editor-in-chief",
            "How detailed": "comprehensive checklist (10-12 items)",
            "Checkbox style": "Action items to complete, structured under sections like Fact-Checking, Tone, and SEO Compliance",
            "Any specific focus": "plagiarism verification, tone adjustment criteria, and double-checking source links"
        },
        examplePrompt: `Task: Create a checklist for pre-publishing review of AI-assisted blog posts.\nProcess: reviewing AI-generated blog content for human tone, structure, and readability\nContext: junior content editors and freelance writers\nUse case: immediately after drafting in the AI editor, before submitting to the editor-in-chief\nDetail level: comprehensive checklist (10-12 items)\nFormat: Action items to complete, structured under sections like Fact-Checking, Tone, and SEO Compliance\nMust include: plagiarism verification, tone adjustment criteria, and double-checking source links`
    },
    {
        id: 7,
        keyword: "Turn into a table",
        category: "productivity",
        bestFor: "You have information scattered across text and need it organized visually.",
        whyItWorks: "Tables make comparison easy. They help readers scan fast and find what they need instantly.",
        time: "4 min",
        template: `Task: Organize this information into a clear table.\nInformation to organize: [Describe what you have: "pros and cons of different AI tools" or "content ideas for 4 different audience segments"]\nTable columns: [What should the table show: "Idea, Best Format, Why It Works, Best Platform" or "Challenge, Why It's Hard, How AI Helps, Example"]\nRows/items: [How many rows: "7 items" or "20 options"]\nContext: [Why this table matters: "to help learners quickly compare options" or "to organize content ideas for the month"]\nAudience: [Who will read it: "busy marketers who scan fast" or "facilitators teaching others" or "team leads making decisions"]\nTone: Professional, clear, scannable.`,
        exampleValues: {
            "Describe what you have": "The features, pricing, and key limitations of three design software platforms: Figma, Canva, and Adobe Illustrator",
            "What should the table show": "Software name, Primary Target User, Core Strengths, Pricing Structure, and Biggest Bottleneck",
            "How many rows": "3 main software comparison rows plus a summary bottom row",
            "Why this table matters": "to help non-design business managers decide which licenses to purchase for their team",
            "Who will read it": "small business executives who scan quickly for financial and training impact"
        },
        examplePrompt: `Task: Organize this information into a clear table.\nInformation to organize: The features, pricing, and key limitations of three design software platforms: Figma, Canva, and Adobe Illustrator\nTable columns: Software name, Primary Target User, Core Strengths, Pricing Structure, and Biggest Bottleneck\nRows/items: 3 main software comparison rows plus a summary bottom row\nContext: to help non-design business managers decide which licenses to purchase for their team\nAudience: small business executives who scan quickly for financial and training impact\nTone: Professional, clear, scannable.`
    },
    {
        id: 8,
        keyword: "Suggest headlines",
        category: "creative",
        bestFor: "You need attention-grabbing, clickable, or benefit-focused titles.",
        whyItWorks: "Headlines are the difference between 'someone reads this' and 'someone scrolls past.' Good headlines magnetize.",
        time: "3 min",
        template: `Task: Suggest [number] headline options for [content/section/post].\nContent: [What you're creating: "a blog post about AI content creation" or "a social media post promoting a product"]\nAudience: [Who are you trying to reach: "busy SME owners" or "Gen Z beauty enthusiasts" or "corporate professionals"]\nPlatform: [Where will it appear: "LinkedIn" or "Instagram feed" or "email subject line" or "blog post"]\nTone: [What style: "curiosity-driven" or "benefit-focused" or "trend-aware and playful" or "professional and authoritative"]\nHeadline style: [What approach: "questions, statements, numbers, or power words"]\nConstraints: [Any limits: "under 60 characters for Instagram" or "must include the word 'AI'" or "must evoke emotion"]\nMust avoid: [What not to do: "clickbait" or "generic language" or "overly promotional feel"]`,
        exampleValues: {
            "number": "6",
            "content/section/post": "an online webinar teaching small business owners how to use AI workflows to save 5 hours a week",
            "What you're creating": "a webinar promotional title",
            "Who are you trying to reach": "time-poor service business owners, local agency founders",
            "Where will it appear": "LinkedIn organic posts and event pages",
            "What style": "benefit-focused and urgency-driven",
            "What approach": "benefit statement mixed with specific numbers",
            "Any limits": "under 80 characters, must explicitly mention 'Time Saved'",
            "What not to do": "vague marketing speak or unrealistic promises"
        },
        examplePrompt: `Task: Suggest 6 headline options for a webinar promotional title.\nContent: an online webinar teaching small business owners how to use AI workflows to save 5 hours a week\nAudience: time-poor service business owners, local agency founders\nPlatform: LinkedIn organic posts and event pages\nTone: benefit-focused and urgency-driven\nHeadline style: benefit statement mixed with specific numbers\nConstraints: under 80 characters, must explicitly mention 'Time Saved'\nMust avoid: vague marketing speak or unrealistic promises`
    },
    {
        id: 9,
        keyword: "Rewrite for clarity",
        category: "writing",
        bestFor: "Your content is confusing, jargon-heavy, or doesn't land the way you intended.",
        whyItWorks: "Clarity improves engagement. When people understand something, they act on it.",
        time: "2 min",
        template: `Task: Rewrite this [content/message/section] for better clarity.\nOriginal content: [Paste or describe what needs rewriting: the email, caption, section, etc.]\nTarget audience: [Who's reading: "someone with no background knowledge" or "busy team leads scanning fast"]\nProblem with current version: [Why it's not working: "too technical" or "unclear what action to take" or "doesn't explain the benefit"]\nTone: [How it should feel: "friendly and encouraging" or "professional and confident" or "simple and direct"]\nLength: [How long should it be: "keep it same length but clearer" or "make it shorter" or "expand if needed for clarity"]\nKey message: [What must come through: "AI saves time" or "this is worth trying" or "here's how to start"]`,
        exampleValues: {
            "content/message/section": "an internal slack announcement regarding database migrations",
            "Paste or describe what needs rewriting": "\"We are deprecating the old database framework starting tonight at 11 PM EST, which means write operations will fail for roughly an hour. Please cache details locally if you are actively editing client sheets or you'll lose updates.\"",
            "Who's reading": "non-technical operations and customer success teams",
            "Why it's not working": "uses developer jargon ('deprecating', 'write operations') that makes it unclear what they actually need to do",
            "How it should feel": "clear, calm, and urgent but friendly",
            "How long should it be": "concise, bulleted action items",
            "What must come through": "Do not edit customer data between 11 PM and midnight tonight, otherwise it won't save"
        },
        examplePrompt: `Task: Rewrite this internal slack announcement regarding database migrations for better clarity.\nOriginal content: \"We are deprecating the old database framework starting tonight at 11 PM EST, which means write operations will fail for roughly an hour. Please cache details locally if you are actively editing client sheets or you'll lose updates.\"\nTarget audience: non-technical operations and customer success teams\nProblem with current version: uses developer jargon ('deprecating', 'write operations') that makes it unclear what they actually need to do\nTone: clear, calm, and urgent but friendly\nLength: concise, bulleted action items\nKey message: Do not edit customer data between 11 PM and midnight tonight, otherwise it won't save`
    },
    {
        id: 10,
        keyword: "Make it shorter",
        category: "writing",
        bestFor: "Your content is too long and losing people. You need the same message in fewer words.",
        whyItWorks: "Shorter content gets read. Longer content gets skimmed or skipped. Brevity respects your reader's time.",
        time: "2 min",
        template: `Task: Shorten this content to [target length/format].\nOriginal content: [Paste what you're shortening]\nCurrent length: [Tell AI roughly how many words/how long it is]\nTarget length: [How short: "one paragraph instead of three" or "under 150 words" or "one sentence per point instead of two"]\nWhat to keep: [What's essential: "the main benefit" or "the how-to steps" or "the call to action"]\nWhat can go: [What's less important: "background context" or "detailed examples" or "nice-to-know information"]\nTone: [Should feel: "punchy" or "professional" or "casual but clear"]\nUse case: [Where will it appear: "social media post" or "email subject line" or "tweet"]`,
        exampleValues: {
            "target length/format": "a brief LinkedIn post description",
            "Paste what you're shortening": "A detailed 400-word announcement about the company raising a Series A funding round, thanking the early clients, describing the office expansion plans, listing the job roles we plan to hire for, and expressing gratitude to investors.",
            "Tell AI roughly how many words/how long it is": "approx. 400 words",
            "How short": "under 120 words",
            "What's essential": "the $5M Series A fundraise, expanding our core engineering team, and hiring for open positions with a careers link",
            "What's less important": "detailed thank-you messages to individual early clients and workspace location updates",
            "Should feel": "confident, celebratory, and punchy",
            "Where will it appear": "LinkedIn status update"
        },
        examplePrompt: `Task: Shorten this content to a brief LinkedIn post description.\nOriginal content: A detailed 400-word announcement about the company raising a Series A funding round, thanking the early clients, describing the office expansion plans, listing the job roles we plan to hire for, and expressing gratitude to investors.\nCurrent length: approx. 400 words\nTarget length: under 120 words\nWhat to keep: the $5M Series A fundraise, expanding our core engineering team, and hiring for open positions with a careers link\nWhat can go: detailed thank-you messages to individual early clients and workspace location updates\nTone: confident, celebratory, and punchy\nUse case: LinkedIn status update`
    },
    {
        id: 11,
        keyword: "Make it more professional",
        category: "writing",
        bestFor: "Your content feels too casual, branded wrong, or doesn't match your audience's expectations.",
        whyItWorks: "Professional tone builds trust. It signals competence and credibility.",
        time: "2 min",
        template: `Task: Rewrite this to sound more professional.\nOriginal content: [Paste what needs upgrading]\nContext: [Why professional tone matters: "it's going to a board" or "it's for corporate clients" or "it needs to match brand standards"]\nAudience: [Who's reading: "executives" or "enterprise clients" or "formal stakeholders"]\nCurrent tone: [What's the problem: "too casual" or "too friendly" or "sounds like AI-generated marketing speak"]\nMaintain: [What to keep: "the conversational feel but in professional language" or "the personality but elevated"]\nAvoid: [What not to do: "jargon" or "corporate cliches" or "losing the warmth"]\nFormat: [Same format or restructured: "same structure but elevated language" or "reorganize for formal presentation"]`,
        exampleValues: {
            "Paste what needs upgrading": "\"Hey team, just wanted to say we did super awesome on the project layout. Some stuff was a bit chaotic at the end but we pulled it off! Let's not make the same mistakes on the deadline next month, okay? Thanks for grinding.\"",
            "Why professional tone matters": "It is an official email update from the Project Director to be stored in the archive dashboard",
            "Who's reading": "department managers, VP of operations, and internal execution teams",
            "What's the problem": "too slang-heavy ('super awesome', 'chaotic', 'grinding') and feels too informal for permanent records",
            "What to keep": "appreciation for the hard work, acknowledgment of operational bottlenecks, and recommendation to refine schedules going forward",
            "What not to do": "blaming individuals or sounding overly corporate and cold",
            "same structure but elevated language" : "a structured, encouraging internal email update"
        },
        examplePrompt: `Task: Rewrite this to sound more professional.\nOriginal content: \"Hey team, just wanted to say we did super awesome on the project layout. Some stuff was a bit chaotic at the end but we pulled it off! Let's not make the same mistakes on the deadline next month, okay? Thanks for grinding.\"\nContext: It is an official email update from the Project Director to be stored in the archive dashboard\nAudience: department managers, VP of operations, and internal execution teams\nCurrent tone: too slang-heavy ('super awesome', 'chaotic', 'grinding') and feels too informal for permanent records\nMaintain: appreciation for the hard work, acknowledgment of operational bottlenecks, and recommendation to refine schedules going forward\nAvoid: blaming individuals or sounding overly corporate and cold\nFormat: a structured, encouraging internal email update`
    },
    {
        id: 12,
        keyword: "Create 5 options",
        category: "creative",
        bestFor: "You need variety. You want multiple versions to test or choose from.",
        whyItWorks: "Options give you choice. One version might not resonate; three usually has a winner.",
        time: "4 min",
        template: `Task: Create [number] different versions/options of [content].\nContent type: [What are you creating options for: "social media captions" or "subject lines" or "product descriptions" or "calls-to-action"]\nContext: [What's the content about: "promoting a new beauty product launch" or "recruiting for a job opening" or "announcing a feature update"]\nAudience: [Who's it for: "Gen Z on Instagram" or "busy professionals on LinkedIn" or "email subscribers"]\nApproach: [How should they differ: "different hooks" or "different tones" or "different benefits highlighted" or "different platforms in mind"]\nTone variation: [Range of styles: "1 playful, 1 professional, 1 benefit-focused, 1 FOMO-driven, 1 educational"]\nFormat: [How to present: "list each option separately" or "show as a table" or "label each clearly"]\nContext for each: [Include brief note: "Best for Instagram" or "For email subscribers" or "High urgency angle"]`,
        exampleValues: {
            "number": "5",
            "content": "an email subject line welcoming new users",
            "What are you creating options for": "welcoming email subject lines",
            "What's the content about": "welcoming newly registered freelancers to a platform for remote copy editing jobs",
            "Who's it for": "freelance copywriters and editors globally",
            "how should they differ": "varying focus on curiosity, immediate benefit, community, startup mission, and urgency",
            "Range of styles": "1 Benefit-led, 1 Short & Punchy, 1 Humorous, 1 Curiosity-gap, 1 Community-focused",
            "How to present": "numbered list with a 1-sentence analysis explaining who this option appeals to"
        },
        examplePrompt: `Task: Create 5 different versions/options of welcoming email subject lines.\nContent type: welcoming email subject lines\nContext: welcoming newly registered freelancers to a platform for remote copy editing jobs\nAudience: freelance copywriters and editors globally\nApproach: varying focus on curiosity, immediate benefit, community, startup mission, and urgency\nTone variation: 1 Benefit-led, 1 Short & Punchy, 1 Humorous, 1 Curiosity-gap, 1 Community-focused\nFormat: numbered list with a 1-sentence analysis explaining who this option appeals to`
    },
    {
        id: 13,
        keyword: "Include CTA",
        category: "writing",
        bestFor: "Your content exists but lacks direction. You need people to know what to do next.",
        whyItWorks: "Clear CTAs drive action. Without them, people read and do nothing. CTAs are the bridge from engagement to conversion.",
        time: "2 min",
        template: `Task: Add a call-to-action (CTA) to this [content/post/email/page].\nOriginal content: [Paste what needs a CTA]\nDesired action: [What do you want people to do: "click a link" or "reply with an idea" or "sign up" or "share the post" or "comment with their experience"]\nAudience: [Who should act: "busy marketers" or "business owners" or "social media followers"]\nUrgency level: [How urgent: "gentle invitation" or "moderate urgency" or "high urgency/limited time"]\nTone: [How the CTA should feel: "encouraging" or "professional" or "playful" or "direct"]\nFormat: [How many CTAs: "one strong CTA" or "2-3 options at different points" or "subtle CTA"]\nPlacement: [Where does it go: "at the very end" or "mid-way through" or "integrated naturally"]\nContext: [What makes it relevant: "they just learned something useful" or "they're already interested in the topic"]`,
        exampleValues: {
            "content/post/email/page": "a promotional newsletter email about an e-commerce checkout software update",
            "Paste what needs a CTA": "\"...that's why we added one-click Apple Pay support to the store pages. It decreases mobile abandonment rates by an average of 22%.\"",
            "What do you want people to do": "schedule a 10-minute setup consultation with their customer success representative",
            "Who should act": "e-commerce store operators, Shopify vendors",
            "How urgent": "moderate urgency (encouraging setting it up before the weekend rush)",
            "How the CTA should feel": "supportive, value-first, and highly direct",
            "How many CTAs": "2 distinct options (one direct hyperlink, one calendar schedule button)",
            "Where does it go": "immediately following the benefit stat and a secondary one at the email footer signoff",
            "What makes it relevant": "they just read a case study showing a 22% increase in sales conversion"
        },
        examplePrompt: `Task: Add a call-to-action (CTA) to this promotional newsletter email about an e-commerce checkout software update.\nOriginal content: \"...that's why we added one-click Apple Pay support to the store pages. It decreases mobile abandonment rates by an average of 22%.\"\nDesired action: schedule a 10-minute setup consultation with their customer success representative\nAudience: e-commerce store operators, Shopify vendors\nUrgency level: moderate urgency (encouraging setting it up before the weekend rush)\nTone: supportive, value-first, and highly direct\nFormat: 2 distinct options (one direct hyperlink, one calendar schedule button)\nPlacement: immediately following the benefit stat and a secondary one at the email footer signoff\nContext: they just read a case study showing a 22% increase in sales conversion`
    },
    {
        id: 14,
        keyword: "Adapt for [platform]",
        category: "writing",
        bestFor: "You have content that works in one place and need it for another. Different platforms have different rules, audiences, and formats.",
        whyItWorks: "Platform-specific content performs better. A LinkedIn post isn't an Instagram post isn't a TikTok.",
        time: "3 min",
        template: `Task: Adapt this content for [platform(s)].\nOriginal content: [Paste or describe what you're adapting]\nCurrent platform: [Where it currently lives: "LinkedIn" or "blog" or "email"]\nTarget platform(s): [Where it needs to go: "Instagram" or "TikTok" or "Email and LinkedIn"]\nKey difference to address: [What changes by platform: "format (character limits, video vs. static)" or "tone (professional vs. playful)" or "audience mindset (scrolling vs. deliberate reading)"]\nWhat to preserve: [What must stay the same: "the core message" or "the benefit" or "the call-to-action"]\nFormat adjustments: [How it should be different: "Instagram: visual-first with shorter caption. TikTok: hook in first 3 seconds. LinkedIn: professional and insight-driven."]\nHashtag strategy: [Include hashtags: "for Instagram and TikTok, include 5-8 relevant hashtags" or "LinkedIn, use 3-5 professional hashtags" or "email, no hashtags"]\nExamples: [If adapting for multiple platforms, show sample for each]`,
        exampleValues: {
            "platform(s)": "Twitter (X) thread and Instagram carousel outline",
            "Paste or describe what you're adapting": "A detailed 600-word case study showing how a bakery switched to online preorder sheets and reduced weekly organic waste by 40%.",
            "Where it currently lives": "Company website blog post",
            "Where it needs to go": "Twitter (X) thread and Instagram caption",
            "What changes by platform": "X needs punchy lines, statistics-first hook, character restrictions. Instagram needs a structured visual layout and aesthetic, emoji-rich style.",
            "What must stay the same": "the 40% reduction in food waste and transition to online preorder platform link",
            "How it should be different": "X: 4-tweet thread with graph placeholder. Instagram: Slides 1-5 layout directions with a short caption under 250 characters.",
            "Include hashtags": "X: no hashtags. Instagram: 5 relevant local bakery and sustainability hashtags."
        },
        examplePrompt: `Task: Adapt this content for Twitter (X) thread and Instagram carousel outline.\nOriginal content: A detailed 600-word case study showing how a bakery switched to online preorder sheets and reduced weekly organic waste by 40%.\nCurrent platform: Company website blog post\nTarget platform(s): Twitter (X) thread and Instagram caption\nKey difference to address: X needs punchy lines, statistics-first hook, character restrictions. Instagram needs a structured visual layout and aesthetic, emoji-rich style.\nWhat to preserve: the 40% reduction in food waste and transition to online preorder platform link\nFormat adjustments: X: 4-tweet thread with graph placeholder. Instagram: Slides 1-5 layout directions with a short caption under 250 characters.\nHashtag strategy: X: no hashtags. Instagram: 5 relevant local bakery and sustainability hashtags.`
    },
    {
        id: 15,
        keyword: "State assumptions",
        category: "productivity",
        bestFor: "You're giving AI context but want to make sure you're both on the same page. Or you're explaining something and want to call out what you're assuming about your audience.",
        whyItWorks: "Stating assumptions prevents misunderstandings. It surfaces hidden context that makes the difference between a good output and a useless one.",
        time: "2 min",
        template: `Task: Based on [scenario/context], what assumptions should I state or verify?\nYour scenario: [Describe your situation: "I'm writing a campaign for working moms" or "I'm creating training for people with no AI experience" or "I'm planning a relaunch for an old product"]\nAudience: [Who are you creating for or talking to: "busy SME owners" or "Gen Z followers" or "corporate clients"]\nKey uncertainties: [What you're not 100% sure about: "their budget level" or "their tech comfort" or "their pain points" or "their timeline"]\nImpact if wrong: [Why it matters: "if I assume they want budget-friendly and they want premium, I'll miss the mark" or "if I assume they understand AI and they don't, my instructions won't work"]\nStatement to make clear: [What you want to assume going forward: "I'm assuming your audience already uses social media regularly" or "I'm assuming you want to launch within 30 days" or "I'm assuming budget is under $5K"]`,
        exampleValues: {
            "scenario/context": "introducing a hybrid work policy schedule",
            "Describe your situation": "drafting a remote-work team agreement specifying that employees must work from the physical office on Tuesdays and Thursdays",
            "Who are you creating for or talking to": "a team of 40 developers, designers, and administrators",
            "What you're not 100% sure about": "whether their commutes allow arriving by 9 AM, if any staff have childcare duties conflicts on those specific days",
            "Why it matters": "if we mandate it without checking, key developers might resign due to rigid schedule conflicts",
            "What you want to assume going forward": "assuming that physical meeting blocks are only schedule-relevant on those in-office days and that core office hours remain 10 AM to 4 PM"
        },
        examplePrompt: `Task: Based on introducing a hybrid work policy schedule, what assumptions should I state or verify?\nYour scenario: drafting a remote-work team agreement specifying that employees must work from the physical office on Tuesdays and Thursdays\nAudience: a team of 40 developers, designers, and administrators\nKey uncertainties: whether their commutes allow arriving by 9 AM, if any staff have childcare duties conflicts on those specific days\nImpact if wrong: if we mandate it without checking, key developers might resign due to rigid schedule conflicts\nStatement to make clear: assuming that physical meeting blocks are only schedule-relevant on those in-office days and that core office hours remain 10 AM to 4 PM`
    },
    {
        id: 16,
        keyword: "Highlight risks",
        category: "productivity",
        bestFor: "You want to anticipate what could go wrong. Or you're presenting something and want stakeholders to understand the potential pitfalls.",
        whyItWorks: "Risk awareness builds credibility. It shows you've thought things through and aren't just optimistic. People trust people who see both the upside AND the downside.",
        time: "3 min",
        template: `Task: Identify potential risks or challenges with [idea/approach/content/plan].\nWhat you're evaluating: [Describe the idea: "launching a new social media campaign" or "using AI to write all our emails" or "switching to a new design tool"]\nContext: [Why you're doing this: "before we commit time/resources" or "to prepare the team for challenges" or "to ensure we're not missing anything"]\nDimensions to check: [What could go wrong: "audience reception, brand consistency, resource needs, timeline, budget, team capability, market response"]\nStakeholders affected: [Who needs to know: "the team executing" or "leadership deciding" or "clients affected by the change"]\nFormat: [How to present risks: "table with Risk / Impact / Mitigation" or "list with severity level" or "narrative explanation of top 3 risks"]\nAlso include: [What to show alongside risks: "mitigations for each risk" or "likelihood assessment" or "action plan to reduce risk"]`,
        exampleValues: {
            "idea/approach/content/plan": "switching the customer service desk completely to an AI automated chatbot",
            "Describe the idea": "replacing the first tier of human support emails and chats with a custom-trained GPT model",
            "Why you're doing this": "to handle a 200% surge in support requests during holiday sales without hiring additional winter staff",
            "What could go wrong": "AI giving incorrect product information, customer frustration with canned answers, brand tone matching issues",
            "Who needs to know": "the customer support director, the VP of Customer Experience, and the frontline support team",
            "How to present risks": "a risk matrix table mapping the Risk description, Likelihood (High/Med/Low), Impact level, and a Human fallback mitigation strategy",
            "What to show alongside risks": "concrete setup parameters to alert human operators for escalations"
        },
        examplePrompt: `Task: Identify potential risks or challenges with switching the customer service desk completely to an AI automated chatbot.\nWhat you're evaluating: replacing the first tier of human support emails and chats with a custom-trained GPT model\nContext: to handle a 200% surge in support requests during holiday sales without hiring additional winter staff\nDimensions to check: AI giving incorrect product information, customer frustration with canned answers, brand tone matching issues\nStakeholders affected: the customer support director, the VP of Customer Experience, and the frontline support team\nFormat: a risk matrix table mapping the Risk description, Likelihood (High/Med/Low), Impact level, and a Human fallback mitigation strategy\nAlso include: concrete setup parameters to alert human operators for escalations`
    }
];

// Helper to check/update counts on UI tabs
function updateTabCounts(filteredList) {
    const counts = {
        all: filteredList.length,
        productivity: 0,
        creative: 0,
        writing: 0,
        learning: 0
    };
    
    // We want the counts shown in tabs to always reflect the current search query filter!
    filteredList.forEach(item => {
        if (counts[item.category] !== undefined) {
            counts[item.category]++;
        }
    });

    document.getElementById("count-all").textContent = counts.all;
    document.getElementById("count-productivity").textContent = counts.productivity;
    document.getElementById("count-creative").textContent = counts.creative;
    document.getElementById("count-writing").textContent = counts.writing;
    document.getElementById("count-learning").textContent = counts.learning;
}

// Global Application State
const state = {
    searchQuery: "",
    activeCategory: "all",
    // Store user inputs for prompt building: key is 'promptId-variableName', value is text
    builderInputs: {},
    expandedCards: new Set()
};

// Elements
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const filterTabs = document.getElementById("filterTabs");
const activeFilterInfo = document.getElementById("activeFilterInfo");
const currentFilterText = document.getElementById("currentFilterText");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const promptsContainer = document.getElementById("promptsContainer");
const noResultsState = document.getElementById("noResultsState");
const clearSearchAllBtn = document.getElementById("clearSearchAllBtn");

// Learners Companion Drawer Navigation Elements
const openGuideBtn = document.getElementById("openGuideBtn");
const closeGuideBtn = document.getElementById("closeGuideBtn");
const guideBackdrop = document.getElementById("guideBackdrop");
const guideDrawer = document.getElementById("guideDrawer");
const drawerTabs = document.querySelectorAll(".drawer-tab");
const drawerTabContents = document.querySelectorAll(".drawer-tab-content");

// Initialize Event Listeners
function initEvents() {
    // Search event
    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        toggleClearSearchBtn();
        renderPrompts();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        toggleClearSearchBtn();
        searchInput.focus();
        renderPrompts();
    });

    // Category Tabs Filter
    filterTabs.addEventListener("click", (e) => {
        const tab = e.target.closest(".filter-tab");
        if (!tab) return;
        
        document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        state.activeCategory = tab.dataset.category;
        updateActiveFilterMessage();
        renderPrompts();
    });

    // Reset filter and search
    resetFilterBtn.addEventListener("click", resetFilters);
    clearSearchAllBtn.addEventListener("click", resetFilters);

    // Guide Drawer Toggles
    openGuideBtn.addEventListener("click", toggleGuideDrawer);
    closeGuideBtn.addEventListener("click", toggleGuideDrawer);
    guideBackdrop.addEventListener("click", toggleGuideDrawer);

    // Guide Drawer Internal Tabs
    document.querySelector(".drawer-tabs").addEventListener("click", (e) => {
        const tab = e.target.closest(".drawer-tab");
        if (!tab) return;

        drawerTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const targetTab = tab.dataset.drawerTab;
        drawerTabContents.forEach(content => {
            if (content.id === `drawer-${targetTab}`) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    });
}

function toggleClearSearchBtn() {
    if (state.searchQuery.length > 0) {
        clearSearchBtn.style.display = "flex";
    } else {
        clearSearchBtn.style.display = "none";
    }
}

function updateActiveFilterMessage() {
    if (state.activeCategory === "all") {
        activeFilterInfo.style.display = "none";
    } else {
        const categoriesMap = {
            productivity: "Productivity & Systems",
            creative: "Creative & Entertainment",
            writing: "Writing & Content",
            learning: "Learning & Analysis"
        };
        currentFilterText.textContent = categoriesMap[state.activeCategory] || state.activeCategory;
        activeFilterInfo.style.display = "block";
    }
}

function resetFilters() {
    searchInput.value = "";
    state.searchQuery = "";
    toggleClearSearchBtn();
    
    state.activeCategory = "all";
    document.querySelectorAll(".filter-tab").forEach(t => {
        if (t.dataset.category === "all") {
            t.classList.add("active");
        } else {
            t.classList.remove("active");
        }
    });
    updateActiveFilterMessage();
    renderPrompts();
}

function toggleGuideDrawer() {
    guideDrawer.classList.toggle("active");
    guideBackdrop.classList.toggle("active");
    document.body.style.overflow = guideDrawer.classList.contains("active") ? "hidden" : "";
}

// Variable Parsing Helper
function getPromptPlaceholders(templateText) {
    const regex = /\[([^\]]+)\]/g;
    const matches = [];
    let match;
    while ((match = regex.exec(templateText)) !== null) {
        const fullMatch = match[0];
        const insideText = match[1];
        
        let label = insideText;
        let placeholder = "Type custom value here...";
        
        const colonIdx = insideText.indexOf(":");
        if (colonIdx !== -1) {
            label = insideText.substring(0, colonIdx).trim();
            placeholder = insideText.substring(colonIdx + 1).trim();
            // strip surrounding quotes if they exist
            if (placeholder.startsWith('"') && placeholder.endsWith('"')) {
                placeholder = placeholder.substring(1, placeholder.length - 1);
            }
        }
        
        matches.push({
            full: fullMatch,
            inside: insideText,
            label: label,
            placeholder: placeholder
        });
    }
    return matches;
}

// Compiles the live template text, rendering custom fields in spans
function compileLiveTemplateHTML(prompt) {
    const placeholders = getPromptPlaceholders(prompt.template);
    let htmlContent = prompt.template;
    
    placeholders.forEach(ph => {
        const stateKey = `${prompt.id}-${ph.label}`;
        const userValue = state.builderInputs[stateKey];
        
        let spanClass = "variable-highlight";
        let displayVal = ph.full; // default is [bracketed text]
        
        if (userValue !== undefined && userValue.trim() !== "") {
            displayVal = userValue;
            spanClass += " dirty";
        }
        
        // Escape HTML in user values to prevent XSS
        const safeVal = displayVal.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        // Use a simple split/join approach for replacement to handle multiple duplicates safely
        htmlContent = htmlContent.split(ph.full).join(`<span class="${spanClass}" data-label="${ph.label}">${safeVal}</span>`);
    });
    
    return htmlContent.replace(/\n/g, "<br>");
}

// Compiles plain text of current template state for copy operations
function compilePlainPromptText(prompt) {
    const placeholders = getPromptPlaceholders(prompt.template);
    let textContent = prompt.template;
    
    placeholders.forEach(ph => {
        const stateKey = `${prompt.id}-${ph.label}`;
        const userValue = state.builderInputs[stateKey];
        const finalVal = (userValue !== undefined && userValue.trim() !== "") ? userValue : ph.full;
        textContent = textContent.split(ph.full).join(finalVal);
    });
    
    return textContent;
}

// Renders the main accordion list based on search and category filters
function renderPrompts() {
    let filteredList = promptLibrary;

    // Filter by Category
    if (state.activeCategory !== "all") {
        filteredList = filteredList.filter(item => item.category === state.activeCategory);
    }

    // Filter by Search Query
    if (state.searchQuery.length > 0) {
        filteredList = filteredList.filter(item => {
            return item.keyword.toLowerCase().includes(state.searchQuery) ||
                   item.bestFor.toLowerCase().includes(state.searchQuery) ||
                   item.whyItWorks.toLowerCase().includes(state.searchQuery) ||
                   item.template.toLowerCase().includes(state.searchQuery);
        });
    }

    // Always update tab counts according to search filter
    const searchFilteredList = promptLibrary.filter(item => {
        if (state.searchQuery.length === 0) return true;
        return item.keyword.toLowerCase().includes(state.searchQuery) ||
               item.bestFor.toLowerCase().includes(state.searchQuery) ||
               item.whyItWorks.toLowerCase().includes(state.searchQuery) ||
               item.template.toLowerCase().includes(state.searchQuery);
    });
    updateTabCounts(searchFilteredList);

    // If list is empty, display fallback card
    if (filteredList.length === 0) {
        promptsContainer.innerHTML = "";
        noResultsState.style.display = "block";
        return;
    }
    
    noResultsState.style.display = "none";
    promptsContainer.innerHTML = "";

    filteredList.forEach(prompt => {
        const isExpanded = state.expandedCards.has(prompt.id);
        const card = document.createElement("div");
        card.className = `prompt-card ${isExpanded ? "expanded" : ""}`;
        card.dataset.id = prompt.id;

        const placeholders = getPromptPlaceholders(prompt.template);
        const categoryLabel = prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1);

        // Build HTML content structure
        card.innerHTML = `
            <div class="prompt-header" onclick="toggleCard(${prompt.id})">
                <div class="prompt-header-left">
                    <div class="prompt-title-row">
                        <span class="prompt-keyword">${prompt.id}. ${prompt.keyword}</span>
                        <span class="prompt-category-badge badge-${prompt.category}">${categoryLabel}</span>
                    </div>
                    <div class="prompt-best-for">${prompt.bestFor}</div>
                </div>
                <div class="prompt-header-right">
                    <span class="prompt-time-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>${prompt.time}</span>
                    </span>
                    <span class="accordion-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                </div>
            </div>
            
            <div class="prompt-body" style="max-height: ${isExpanded ? 'none' : '0'}">
                <div class="prompt-content-inner">
                    <!-- Left: Interactive Template & Form -->
                    <div class="prompt-panel-left">
                        <div class="panel-title">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 18l6-6-6-6M8 6L2 12l6 6"></path></svg>
                            <span>Live Prompt Preview</span>
                        </div>
                        
                        <div class="prompt-template-container">
                            <div class="prompt-template-header">
                                <span class="template-badge">Ready to execute</span>
                                <button class="btn-copy-template" onclick="copyPromptText(${prompt.id}, this)">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="copy-svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    <span class="copy-text">Copy Prompt</span>
                                </button>
                            </div>
                            <div class="prompt-template-body" id="template-view-${prompt.id}">
                                ${compileLiveTemplateHTML(prompt)}
                            </div>
                        </div>
                        
                        <!-- Form fields block if placeholders exist -->
                        ${placeholders.length > 0 ? `
                        <div class="prompt-builder-card">
                            <div class="builder-title">Customize variables below:</div>
                            <div class="builder-fields-grid">
                                ${placeholders.map(ph => {
                                    const stateKey = `${prompt.id}-${ph.label}`;
                                    const currVal = state.builderInputs[stateKey] || "";
                                    
                                    // Render input or textarea based on description length
                                    const isLongField = ph.placeholder.length > 35 || ph.label.toLowerCase().includes("content") || ph.label.toLowerCase().includes("original");
                                    
                                    return `
                                        <div class="form-group">
                                            <label>${ph.label}</label>
                                            ${isLongField ? 
                                                `<textarea rows="3" placeholder="${ph.placeholder}" data-prompt-id="${prompt.id}" data-label="${ph.label}" oninput="updateVarValue(this)">${currVal}</textarea>` :
                                                `<input type="text" placeholder="${ph.placeholder}" value="${currVal}" data-prompt-id="${prompt.id}" data-label="${ph.label}" oninput="updateVarValue(this)">`
                                            }
                                        </div>
                                    `;
                                }).join("")}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    
                    <!-- Right: Guideline details & examples -->
                    <div class="prompt-panel-right">
                        <div class="meta-info-card">
                            <div class="meta-item">
                                <span class="meta-item-title">Why it works</span>
                                <span class="meta-item-desc">${prompt.whyItWorks}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-item-title">When to use</span>
                                <span class="meta-item-desc">${prompt.bestFor}</span>
                            </div>
                        </div>
                        
                        <div class="example-section">
                            <div class="panel-title">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <span>Example for Learners</span>
                            </div>
                            <div class="example-box">
                                <div class="example-box-header">
                                    <span class="example-badge">Real Scenario</span>
                                    <button class="btn-use-example" onclick="usePredefinedExample(${prompt.id})">
                                        Use Example values
                                    </button>
                                </div>
                                <div class="example-text">${prompt.examplePrompt.replace(/\n/g, "<br>")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        promptsContainer.appendChild(card);
    });
}

// Collapses or expands accordion card
window.toggleCard = function(id) {
    const cardElement = document.querySelector(`.prompt-card[data-id="${id}"]`);
    if (!cardElement) return;
    
    const bodyElement = cardElement.querySelector(".prompt-body");
    
    if (state.expandedCards.has(id)) {
        state.expandedCards.delete(id);
        cardElement.classList.remove("expanded");
        bodyElement.style.maxHeight = "0";
    } else {
        state.expandedCards.add(id);
        cardElement.classList.add("expanded");
        
        // Enable clean heights
        bodyElement.style.maxHeight = bodyElement.scrollHeight + "px";
        
        // Remove hardcoded height restriction after transition finishes so dynamic form fields can resize safely
        setTimeout(() => {
            if (state.expandedCards.has(id)) {
                bodyElement.style.maxHeight = "none";
            }
        }, 300);
    }
};

// Tracks real-time user entries
window.updateVarValue = function(element) {
    const promptId = parseInt(element.dataset.promptId);
    const label = element.dataset.label;
    const value = element.value;
    
    state.builderInputs[`${promptId}-${label}`] = value;
    
    // Refresh live preview HTML text without rebuilding full element nodes to prevent cursor resets
    const previewEl = document.getElementById(`template-view-${promptId}`);
    if (previewEl) {
        const prompt = promptLibrary.find(p => p.id === promptId);
        previewEl.innerHTML = compileLiveTemplateHTML(prompt);
    }
};

// Fills variables fields instantly with predefined example data
window.usePredefinedExample = function(promptId) {
    const prompt = promptLibrary.find(p => p.id === promptId);
    if (!prompt || !prompt.exampleValues) return;
    
    Object.keys(prompt.exampleValues).forEach(label => {
        state.builderInputs[`${promptId}-${label}`] = prompt.exampleValues[label];
    });
    
    // Re-render accordion card list to sync state values to DOM input tags
    renderPrompts();
    
    // Ensure card remains visibly expanded with appropriate height
    const cardElement = document.querySelector(`.prompt-card[data-id="${promptId}"]`);
    if (cardElement) {
        cardElement.classList.add("expanded");
        state.expandedCards.add(promptId);
        const bodyElement = cardElement.querySelector(".prompt-body");
        bodyElement.style.maxHeight = "none";
    }
};

// Copies custom compiled text to user clipboard with visual confirmation
window.copyPromptText = function(promptId, buttonEl) {
    const prompt = promptLibrary.find(p => p.id === promptId);
    if (!prompt) return;
    
    const plainText = compilePlainPromptText(prompt);
    
    navigator.clipboard.writeText(plainText).then(() => {
        // Toggle copy button state styles
        buttonEl.classList.add("success");
        const copyTextEl = buttonEl.querySelector(".copy-text");
        const originalText = copyTextEl.textContent;
        copyTextEl.textContent = "Copied!";
        
        // Revert icon and label after timeout
        setTimeout(() => {
            buttonEl.classList.remove("success");
            copyTextEl.textContent = originalText;
        }, 1800);
    }).catch(err => {
        console.error("Could not copy prompt text: ", err);
        alert("Copy failed. Please manually select the preview block text to copy.");
    });
};

// Application Bootstrapping
document.addEventListener("DOMContentLoaded", () => {
    initEvents();
    renderPrompts();
});
