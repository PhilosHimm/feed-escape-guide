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
			{ label: "Centre for Digital Thriving", url: "https://digitalwellness.org/" },
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
			{ label: "YouTube Creator Academy", url: "https://creatoracademy.youtube.com/" },
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
			{ label: "First Draft News - Information Verification", url: "https://firstdraftnews.org/" },
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
			{ label: "General Data Protection Regulation (GDPR) - EU", url: "https://gdpr.eu/" },
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
		desc: "Toronto Metropolitan University CEID100 course materials and foundational texts:",
		links: [
			{ label: "Stolen Focus: Why You Can't Pay Attention by Johann Hari", url: "" },
			{ label: "The Age of Surveillance Capitalism by Shoshana Zuboff", url: "" },
			{ label: "The Filter Bubble by Eli Pariser", url: "" },
			{ label: "Digital Minimalism by Cal Newport", url: "" },
			{ label: "Ten Arguments for Deleting Your Social Media Accounts Right Now by Jaron Lanier", url: "" },
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
		desc: "Images and graphics used under Creative Commons licensing:",
		links: [
			{
				label: "Photo by Agê Barros (digital wellness)",
				url: "https://unsplash.com/photos/photo-1488590528505-98d2b5aba04b",
			},
			{
				label: "Photo by Vishnu Mohanan (algorithms)",
				url: "https://unsplash.com/photos/photo-1518770660439-4636190af475",
			},
			{
				label: "Photo by Chris Ried (misinformation)",
				url: "https://unsplash.com/photos/photo-1487058792275-0ad4aaf24ca7",
			},
			{
				label: "Photo by Marvin Meyer (mental health)",
				url: "https://unsplash.com/photos/photo-1605810230434-7631ac76ec81",
			},
			{
				label: "Photo by Markus Spiske (privacy)",
				url: "https://unsplash.com/photos/photo-1526374965328-7f61d4dc18c5",
			},
		],
	},
];

const Sources = () => (
	<div className="container mx-auto py-8 px-4">
		<div className="max-w-4xl mx-auto space-y-8">
			<div className="space-y-4">
				<TypographyH1>Sources & Research Citations</TypographyH1>
				<TypographySmall className="text-muted-foreground">
					Our digital wellness guide is built on evidence-based research from credible academic institutions, peer-reviewed studies, and established organizations. Each module draws from authoritative sources to ensure accurate, helpful information that supports healthy technology relationships and digital literacy.
				</TypographySmall>
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
						</CardContent>
					</Card>
				))}
			</div>


			<SectionNavigation currentPath="/sources" />
		</div>
	</div>
);

export default Sources;
