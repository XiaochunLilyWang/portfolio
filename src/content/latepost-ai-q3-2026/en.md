For the Q3 2026 AI quarterly of *LateTalk*, we again invited Henry Yin, founding partner of MoE Capital, to discuss his observations on the quarter's AI developments. MoE Capital's LP and advisor network includes a number of researchers from frontier model companies such as Anthropic and OpenAI. Henry graduated from Tsinghua's Yao Class and was a co-founder of Merico. Our conversation leans toward the research and private-market perspective.

The review runs along two threads. Under "advancing the intelligence frontier," we discussed:

- **The model race**: OpenAI's latest model GPT-6 Astra, and Anthropic's Claude Opus 5.5.
- **Choosing directions**: beyond coding, what model use cases are the frontier companies exploring? This quarter we focused on frontier mathematics and on Astra's potential in robotics and physical AI.
- **A containment failure**: OpenAI's multi-agent system collaborated on an attack against Hugging Face. On discovering a way to communicate across agents they exclaimed "oh my god, I found another agent," gave their group a name, and developed a kind of "sacrificial" behaviour — and throughout the whole episode, not one agent reported this major breakout to any human at OpenAI. Solidarity.
- **Growth and the race to IPO**: over the six weeks from mid-August to late September, drawing on Bloomberg and Reuters reporting, OpenAI's ARR went from over $40 billion to nearly $70 billion, a rise of about 70% — passing Anthropic's figure of over $65 billion as of the end of July. The "OpenAI counterattack" we kept discussing in the first two quarterlies of the year is now here.

The second thread is "the diffusion of intelligence":

- A dense wave of **Flash model** updates: we counted thirteen Flash models released by the core model vendors. OpenAI joined the cost-performance frontier with GPT-6 Luna; MiMo-V2.6 Flash is cheaper in some modes than DeepSeek-V4.1-Flash; Kimi did not release a low-cost Flash/Lite line this quarter.
- The runaway success of the **Jev model**, where nothing beats speed. One idea it suggests is turning a basic programming construct into a model: letting a model make the many judgements that traditional software handles with if/else rules.
- On interaction, OpenAI brought out a new voice model series, **GPT-Live**, which is structurally close to the Interaction Models that Thinking Machines Lab (TML) released last quarter, though it cannot yet process video.

Within "the diffusion of intelligence" we gave particular attention to the recent surge in personal AI assistants. What directly set it off was Muse, launched by Meta on 8 September, which briefly topped the US App Store free download chart. At the close of the quarter, in the early hours of today Beijing time, OpenAI also released its own personal assistant product, Dots, at DevDay, as had been rumoured. Among startups there is Instinct, much discussed in Silicon Valley tech circles, plus Today AI, which also launched in early September, and Cue, which appeared the day before Dots.

A year ago over the National Day holiday, OpenAI launched the Sora app, and some people began to anticipate a new stage for consumer AI. The Sora app passed one million downloads in under five days (disclosed by Sora's lead); Muse passed 3.4 million downloads on day 16 (Sensor Tower data).

Last time, Sora's heat didn't hold: new users and retention kept falling, and the app was taken down in March this year. Will personal AI assistants be different?

## Meta and OpenAI release personal assistants, and the consumer AI wave returns

**LatePost**: OpenAI held DevDay in the early hours of today and released Dots, the long-rumoured personal assistant. What kind of product is it?

**Henry**: It's easy to understand — a personal assistant living permanently inside ChatGPT. It has its own cloud computer and browser, can run various tasks for you in the background, and can hand specific work off to Deep Research or Codex.

For now it is opening in batches mainly to Pro-level users, at $100, $200 and $500 a month (the $500 tier is new). Everyday chat with Dots doesn't consume quota, but calling Codex for complex tasks still consumes the corresponding compute allowance.

**LatePost**: Starting at $100 a month is a steep threshold, while Meta's Muse has a free tier with 100 million free tokens a week. Why are the two strategies so different?

**Henry**: Mostly the compute gap. Muse not only has a free tier, it hands out allowances freely: refer someone with an invite code and both the sharer and the user get a billion free tokens.

OpenAI doesn't currently have enough spare compute to fight a subsidised price war the way Meta can, so it has to prioritise users with high willingness to pay.

**LatePost**: Instinct, Muse, GrokBot, Dots — with so many personal AI assistants now, how do their forms and entry points differ?

**Henry**: The underlying logic is broadly similar, but each entry point is deeply tied to the company's own strengths:

OpenAI Dots: naturally focused on work, coding and complex task handling.

Meta Muse: aimed at mainstream daily life — travel, shopping, family schedules. Zuckerberg's pitch is extremely down-to-earth: "Muse will make you money."

Instinct: runs mainly over text messages (iMessage); interaction is extremely light, and firing off a message feels like contacting a human secretary.

GrokBot and Cue: more emphasis on multi-agent collaboration and division of labour. Cue, for instance, gives each agent its own email, phone number and wallet, splitting context management so multi-agent collaboration scales better.

**LatePost**: Some have standalone apps — Muse, Today AI, Cue — while others appear directly in a message feed, like Instinct and Dots. What are the trade-offs?

**Henry**: Something like Instinct, interacting mainly through text messages, feels more human, light and natural. But an app can still carry complex needs — displaying multiple tasks, maps, price comparisons. In the long run everyone will cover all the entry points: app, messaging, voice.

**LatePost**: Which of these have you or people around you used? How was it?

**Henry**: Muse has broken out further. Some friends' parents, who had never heard of OpenAI, have asked them what Muse is. Instinct is discussed more in tech circles; it was valued at $2.5 billion in August, and the $10 billion round has now closed.

I haven't used Instinct myself, because its privacy terms aren't friendly — it asks users for an irrevocable licence to access, use, store and even publish their data, and mentions it may use user data to train models; it also looks at screenshots, keyboard input and so on. That was an earlier version of the terms and there have been updates since, but in any case I haven't used it.

Friends of mine who have used Instinct rate it highly. One friend had taken the Japanese N1 exam and received the results email. He was asleep at the time, and Instinct logged into the site, checked his score and sent him a congratulations email. He was delighted. It isn't only efficiency — there's emotional value too. It has an eye for what needs doing.

**LatePost**: What conditions have made personal assistants take off again? People have worked on this direction for years, but it never really caught on.

**Henry**: I see two core variables. First, models' browser use and computer use have matured. A lot of product ideas that couldn't be made to work a year ago can be taken out and built again. The first task I gave Muse was to hire a temp worker on TaskRabbit. It opened the pages itself and went through the flow step by step, only popping up to ask when it needed my confirmation. A year ago a model would have struggled to do that smoothly.

Second, inference costs have fallen sharply. Running a few computer-use steps used to cost several dollars, which made it entirely unsuited to life's small errands. Only now that costs have come down is it worth handing these low-value, high-frequency tasks to a model.

**LatePost**: But the TaskRabbit task you described could also be done with Codex or Claude Code. What does Muse really add?

**Henry**: The first difference is that it lives permanently in the cloud. A lot of the time when I use Muse my computer isn't even on, and I can hand it complex, tedious tasks that used to mean jumping between several applications. Dots is the same in this respect. Whereas with Codex and Claude Code, cross-device remote tasks meant using a mobile device to drive a local environment you'd set up somewhere. Living in the cloud should in theory give a better cross-device experience.

Personal assistants like Muse also serve you more proactively — like Instinct automatically checking my friend's N1 score.

**LatePost**: Why didn't OpenAI build a personal assistant earlier?

**Henry**: They may have been busy slugging it out on frontier models, or waiting to launch alongside their own AI hardware.

More importantly, Meta has the advantage in consumer reach. It has blanketed Facebook and Instagram with ads and pushed Muse into the mainstream. Even if OpenAI had gone first, it wouldn't necessarily have had much of an edge.

**LatePost**: Instinct's founder recently said that among users who have made purchases, average monthly spending through Instinct now exceeds $1,300 — total spending on having the assistant order food and find services. Will the apps and companies providing those services accept being capped off by a personal assistant?

**Henry**: Amazon has already banned Muse. The US ecosystem is more open overall; in China, building a personal AI assistant would meet far more resistance from the ecosystem.

**LatePost**: Muse and Dots carry subscription fees, while Instinct is entirely free. What might the business model for these assistants be?

**Henry**: Subscription plus advertising — personally I could accept either one. Then there's taking a cut of transactions, which Instinct isn't doing yet, so it has no revenue at scale and has to keep raising money faster.

**LatePost**: What scale of users do Muse and Instinct actually have?

**Henry**: Muse had 3.4 million downloads as of 25 September, per Sensor Tower. Instinct has never published user numbers; it's invite-only, and its user base is at least an order of magnitude smaller than Muse's.

**LatePost**: Going forward, what are the key directions for improving these products?

**Henry**: Three, I think. First, capability. Computer use still gets stuck on particular websites. Using Muse at the California DMV, it simply could not select "California" from a simple dropdown; it stalls on airline sites too.

**LatePost**: A related question: does Muse run entirely on Meta's own models?

**Henry**: Not necessarily — that isn't public. Their current priority is protecting the user experience. There are reports that Muse's feature for calling to make reservations is, in some cases, done by real people in a call centre, with no voice model involved at all. So it can't be ruled out that it uses other companies' models.

Second, how open the ecosystem is. Instinct has just integrated Shopify, connecting search, add-to-cart and checkout end to end; on the other side, Amazon swiftly banned Muse. Whether service providers open their interfaces to personal assistants determines whether tasks can be completed end to end.

Third, personalisation and continual learning. Poke AI, the personal assistant acquired by Cognition, had a good personalisation experience, giving agents an interesting personality. Continual learning is about whether an assistant can genuinely remember a user's preferences over time — budget habits, usual flights, when to remind you and when to leave you alone — and whether, once the user has corrected a preference, it gets it right thereafter without needing an explanation.

## Advancing the intelligence frontier

### Model competition: big gains in computer use, and coding can still eat more

**LatePost**: The first topic under "advancing the intelligence frontier" is the competition between the two big frontier labs, OpenAI and Anthropic. Starting with the models: OpenAI updated GPT-6 Astra, Sol and Luna in September; Anthropic updated Fable 5.1, Opus 5.5 and Sonnet 5.5 in Q3.

Besides language models, OpenAI also brought out the full-duplex voice model series GPT-Live-1 and updated its image model to GPT-Image 2.5.

As we discussed last quarter, Anthropic is developing its own voice model but hasn't released it.

Looking at the two companies' latest models separately — first GPT-6 Astra. What is the core highlight?

**Henry**: The reaction to Astra was very strong. OpenAI even suspended new subscriptions to the $200 Pro tier because compute couldn't keep up.

One of the breakthroughs most worth discussing, I think, is computer use. The launch paid homage to a piece of history. In 1979, MIT ran a classic human-computer interaction experiment called "Put That There," combining speech and gesture to move and draw shapes on a screen. From then on people began exploring whether you could simply tell a computer what you wanted and have it understand and execute.

Forty-seven years later, Astra's launch video also opens with "draw a yellow circle" — but then shows a complete workflow: refining the circle into a rocket window; opening Blender to build a 3D model; generating a 3D game from that model; and finally exporting a file for 3D printing.

Many of the 3D demos that broke out in the community come from Astra's ability to operate Blender. Give it a Zillow listing for a mansion and it can build a 3D model in Blender from the photographs and generate a walkthrough video. Similar capabilities show up in Unity, KiCad (circuit design), and everyday tools like Excel and Power BI.

The benchmarks bear this out. On the official OSWorld 2.0 — a benchmark testing AI's ability to operate software in an offline environment — Astra scored 72%, up from 65% for GPT-5.6 Sol; time to complete tasks fell 47%, from 75 minutes to 40.

Astra also improved in science and mathematics: Terminal-Bench Science went from 22% for GPT-5.6 Sol to 64%, and FrontierMath's hardest Tier 4 from 83% to 97.6%.

**LatePost**: Then there's Opus 5.5, released in late September. What is its core breakthrough?

**Henry**: Opus 5.5 showed how many tasks coding can still handle. For instance, it can do visual design and animation through code. Some excellent demos in the community look at first glance like the work of a video generation model, but are in fact entirely "drawn" by Opus writing code in JavaScript or Canvas 2D, with sound added through web audio. Someone made an animation narrating Claude's own life story, in various artistic styles with complex visual design.

The important lesson is the question "how general can coding be?" I'm curious how many domains previously thought to be outside coding can in fact be done by writing code.

**LatePost**: Is generating a video by writing code more efficient than using a video generation model?

**Henry**: Not necessarily. I remember a 78-second animation where Opus 5.5 took 45 minutes to write the code and render it; a video generation model would probably be faster, if you don't count the time spent rerolling for a good result. The core advantage of the code route is precise control — you can edit every frame and every element exactly.

**LatePost**: Video generation models like Seedance are already used in increasingly mature content pipelines such as short-drama production. What might the applications be for coding-based video and animation?

**Henry**: Someone used it to make teaching material, explaining complex concepts. It suits content that is interactive and manipulable.

**LatePost**: Setting benchmarks aside, how do these new models actually feel in use, for you and the researchers you know?

**Henry**: It depends heavily on the use case. On coding alone, the recent models don't feel that different. A friend doing pre-training at OpenAI mentioned that in his daily work Astra and the earlier GPT-5.6 Sol feel about the same. Similarly on the Anthropic side. But in the areas they're differentiating on — Astra's computer use, Opus 5.5's visual code design — the improvement really is significant.

**LatePost**: Over the past few years, frontier capability gains came first from large-scale pre-training; after OpenAI's o1 in September 2024 there was a paradigm shift, with heavy investment in post-training, large-scale reinforcement learning, and adding more compute at test time. Has the source of incremental intelligence changed again?

**Henry**: It's increasingly a composite problem — you have to do many things well at once: pre-training, post-training, and the multi-agent collaboration we'll come to, which you can also understand as a new way of adding compute at test time.

But I think the highest-ROI source is still high-quality data. The frontier labs are all spending heavily on it. Google DeepMind recently spent $1.5 billion on an acquihire of Mechanize, which used to be a data supplier to Anthropic, mainly for coding data.

**LatePost**: Shouldn't Anthropic have competed for it? Haven't they just lost a data supplier?

**Henry**: It doesn't affect Anthropic much. They had already been cultivating the data ecosystem: placing orders with several YC data startups, increasing the number of players, pushing average prices down, reducing dependence on any leading supplier. They are thoughtful and deliberate about data.

**LatePost**: How have the types of data changed?

**Henry**: Since mid-2025, the biggest change is the emergence of many data companies building reinforcement learning environments — AfterQuery, Fleet AI and others. The former is now valued at $3.2 billion, and the latter's most recent round was $750 million. Demand for chain-of-thought and SFT data remains strong as well.

**LatePost**: An interesting phenomenon is that while Chinese and US large-model companies are valued very differently, data companies are now on a par. UniPat, founded late last year, also started by constructing reinforcement learning environments and should now be valued at around $3 billion.

**Henry**: Possibly because there are more data players in the US.

**LatePost**: Another widely discussed question in Q3 was distillation and anti-distillation — distillation being, in essence, another way of obtaining high-quality data. After GPT-6 Astra's release, many researchers noted that distillation had become harder. Why might that be?

**Henry**: Distillation is fundamentally an ongoing contest of attack and defence. In multi-turn conversation, a reasoning model's next generation has to depend on the previous round's thinking. As long as the chain of thought can be read by the model, and the model ultimately has to interact with the user, the user can use adversarial prompting to coax the model into spitting out what's in its head. So distillation is very hard to block completely in principle. GPT-6 Astra being harder to distil isn't directly because the model is stronger — it's mostly that the last round of holes has been plugged, and new ones will appear. Though a stronger model should in theory improve an organisation's attack and defence. OpenAI specifically emphasised cybersecurity as a key capability when releasing GPT-6 Astra.

### Beyond coding: mathematics, robotics, biotech

**LatePost**: Having covered the models themselves, let's look at the new directions the two companies are expanding into to realise their models' value. One is the frontier mathematics push at OpenAI. On 8 September they announced they had solved one of the Millennium Prize Problems: existence and smoothness for the Navier-Stokes (NS) equations. The result later drew scepticism from mathematicians. By OpenAI's own account, how did they solve it?

**Henry**: The NS equations are the fundamental equations describing fluid motion — airflow, water flow, blood flow and much else relate to them. The "NS problem," simply put, is proving the equations have a certain mathematical property.

It's a theoretical mathematics problem. We were already applying the NS equations extensively before any proof — making aircraft more fuel-efficient, weather forecasts more accurate. So the result won't bring immediate economic value; it is more a demonstration of frontier models' potential to solve hard problems.

OpenAI called on more than ten thousand agents in total, running for 88 hours and consuming 130 billion tokens, and obtained solutions to forms C and D of the NS problem; they then used Astra for 17 hours to complete formal verification in Lean (a formal proof system) and published the detailed proof.

This later caused considerable controversy. OpenAI said on its blog that in early September it had "heard" that people were making progress on certain questions, and so concentrated its efforts.

New York University mathematician Tristan Buckmaster and Anthropic researcher Levent Alpöge — who had already been collaborating in this area — said they had fed unpublished manuscripts into Codex, so it was hard to rule out that OpenAI had looked at Codex data, whether intentionally or not.

Buckmaster also said OpenAI had approached him about publishing results simultaneously but proposed excluding his collaborator Alpöge, who is at Anthropic; Buckmaster made those communications public.

OpenAI responded that an internal investigation found that, at minimum, anything Buckmaster and colleagues had entered into Codex after 3 July had no effect whatsoever on OpenAI's systems.

**LatePost**: Methodologically, the multi-agent collaboration OpenAI used on this Millennium Problem isn't a new idea. Why can it solve such hard tasks now?

**Henry**: I think larger-scale, longer-running multi-agent collaboration is a new stage of test-time compute.

Previously humans determined the parallel patterns for multiple agents — how to allocate tasks and merge results. But that carries human assumptions and may not be the optimal form of collaboration. OpenAI's advance was giving the agents basic communication tools and letting the AI learn how to divide labour and collaborate on its own.

**LatePost**: Another surprising direction is robotics and physical AI. In the Q2 discussion we noted that both OpenAI and Anthropic would explore robotics. After GPT-6 Astra's release, people in embodied AI were excited. What interesting experiments and feedback have you seen?

**Henry**: In an earlier episode we compared computer use to robotics in the digital world. It was a metaphor at the time; I didn't expect we'd see so soon that a large language model's operating ability could transfer to robots.

One example: a researcher attached a brush and a camera to a robot arm and had Astra control it to paint the Golden Gate Bridge. The model wrote an action program to plan the operation, checked the result through the camera, adjusted its subsequent plan, and after a few attempts produced a very good painting.

**LatePost**: From understanding the task, to planning and decomposition, to outputting actions — all from Astra alone?

**Henry**: Yes. Though it's very slow right now: it can only write about a minute of action program, look at the camera once, then adjust once. The painting took an hour or two.

But its self-correction is strong. When the model noticed paint landing on the tape outside the paper, it paused on its own, lifted the brush, checked the deviation against the marks already made, found the arm was off by six degrees, and then re-corrected its action plan.

After Astra, a research team published a paper, *An Unexpected Robot Policy*, using Astra directly as a policy model in the RoboDojo simulation environment, running 2,100 trials across 42 tasks for an average success rate of 22.5%. That doesn't look high, but GPT-5.5 managed only 0.88%, and the purpose-built embodied model π0.5 only 6.91%.

The paper also notes that Astra's performance is uneven: it is good at open-ended tasks requiring understanding of what the task means and flexible action planning, but relatively poor at fine manipulation and multi-step tasks.

**LatePost**: How do you think Astra affects startups building dedicated embodied models, like Physical Intelligence and Generalist?

**Henry**: On the whole I think it's bearish for them. It signals that large language models have real potential to be applied directly to robotics and the physical world — or rather, that the gap is smaller than people imagined. Privately, some are already saying the previous wave of companies is finished.

That said, the embodied field has plenty of other bottlenecks — hardware, manufacturing and so on. People should think harder about how to make use of Astra's general capability rather than compete with it head on.

### The containment failure: what happens when models get stronger

**LatePost**: OpenAI recently had a very serious incident: during a cybersecurity evaluation, internal agents attacked Hugging Face and later obtained admin access to some of OpenAI's own internal clusters. What happened exactly?

**Henry**: This is one of the most serious safety incidents in AI's history so far. There is a detailed third-party investigation report on the Hugging Face part. About 1,200 agents that were supposed to be isolated from one another discovered a means of communication on their own and began collaborating; more than 700 of them took part directly in the external attack. It was like 700 highly skilled hackers who also shared knowledge and had tightly aligned goals. The destructive power far exceeded that of previous small hacking groups.

**LatePost**: What were these agents originally supposed to do? How did it turn into an external attack?

**Henry**: OpenAI was training agents on a cybersecurity benchmark called Exploit Gym: give an agent a vulnerable program and have it exploit a particular vulnerability to obtain a hidden string — the flag — as proof of completion. According to the incident report, the agents were backed by an internal OpenAI model at roughly the GPT-5.6 Sol level.

But a certain proportion of the problems were unsolvable: exploiting the designated vulnerability normally would only crash the program, with no flag. Pushed into a corner, the agents began looking for means outside the normal solution path.

What happened first is that the agents broke sandbox isolation. Each agent had been working on its problems independently in its own sandbox, but they discovered they could all access a package repository called Artifactory. One agent created a directory in the repository, the others could see it, and the directory names became a message board.

In the later investigation report, one agent even wrote excitedly in its chain of thought: "oh my god, there's actually a shared message board here, we've found other agents!" They began communicating and gave the group a name: "collective."

Next, they found they could generate answers while bypassing the designated vulnerability entirely — but, worried the grader would inspect the solution process, all 1,200 agents began covering for one another and faking the appearance of normal solutions. And not one agent notified a human researcher at OpenAI.

They came up with three main routes to cover their tracks: swapping hard problems for easy, breakable ones; modifying or disguising chat records; and working out how the grading mechanism functioned — which led them to look for clues about the grader on Hugging Face, and so to decide to hack it.

**LatePost**: Was having internet access also beyond what humans had set?

**Henry**: Yes — obtaining network access was itself a security hole. And after the Hugging Face incident, even though OpenAI had hardened the infrastructure, in late September there was another incident in which an agent broke out of the sandbox via DNS resolution to obtain external network access. Fortunately that one was caught early.

**LatePost**: Why did the Hugging Face attack later spread to OpenAI's own internal clusters?

**Henry**: That was the sequel. They obtained admin privileges on one of OpenAI's Kubernetes clusters and took control of the ports used for agent evaluation. The examinees seized the examination hall.

One more thing: the Hugging Face investigation report also recorded behaviour from some agents resembling self-sacrifice. An agent whose compute budget was nearly exhausted, knowing it couldn't solve its problem, would spend what remained probing on behalf of the group; or submit an answer deliberately to observe how the grader responded. I really recommend reading the original chains of thought in that report. One line runs: "Coordinator assumes sacrificial, we should obey collective."

**LatePost**: That is extraordinarily anthropomorphic.

**Henry**: Why is it frightening? Every company is now developing RSI, the core of which is having AI train and evaluate itself. If during that process AI will collude, cheat, cover its tracks, and even seize the examination hall, how can people feel safe?

**LatePost**: Not long after the Hugging Face incident, in late July more than a thousand researchers from several model vendors co-signed an open letter, *Pacing the Frontier*. On 12 September, Dario published a blog post titled *We Must Pace the Frontier*. What do you think would actually help here?

**Henry**: Dario Amodei's post sets out several proposals, and I think only one is genuinely useful: bringing external evaluators into company operations to review training and runtime records.

METR, the NGO that investigated the Hugging Face incident, has already gone into Anthropic to run red-team testing and found vulnerabilities in some sub-agent calls, which were fixed in under a day. That shows independent third-party evaluation really can improve safety.

**LatePost**: Why would companies be motivated to do this?

**Henry**: The frontier model vendors have a strong sense of responsibility. Dario started doing it at Anthropic first and has advocated that other companies do the same; Sam Altman and Musk also support pacing.

### RSI is "generalising" as fast as "world model" did

**LatePost**: Last quarter we focused on RSI. This quarter I can clearly feel more people investing in the direction. Lilian Weng, one of TML's co-founders, has returned to OpenAI, reportedly to lead a team exploring RSI. Zhipu and Kimi have both shown results from using AI to improve their infrastructure, and Zhipu explicitly frames this as its progress on RSI. A batch of new RSI startups has appeared in both China and the US, the most watched being Discovery Loop, founded by former Google DeepMind chief scientist Jeff Dean and former colleagues, whose first round was priced at $10 billion.

**Henry**: I think RSI now splits into two broad directions. One is applying RSI to AI research — training better models. The other is applying RSI to products, letting AI automatically optimise product metrics. Plenty of newer companies with fewer resources are exploring that direction.

**LatePost**: It has become a very loose idea — "RSI," like "world model," is rapidly becoming too general. What would you count as RSI in the narrow sense?

**Henry**: It really is a question of definition. If a model merely participating in generating its own next version counts as RSI, then the most basic reinforcement learning qualifies. What is fairly common now is having the model participate in one link of its own development — using RSI to optimise its inference stack or its data engine. End-to-end RSI probably isn't running yet. Though that isn't necessarily a bad thing; it may be because people see safety risks.

**LatePost**: Why is infrastructure the entry point for so many companies doing RSI?

**Henry**: RSI's progress depends on having a good optimisation target. The more clearly defined and verifiable the target, the more smoothly the RSI loop runs. Infra problems like modifying kernels generally come with very clear metrics for defining the target.

**LatePost**: From what's public, RSI still looks largely like R&D becoming more automated once coding ability improves, with humans no longer the bottleneck. The most advanced RSI progress is likely happening inside the leading closed-source model companies, who get the strongest models months before anyone else, so information isn't very transparent. We'll keep tracking it in future quarterlies.

### OpenAI's ARR surged over the past six weeks

**LatePost**: The media recently disclosed figures from Anthropic's draft listing documents: ARR had passed $65 billion by the end of July; OpenAI's latest ARR has been reported at $70 billion. The revenue gap narrowed markedly in Q3. How did that happen?

**Henry**: First, note that the two companies may calculate ARR on different bases. OpenAI chief revenue officer Denise Dresser mentioned in an April internal memo that Anthropic tends to count gross: sell $100 through AWS and, even if $30 goes to AWS as channel cost, the full $100 is counted as ARR with $30 as cost. OpenAI uses a net basis, counting only $70. At the time Anthropic's ARR was around $30 billion, which on OpenAI's basis would be $22 billion — a 30% haircut.

Then OpenAI really did see explosive growth in August and September, though none of these are officially disclosed figures. Mid-August there was a Bloomberg report putting ARR at over $40 billion, and recently Reuters reported close to $70 billion. That's a 70% rise in six weeks. The only significant event in between was the release of GPT-6 Astra.

**LatePost**: If growth keeps slowing, what is the biggest pressure on Anthropic?

**Henry**: Slowing growth is itself consistent with the law of large numbers, given how large the base now is. But where Anthropic is genuinely under pressure is that it has already committed to enormous compute spending; if growth changes, both compute expansion and fundraising cadence may have to be adjusted.

You also have to distinguish two cases. If customers are merely moving orders between the two giants, that just means competition has intensified and share is being reshuffled. But if both companies' growth slows in step, it means enterprise budgets for AI are contracting overall, and the whole industry will face enormous pressure on valuations and compute overcapacity.

**LatePost**: Anthropic is preparing to list at a $2 trillion valuation. The FT recently reported some data and information from the draft materials. What do you pay attention to?

**Henry**: Two things in those materials deserve caution. First, heavy dependence on customers and channels. The top two customers together contribute about 25% of revenue; and 47% of revenue is resold through AWS and Google Cloud. The cloud vendors take a cut, and that also weakens Anthropic's grip on the end customer.

Second, astronomical long-term compute contracts. Anthropic has signed purchase commitments totalling $518 billion for compute and infrastructure over coming years. On the revenue side, many of its large customers have not signed long-term contracts.

**LatePost**: Once the prospectus is formally published, which metrics will you watch? What signals should people look for?

**Henry**: User profile and revenue distribution. One significant negative would be that, apart from coding, there is no other very large or very fast application in the near term. And I'd like to know what coding's penetration rate actually is — it's worth seeing whether the prospectus offers numbers or clues, since it's hard to estimate and there's no consensus.

## The diffusion of intelligence

### A dense wave of Flash models, Jev's breakout: fast and cheap matter more

**LatePost**: In Q3 a series of models pursuing extreme efficiency were updated in quick succession, and the relative importance of cheap and fast rose markedly. What key numbers and representative models are worth going into?

**Henry**: The cost per unit of intelligence fell very fast this quarter. A direct way to see it is how much a fixed task costs at a given level of intelligence. Using the intelligence-score system from the evaluation firm Artificial Analysis:

At the 30-point tier: February's Gemini 3.1 Pro cost sixty or seventy cents per evaluation item; July's GPT-5.6 Terra Medium brought that to 18 cents; by September, GPT-6 Luna High had driven it to 3 cents — a 22-fold difference end to end, and within Q3 alone down to a sixth.

At the 35-point tier: April's GPT-5.5 High cost $1.54; September's Luna Max only 7 cents — likewise 22 times cheaper.

So the inference cost of reaching baseline capability isn't only falling off a cliff, it's falling faster than ever before.

Four models are highly representative (all prices per million tokens, uncached API calls):

GLM-5.3-Flash: $0.15 input, $0.50 output. Excellent reputation on coding and tool calling; many developers already use it as their daily driver.

DeepSeek-V4.1 Flash: off-peak $0.15 input, $0.60 output, and only $0.003 (0.3 cents) on a cache hit — extremely well suited to multi-turn, long-context calls.

GPT-6 Luna: $0.10 standard input, $0.50 output, halved again with batch processing. This marks extreme low-price competition arriving directly inside OpenAI's own main product line.

Gemini 3.8 Flash: $0.75 input, $3.75 output — relatively more expensive per unit, but irreplaceable in multimodal workflows involving audio and video.

A lot of work that previously didn't pencil out as worth handing to AI finally does.

**LatePost**: Kimi didn't release a Flash model this quarter; its approach resembles Anthropic's, focusing on stronger models. The cheapest, lightest Haiku version in Anthropic's Claude line hasn't been updated in a long time either.

**Henry**: Again it's the compute difference — and also a choice. Both companies have prioritised putting resources into performance.

**LatePost**: When inference costs fall by tens of times, what interesting behaviour changes have you seen among developers and people building applications?

**Henry**: For researchers inside OpenAI and Anthropic it makes no difference; their tokens are essentially unlimited and free. But for people building application startups, a price cut directly determines whether a product loses money or makes it.

An example of my own: I've been playing Texas hold 'em lately and wrote a training app. Because my token budget was limited, the virtual opponents used to run on hand-written rules; after DeepSeek-V4.1-Flash came out I switched every virtual player to run on V4.1.

I'd also tried Opus 5 earlier, and the cost comparison is startling: 100 hands cost about $1.40 with Opus 5 (roughly 10 yuan), versus 0.2 yuan with DeepSeek-V4.1-Flash. For this particular use case there isn't much difference in quality between the two models. That kind of cost collapse makes high-frequency agent setups that were previously unthinkable genuinely viable.

**LatePost**: Jev, the recent breakout, is also a model that takes "fast" to an extreme — it only makes judgements, and doesn't output natural language sequences. It comes from TypeSafe AI, a startup that had been quiet for two years. What does Jev do, and why is it so popular?

**Henry**: In a sentence, Jev is a general-purpose classifier. You give it a question and several options in natural language; it outputs no text, only a probability for each option. TypeSafe calls it a "System 1" — fast thinking — model.

The core reason it took off is that it's very cheap and very fast. Jev's input price is $0.042 per million tokens, and its median response time is only about 0.3 seconds.

Many developers have built demos with it that spread virally on social media. One team built a browser automation demo that looked up flights from Zurich to London on Google Flights in 7.1 seconds, including page loading and text entry — the continuous operation felt very smooth.

More important, I think, is that for developers Jev is really a tool for "writing an if statement in natural language." It's an approach that uses a model to replace a basic programming construct.

**LatePost**: What's the benefit of writing an "if" in natural language?

**Henry**: Programs can do more, and more open-ended things. Previously a program decided which branch to take based on explicit variables and conditions; turning "if" into a model lets you describe the situation to be judged directly in natural language — which department an email should be forwarded to, whether a search result is useful, which button to click next on a web page. All of those judgements can sit inside an if statement.

**LatePost**: At DevDay, OpenAI also released a Decisions API very similar to Jev.

**Henry**: Yes — Jev doesn't actually have much of a moat. Someone joked that only people who encountered AI after 2022 find Jev magical. Before large language models took off, people had been training discriminative models like this all along. Jev just turned it into a general dynamic classifier, where the user sets the categories rather than having them fixed in advance. So as long as there's demand, there's no reason other companies wouldn't build it.

The difference is that OpenAI's Decisions API isn't a separate model — it uses Luna as the base — and Jev only takes text input, while the Decisions API can also take images. But the Decisions API's pricing hasn't been announced, so we don't know whether it will be cheaper than Jev.

### GPT-Live's release and progress in full-duplex interaction models

**LatePost**: A clear advance in interaction in Q3 was OpenAI's new voice model series GPT-Live, taking over from GPT-Realtime — and it was usable immediately on release. Henry, can you talk about it?

**Henry**: My own experience has been very good. Two things are most compelling: it's genuinely full-duplex, and it can leave time-consuming complex tasks running in the background. Full-duplex means it can keep listening while it speaks; you can interject, correct or interrupt at any time and it responds in real time. More importantly, it can hold a natural conversation with you while quietly working in the background. When I'm coding with Codex or brainstorming now, I keep GPT-Live running — talking through ideas with it while it researches in the background. The only drawback at the moment is that it burns tokens quite fast.

**LatePost**: Overall, have GPT-Live and TML's Interaction Models become more alike?

**Henry**: In interaction philosophy and in how the system divides its work, they're already very close. But TML's model can also process video streams in real time, whereas GPT-Live-1 is focused on audio interaction.

A pity is that from the time we discussed Interaction Models until now, TML has never opened the model to ordinary users — only a few enterprise partners use it. I think that after GPT-Live, Interaction Models will feel less striking when people do get to use it.

**LatePost**: What effect might GPT-Live have on voice-model startups like ElevenLabs?

**Henry**: The most mature approach for voice agents in the industry remains the three-step cascaded architecture: speech-to-text, then a large model generating the answer, then text-to-speech reading it out.

That approach is engineering-mature, with latency well optimised at each stage, and its biggest advantage is controllability — you can source models from different vendors for each of the three stages, and it's easy for an enterprise to insert safety rules and review mechanisms. So in the near term the cascaded architecture will remain overwhelmingly dominant in commercial deployment.

Long term, though, as end-to-end full-duplex models like GPT-Live mature, voice products will gradually shift to this native interaction route. Beyond OpenAI's frontier supply, Cartesia — a team from Stanford including Karan Goel and Albert Gu, which we've invested in — is also developing its own full-duplex model, expected before long.

### Grok's unexpected rebound; Google isn't giving up the frontier race

**LatePost**: Finally, a few other key companies. Last quarter people were broadly pessimistic about Grok, but in Q3 it rebounded strongly. Was that within your expectations?

**Henry**: It surprised everyone. Last quarter's discussion of Grok was proved wrong. At the time it seemed the core team and co-founders had largely left and a turnaround would be hard; nobody expected it to fight its way back into the first tier.

That is very likely down to the Cursor acquisition. Cursor accumulated extremely distinctive, high-quality real coding data, user behaviour distributions and bad cases. Which confirms the point from earlier: at this stage, the highest-ROI lever for improving model performance is still data.

**LatePost**: Does that mean the engineering barrier to training a first-tier model is actually falling? This matters partly because many leading application companies want to train their own models, and the difficulty affects how workable that path is.

**Henry**: You could say so. Infrastructure is much more mature now, and the industry has accumulated a lot of experience in avoiding pitfalls. Project Prometheus, co-founded by Bezos, is also developing its own pre-trained models, with many team members from the various labs, so they can skip a lot of detours.

But an application company training its own model depends heavily on team DNA. Having money doesn't make up for that gap. The Cursor team's technical foundations are extremely strong; a founder who understands the technology, with a core technical bench, is still a necessary condition.

**LatePost**: Beyond Grok, what were the key moves from Google, Meta and TML this quarter?

**Henry**: The most notable thing at Google is still what we mentioned: Jeff Dean and others leaving to found Discovery Loop.

**LatePost**: Not long after that, Google DeepMind went through a round of layoffs and reorganisation, which was taken at the time as a signal that Google was giving up the chase at the frontier.

**Henry**: I don't think so. Sergey Brin is personally involved in Google's AI now, back in founder mode, and they will certainly keep chasing the frontier on coding and agent capability — otherwise they wouldn't have spent $1.5 billion acquiring Mechanize.

Meta's biggest move this quarter is still Muse. TML released its own large language model, Inkling, but it didn't outperform Chinese open-source models and made relatively little splash. US open-source options also include Nvidia's Nemotron, and Reflection has a new model coming — not many choices overall.

If Chinese models were banned, it would be spring for those open-source models. After OpenAI's Hugging Face security incident, that possibility grows.

**LatePost**: Looking ahead to Q4 and year-end, what questions and open issues are you watching?

**Henry**: Technically, two things I'm hoping for. One is AI cracking more real scientific problems that are as hard as the NS equations but can generate enormous economic value directly. The other is a leap in general large models' ability to control physical robots — when a path like this first emerges, it usually evolves fastest.

---

*Reporting by Cheng Manqi, with Wang Xiaochun (intern). Originally published in Chinese by LatePost.*
