import React from "react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionNavigation } from "@/components/SectionNavigation";

const team = [
	{ name: "Philos Himm" },
	{ name: "Urwa Najeeb" },
	{ name: "Amaira Bons" },
	{ name: "Faculty: Prof. Guy" },
	{ name: "CEID100, Toronto Metropolitan University, Spring/Summer 2025" }
];

const About = () => (
	<div className="container mx-auto py-8 px-4">
		<div className="max-w-4xl mx-auto space-y-8">
			<TypographyH1>About Us</TypographyH1>

			<TypographyP className="text-lg">
				We're a student team at Toronto Metropolitan University (TMU) creating evidence-based resources for digital wellness. Our mission is to help people understand how algorithms, misinformation, privacy concerns, and digital habits impact mental health and well-being, then provide practical tools for healthier technology use.
			</TypographyP>

			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-4">Our Digital Wellness Mission</h2>
					<TypographyP className="mb-4">
						This project's central theme is <strong>digital wellness</strong>—the practice of maintaining a healthy relationship with technology that supports rather than harms your mental and emotional well-being. Each section of our guide contributes to this goal:
					</TypographyP>
					<ul className="space-y-2 text-sm">
						<li>• <strong>Mental Health:</strong> Understanding how social media affects mood, sleep, and anxiety</li>
						<li>• <strong>Algorithms:</strong> Breaking filter bubbles to reduce stress and access diverse perspectives</li>
						<li>• <strong>Misinformation:</strong> Protecting peace of mind through critical thinking and source verification</li>
						<li>• <strong>Privacy:</strong> Building security and confidence through data protection</li>
						<li>• <strong>Digital Balance:</strong> Creating sustainable habits for long-term wellness</li>
					</ul>
					<TypographyP className="mt-4 text-sm text-muted-foreground">
						Our approach is evidence-based, drawing from research on mental health impacts, filter bubbles, data brokers, and addictive design patterns to create practical solutions for digital wellness.
					</TypographyP>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-4">Our Team</h2>
					<div className="flex flex-wrap gap-2">
						{team.map((person, i) => (
							<Badge key={i} variant="secondary" className="text-sm">
								{person.name}
							</Badge>
						))}
					</div>				</CardContent>
			</Card>

			<SectionNavigation currentPath="/about" />
		</div>
	</div>
);

export default About;
