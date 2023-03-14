export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: `-----BEGIN PRIVATE KEY-----
    MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCkBm87NWIMprXQ
    j4vb8kcz7K5EwZ1lQxmBM/twsEtJgGu1SE93VAuYRqkv0VXQzv52NaPdXTqEPkIL
    jV+zd6N58aAhLru4bwXv4HzFiAOXbWbX7HKhilfHuud+lpPa5xtcEQ9xc//y67/Y
    sFCMi/I165EFVvz9pbuwBejHeR/kggkW88omKSpzRJaPO3uJ1XUFBfmyZ3Lw8XId
    fHZROAHaiF5vdaDBiNcvgtAL3vPJSTEUAvtXcLmkXlI11/WEwIoXkjMTv0Oy3LN1
    D8wObh4iW93BS7nLBFGPazVq+bZaJ+5VYjQmknk1lQe+rfnLDTicMi5IsEu3M1lJ
    P0LBAhC5AgMBAAECggEADCUP0lX7Cw3C84zVYbU4MW+KXbvqQAeuWUM0kFz1Th1s
    nDEc9SxraVx+BXTeAkZ5T95b4jWXchg8Aqf2mI64s3xBC4Pu0VKjIWZBRszx2yH2
    FfHDcRORuU+s+VID45buDyySNKfOoTl0bIJtjGKGThjBlaAhvlQpp/hgCnj89AnQ
    V+pO/ujDM2fuHzzGph+AxxqzQlGWni42radmuCuN/ysA0jVlOV8jli9/4MNwkpmu
    ZRAKnescOaVU+l3BIa3bPll4HRgfvB+D6tnxmk/Mvcm8S0p80HuE2GTRzLzt3Bli
    8XmTpWdcWl0j64oxkrdYPbL9J1z3ACEpiifH18PQQQKBgQDeyhZcqF/WSHzN0+Wy
    3mDeIiNFU7d9yusXbOmNCrr80n4iW/ung6t1PKJNwjGFwDQf7yOdtFmHWHhl5Ue3
    ldXKPk3fPoKnrjgHd3r9owpFVgr6VAKj0wADN/rUAdzPDmi5sy9SLRhYi3RQmPGV
    YfoF7ZLBevuOKloUnQn0wvHoaQKBgQC8edTpiUzRbZbgpd5gPnPvZ9vn/a0w9cL9
    7Lz9tvNKXionHuMD1OMOXZk0lxth88FejRHRVXKdltyhp3DaHzCM0o49ssY7uY7N
    Xa8pGBfLvH2EEYcEI4Xv9xIlxDzDXgpUDqooiYBdnNVkC/Vc8z+D+i8dVX6X4JB7
    Y/6LL/Zb0QKBgQDbM/cgn8H78kJpug2NGmQw62HMunwV1uvMlqqMzXwBeZIFeH94
    6IJwzYHcBC/5q40dxotChcp48sEzcI5JwbEiVn8EIlsnZLFYF2T53csjQW93seUP
    D3I5uICgzFxXlZPQ8s6iiiAkLsH48yLvmgEIiCIXIEwWKvGKyqCbJJwj0QKBgQCN
    l+2XQRnf4DfQL2xf26tXeSwhHlgFhyxlfXwCE3a1MQbz+uVLlJy7xx94/eiJbwmf
    kdWH8Wy47YR1QYirpXDg6rIHsg3xApdAu5gDBGGkIsgc9tn7BwDxZSlSDBomH7kc
    qyO0bpBsQ42gqsc7fFcEPGk23WrMiN2ihV3OjUrEcQKBgQCvPxLpme7QaBgXYsG2
    7P/OazFaBtjQyr1yrVUqI1Y0/UQtya5LTcfz+vhMMjieEVZf/7HJOhkVyXTZfzbX
    vfNGY3GiuXg8Wc7MLAzywfs1qpyUi8RwdQJsec+IUKaJVJgnL26VeoMMAbvI4Cs9
    sUgB7+GYeWVyYbaQqdkAFjwC2g==
    -----END PRIVATE KEY-----`,
  accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApAZvOzViDKa10I+L2/JH
    M+yuRMGdZUMZgTP7cLBLSYBrtUhPd1QLmEapL9FV0M7+djWj3V06hD5CC41fs3ej
    efGgIS67uG8F7+B8xYgDl21m1+xyoYpXx7rnfpaT2ucbXBEPcXP/8uu/2LBQjIvy
    NeuRBVb8/aW7sAXox3kf5IIJFvPKJikqc0SWjzt7idV1BQX5smdy8PFyHXx2UTgB
    2oheb3WgwYjXL4LQC97zyUkxFAL7V3C5pF5SNdf1hMCKF5IzE79DstyzdQ/MDm4e
    IlvdwUu5ywRRj2s1avm2WifuVWI0JpJ5NZUHvq35yw04nDIuSLBLtzNZST9CwQIQ
    uQIDAQAB
    -----END PUBLIC KEY-----`,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
