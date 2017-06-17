import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    loginWrap:{
        position:'fixed',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        background:'url(/img/bgLogin.png) no-repeat center / cover'
    },
    login:{
        width:314,
        height:343,
        background:'#000'
    },
    loginText:{
        color:'#ffffff',
        fontFamily: '"AA Bebas Neue"',
        fontSize:23,
        textAlign:'center',
        paddingLeft:20,
        paddingRight:20
    },
    input:{
        height:39,
        width:'100%',
        display:'block',
        background:'transparent',
        border:0,
        borderBottom:'1px solid #fac054',
        paddingLeft:31,
        fontSize:14,
        color:'#fff',
        marginBottom:15,
        '::-webkit-input-placeholder':{
            color:'#fff',
        }
    },
    loginInput:{
        background:'url(/img/user.png) no-repeat center left',
        backgroundSize:16
    },
    pasInput:{
        background:'url(/img/pas.png) no-repeat center left',
        backgroundSize:13
    },
    form:{
        width:249,
        display:'block',
        margin:'auto',
        marginTop:25
    },
    button:{
        width:'100%',
        height:54,
        backgroundColor: '#fac054',
        border:0,
        fontSize:15,
        fontWeight: 700,
        color: '#605238',
        marginTop:25
    }
})