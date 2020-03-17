"use strict";

import { window, workspace, EndOfLine } from "vscode";

function upperFirstCase(str: string) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

export class ModelCreator {
  public data: { [key: string]: any } = {};
  private className = "Test";
  private enterSign = "\n";
  private rawdata =
    '{"msg":"","ok":true,"status":0,"data":{"id":1,"registerId":"REG_201909060025114d24fdc4dad8","companyUid":"C1547694626077","registerName":"0906AA","registerEmail":"0906AA@qq.com","registerMobile":"17612172551","registerType":"2","name":"0906AA","englishName":"0906AA","orgCode":"12340116781206932D","businessLicenseExpirationDate":"2019-09-30","identityType":"1","openAddress":"0906AA地址","dirPath":"/INPUT/12340116781206932D/KYC/","fileIdList":null,"legalName":"0906AA","legalidtype":"1","legalid":"410182199209061234","legalidendDate":"2019-09-30","bankAcctNo":"6228480030820693718","bankAcctName":"0906AA","bankCode":"ABC","mobileNo":"17612172551","bankLineNo":"103290077603","bankBranch":"农业银行","openCity":"310115","openProv":"310000","registerStatus":"1","remark":"","createrId":9365,"updaterId":9365,"createrName":"招宏基","updaterName":"招宏基","createTime":"2019-09-06 18:11:23","updateTime":"2019-09-06 18:11:23","fileList":[{"id":1,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":1,"createUserName":"招宏基","createDate":"2019-09-06 18:11:06","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/99056968-758d-4c2e-8ac0-6fa5590aff96.pdf","fileName":"775c43b6-b714-4cff-bee9-659dee6b784c.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//775c43b6-b714-4cff-bee9-659dee6b784c.pdf","fileSize":70823},{"id":2,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":2,"createUserName":"招宏基","createDate":"2019-09-06 18:11:09","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/3f66a47a-db7a-4071-a670-3ab48a2aecd0.pdf","fileName":"504f9b8c-6836-41e1-abe6-71803ced4525.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//504f9b8c-6836-41e1-abe6-71803ced4525.pdf","fileSize":70823},{"id":3,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":0,"createUserName":"招宏基","createDate":"2019-09-06 18:11:12","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/cb7beae9-4653-482c-ad86-c48839ebd61b.pdf","fileName":"e5428579-af39-4ee0-a10f-cab7592588a6.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//e5428579-af39-4ee0-a10f-cab7592588a6.pdf","fileSize":70823},{"id":4,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":3,"createUserName":"招宏基","createDate":"2019-09-06 18:11:16","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/e7d18977-0f34-4da7-9a89-b5f018d7c0af.pdf","fileName":"364856df-0458-49ef-8a08-97d6839f6f80.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//364856df-0458-49ef-8a08-97d6839f6f80.pdf","fileSize":70823}],"signStatus":null}}';
  private modelStr: Array<string> = [];

  constructor(className: string, dataJsonStr: string) {
    console.log("textDocuments", workspace.textDocuments);
    if (window.activeTextEditor?.document.eol) {
      this.enterSign =
        window.activeTextEditor?.document.eol === EndOfLine.LF ? "\n" : "\r\n";
    }

    this.className = className ? upperFirstCase(className) : this.className;
    // this.rawdata = dataJsonStr;
    this.data = this.safeJsonParse(this.rawdata);
  }

  public safeJsonParse(rawJson: string) {
    let safeJson = rawJson;
    return JSON.parse(safeJson);
  }

  /**
   * 创建model
   */
  public generateModel() {
    // 先判断 this.data 有没有值
    if (this.data !== null) {
      // 构建接口 model constructor
      this.modelStr.push(this.generateConstructor(this.data));
      this.modelStr.push(this.generateInterface(this.data));
      this.modelStr.push(this.generateClass(this.className, this.data["data"]));
      return this.modelStr.reverse().join(this.enterSign);
    } else {
      window.showErrorMessage("data 值为null，请重新复制接口响应数据");
      return "";
    }
  }

  /** 创建 接口定义 */
  private generateInterface(data: { [key: string]: any }) {
    let tempInterArr = [];
    tempInterArr.push(`interface I${this.className}<T> {`);
    Object.keys(data).forEach(key => {
      if (key !== "data") {
        tempInterArr.push(`  ${key}: ${typeof data[key]};`);
      }
    });
    tempInterArr.push(`  data: T;`);
    tempInterArr.push(`}`);
    return tempInterArr.join(this.enterSign);
  }

  /**
   * 创建 数据的 constructor
   * @param data 接口数据
   */
  private generateConstructor(data: { [key: string]: any }) {
    let tempConArr = [];
    tempConArr.push(
      `export class ${this.className}CE extends BaseEntity<${this.className}E>{`
    );
    tempConArr.push(
      `    constructor(fromJson: I${this.className}<${this.className}E>){`
    );
    tempConArr.push(`        super();`);
    // 创建 基本响应结构 msg,code,status
    Object.keys(data).forEach(key => {
      if (key === "msg" || key === "message") {
        tempConArr.push(`        this.message=fromJson.${key} || '查询成功';`);
      }
      if (key === "ok" || key === "success") {
        tempConArr.push(`        this.success=fromJson.${key} || true;`);
      }
      if (key === "status" || key === "code") {
        tempConArr.push(`        this.code=fromJson.${key} || '';`);
      }
    });
    // 创建 data
    tempConArr.push(`        if (fromJson && fromJson.data) {`);
    if (Array.isArray(data["data"])) {
      tempConArr.push(
        `            this.result = super.transformArray(fromJson.data, ${this.className}E);`
      );
    } else {
      tempConArr.push(
        `            this.result = super.transformRow(fromJson.data, ${this.className}E);`
      );
    }
    tempConArr.push(`        } else {`);
    tempConArr.push(`            this.result = new ${this.className}E()`);
    tempConArr.push(`        }`);
    tempConArr.push(`   }`);
    tempConArr.push(`}`);
    return tempConArr.join(this.enterSign);
  }

  /**
   * 创建实体
   * @param name 实体名称
   * @param data 实体数据
   */
  private generateClass(name: string, data: { [key: string]: any }) {
    let tempClassArr = [];
    tempClassArr.push(`export class ${name}E {`);
    Object.keys(data).forEach(key => {
      if (typeof data[key] === "number") {
        tempClassArr.push(`    @JsonProperty('${key}')`);
        tempClassArr.push(`    ${key}:number = void 0;${this.enterSign}`);
      }
      if (typeof data[key] === "string") {
        tempClassArr.push(`    @JsonProperty('${key}')`);
        tempClassArr.push(`    ${key} = '';${this.enterSign}`);
      }
      if (typeof data[key] === "boolean") {
        tempClassArr.push(`    @JsonProperty('${key}')`);
        tempClassArr.push(`    ${key} = false;${this.enterSign}`);
      }
      if (typeof data[key] === "undefined") {
        tempClassArr.push(`    @JsonProperty('${key}')`);
        tempClassArr.push(`    ${key} = void 0;${this.enterSign}`);
      }
      if (typeof data[key] === "object") {
        if (data[key] === null) {
          tempClassArr.push(`    @JsonProperty('${key}')`);
          tempClassArr.push(`    ${key} = null;${this.enterSign}`);
        } else if (Array.isArray(data[key])) {
          tempClassArr.push(`    @JsonProperty('${key}')`);
          tempClassArr.push(`    ${key}:${key}E[] = [];${this.enterSign}`);
          tempClassArr.unshift(this.generateClass(key, data[key][0]))
        } else {
          tempClassArr.push(
            `    @JsonProperty({ clazz: ${key}E, name: '${key}' })`
          );
          tempClassArr.push(`    ${key} = new ${upperFirstCase(key)}E;${this.enterSign}`);
          tempClassArr.unshift(this.generateClass(key, data[key]))
        }
      }
    });
    tempClassArr.push(`}`);
    return tempClassArr.join(this.enterSign);
  }
}