import React from "react";
import { TypographyH1, TypographySmall } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionNavigation } from "@/components/SectionNavigation";
import { ExternalLink } from "lucide-react";

const sources = [
	{
		category: "Mental Health & Digital Wellness Research",
		desc: "Evidence-based research on social media's impact on mental health and well-being:",
		links: [
			{ label: "Mental Health Research Canada - Screen Time and Youth Mental Health (2018)", url: "https://mhrc.ca/national-poll-canadian-youth-mental-health-and-substance-use/" },
			{ label: "American Psychological Association - Digital Wellness and Mental Health (2024)", url: "https://www.apa.org/science/about/psa/2024/01/social-media-adolescents" },
			{ label: "Canadian Mental Health Association", url: "https://cmha.ca/" },
			{ label: "Centre for Addiction and Mental Health (CAMH)", url: "https://www.camh.ca/" },
			{ label: "Kids Help Phone - Digital Wellness", url: "https://kidshelpphone.ca/" },
			{ label: "Harvard Center for Digital Thriving", url: "https://digitalthriving.gse.harvard.edu/" },
		],
	},
	{
		category: "Algorithmic Systems & Filter Bubbles",
		desc: "Research on algorithmic bias, filter bubbles, and attention economy:",
		links: [
			{ label: "Partnership on AI - Algorithmic Bias and Fairness", url: "https://partnershiponai.org/" },
			{ label: "MIT Center for Collective Intelligence - Information Filtering", url: "https://cci.mit.edu/" },
			{ label: "Eli Pariser - The Filter Bubble: What the Internet Is Hiding from You", url: "https://www.thefilterbubble.com/" },
			{ label: "Center for Humane Technology", url: "https://www.humanetech.com/" },
			{ label: "Tristan Harris - Time Well Spent Movement", url: "https://www.humanetech.com/technologists" },
			{ label: "Instagram Creator Resources", url: "https://creators.instagram.com/grow/best-practices" },
			{ label: "YouTube Creators Hub", url: "https://www.youtube.com/creators/" },
			{ label: "TikTok Creator Resources", url: "https://www.tiktok.com/creators/" },
		],
	},
	{
		category: "Misinformation & Fact-Checking",
		desc: "Authoritative sources for fact-checking and media literacy:",
		links: [
			{ label: "Snopes - Fact-Checking and Myth Debunking", url: "https://www.snopes.com/" },
			{ label: "PolitiFact - Political Fact-Checking", url: "https://www.politifact.com/" },
			{ label: "FactCheck.org - Nonpartisan Fact-Checking", url: "https://www.factcheck.org/" },
			{ label: "MediaSmarts Canada", url: "https://mediasmarts.ca/" },
			{ label: "The News Literacy Project", url: "https://newslit.org/" },
			{ label: "International Fact-Checking Network", url: "https://www.poynter.org/ifcn/" },
			{ label: "Duke Reporters' Lab - Fact-Checking Census", url: "https://reporterslab.org/fact-checking/" },
		],
	},
	{
		category: "Privacy Rights & Data Protection",
		desc: "Resources on privacy laws, data collection, and digital rights:",
		links: [
			{ label: "Privacy Commissioner of Canada", url: "https://www.priv.gc.ca/" },
			{ label: "Personal Information Protection and Electronic Documents Act (PIPEDA)", url: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/" },
			{ label: "Electronic Frontier Foundation", url: "https://www.eff.org/" },
			{ label: "Mozilla Foundation - Internet Health Report", url: "https://foundation.mozilla.org/" },
			{ label: "GDPR.eu - GDPR Informational Resource (third-party, not official EU)", url: "https://gdpr.eu/" },
			{ label: "Pew Research Center - Data Collection Studies", url: "https://www.pewresearch.org/internet/" },
		],
	},
	{
		category: "Digital Balance & Wellness Tools",
		desc: "Resources and tools for maintaining healthy technology relationships:",
		links: [
			{ label: "Forest - Focus and Productivity App", url: "https://www.forestapp.cc/" },
			{ label: "ScreenZen - Mindful Phone Usage", url: "https://www.screentimezen.com/" },
			{ label: "RescueTime - Time Tracking and Analysis", url: "https://www.rescuetime.com/" },
			{ label: "Digital Wellbeing by Google", url: "https://wellbeing.google/" },
			{ label: "Apple Screen Time Resources", url: "https://support.apple.com/en-ca/HT208982" },
			{ label: "UCLA Center for Digital Mental Health", url: "https://www.cdmh.ucla.edu/" },
		],
	},
	{
		category: "Course Materials & Academic Sources",
		desc: "Toronto Metropolitan University CEID100 course materials and foundational texts: (sources from course content, links not available online)",
		links: [
			{ label: "Stolen Focus: Why You Can't Pay Attention by Johann Hari"},
			{ label: "The Age of Surveillance Capitalism by Shoshana Zuboff"},
			{ label: "The Filter Bubble by Eli Pariser"},
			{ label: "Digital Minimalism by Cal Newport"},
			{ label: "Ten Arguments for Deleting Your Social Media Accounts Right Now by Jaron Lanier"},
		],
	},
	{
		category: "Research Studies & Behavioral Science",
		desc: "Peer-reviewed research on technology's impact on behavior and cognition:",
		links: [
			{ label: "Journal of Behavioral Addictions - Technology Use", url: "https://akjournals.com/view/journals/2006/2006-overview.xml" },
			{ label: "Cyberpsychology, Behavior, and Social Networking", url: "https://www.liebertpub.com/journal/cyber" },
			{ label: "Computers in Human Behavior Journal", url: "https://www.journals.elsevier.com/computers-in-human-behavior" },
			{ label: "Nature Human Behaviour - Digital Technology Research", url: "https://www.nature.com/nathumbehav/" },
		],
	},
	{
		category: "Visual Resources",
		desc: "Images and graphics used in this digital wellness guide:",
		links: [
			{
				label: "Digital balance image",
				url: "https://unsplash.com/photos/stack-rock-on-seashore-FO7bKvgETgQ",
			},
			{
				label: "Algorithm visualization image",
				url: "https://unsplash.com/photos/matrix-movie-still-iar-afB0QQw",
			},
			{
				label: "Misinformation awareness image",
				url: "https://unsplash.com/photos/a-blue-typewriter-sitting-on-top-of-a-desk-next-to-a-tv-34zq7tzqRSw",
			},
			{
				label: "Mental health support image",
				url: "https://unsplash.com/photos/man-in-yellow-and-black-crew-neck-shirt-1sfwsVpe34A",
			},
			{
				label: "Privacy protection image",
				url: "https://unsplash.com/photos/two-women-facing-security-camera-above-mounted-on-structure-fPxOowbR6ls",
			},
			{	
				label: "Quiz and assessment image",
				url: "https://unsplash.com/photos/person-writing-on-white-paper-qDgTQOYk6B8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
			},
		],
		credits: [
			'Algorithms: Photo by <a href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Markus Spiske</a> on <a href="https://unsplash.com/photos/matrix-movie-still-iar-afB0QQw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
			'Misinformation: Photo by <a href="https://unsplash.com/@franganillo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jorge Franganillo</a> on <a href="https://unsplash.com/photos/a-blue-typewriter-sitting-on-top-of-a-desk-next-to-a-tv-34zq7tzqRSw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
			'Mental Health: Photo by <a href="https://unsplash.com/@piermonzon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pier Monzon</a> on <a href="https://unsplash.com/photos/man-in-yellow-and-black-crew-neck-shirt-1sfwsVpe34A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
			'Privacy: Photo by <a href="https://unsplash.com/@matthewhenry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthew Henry</a> on <a href="https://unsplash.com/photos/two-women-facing-security-camera-above-mounted-on-structure-fPxOowbR6ls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
			'Digital Balance: Photo by <a href="https://unsplash.com/@jeremythomasphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jeremy Thomas</a> on <a href="https://unsplash.com/photos/stack-rock-on-seashore-FO7bKvgETgQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
			'Quiz: Photo by <a href="https://unsplash.com/@nguyendhn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nguyen Dang Hoang Nhu</a> on <a href="https://unsplash.com/photos/person-writing-on-white-paper-qDgTQOYk6B8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
		]
	},
];

const Sources = () => (
	<div className="container mx-auto pt-20 pb-8 px-4">
		<div className="max-w-4xl mx-auto space-y-8">
			<div className="space-y-4">
				<TypographyH1>Sources & Research Citations</TypographyH1>
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div>
						<TypographySmall className="text-muted-foreground">
							Our digital wellness guide is built on evidence-based research from credible academic institutions, peer-reviewed studies, and established organizations. Each module draws from authoritative sources to ensure accurate, helpful information that supports healthy technology relationships and digital literacy.
						</TypographySmall>
					</div>
					<div className="flex justify-center">
						<img 
							src="/quiz.jpg" 
							alt="Research materials and resources" 
							className="rounded-lg shadow-md max-w-full h-auto"
						/>
					</div>
				</div>
			</div>

			<div className="grid gap-6">
				{sources.map((src, idx) => (
					<Card key={idx}>
						<CardHeader>
							<CardTitle className="text-lg">{src.category}</CardTitle>
							<TypographySmall className="text-muted-foreground">
								{src.desc}
							</TypographySmall>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{src.links.map((link, i) => (
									<li key={i} className="flex items-center gap-2">
										<ExternalLink className="h-4 w-4 text-muted-foreground" />
										<a
											href={link.url}
											className="underline hover:text-primary"
											target="_blank"
											rel="noopener noreferrer"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
							{src.credits && (
								<div className="mt-4 pt-4 border-t">
									<h4 className="font-semibold mb-2 text-sm">Photo Credits:</h4>
									<ul className="space-y-1 text-xs text-muted-foreground">
										{src.credits.map((credit, i) => (
											<li key={i} dangerouslySetInnerHTML={{ __html: credit }} />
										))}
									</ul>
								</div>
							)}
						</CardContent>
					</Card>
				))}
			</div>


			<SectionNavigation currentPath="/sources" />
		</div>
	</div>
);

export default Sources;
