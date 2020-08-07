import { Manager } from "smooshpack";

const manager = new Manager(document.getElementById("preview-foo"), {
	files: {
		"/index.js": {
			code: "document.body.innerHTML = '<h2>Foo preview</h2>'",
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
          document.body.innerHTML = '<h2>Foo preview UPDATED ${number}</h2>'
        `,
			},
		},
		entry: "/index.js",
		dependencies: { expect: "latest" },
	});
});
