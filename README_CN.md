# HLSnippets

<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/kunkuntang/HL_VSCode_Snippets/master/images/HLS-icon.png" />
</p>

使用这个插件，你可以生成出任何类型的模板代码，希望你会喜欢他！

[English Document](https://github.com/kunkuntang/HL_VSCode_Snippets/blob/master/README.md) | [中文文档](https://github.com/kunkuntang/HL_VSCode_Snippets/blob/master/README_CN.md)

## 安装方法

通过在VSCode插件市场搜索`HLSnippets`来安装此扩展。

[Visual Studio Code 插件地址: HLSnippets](https://marketplace.visualstudio.com/items?itemName=kuntang.hlsnippets)

## 使用方法

这个拓展包含了三种不同类型的脚本代码：

- Container Snippets（容器类型）, 用来创建一下在空白文件下的模板代码。
- Component Snippets（组件类型）, 用来在页面上创建组件代码。
- Creator(Create) Snippets（创建类型）, 在不同类型的文件上，创建一些特定的模板代码, 例如 store， service， 等等。

根据这些脚本的分类，`HLSnippets`将它定义为三种不同的类型，分别为`prefix` + `scope` + `type`。

### 简单的例子

当我想新建一个页面时，我会在工程目录上创建一个文件并打开它，然后输入`HLContainerPage`并在弹出的提示下按 `tab` 键，一个页面的基本模板代码将会显示在文件上。

<p align="center">
  <img width="1440" src="https://raw.githubusercontent.com/kunkuntang/HL_VSCode_Snippets/master/images/HLSinppets-intro.gif" />
</p>

通过这个例子，我们来介绍一下这个指令的规则，之前用到的指令`HLContainerPage`包含了3部分：前缀（`Prefix`），域（`Scope`）和类型（`Type`）。首先前缀是固定的，都叫`HL`。然后域就是上面提到的`Container`，`Component`和`Create`这三种。最后`Type`就是指脚本的类型（也就是具体脚本代码的功能），下文会详细列出。

比如在`HLContainerPage`指令中，前缀是`HL`，来与其他代码提示的插件作区分。域是`Container`，说明你将要在一个空白文件上创建代码。最后是`Page`类型的脚本代码，说明你要在一个空白文件上生成页面模板代码。

### 所有的 Snippets 清单

The table below list all the snippets and instruction.
下面的表格将会累出所有的 snippets 以及对应的说明。

#### Container Snippets:

指令名称 | 说明
---|---
HLContainerPage | 在空白文件上生成 **页面** 模板代码
HLContainerFormConfig | 在空白文件上生成 **表单配置** 模板代码
HLContainerTableColumns | 在空白文件上生成 **表格列配置** 模板代码
HLContainerFormField | 在空白文件上生成 **表单域** 模板代码
HLContainerQueryConditionsConfig | 在空白文件上生成 **QueryCondition** 模板代码
HLContainerStore | 在空白文件上生成 **响应式store** 模板代码

#### Component Snippets

指令名称 | 说明
---|---
HLComponentForm | 生成 **表单组件** 模板代码
HLComponentModal | 生成 **模态框组件** 模板代码
HLComponentQRCoe | 生成 **二维码组件** 模板代码
HLComponentTable | 生成 **表格组件** 模板代码
HLComponentSelectTable | 生成 **带有选择项的表格组件** 模板代码
HLComponentQueryConditions | 生成 **QueryConditions组件** 模板代码
HLComponentBaiduMap | 生成 **百度地图组件** 模板代码
HLComponentPrint | 生成 **打印组件** 模板代码

#### Creator Snippets

接口类型的生成指令：

指令名称 | 说明
---|---
HLCreateGetService | 生成一个 **get请求** 模板代码
HLCreatePostService | 生成一个 **post请求** 模板代码

表格类型的生成指令：

指令名称 | 说明
---|---
HLCreateTableColumnsItem | 生成 **表格列项** 的模板代码

表单域类型的生成指令：

指令名称 | 说明
---|---
HLCreateFormFieldRule | 生成 **表单域规则** 的模板代码
HLCreateFormFieldExtendRule | 生成 **表单域额外规则** 的模板代码
HLCreateTextFormField | 生成 **文字表单域** 的模板代码
HLCreateInputFormField | 生成 **文本表单域** 的模板代码
HLCreateSwitchFormField | 生成 **Switch表单域** 的模板代码
HLCreateNumberInputFormField | 生成 **数字文本表单域** 的模板代码
HLCreateMultipleSelectFormField | 生成 **多选下拉表单域** 的模板代码
HLCreateSelectPageFormField | 生成 **下拉分页表单域** 的模板代码
HLCreateDatePickerFormField | 生成 **日期选择表单域** 的模板代码
HLCreateUploadFormField | 生成 **文件上传表单域** 的模板代码
HLCreateHiddenFormField | 生成 **隐藏表单域** 的模板代码
HLCreateExtraFormField | 生成 **额外表单域** 的模板代码
HLCreateCustomFormField | 生成 **自定义表单域** 的模板代码

> **隐藏表单项:** 这是指不在UI表单上显示但又需要提交到后台接口的表单字段。

> **额外表单项:** 这是指在UI表单上显示但又不需要提交到后台接口的表单字段。

> **自定义表单项:** 这是生成最多自定义字段的自定义表单项，例如 `regex`, `validator`，等等.

表单项类型的生成指令：

指令名称 | 说明
---|---
HLCreateInputFormItem | 生成 **文本表单项** 的模板代码
HLCreateNumberInputFormItem | 生成 **数字文本表单项** 的模板代码
HLCreateTextAreaFormItem | 生成 **多行文本表单项** 的模板代码
HLCreateRadioButtonFormItem | 生成 **Radio按钮表单项** 的模板代码
HLCreateSwitchFormItem | 生成 **Switch表单项** 的模板代码
HLCreateDatePickerFormItem | 生成 **日期选择表单项** 的模板代码
HLCreateSelectFormItem | 生成 **选择表单项** 的模板代码
HLCreateSearchSelectFormItem | 生成 **远程搜索选择表单项** 的模板代码
HLCreateUploadFormItem | 生成 **文件上传表单项** 的模板代码
HLCreateCustomFormItem | 生成 **自定义表单项** 的模板代码

## Features

Add code snippets.

## Requirements

Visual Studio Code version is above `^1.34.0`.

## Release Notes

This is the first publishing of HLSnippets.

### 0.0.1

Add code snippets.

-----------------------------------------------------------------------------------------------------------

**Enjoy!**
