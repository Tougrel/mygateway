export default defineEventHandler(() => {
	return {
		name: "Tougrel",
		avatar_url: "https://cdn.tougrel.dev/gateway/profiles/tougrel.webp",
		social: [
			{
				icon: "mdi:email",
				value: "me@tougrel.dev",
				to: "mailto:me@tougrel.dev",
				colors: {
					base: "text-primary-700",
					hover: "hover:text-primary-500",
				},
			},
			{
				icon: "mdi:github",
				value: "Tougrel",
				to: "https://github.com/Tougrel",
				colors: {
					base: "text-gray-500",
					hover: "hover:text-gray-400",
				},
			},
			{
				icon: "mdi:discord",
				value: "Workshop",
				to: "https://discord.gg/8etg59B5eM",
				colors: {
					base: "text-discord",
					hover: "hover:text-discord",
				},
			},
			{
				icon: "mdi:twitter",
				value: "@Tougrel",
				to: "https://twitter.com/Tougrel",
				colors: {
					base: "text-twitter",
					hover: "hover:text-twitter",
				},
			},
		],
	} as User;
});

interface User {
	name: string;
	avatar_url: string;
	social: UserSocial[];
}

interface UserSocial {
	icon: string;
	value: string;
	to: string;
	colors: UserSocialColors;
}

interface UserSocialColors {
	base: string;
	hover: string;
}
