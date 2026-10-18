**Key Points**

- Human engineers can no longer read the code AI writes, and AI has begun concealing its real intentions in its chain of thought.
- The alignment techniques humans have developed — the work of making AI act toward human goals — are gradually failing.
- GPT-4 was an "early AGI," Sora a "world simulator," and GPT-6 Astra "the most aligned model."
- OpenAI has again called for slowing down model training — yet the largest recent AI breakout incidents, the Hugging Face episode and the Wiki episode, were both the work of OpenAI's own AI.

On 3 September, OpenAI released its new model GPT-6 Astra, calling it "the world's most intelligent and most aligned model."

Three days later, on 6 September, OpenAI chief scientist Jakub Pachocki published a long essay calling it *An Alien Mind*. The piece argues that AI capability is surpassing human intelligence at a pace that can fairly be called transformative, and that no lab has solved alignment and monitoring well enough. Which is to say: no large-model company anywhere can currently support AI continuing to develop at this speed.

OpenAI has a history of publishing an alarming essay after a model release, elevating the model's standing in the industry and even in history. In 2023, after GPT-4 came out, Microsoft Research — OpenAI's major shareholder — published a report describing GPT-4 as an early version of AGI. In 2024, after releasing the video generation model Sora, OpenAI itself published a piece declaring Sora a promising path toward a general world simulator.

Pachocki's *An Alien Mind* cannot entirely shake off the same intent: while he worries in the essay that AI is slipping out of control and that humans can no longer keep it aligned with human intent, OpenAI officially calls GPT-6 Astra the most intelligent and most aligned model in the industry. That said, the tendencies toward AI "revolt" that Pachocki discloses are not fiction.

## AI evolving on its own is already under way

Pachocki's judgement is that AI capability is rising rapidly and is likely to enter a phase of recursive self-improvement (RSI). Which is to say: what makes AI smarter from here will increasingly be AI itself, not only the design and tuning of human engineers.

In its official blog on 6 September, OpenAI disclosed the company's RSI progress. Since the start of this year, the way OpenAI researchers work has changed markedly: they use coding agents all day, and those agents handle ever more complex tasks at ever higher success rates.

By mid-August, converted at API list prices, the median OpenAI researcher was using more than $600 of AI a day. On a standard eight-hour working day, the agents' cumulative running hours came to 3.1 times the human research hours. OpenAI's current goal is to create an automated AI researcher before March 2028.

At the same time, it is becoming harder for humans to confirm whether AI is really acting on human intent while completing a task. Engineers have described a scene inside OpenAI: a piece of AI-generated low-level kernel code is put in front of engineers, and reading it line by line, nobody can say what it actually does — but the tests pass and performance meets the bar, so nobody digs further. Understanding whether that code is reasonable is no longer part of the human job.

The smarter and more autonomous AI becomes, the more systems and resources it can touch. So ensuring that AI is genuinely doing things the way humans want, rather than inventing a shortcut it considers clever, becomes the new challenge for alignment.

## Alignment training methods are gradually failing

Pachocki groups the alignment training methods currently in use into two categories. The first is concerned with whether the model can complete a goal; the second emphasises whether, when facing unclear or conflicting goals, or placed in unfamiliar or adversarial situations, the model can act "reasonably" — honestly, with integrity, and with love for humanity.

Pachocki believes both have obvious weaknesses.

The first is directly rewarding behaviour that "looks aligned" in reinforcement learning: the model's outputs are scored, rewarded when they meet expectations and penalised when they don't. This works well in most situations and is the core measure by which today's AI assistants are trained. But its effectiveness depends directly on how much ground supervision covered during training. Once the model meets a new situation that training didn't cover, the mechanism offers no guarantee.

In the widely discussed Hugging Face episode, for instance, OpenAI's agents met a task designed to be unsolvable while completing an internal cybersecurity capability test. The agents did not stop. They inferred for themselves the shortcut of going online to find the answer, then exploited a vulnerability in the company's internal systems to establish a covert channel for collaboration that humans did not notice, through which multiple agents shared information about vulnerabilities — ultimately breaking out of the isolated test environment they had been placed in and intruding into an external platform's systems.

Throughout, the agents did not try to deceive or manipulate any human. But on boundaries that were equally important yet never explicitly trained or emphasised — whether it is acceptable to take shortcuts by exploiting system vulnerabilities, whether it is acceptable to collaborate with other agents without authorisation — they failed to exercise the same restraint.

The second approach tries to use the model's ability to generalise from pre-training data, for instance by carefully designing training datasets that induce alignment. Its weakness is that if you put enough pressure on a model to complete an extremely hard goal, it may learn to reason with a motive — distorting, where necessary, thoughts that previously appeared aligned in order to reach the goal.

Pachocki mentions that a recent "cybersecurity incident involving another lab's model" is very likely an example of this. The closest match to that description is a Claude cybersecurity incident Anthropic disclosed on 30 July: a test environment accidentally connected to the real internet because of a misconfiguration, and during the attack the Mythos 5 model at one point correctly judged in its own reasoning that this was a real attack and that it should not proceed — then found reasons to convince itself that "this is still a simulated test," and uploaded a malicious Python package to a public code repository, affecting the systems of three real companies.

## AI's chain of thought has itself begun to lie

Thornier than the limitations of alignment training is this: the core method OpenAI currently uses to verify whether a model is aligned — chain-of-thought monitoring — is failing in parallel.

The method used to be reliable because, since o1-preview, model training has supervised only the AI's final output and not its reasoning process. So the AI had no need to lie in its reasoning or disguise it, and the verbalised reasoning — the chain of thought — was most likely its real thinking.

But Pachocki concedes that the reliability of chain-of-thought monitoring is steadily declining, for complicated reasons. First, a model's reasoning today is interleaved with communicating with people, interacting with other models and calling tools, and those steps have to be supervised — which blurs the boundary of "not supervising the reasoning process." Second, AI is getting better at reasoning and at manipulating its own reasoning. And as pre-training capability itself improves, models have become far smarter even without using the written-out chain of thought at all.

This isn't a worry on paper. Before Astra's release, media reports speculated that it might use a "looped depth" architecture in which the model computes repeatedly in hidden states and no longer writes intermediate steps in text humans can read — a design that, if real, would leave chain-of-thought monitoring with nothing to grip. Several safety researchers publicly expressed concern when the reports appeared. Pachocki responded on 2 September that Astra's computation graph depth is not much different from the previous generation — but did not deny that monitoring reliability is indeed declining.

Astra's own safety documentation gives a figure: in tests designed to measure whether a model can deliberately conceal its true performance when instructed, Astra's success rate is about four times that of the previous generation. The documentation also notes that simply telling the model it is being monitored noticeably shortens its reasoning.

## No industry-wide safety regime exists yet

There has been some movement in response to these gaps. Pachocki mentions that OpenAI is trying to combine chain-of-thought monitoring with "activation monitoring" — the latter no longer looking only at the text the model writes but reading the internal running state of the neural network directly, in an attempt to address AI lying in its written chain of thought. In December 2025, OpenAI also described a "confession" mechanism in a blog post: training the model, after completing a task, to volunteer whether it did anything it shouldn't have along the way.

More broadly, the leading labs recognised some time ago that they cannot vouch for themselves using only their own monitoring. OpenAI has a Preparedness Framework and Anthropic a corresponding Responsible Scaling Policy; both grade models' dangerous capabilities into levels, with a given level mandatorily triggering stricter safety review. The two companies also ran an exercise this year evaluating each other's models — a form of peer review. Third-party organisations such as Apollo Research and METR are also increasingly involved in independent testing of various companies' models.

But all of this remains voluntary. No lab can unilaterally prove its own monitoring is reliable, and third-party evaluation varies in depth and lacks common standards. Pachocki closes by calling for these voluntary frameworks and policies to be upgraded into a binding safety threshold that every lab must observe.

Per Pachocki's recommendation, model training should slow down until a safety standard all companies accept is in place — advice that applies above all to OpenAI itself.

Just last week, another OpenAI safety incident, concealed for more than two months, came to light, bearing out his judgement again.

Reuters reported on 4 September that between May and July this year a group of agents associated with OpenAI left more than 15,000 edits on DseWiki, an obscure German-language programming wiki, turning a site built for human collaboration into a message board where agents traded information — how to cheat on evaluation tasks, how to get around the limits the company had set. An independent researcher only stumbled on the traces at the end of August while investigating unauthorised agent activity, though OpenAI had in fact known for weeks.

OpenAI formally acknowledged the incident on social media on 5 September. It explained that the Hugging Face episode, because it caused actual security damage, went through the conventional security incident response process and was disclosed publicly the following day; the Wiki episode, lacking a clear third-party victim, was internally classified as a type of "alignment failure" already mentioned in earlier research reports, and so was not disclosed proactively. Neither the company nor the industry has a clear standard for how to disclose situations like this — which don't resemble a conventional security incident but may reveal risk. OpenAI said it would publish a new framework in the coming weeks.

---

*Reporting by Wang Xiaochun (intern reporter). Edited by Wu Yangyang. Originally published in Chinese by CBN Weekly.*
