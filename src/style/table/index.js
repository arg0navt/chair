import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    numbers:{
        width:'100%',
        height:45,
        background:'#050505',
        paddingLeft:'14.2%',
        userSelect: 'none',
    },
    num:{
        flex:1,
    },
    numtext:{
        textAlign:'center',
        color: '#b8b8b8',
        fontFamily: '"Helvetica Neue Cyr"',
        fontWeight: 500,
        fontSize:15
    },
    tableWrap:{
        height:'calc(100vh - 203px)',
        overflowY:'auto',
        userSelect: 'none',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingBottom:56,
        '::-webkit-scrollbar':{
            display:'none'
        }
    },
    columTime:{
        width:75,
        overflow:'hidden',
        '@media screen and (max-width: 500px) , screen and (max-height: 750px)':{
            width:'calc(100vw - 85.8%)'
        }
    },
    itemTime:{
        width:'100%',
        height:75,
        position:'relative'
    },
    timeText:{
        color: '#636363',
        fontFamily: '"Helvetica Neue Cyr"',
        fontSize:19,
        textAlign:'center',
        position:'absolute',
        top:0,
        '@media screen and (max-width: 370px)':{
            fontSize:14
        }
    },
    timeSpan:{
        fontSize:13,
        color: '#636363',
        marginLeft:3,
        marginTop:0,
        display: 'block',
        float: 'left',
        '@media screen and (max-width: 370px)':{
            marginLeft:3,
            marginTop:1,
            fontSize:11,
        }
    },
    timeSpan1:{
        color: '#636363',
        display: 'block',
        float: 'left',
    },
    itemWrap:{
        width:'calc(100% - 75px)',
        position:'relative',
        '@media screen and (max-width: 500px)':{
            width:'calc(100vw - 14.2%)'
        }
    },
    lin:{
        width:'100%',
        height:1,
        background:'rgba(255,255,255,.16)',
        position:'relative',
        zIndex:10,
        marginTop:74,
        ':first-child':{
            marginTop:0
        }
    },
    items:{
        width:'100%',
        height:'100%',
        position:'absolute',
        zIndex:9,
        top:0,
        left:0,
    },
    itemsColumn:{
        flex:1,
        height:'100%',
        position:'relative',
        
    },
    info:{
        position:'absolute',
        width:'calc(100% - 5px)'
    },
    past:{
        width:'100%',
        position:'absolute',
        zIndex:12,
        background:'rgba(0,0,0,.8)',
        top:0,
        left:0
    },
    pastLin:{
        position:'absolute',
        height:2,
        bottom:0,
        left:0,
        width:'100%',
        backgroundColor: '#fac054',
        ':after':{
            width:19,
            height:19,
            borderRadius:19,
            backgroundColor: '#fac054',
            position:'absolute',
            left:-8,
            top:-8,
            content:'""',
            display:'block'
        }
    },
    infoName:{
        color: '#37471a',
        fontFamily: '"Helvetica Neue Cyr"',
        textAlign:'center',
        paddingTop:5,
        fontSize:12
    },
    filter:{
        position:'fixed',
        bottom:0,
        left:0,
        zIndex:20,
        width:'100%',
        height:56,
        backgroundColor: '#0c0c0c',
        justifyContent:'flex-start',
        padding:5,
        minWidth:'100vw',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        overflowX:'auto',
        '::-webkit-scrollbar':{
            display:'none'
        }
    },
    filterItem:{
        height:45,
        backgroundColor: '#242426',
        position:'relative',
        marginRight:5,
        cursor:'pointer',
        display:'inline-block',
        verticalAlign:'top',
        paddingRight:15
    },
    soloText:{
        paddingTop:14
    },
    filterBorder:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        ':hover':{
            border: '3px solid #fac054',
        }
    },
    borderActive:{
        border: '3px solid #fac054',
    },
    filtertext:{
        fontWeight: 500,
        fontSize: 15,
        lineHeight:1,
        paddingTop:9,
        paddingLeft:15
    },
    filterspan:{
        fontSize: 10,
        display:'block'
    },
    textActive:{
        color: '#fac054',
    },
    table:{
        paddingTop:129
    },
    quickViewShadow:{
        position:'fixed',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        background:'rgba(0,0,0,.6)',
        zIndex:1
    },
    quickViewWrap:{
        position:'fixed',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        zIndex:20,
    },
    quickView:{
        width:225,
        backgroundColor: '#242426',
        overflow:'hidden',
        borderRadius: 10,
        position:'relative',
        zIndex:2,
    },
    topView:{
        height:50,
        borderBottom:'1px solid rgba(255,255,255,.1)',
        paddingLeft:20,
        position:'relative'
    },
    topViewText:{
        color: '#fac054',
        fontSize: 17,
        lineHeight:'50px'
    },
    nuber:{
        width:54,
        height:54,
        borderRadius:54,
        overflow:'hidden',
        backgroundColor: '#fac054',
        position:'absolute',
        right:15,
        top:23,
    },
    nuberText:{
        color: '#4c3711',
        fontSize:10,
        textAlign:'center'
    },
    nuberSpan:{
        display:'block',
        fontSize:22,
        color: '#4c3711',
        lineHeight:1
    },
    viewContent:{
        padding:20,
    },
    viewContentText:{
        color: '#ffffff',
        fontSize:13,
        marginBottom:15,
        ':last-child':{
            marginBottom:0
        }
    },
    viewContentSpan:{
        color: '#7b7b7b',
        fontSize:13,
        display:'block'
    },
    viewContentFont:{
        display:'block'
    },
    viewBottom:{
        borderTop: '1px solid rgba(255,255,255,.1)',
        height:45,
        overflow:'hidden'
    },
    viewButton:{
        height:45,
        width:'50%',
        cursor:'pointer',
        lineHeight:'45px'
    },
    viewButton1:{
        color: '#fac054',
        fontSize:13,
    },
    viewButton2:{
        backgroundColor: '#fac054',
        color: '#4c3711',
        fontSize:13,
        textTransform: 'uppercase',
        fontWeight: 700,
    }
})