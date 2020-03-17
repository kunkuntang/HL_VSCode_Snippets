'use strict';

import * as vscode from 'vscode';
import { ModelCreator } from './modelCreator';
import { showInputBox } from './baseInput';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.createModel', async function () {
		let inputClassName = await showInputBox()
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		// console.log('clipboard', await vscode.env.clipboard.readText())
		const clipboardText = await vscode.env.clipboard.readText()
		const modelCreator = new ModelCreator(inputClassName || '', clipboardText)

		const resultStr = modelCreator.generateModel()
		// console.log('resultStr', resultStr)

		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let word = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.insert(selection.active, resultStr);
			});
		}
	});

	context.subscriptions.push(disposable);
}