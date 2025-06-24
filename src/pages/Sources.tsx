import React from "react";
import { TypographyH1, TypographySmall } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionNavigation } from "@/components/SectionNavigation";
import { ExternalLink } from "lucide-react";

const sources = [
	{
		desc: "Unsplash placeholder images used with CC0 license:",
		links: [
			{
				label: "Photo by Agê Barros (glitchy phone feed)",
				url: "https://unsplash.com/photos/photo-1488590528505-98d2b5aba04b",
			},
			{
				label: "Photo by Vishnu Mohanan (algorithm diagram)",
				url: "https://unsplash.com/photos/photo-1518770660439-4636190af475",
			},
			{
				label: "Photo by Chris Ried (fake news infographic)",
				url: "https://unsplash.com/photos/photo-1487058792275-0ad4aaf24ca7",
			},
			{
				label: "Photo by Marvin Meyer (mental health infographic)",
				url: "https://unsplash.com/photos/photo-1605810230434-7631ac76ec81",
			},
			{
				label: "Photo by Markus Spiske (privacy lock)",
				url: "https://unsplash.com/photos/photo-1526374965328-7f61d4dc18c5",
			},
		],
	},
	{
		desc: "External resources cited:",
		links: [
			{ label: "Center for Humane Tech", url: "https://www.humanetech.com/" },
			{ label: "MediaSmarts", url: "https://mediasmarts.ca" },
			{ label: "News Literacy Project", url: "https://newslit.org" },
			{ label: "Privacy Badger", url: "https://privacybadger.org" },
			{ label: "CBC Reset Podcast", url: "https://www.cbc.ca/radio/podcastnews/reset" },
			{ label: "Stolen Focus – Johann Hari", url: "https://www.humane.tech/module4" },
		],
	},
];

const Sources = () => (
	<div className="container mx-auto py-8 px-4">
		<div className="max-w-4xl mx-auto space-y-8">
			<TypographyH1>Sources & Credits</TypographyH1>

			<div className="grid gap-6">
				{sources.map((src, idx) => (
					<Card key={idx}>
						<CardHeader>
							<CardTitle className="text-lg">{src.desc}</CardTitle>
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
						All images used under Creative Commons or with consent. Please report any content issues to the course team.
					</TypographySmall>
				</CardContent>
			</Card>

			<SectionNavigation currentPath="/sources" />
		</div>
	</div>
);

export default Sources;
