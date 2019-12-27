import * as vscode from 'vscode';

const hjen = require('./hjen');
const hjjp = require('./hjjp');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('hujiang.en2cn', () => {
		hjen.word(selectedText(), showMsg);
	}));
	context.subscriptions.push(vscode.commands.registerCommand('hujiang.jp2cn', () => {
		hjjp.word(selectedText(), showMsg);
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}

const channel = vscode.window.createOutputChannel('沪江词典');
function showMsg(msg: any){
	channel.appendLine(msg.toString());
	channel.show();
}
function selectedText(): string {
	var editor = vscode.window.activeTextEditor;
	if (!editor) {
		return "";
	}
	var selection = editor.selection;
	var text = editor.document.getText(selection);
	return text;
}