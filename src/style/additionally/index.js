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
    name:{
        fontSize:15
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
    }
})