import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    top:{
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
        height:50,
        overflow:'hidden'
    },
    openNav:{
        width:19,
        cursor:'pointer',
    },
    add:{
        width:16,
        cursor:'pointer',
    },
    titleText:{
        color: '#ffffff',
        fontFamily: '"Helvetica Neue Cyr"',
        fontSize: 16,
        fontWeight: 500,
    },
    days:{
        width:'100%',
        height:79,
        overflow:'hidden',
        backgroundColor:'#242426',
        position:'fixed',
        top:50,
        left:0,
        zIndex:10
    },
    list:{
        whiteSpace: 'nowrap',
        maxWidth:'100%',
        userSelect: 'none',
        height:79,
        display:'flex',
        flexNegative: 0,
        flexShrink: 0,
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