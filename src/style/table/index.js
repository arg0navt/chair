import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    numbers:{
        width:'100%',
        height:45,
        background:'#050505',
        paddingLeft:75,
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
        overflow:'hidden'
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
        fontWeight:500,
        position:'absolute',
        top:0
    },
    timeSpan:{
        fontSize:13,
        color: '#636363',
        marginLeft:7,
        marginTop:1,
        display: 'block',
        float: 'left',
        fontWeight:700
    },
    timeSpan1:{
        color: '#636363',
        display: 'block',
        float: 'left',
        marginLeft:15,
        fontWeight:700
    },
    itemWrap:{
        width:'calc(100% - 75px)',
        position:'relative',
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
        padding:5,
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
        width:115,
        height:45,
        backgroundColor: '#242426',
        position:'relative',
        marginRight:5,
        cursor:'pointer',
        display:'inline-block',
        verticalAlign:'top'
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
        fontWeight: 700,
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
    }
})