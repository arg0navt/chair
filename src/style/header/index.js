import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    top:{
        justifyContent:'space-between',
        padding:16,
    },
    openNav:{
        width:19,
        cursor:'pointer'
    },
    add:{
        width:16,
        cursor:'pointer'
    },
    titleText:{
        color: '#ffffff',
        fontFamily: '"Helvetica Neue Cyr"',
        fontSize: 16,
        fontWeight: 500,
    },
    days:{
        width:'100%',
        overflow:'hidden'
    },
    list:{
        whiteSpace: 'nowrap',
        maxWidth:'100%',
        userSelect: 'none',
    },
    border:{
        position:'absolute',
        top:0,
        left:0, 
        width:'100%',
        height:'100%',
        ':hover':{
            border: '4px solid #f1c757',
        }
    },
    action:{
        border: '4px solid #f1c757',
    },
    text:{
        textAlign:'center',
        fontSize:12,
        color: '#fac054',
        marginTop:10
    },
    span:{
        display:'block',
        fontWeight:700,
        fontSize:19,
        color:'#fff'
    },
    actionSpan:{
        color: '#fac054',
    },
})