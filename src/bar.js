import { Manager } from "smooshpack";

const manager = new Manager(document.getElementById("preview-bar"), {
	files: {
		"/index.js": {
			code: "document.body.innerHTML = '<h2>Bar preview</h2>'",
		},
	},
	entry: "/index.js",
	dependencies: { expect: "latest" },
});

document.getElementById("cta").addEventListener("click", () => {
	const number = Math.trunc(Math.random() * 100);
	manager.updatePreview({
		files: {
			"/index.js": {
				code: `
          document.body.innerHTML = '<h2>Bar preview UPDATED ${number}</h2>'
        `,
			},
		},
		entry: "/index.js",
		dependencies: { expect: "latest" },
	});
});
