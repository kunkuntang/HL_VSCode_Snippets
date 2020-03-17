console.log(JSON.parse('null') === null)
var rawdata = '{"msg":"","ok":true,"status":0,"data":{"id":1,"registerId":"REG_201909060025114d24fdc4dad8","companyUid":"C1547694626077","registerName":"0906AA","registerEmail":"0906AA@qq.com","registerMobile":"17612172551","registerType":"2","name":"0906AA","englishName":"0906AA","orgCode":"12340116781206932D","businessLicenseExpirationDate":"2019-09-30","identityType":"1","openAddress":"0906AA地址","dirPath":"/INPUT/12340116781206932D/KYC/","fileIdList":null,"legalName":"0906AA","legalidtype":"1","legalid":"410182199209061234","legalidendDate":"2019-09-30","bankAcctNo":"6228480030820693718","bankAcctName":"0906AA","bankCode":"ABC","mobileNo":"17612172551","bankLineNo":"103290077603","bankBranch":"农业银行","openCity":"310115","openProv":"310000","registerStatus":"1","remark":"","createrId":9365,"updaterId":9365,"createrName":"招宏基","updaterName":"招宏基","createTime":"2019-09-06 18:11:23","updateTime":"2019-09-06 18:11:23","fileList":[{"id":1,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":1,"createUserName":"招宏基","createDate":"2019-09-06 18:11:06","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/99056968-758d-4c2e-8ac0-6fa5590aff96.pdf","fileName":"775c43b6-b714-4cff-bee9-659dee6b784c.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//775c43b6-b714-4cff-bee9-659dee6b784c.pdf","fileSize":70823},{"id":2,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":2,"createUserName":"招宏基","createDate":"2019-09-06 18:11:09","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/3f66a47a-db7a-4071-a670-3ab48a2aecd0.pdf","fileName":"504f9b8c-6836-41e1-abe6-71803ced4525.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//504f9b8c-6836-41e1-abe6-71803ced4525.pdf","fileSize":70823},{"id":3,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":0,"createUserName":"招宏基","createDate":"2019-09-06 18:11:12","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/cb7beae9-4653-482c-ad86-c48839ebd61b.pdf","fileName":"e5428579-af39-4ee0-a10f-cab7592588a6.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//e5428579-af39-4ee0-a10f-cab7592588a6.pdf","fileSize":70823},{"id":4,"optId":"1","companyUid":"C1547694626077","createUserId":9365,"fileType":3,"createUserName":"招宏基","createDate":"2019-09-06 18:11:16","filePath":"http://hlfs01.oss-cn-shenzhen.aliyuncs.com/dev/4pl/2019/09/06/e7d18977-0f34-4da7-9a89-b5f018d7c0af.pdf","fileName":"364856df-0458-49ef-8a08-97d6839f6f80.pdf","fileXhDirpath":"/INPUT/12340116781206932D/KYC//364856df-0458-49ef-8a08-97d6839f6f80.pdf","fileSize":70823}],"signStatus":null}}'
var parseData = JSON.parse(rawdata)
console.log('data', parseData)

function generate() {
  if (parseData !== null) {
    let className = 'Test'

    createConstructor(data)
      // createModel(parseData)
  } else {
    // 传入了null
  }
}

function createConstructor(data) {
  let constructStr = `export class ${className}ContainerEntity extends BaseEntity<${className}Entity>{
    constructor(fromJson:IUerInfoEntity){
       // @ts-ignore
        super(fromJson);
        this.message=fromJson.msg||'查询成功';
        this.success=fromJson.ok||true;
        this.code=fromJson.status||'';
        let data = fromJson.data
        if(fromJson&&data){
            ${parseData.data}this.result=super.transformRow(data,${className}Entity)
        }
        else{
            this.result = new ${className}Entity()
        }
    }
}`
}

function createModel(data) {
  let tempStr = ''


  if (typeof data === 'object') {

  }

}

function createBaseTypeStr() {}

function createNullTypeStr() {}

function createUndefinedTypeStr() {}

function createClassTypeStr() {}