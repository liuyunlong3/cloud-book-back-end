//这里是利用jsonwebtoken解密的过程
const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU5ODcxNjQsImRhdGEiOnsidXNlcklkIjoiMDAxIn0sImlhdCI6MTU1NTk4NzEwNH0.74zU8eoB0h0eFPqzXFeIoI7mN_Sk2Z8fIB3q_yerFgc'

jwt.verify(token,'lyl',function(err,data){
    if(err){
        console.log('err',err)
    }
    else{
        console.log(data)
    }
})