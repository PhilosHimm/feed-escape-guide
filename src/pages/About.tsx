import React from "react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
				We're a student team at Toronto Metropolitan University (TMU) passionate
				about digital wellbeing. This guide was created for CEID100, Spring 2025.
			</TypographyP>

			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-4">Our Team</h2>
					<div className="flex flex-wrap gap-2">
						{team.map((person, i) => (
							<Badge key={i} variant="secondary" className="text-sm">
								{person.name}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
);

export default About;
