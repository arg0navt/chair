import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    tab:{
        width:'100%',
        height:45,
        overflow:'hidden',
        backgroundColor: '#242426',
    },
    tabItem:{
        flex:1
    },
    linkTab:{
        fontSize:12,
        color:'#ffffff',
        position:'relative',
    },
    item:{
        margin:'auto',
    },
    itemPhoto:{
        width:90,
        height:100,
    },
    itemData:{
        width:'calc(100% - 90px)',
        height:100,
        justifyContent:'flex-start',
        borderBottom:'1px solid rgba(255,255,255,.16)'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50,
        overflow:'hidden'
    },
    avatarPich:{
        width:'100%',
        height:'auto',
    },
    itemName:{
        fontSize:15,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        userModify: 'read-write-plaintext-only'
    },
    buttonControll:{
        marginTop:15,
        justifyContent:'flex-start',
    },
    button:{
        width:112,
        height:30,
        marginRight:10
    },
    buttonReady:{
        backgroundColor: '#fac054',
        color: '#605238',
        fontSize:13
    },
    buttonAbolish:{
        border: '1px solid #fa5454',
        color: '#f35252',
        fontSize:13
    },
    iconReady:{
        width:12,
        height:'auto',
        marginRight:10
    },
    iconAbolish:{
        width:12,
        height:'auto',
        marginRight:10
    },
    circleStatus:{
        width:6,
        height:6,
        borderRadius:6,
        marginRight:10,
        marginTop:3,
        float:'left',
        marginBottom:12
    },
    status:{
        fontSize:12,
        overflow:'hidden'
    },
    wrapData:{
        width:'100%'
    },
    itemLogin:{
        color: '#b8b8b8',
        fontSize: 12,
        marginTop: 10
    },
    itemMin:{
        height:70,
    },
    itemBorder:{
        position:'relative',
        ':after':{
            height:15,
            width:3,
            backgroundColor:'#fac054',
            position:'absolute',
            right:0,
            top:0,
            bottom:0,
            margin:'auto',
            display:'block',
            content:'""'
        }
    },
    wrapItem:{
        position:'relative',
        height:70
    },
    deleteBlock:{
        position:'absolute',
        width:'100%',
        height:'100%',
        overflow:'hidden',
        top:0,
        left:0,
        backgroundColor: '#fac054',
        justifyContent:'flex-end',
        zIndex:1,
        cursor:'pointer'
    },
    deleteIcon:{
        width:16,
        height:'auto',
        marginRight:17,
    },
    itemAbsolute:{
        position:'absolute',
        top:0,
        left:0,
        zIndex:2,
        width:'100%',
        backgroundColor:'#050505',
        transition:'.1s all ease-in-out'
    },
    buttonAdd:{
        display:'block',
        width:'90%',
        height:54,
        backgroundColor: '#fac054',
        position:'fixed',
        margin:'auto',
        zIndex:3,
        left:0,
        right:0,
        bottom:30
    },
    buttonText:{
        textAlign:'center',
        color: '#605238',
        fontSize:15,
        fontWeight: 700,
        letterSpacing:'.03em',
        lineHeight:'54px'
    },
    buttonAddIcon:{
        width:15,
        height:'auto',
        marginRight:10
    },
    paddingBottom:{
        paddingBottom:90
    },
    formAdd:{
        padding:15
    },
    noBorder:{
        border:0,
    }
})