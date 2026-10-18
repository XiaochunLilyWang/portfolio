"Excuse me, coming through." When GPT says this, it isn't trying to invade anyone's territory — it is simply walking its own path. Embodied AI happens to be one of the things it knocked into along the way.

After OpenAI released GPT-6 Astra in early September, a growing number of people working in embodied AI found that a general-purpose multimodal foundation model could, in fact, directly do part of the job previously handled by robot policy models such as VLAs (vision-language-action models). It can output the pose of a robot's end effector directly, and on some tasks its success rate even exceeds that of purpose-built embodied models.

This unsettles the boundary between digital-world AI and physical AI, and raises a searching question: will general models like GPT and Fable eat embodied AI?

Meanwhile, something else has already happened: most frontier general-model companies — OpenAI, Anthropic, DeepSeek, Kimi — are preparing to move into embodied AI and physical AI.

This is the most important shift covered in the Q3 2026 embodied AI quarterly of *LateTalk*. Once again our guest is Chen Zhe, founding partner of Alphaist.

Alphaist is an early-stage dollar fund focused on AI, robotics and intelligent hardware. Before founding it, Chen Zhe was a managing director at 5Y Capital, leading investments in robotics and technology.

Beyond the impact of Astra, this quarter's review also covers four industry developments:

- AMD's proposed $8.2 billion acquisition of World Labs
- Unitree's IPO and its knock-on effects
- "In-context learning," which could sharply compress deployment costs
- The US FCC's effective ban on imports of new Chinese robot models

For some, Astra has already shaken both the narrative and the valuation logic of independent embodied AI companies. At the very least, it is time to rethink where physical AI ends and general AI begins.

After this episode was recorded, Unitree founder Wang Xingxing spoke about GPT-6 at this week's China International Industry Fair: "Over the past decade or so, my biggest mistake was not believing in AI enough."

## The Astra shock: will general AI eat physical AI?

### "People who haven't witnessed the miracle won't believe"

**LatePost**: Let's start, as usual, with the top five developments of the quarter. What industry shifts did you see worth sharing?

**Chen Zhe**: First, the release of GPT-6 Astra, which showed everyone the potential of general multimodal foundation models to enter physical intelligence.

Second, AMD signed an $8.2 billion agreement to acquire World Labs, founded by Fei-Fei Li. The deal puts a real price on the Neo Labs that have sprung up over the past year or two, and may shape the options available to world-model and embodied-model companies.

Third, Unitree's IPO, and how it has recalibrated valuations across the embodied sector.

Fourth, in-context learning (ICL) in embodied models has matured. Both GEN-1.5 from Generalist and S1 from Skild AI demonstrated the capability this quarter. ICL matters because it could dramatically lower deployment costs.

Last, at the end of July the US Federal Communications Commission (FCC) added "foreign-produced advanced robotic equipment" to its controlled list; new robot models cannot enter the US market without approval. This may affect the pace of R&D and supply chain development on both sides.

**LatePost**: Let's start with GPT-6 Astra. Until now, general foundation models were mainly improving at digital-world tasks like coding and agents. This time Astra has entered the physical world. How do you read that change, and why is it happening now?

**Chen Zhe**: Talking recently with researchers in the US, my sense is that the prevailing view at frontier labs, OpenAI chief among them, is this: physical AI is a sub-problem of AGI, and the capabilities that emerge while solving AGI will naturally help solve physical AI. That is a major shift in research thinking.

You can trace this line of thought back to Gemini Robotics, which Google released in early 2025. It came in two versions: the VLA model Gemini Robotics, and Gemini Robotics-ER (Embodied Reasoning), which focused on higher-level spatial reasoning.

At the time many people didn't understand why ER existed, because the assumption was that language models were bad at understanding space and the physical world, so you needed to train dedicated physical AI models.

Looking back now, Google may already have seen the potential of general language models for complex spatial understanding and reasoning.

**LatePost**: In fact, when Google released those two models in early 2025, the embodied AI industry paid far more attention to the VLA than to ER.

**Chen Zhe**: Right. Getting a robot to perform general tasks in an open environment can be divided into layers. The top layer handles understanding, reasoning and decomposing the task; the middle layer handles long-horizon execution; below that are motors, controllers and other physical-layer operations.

VLAs and WAMs (world-action models) mainly addressed the middle and lower layers — converting "pick up a plate" into a continuous stream of action signals. Gemini Robotics-ER was more concerned with the upper layer: understanding complex intent, breaking the task down, then calling lower-level tools to carry it out.

**LatePost**: That layered approach has been around a while. What was different about Astra that shook the field?

**Chen Zhe**: This time Astra doesn't only decompose the task — it can generate the end effector's pose directly.

**LatePost**: So it is acting as the robot's policy model, like a VLA?

**Chen Zhe**: Not quite the same. Most current tests have Astra output a pose, which an IK (inverse kinematics) module converts into joint angles, with a low-level controller then executing the motion. A VLA or WAM can output motor control signals directly.

But even getting to the pose layer is something people previously thought general models would struggle with. It requires a great deal of spatial and physical common sense, and that was originally the job of embodied models like VLAs.

**LatePost**: When OpenAI released GPT-6 Astra, the official blog said nothing about robots or embodied AI. How did researchers find this use?

**Chen Zhe**: Anthropic actually laid the groundwork in early July with *Claude Plays Robotics*, which tested twelve models — Claude Opus 4.7, Claude Mythos Preview, GPT-5.4, Gemini 3.1 Pro Preview, Kimi K2.6, Qwen 3.6-Plus and others — on controlling robots. One of the methods was exactly this: having the model generate end-effector poses.

Teams such as Robocurve later built similar test pipelines. After Astra's release they adapted them within a day or two, and found that Astra's success rate on some tasks had risen sharply.

**LatePost**: Among the frontline researchers and practitioners you met in the US and Europe, when did they realise this had changed?

**Chen Zhe**: People who have actually seen what OpenAI is doing and people who haven't think in completely different ways.

At the end of September I was in Pittsburgh for IROS 2026, the top robotics conference. At one evening's dinner, CMU assistant professor Guanya Shi polled the 100-plus researchers present on how they saw Astra's impact on robotics. From the show of views, one camp held that language models solve everything — robotics is over; as long as general models keep pushing the frontier there is nothing left worth researching. That camp was about a third of the room.

Another camp held that general models will never solve many of the physical problems we study today. And there were moderates who think general models and physical AI models are layered and will occupy different niches.

**LatePost**: Why do you think the split is so sharp?

**Chen Zhe**: People who haven't witnessed the miracle simply won't believe. It is much like early 2024, when Tesla released FSD V12 and had already seen that scaling laws held for autonomous driving. Most teams in China couldn't reproduce it at the time, and some even thought Tesla was deliberately putting out a smokescreen. Only those who have seen the breakthrough with their own eyes end up with a different perspective.

**LatePost**: Which camp do the well-known embodied AI companies — Generalist, Physical Intelligence (PI) and so on — fall into?

**Chen Zhe**: Let me answer that differently. More fundamental than the dispute between camps is this: the entrepreneurial narrative and the valuation foundation of physical AI are both being shaken.

Until now, embodied "brain" companies could command extremely high valuations without a closed commercial loop, because some people believed physical AI was an independent field larger than digital AI, capable of producing a new OpenAI.

But Astra suggests physical AI may be merely a subset of general models, which dissolves or weakens the value of dedicated embodied models.

On the other hand, this may also accelerate the development of physical AI as a whole and grow the market. So it isn't necessarily bad news for every company.

### The most hair-raising use is treating Astra as an embodied AI researcher

**LatePost**: Since Astra's release, plenty of institutions, companies and developers have run their own experiments. What interesting research and findings have you seen?

**Chen Zhe**: I'd divide Astra's impact into three layers.

The most direct, the first layer, is using it as a policy model — Astra generating end-effector poses, as we discussed. Most of what the open-source community has tested on the RoboDojo benchmark is this usage, looking straight at success rates across standard tasks.

Of course such test sets don't necessarily reflect real-world settings and needs, but as a proxy indicator they tell you something about the relative capabilities of different models.

On the task of putting blocks into a bowl, Astra succeeded 19 times out of 20 — a completion rate 2.4 times that of Fable 5.1, at roughly 44% of the cost per attempt. On a more delicate jigsaw task, Astra and Fable 5.1 both completed 10%, with Astra cheaper.

One layer up is using the large language model to supervise and correct existing action models such as VLAs. Galbot recently ran a hybrid control test: across selected RoboDojo tasks, Astra controlling alone had a 26% success rate; having Astra supervise and correct π0.5 pushed that to 48%, with Astra straightening out unreasonable action outputs that would otherwise have failed. π0.5's previously published score was about 15.67%. These methods haven't been optimised much for speed yet — the work is mostly about raising success rates and probing where the limits of general models' capability actually lie.

But the third layer is, I think, the most hair-raising and the most disruptive: treating Astra as an embodied AI researcher. With its strong tool-calling ability, it can build a 3D environment in Blender, generate assets and set their properties, then call a simulator to autonomously debug, revise and optimise motion policies — doing the modelling, training and tuning itself, and closing the "real-to-sim-to-real" loop.

This is what is called Physical RSI (recursive self-improvement in physical AI): in the physical world, AI has begun training AI.

**LatePost**: Have you seen concrete work on that third use?

**Chen Zhe**: I know many startups are trying this direction, and some new companies are even raising money on Physical RSI. But there are no heavyweight public results yet. We can look for more in Q4.

**LatePost**: On the first use — having Astra generate poses and do part of a VLA's job — which tasks is Astra better at, and which is it weak on?

**Chen Zhe**: First, on tasks that clearly require reasoning and spatial understanding, Astra is markedly stronger than VLAs.

Second, generalisation. One of the VLA bottlenecks has been poor generalisation: change an object's colour or position and the model is lost. The sheer scale of general models and the way they are trained make their generalisation stand out.

But Astra is not good at fine manipulation — buttoning a button, plugging and unplugging a wire harness, actions involving friction and deformation. Many VLA models specifically acquire teleoperation data for such fine manipulation to use in post-training, and general models lack that.

**LatePost**: It has another obvious weakness right now — it's slow. Combined with its difficulty on fine manipulation, is that an argument that general models and physical models will coexist in layers?

**Chen Zhe**: Long term, I do think the robot system as a whole may be layered. But not because large models will never be able to do what physical models do today — rather because of real-time constraints and edge compute.

It's like autonomous driving: low-frequency decisions can go to the cloud and tolerate a second or two of latency, but millisecond-level obstacle avoidance and control have to happen on the vehicle. So the likelier future is a general model in the cloud handling low-frequency reasoning, with a lightweight on-device VLA handling high-frequency execution.

But even with layering, the value of companies building VLAs and similar embodied models is still challenged. The general foundation-model giants of the future could perfectly well distil a lightweight on-device action model. Which is to say: VLAs will still exist, but a company like OpenAI may be the one that builds them.

### OpenAI hired Blender artists to do modelling, and bought a lot of embodied data

**LatePost**: Where does Astra's improvement in spatial intelligence come from?

**Chen Zhe**: Mainly from three underlying capabilities: three-dimensional spatial understanding; logical reasoning over complex long-horizon tasks; and tool use for calling robot interfaces. None of these appeared from nowhere — they are all foundations that general large models have been steadily developing in the digital world.

**LatePost**: Taking them one at a time: where does the improvement in spatial understanding and reasoning come from? Special data, or training methods?

**Chen Zhe**: Fundamentally, data. As I understand it, around May this year they hired a large number of Blender artists and produced a great deal of 3D modelling trajectory data and annotation. That is why Astra's ability to operate Blender has leapt forward — and that too is a form of spatial understanding.

**LatePost**: Supply chain reports suggest they also bought a large amount of egocentric (first-person view) embodied data. Though it isn't clear whether it was used in Astra's pre-training.

**Chen Zhe**: I see no reason not to use it. From an AGI standpoint, training a multimodal model will inevitably require data from every modality — 3D assets, video, audio, robot physical trajectories — all of it falls within the scope of scaling the model.

And the great advantage of a general model is that its cost can be amortised across many tasks. OpenAI hiring people to do 3D modelling in Blender improves the performance of digital-world agents and is also an important source of improved spatial understanding.

Meanwhile the compute gap with the general-model giants is crushing. A leading embodied company might only afford a cluster of a thousand chips, while a top general lab has a hundred thousand or even a million — a difference of two to three orders of magnitude.

**LatePost**: How do you think the current shift affects the embodied AI data companies?

**Chen Zhe**: Data companies serve whoever has the budget, so today their biggest potential customers may be the general AI companies. Once embodied data reaches sufficient volume and has been learned by general models, it may then cross with other data types to strengthen the model further.

**LatePost**: Does that mean the supply window for this kind of data may only be a few years?

**Chen Zhe**: Every data business is phase-based, really. The modalities a data services company supplies shift as model capability improves. You always have to supply data for problems AI can't yet solve; once AI learns those, you need to supply more complex, higher-precision data.

**LatePost**: On to the second capability, logical reasoning — something language models have been improving at all along.

**Chen Zhe**: Right, reasoning is a task that language-centred large models are very good at. VLAs and WAMs, optimised for action generation, are more like "intuition models": give them an instruction or an image and they map directly to a sequence of actions. So what Astra is good at happens to be the relative weakness of VLAs.

**LatePost**: The third capability you mentioned is that GPT-6 Astra is better at calling various abstracted robot interfaces. Is that an expression of coding ability?

**Chen Zhe**: Essentially it is a spillover from coding and agent capability. Simulators like MuJoCo and Isaac Gym have rigorous, clear APIs. To a large model or agent system, calling MuJoCo is no different from calling a browser or Excel — inputs and outputs through a programmatic interface.

What's more interesting is having a large model write MuJoCo programs itself, run them in simulation, review the results and correct course, then use that to guide policies on the real machine. That is the Physical RSI we discussed, and some companies are already doing it. I expect to see more attempts next quarter.

## The opportunity for independent embodied companies: rethinking the boundary with general AI

**LatePost**: In September there were reports that Kimi and Zhipu were both assembling embodied AI teams, and Liang Wenfeng has said the next step after AGI must be physical AGI. Will China's large-model companies all pile in?

**Chen Zhe**: I think so. Since physical intelligence is a subset of general intelligence, every company aiming at AGI has both the motivation and the ability to work in this direction. I expect China's large-model companies to enter within the next quarter.

The hard parts of general models today are cleaning, labelling and matching multimodal data, keeping training from collapsing, and building reinforcement learning environments at scale so training converges. Only companies with pre-training capability have those skills, and when they enter they will be more competitive than embodied companies building on open-source models alone.

The biggest lesson of Astra, I think, is that we need to genuinely understand and respect scaling laws.

**LatePost**: So where is the moat for native embodied AI startups?

**Chen Zhe**: I think the space being squeezed is probably inevitable, but that doesn't mean these companies' real market size will be small. People can stop arguing about whether VLA or WAM is the better technical path. In the face of superintelligence, what matters more is being clear about boundaries: if you are building an embodied startup, which capabilities can general models already supply? And which will general models never get the chance to do?

**LatePost**: What's your answer?

**Chen Zhe**: At least two things. First, build good interfaces — imagine yourself as a tool that a general model can call over and over. Second, hold on to a loop that is genuinely yours: it might be proprietary data on touch and force, the ability to meet the constraints of a specific process or setting, hardware reliability, and so on.

**LatePost**: It sounds like you mean two kinds of company: key component makers — robot bodies, dexterous hands, sensors — and companies with accumulated depth in a specific industry or setting.

**Chen Zhe**: Right, especially in B2B. Vertical industries have very high barriers in process know-how, safety standards and regulatory licensing. Just as, in the digital world, Harvey and OpenEvidence built ten-billion-dollar companies on their professional barriers in law and medicine, even while relying on general large models underneath. There will certainly be equivalent positions in the physical world.

## AMD's proposed acquisition of World Labs: the giants usually only buy the first company in a category

**LatePost**: On to the second event: World Labs' proposed acquisition by AMD. The two sides have signed an agreement; the process isn't formally complete.

**Chen Zhe**: I rank it second in importance because World Labs is the archetypal Neo Lab and world-model company. A star team that raised enormous funding ultimately choosing acquisition as its route to exit or to amplify its value draws a great deal of attention. It is also a real pricing event for world models and Neo Labs.

**LatePost**: World Labs builds world models, which isn't quite the same as the WAMs that were so hot in China from late last year into the first half of this one. What is its relationship to embodied AI and physical AI?

**Chen Zhe**: Fei-Fei Li defined World Labs' mission as building "omnimodal spatial intelligence models." Their recently released Atlas model is good at spatial reconstruction and novel view generation. You can think of it as a better generative model, except that what it generates includes 3D representations as well as images and video. So it can be used for games, and also for simulation environments to train robots.

Then in July, World Labs acquired SceniX, co-founded by a former Stanford collaborator of Fei-Fei Li's, which works on robot simulation validation and real-machine testing. That gives the environments World Labs generates a better outlet — into parts of the real-to-sim-to-real and Physical RSI pipelines we discussed, mainly building spatial assets and the associated workflows and data flows.

**LatePost**: So World Labs is one of the infrastructure providers for the embodied AI companies we usually discuss?

**Chen Zhe**: Yes. They aren't competing with VLAs and WAMs; they're upstream. As general models led by Astra get stronger, the value of companies like World Labs focused on spatial reconstruction and simulation environments may actually increase.

**LatePost**: World Labs raised $1 billion in February and released Atlas in September — things seemed to be going well. Why accept an acquisition now? And what does AMD want?

**Chen Zhe**: I can only speculate as an outsider. Fei-Fei Li and World Labs want to keep exploring the frontier and produce state-of-the-art research, but running an independent research lab without self-generated revenue consumes enormous compute and resources, and AMD can supply exactly that.

From AMD's side: when people discuss the leading AI companies today, AMD isn't among them. Nvidia has GEAR Lab, Cosmos, its Robotics Research Lab and other influential physical AI teams. AMD wants to absorb someone with Fei-Fei Li's standing in the field. And the $8.2 billion is being paid entirely in stock, which isn't an especially high cost for a company approaching a trillion dollars in market value.

**LatePost**: How much of a reference point is this $8.2 billion deal for other world-model companies?

**Chen Zhe**: You have to separate China and abroad. In the US market at least, this may be a landmark event. The price doesn't directly reflect World Labs' business performance, but it shows what a trillion-dollar company is willing to pay for a top AI research team. There have long been rumours that Anthropic might acquire PI.

Given the pace of general-model development, I think World Labs may serve as an anchor for deals like this. It is a reminder to every Neo Lab: the giants usually only buy the first company in a category, and if you can't realise commercial value independently, selling to a giant sooner may be a good outcome for most teams in the near to medium term.

**LatePost**: And in China? Will large-model companies acquire embodied companies?

**Chen Zhe**: Few Chinese companies would pay such a high acquisition price. The primary goal for Chinese startups is still to survive independently in a complex environment. So Chinese companies focus more on deployment.

For many US Neo Labs, even if their technical exploration fails they can often negotiate a decent acquisition offer. That is why many leading US startups are so willing to make bold technical bets — PI, Generalist, much of their work is technically distinctive and ahead. The environment rewards that behaviour, and the big companies are willing to buy such assets. It is a fairly healthy cycle.

**LatePost**: China's autonomous driving sector has seen giants acquire startups.

**Chen Zhe**: That happened after the sector had passed its peak, when valuations were relatively low. It isn't a good exit. A few days ago I read the founder of a leading embodied company saying his company had raised 3 billion yuan but didn't plan to spend it yet — he intends to wait a year or two for the bubble to burst and then pick up other teams at rock-bottom prices. In a sense that's reasonable.

## Unitree surges then slumps after IPO, and the embodied listing wave on pause

**LatePost**: The third topic is Unitree's IPO and its knock-on effects. Unitree listed at a market value of 60.9 billion yuan; on its first day of trading, 19 August, it briefly touched 444.9 billion yuan, and after a sharp fall it still stands at about 170 billion. First-half revenue was 1.152 billion yuan, up 48% year on year, but the valuation multiple remains very high. How do you read the current market value?

**Chen Zhe**: When we made predictions last quarter I thought 100 billion yuan was a reasonable range. As for the surge and slump after listing, there is a great deal of short-term speculation in it, and it doesn't reflect long-term value.

At the same time, it's hard to apply traditional PE or PS models to a leader with this kind of ecosystem scarcity. The real test will be how long-term institutional investors price it after part of the restricted stock unlocks next August.

**LatePost**: You have always considered Unitree a very solid company in this field. Has that judgement changed?

**Chen Zhe**: It has strengthened. GPT-6 Astra has accelerated general intelligence, which further amplifies the value of hardware platform companies. Unitree could well end up in a niche like Nvidia's — the more the large models battle it out above, the greater the demand below for high-quality robot hardware. And Unitree, like Nvidia, is running open-source projects so that a large body of academic work is reproduced on its hardware and then opened to developers across the ecosystem.

**LatePost**: Two billion yuan of Unitree's raise goes to embodied algorithms. Is Wang Xingxing still keen to build the "brain"?

**Chen Zhe**: Unitree is very restrained in many directions, and Wang Xingxing has never made aggressive public predictions. But building their own models still has real value. In September they released UnifoLM-WLA-1.0, a 6B-parameter model mainly for tabletop manipulation and whole-body mobile manipulation. WLA stands for World-Language-Action.

As the original hardware maker, the greatest value in building such models is stringing the robot body and frontier open-source embodied models into a complete toolchain, lowering the difficulty and cost for users completing tasks on Unitree hardware.

**LatePost**: Last year the consensus was that this year would be the window for embodied AI companies to list. From what we understand, regulators have recently tightened listing review for embodied companies significantly, focusing on whether there is sustained revenue and genuine technical breakthrough. How is the industry discussing that shift?

**Chen Zhe**: The past twelve months may have been the most capital-frenzied and most chaotic period this field has seen. Valuations rising fast is an expression of market sentiment and doesn't represent reasonable value.

The state encouraged the robotics industry to list in the hope that listing would help leading companies gain resources and build long-term competitiveness. But if listing becomes the sole objective, and companies are packaged on hype for a quick cash-out, that inverts the purpose.

What I worry about most is bad money driving out good in the innovation market. Companies like Unitree and DeepSeek, focused on solving fundamental problems, don't necessarily move at a pace that suits the capital markets; while people chasing external incentives easily end up doing things that run against how the industry actually works.

**LatePost**: There's a mismatch here: embodied AI companies, especially those working on intelligence — the "brain" — are still early in both technology and commercialisation, yet once they start the listing process they have to submit to the financial scrutiny of the secondary market.

**Chen Zhe**: Demanding sustained healthy revenue, let alone profit, at such an early stage of an industry is itself an unreasonable metric.

To meet revenue requirements, two behaviours have appeared. One is financial engineering to inflate revenue. The other is more dangerous: taking large funding rounds and doing single-purpose machine projects in factories that traditional automation or traditional computer vision could solve, while packaging them externally as "embodied deployment."

Compare the development of general models. If OpenAI had been pushed to make money in the GPT-1 and GPT-2 era, doing all kinds of fine-tuning and peripheral engineering — or like the many Chinese companies in 2018–2019 building intelligent customer service and intelligent healthcare on BERT and T5 — in hindsight all of it ran counter to solving general AI.

The strong signal I take from GPT-6 Astra is that if you are genuinely on the main road toward solving intelligence and you believe in scaling laws, a lot of today's short-term deployments and revenue simply don't matter.

**LatePost**: On the other hand, what kinds of revenue are relatively real, healthy and valuable long term?

**Chen Zhe**: Genuinely healthy revenue in the embodied sector has to come from business that is positively correlated with general intelligence and scaling laws but won't be directly subsumed by general models. For instance: building a better general humanoid robot, with more stable, reliable, cheaper hardware and control; building more general dexterous hands that remove the limits grippers impose on physical manipulation; building more scalable, more automated ways to collect data and train.

## "In-context learning" in GEN-1.5 and S1: good news for faster deployment

**LatePost**: This quarter, GEN-1.5 from Generalist and S1 from Skild AI both showed more mature in-context learning. What is it, and how does it differ from few-shot learning?

**Chen Zhe**: Loosely, ICL is like prompt engineering — it doesn't change the model's parameters; you give the model a stretch of context, instructions or examples, and it learns the specific task or performs better.

The typical application in embodied AI is giving the robot system a human demonstration — a first-person or third-person video of an operation — and having the system quickly learn and understand the task.

You could call it a kind of few-shot learning, except that few-shot has generally meant collecting a small number of real teleoperation trajectories for post-training, which does change the parameters. That takes longer — hours or even days.

Whereas the new GEN-1.5 and S1 models just show the robot a video lasting a few seconds to a few minutes. The benefit is that task deployment becomes very cheap, which helps with a real pain point in commercialisation. A lot of Chinese companies are watching this direction closely.

More importantly, the Generalist and Skild research showed two unexpected results.

One is handling out-of-distribution tasks — new skills not seen in the training set, which earlier models found very hard.

The other is learning long sequences of combined skills. Picking something up, turning a knob — the individual skills may already have appeared in pre-training. But a longer demonstration involves recombining many atomic skills, and it appears the model can learn that combination from demonstration too.

**LatePost**: Where might this capability in embodied models come from?

**Chen Zhe**: Language models' ICL became fairly strong around GPT-3. In the embodied field, Generalist believes ICL is likewise a capability that emerges naturally after large-scale pre-training.

Skild, on the other hand, says they optimised specifically for demonstration conditioning during training — demonstrate in the prescribed way and learning efficiency is very high.

**LatePost**: How do GEN-1.5 and S1 differ in how they implement ICL?

**Chen Zhe**: GEN-1.5's demonstration trajectories are shorter — mainly 3 to 12 seconds of raw first-person trajectory including joint information. Skild S1 emphasises third-person, long-horizon video input; the report even uses videos up to ten minutes long, with the focus on teaching the model to combine different atomic skills to complete long-horizon tasks. That also reflects Skild's roots in whole-body locomotion and control.

**LatePost**: Besides GEN-1.5 and S1, what other model developments are worth watching?

**Chen Zhe**: Dyna released Dyna-2 and then 2.1. Dyna-2 emphasised data volume — it probably used more than a million hours of first-person data. September's Dyna-2.1 gave a full demonstration of their in-house semi-humanoid robot, whole-body control policy, and the complete engineering practice of planning, execution and feedback in laundry work.

**LatePost**: Dyna-2 should be a WAM.

**Chen Zhe**: Right, but network architecture is no longer the central variable today. What determines the ceiling is data mix, cleaning and processing capability, and who can obtain proprietary high-quality data.

Wang Qian, founder of X Square Robot, said at the Bund conference that in order to understand physical space, the data pipelines OpenAI and embodied model companies have to handle may be the same, so OpenAI may have no extra advantage.

I agree with his description but not necessarily his conclusion. The leading large-model companies are far ahead of embodied companies in data processing experience, compute and toolchains. Indeed, when many embodied companies process their data pipelines today, the smartest brains they call on are still GPT and Claude — and OpenAI and Anthropic get to use their strongest internal versions months earlier. In that respect embodied companies are actually at a disadvantage.

**LatePost**: Google also released the Gemini Robotics 2 series in late July — Robotics 2, ER 2, and a smaller on-device VLA, On-Device 2 — a clear hierarchy and a systematic layout. So why, when Google entered so early, was it OpenAI that shocked the industry first?

**Chen Zhe**: Partly it's Google's organisational inertia and internal politics; resources aren't concentrated enough, and its current foundation models aren't as good as OpenAI's.

The other part is an observation of mine that is a little provocative: too much robotics experience can actually get in the way of a team recognising what general models can do.

People who have genuinely done robotics for years have a profound respect for hardware complexity and the uncertainty of the physical world, and they instinctively resist and doubt new methods — much as the scholars who understood NLP best were, back then, precisely the group least willing to believe in large language models.

Google was the earliest and deepest into robotics of all the Silicon Valley giants, and the first to propose VLAs. When you carry that much history, a new approach that demands substantial investment easily meets resistance.

Also, the robotics teams at frontier labs like OpenAI are younger overall — generally five to ten years younger than the people at Google Robotics, many of them born around 2000 and fresh out of their PhDs.

**LatePost**: Another company that set off the humanoid wave but has been quieter lately is Optimus. Any progress there? Their announced mass production timeline has slipped repeatedly.

**Chen Zhe**: I think Optimus is in a period of not getting much attention. Tesla's greatest energy in Q3 went to deploying Robotaxi, and the two businesses share many of the same people.

**LatePost**: That's interesting. People used to think Robotaxi and robotics overlapped heavily and that much could be reused. Now it looks as though, at least at the intelligence layer, what shares more with robotics may be general models.

**Chen Zhe**: My feeling is yes and no. VLAs and WAMs are in fact strengthening the relationship between autonomous driving and robot manipulation, and many of the entrepreneurs and opinion leaders pushing that path come from autonomous driving.

Tesla's earliest public world model was a VA model going from video to action. Turning and braking while driving are more like instinctive responses; driving doesn't need much linguistic feedback. The same thinking has been used by many companies in training embodied models, where language carries relatively low weight.

But today, constrained by compute and data volume, both autonomous driving models and embodied models have small parameter counts. General models are doing more complex reasoning and understanding at an entirely different data scale.

**LatePost**: Has the first tier of companies changed in people's minds? PI, Generalist and so on were the focus before — who is it now?

**Chen Zhe**: I don't think the first tier has changed. If anything has, it's that more companies are now working on dexterous manipulation. The dexterous hand may have become a new kind of training infrastructure. Just as more GPUs let you train a model faster, more hardware lets you test more scenarios and do more validation on real machines.

## The FCC's new robot market-access rules: one response may be moving capacity offshore

**LatePost**: The last topic is the FCC's new access rules. In the Q1 quarterly we briefly discussed the possibility that the US would ban imports of Chinese humanoid robots. Now it has actually happened. What exactly is the new policy, and how wide is its effect?

**Chen Zhe**: In the US market, any electronic device involving wireless communication, networked sensing or even remote control must obtain FCC authorisation to enter.

The new rules mainly cover robots weighing more than about 2 kilograms (4.4 pounds) that can move autonomously on the ground away from an operator and that also have environmental perception, network connectivity and control software.

So it isn't only humanoid and quadruped robots — some consumer robots such as robot vacuums and robot mowers are affected too. Connected cars, drones and underwater unmanned equipment are not.

And the rule doesn't only concern Chinese products. It requires advanced robots meeting that threshold to be assembled in the US; and by 2028, US component cost must exceed 65%, rising to 75% in 2029. Robots that don't meet the requirements need separate approval to enter the US market.

So some American companies that originally supported the policy have filed objections — they find it hard to comply too.

Boston Dynamics is an interesting case: it's an American company, but after being acquired by Hyundai, much of its manufacturing is in South Korea. So Boston Dynamics and others are pushing for amendments — for example, counting capacity in friendly countries toward US capacity at some ratio.

**LatePost**: What should US practitioners do if they want to use Chinese robot hardware for R&D?

**Chen Zhe**: Short-term impact is limited, because the new rules only cover newly certified equipment. Models certified before the end of July can continue to be sold. Take Unitree: all its current mainstream models have FCC certification, but new models will have problems — a risk it specifically disclosed in its August prospectus.

**LatePost**: Could you ship components separately and assemble in the US to get around the restriction?

**Chen Zhe**: No, because it looks at the country of origin of key components. If every part is made in China, then even assembled in the US it is still 100% Chinese-produced hardware.

**LatePost**: What do you think the long-term effect is on Unitree and other Chinese hardware and key component makers?

**Chen Zhe**: Drawing on the view Unitree disclosed in its prospectus, they will gradually consider establishing local US capacity.

**LatePost**: Probably bringing suppliers with them. A bit like Chinese automotive capacity going abroad — in recent years Chinese carmakers and suppliers such as CATL have been building plants in Europe and the US.

**Chen Zhe**: That is also the long-term purpose of this policy. But these policies, like the tariff manoeuvring, may be short-term and dynamic. China's advantage in supplier quality and density was formed through years of iteration across the whole electronics and automotive industries, and short-term restrictive policy can hardly change it. Even if it does change, it will take a long time. The industry moves extremely fast — it's hard to imagine what embodied AI will look like five years from now.

## Outlook: Physical RSI and how the pie gets divided

**LatePost**: Finally, let's look ahead. What do you think is likely to happen next quarter?

**Chen Zhe**: First, Physical RSI built on general model capabilities will become a hot direction, and Q4 will bring a lot of new work showing AI building its own 3D simulation environments, generating assets and iterating its own policies.

Second, more and more Chinese general large-model companies will formally move into the embodied field — independent model companies such as Zhipu, DeepSeek and Kimi. At the same time, big-company teams already working on embodied AI, like ByteDance's Seed Robotics and Tencent Robotics X, may well undergo reorganisation and pivot to building robots with general AI at the core.

Third, work on ICL will increase noticeably. The Chinese market values fast deployment, and ICL happens to be a direction where results come easily.

**LatePost**: What change do you hope to see?

**Chen Zhe**: I hope people will study carefully how general models can systematically raise the ceiling of embodied AI. Astra is only a very preliminary attempt.

**LatePost**: The flip side you didn't say is that, faced with general models crossing over, plenty of practitioners may still resist.

**Chen Zhe**: That's normal — let reality prove it. Four or five years ago, many senior robotics scholars and founders still rejected deep reinforcement learning as a control algorithm, insisting on hand-written rules and classical MPC, thinking neural networks unreliable. Today, deep reinforcement learning is one of the important reasons humanoid robots and robot dogs move as well as they do.

**LatePost**: What question is unresolved right now that you think matters?

**Chen Zhe**: If general intelligence can grow the embodied AI and robotics pie faster, where will the profit flow? How will general intelligence companies and companies rooted in the physical world, with hardware and real settings, divide the value?

---

*Reporting by Wang Xiaochun (intern) and Cheng Manqi. Originally published in Chinese by LatePost.*
