"use strict";

import * as vscode from "vscode";
import { ModelCreator } from "./modelCreator";
import { showInputBox } from "./baseInput";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.createModel",
    async function() {
      let inputClassName = await showInputBox();
      // Get the active text editor
      let editor = vscode.window.activeTextEditor;

      const clipboardText = await vscode.env.clipboard.readText();
      let safeJsonData = {};
      try {
        safeJsonData = JSON.parse(clipboardText);

        const modelCreator = new ModelCreator(
          inputClassName || "",
          safeJsonData
        );

        const resultStr = modelCreator.generateModel();
        if (editor) {
          let selection = editor.selection;

          // Get the word within the selection
          editor.edit(editBuilder => {
            editBuilder.insert(selection.active, resultStr);
          });
        }
      } catch (error) {
        vscode.window.showErrorMessage(
          "非法的JSON字符串，请重新复制接口响应数据"
        );
        let result = await vscode.window.showQuickPick(["是", "否"], {
          placeHolder: "是否继续生成model？"
        });
        if (result === "是") {
          const modelCreator = new ModelCreator(
            inputClassName || "",
            safeJsonData
          );

          const resultStr = modelCreator.generateModel();
          if (editor) {
            let selection = editor.selection;

            // Get the word within the selection
            editor.edit(editBuilder => {
              editBuilder.insert(selection.active, resultStr);
            });
          }
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}
