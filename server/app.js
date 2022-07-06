const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan("dev"));

const UserRouter=require('./api/routes/User');
const LoginRout=require('./api/routes/Login');
const MeetingRout=require('./api/routes/meeting');
const DairiesRout=require('./api/routes/Dairies');

app.use('/User',UserRouter);
app.use('/Login',LoginRout);
app.use('/Meeting',MeetingRout);
app.use('/Dairies',DairiesRout);

app.use((req,res,next)=>{
    const error=new Error('not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.Json({
        error:{
            error:error.message
        }
    })

})
app.listen(port,()=>{
    console.log(`love ${port}`)
})

module.express=app;