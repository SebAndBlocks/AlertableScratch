/* global Scratch */
/// <reference types="scratch-env"/>

class Alertable {
	getInfo() {
		return {
			id: "Alertable",
			name: "Alertable",
			blocks: [{
				opcode: "alert",
				blockType: reporter,
				text: "alert [text]",
				arguments: {
					text: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "Hello"
					}
				}
			}]
		}
	}

	greet({ text }: { name: string }): string {
		alert("${text}");
	}
}

Scratch.extensions.register(new Alertable());
