export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxtjs/seo", "nuxt-icon", "nuxt-delay-hydration", "@nuxt/fonts"],

	runtimeConfig: {
		public: {
			usesExternalAPI: false,
			externalAPIAddress: process.env.EXTERNAL_API_ADDRESS,
		},
	},

	ui: {
		icons: ["heroicons", "mdi"],
	},

	delayHydration: {
		mode: "mount",
		debug: process.env.NODE_ENV === "development",
	},

	site: {
		url: process.env.SITE_URL,
		name: process.env.SITE_NAME,
		description: process.env.SITE_DESCRIPTION || undefined,
		// this is not needed if you are planning on using @nuxtjs/i18n
		defaultLocale: process.env.SITE_LOCALE || undefined,
	},

	fonts: {
		priority: ["bunny", "google"],
		defaults: {
			weights: [400, 700],
		},
	},

	// this is going to make your bundle size explode. If you are on cloudflare's free tier
	// then you won't be able to use it with the 1MB limit workers have
	ogImage: {
		enabled: false,
	},

	sitemap: {
		enabled: false,
	},

	robots: {
		enabled: true,
	},

	seoExperiments: {
		enabled: false,
	},

	schemaOrg: {
		enabled: false,
	},

	linkChecker: {
		enabled: true,
		excludeLinks: [],
		skipInspections: [],
	},
});
