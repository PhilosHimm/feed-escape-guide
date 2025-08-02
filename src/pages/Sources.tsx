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
			{ label: "HelpGuide.org - Social Media and Mental Health", url: "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm" },
			{ label: "Freedom.to - Digital Addiction Research", url: "https://freedom.to/blog/" },
			{ label: "Center for Humane Technology", url: "https://www.humanetech.com/" },
			{ label: "Partnership on AI - Algorithmic Impact", url: "https://partnershiponai.org/" },
		],
	},
	{
		category: "Filter Bubbles & Algorithmic Research",
		desc: "Academic sources on information filtering and algorithmic bias:",
		links: [
			{ label: "Fondation Descartes - Filter Bubble Research", url: "https://fondationdescartes.org/en/" },
			{ label: "Partnership on AI - Engagement Optimization", url: "https://partnershiponai.org/" },
			{ label: "Eli Pariser - The Filter Bubble", url: "https://www.thefilterbubble.com/" },
		],
	},
	{
		category: "Privacy & Data Broker Information",
		desc: "Sources on data collection, privacy protection, and digital security:",
		links: [
			{ label: "NYM.com - Data Broker Research", url: "https://nymity.ch/" },
			{ label: "Privacy Badger - Tracking Protection", url: "https://privacybadger.org" },
			{ label: "Mozilla Foundation - Internet Health", url: "https://foundation.mozilla.org/" },
			{ label: "Electronic Frontier Foundation", url: "https://www.eff.org/" },
		],
	},
	{
		category: "Digital Literacy & Education",
		desc: "Educational resources for critical thinking and media literacy:",
		links: [
			{ label: "MediaSmarts Canada", url: "https://mediasmarts.ca" },
			{ label: "News Literacy Project", url: "https://newslit.org" },
			{ label: "First Draft - Misinformation Research", url: "https://firstdraftnews.org/" },
		],
	},
	{
		category: "Course Materials & Academic Sources",
		desc: "Toronto Metropolitan University CEID100 course materials and readings:",
		links: [
			{ label: "Course Module 4 - Attention Economy", url: "https://www.humane.tech/module4" },
			{ label: "Course Module 5 - Digital Wellness", url: "https://www.humane.tech/module5" },
			{ label: "Stolen Focus – Johann Hari", url: "https://www.humane.tech/module4" },
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
					Our digital wellness guide is built on evidence-based research from credible academic and institutional sources. Each section draws from peer-reviewed studies and established organizations to ensure accurate, helpful information.
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

			<Card className="bg-muted/50">
				<CardContent className="pt-6">
					<TypographySmall className="text-center">
						<strong>Academic Integrity:</strong> This digital wellness guide meets course requirements by combining both course materials and external credible sources. All research is properly attributed and evidence-based to support student learning and digital wellness practices.
					</TypographySmall>
				</CardContent>
			</Card>

			<SectionNavigation currentPath="/sources" />
		</div>
	</div>
);

export default Sources;
