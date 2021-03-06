// localstorage常量类
const localstorageKeys = {
  // 用户账号
  OPERATOR: 'operator',
  // token
  TOKEN: 'token',
  // 系统类型
  SYSTEM: 'system'

}

const dictType = {
  PAY_TYPE: 'PAY_TYPE',
  INCOME_TYPE: 'INCOME_TYPE',
  ACCOUNT_TYPE: 'ACCOUNT_TYPE',
  MEMBER_TYPE: 'MEMBER_TYPE'
}

const addDictTitle = {
  PAY_TYPE: '支出分类',
  INCOME_TYPE: '收入分类',
  ACCOUNT_TYPE: '账号',
  MEMBER_TYPE: '成员'
}

const timeInterval = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR'
}

const orderType = {
  PAY: 0,
  INCOME: 1
}

const weappInfo = {
  MANGOGUANG: {
    name: 'MANGOGUANG',
    appid: 'wx2779f0e4baf15731',
    secret: '32238ee2ca0621a3aea5d8d91459ae31'
  }
}

export {
  localstorageKeys,
  dictType,
  orderType,
  addDictTitle,
  timeInterval,
  weappInfo
}
