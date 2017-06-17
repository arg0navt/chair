import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    shadow:{
        backgroundColor: '#0c0c0c',
        opacity: 0.6,
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex:99,
        transition:'.3s all ease-in-out',
        visibility: 'hidden'
    },
    nav:{
        width:252,
        height:'100%',
        maxHeight:'100vh',
        overflowY:'auto',
        position:'fixed',
        boxShadow: '0px 3px 109px #000000',
        backgroundColor: '#1b1b1c',
        top:0,
        zIndex:100,
        alignItems:'flex-start',
        paddingTop:40,
        paddingBottom:40,
        transition:'.3s all ease-in-out',
        left:-252,
    },
    avatar:{
        width:90,
        height:90,
        borderRadius:90,
        overflow:'hidden',
        margin:'auto'
    },
    avatarPich:{
        display:'block',
        margin:'auto',
        width:'100%',
        height:'inherit'
    },
    name:{
        color: '#ffffff',
        fontSize:25,
        textAlign:'center',
        textTransform:'uppercase',
        fontFamily: '"AA Bebas Neue"',
        marginTop:12
    },
    list:{
        marginTop:37,
        overflow:'hidden',
        ':before':{
            content:'""',
            display:'block',
            width:33,
            height:2,
            backgroundColor:'#ffffff',
            margin:'auto',
            marginBottom:32
        }
    },
    icon:{
        width:45,
        height:45,
        margin:'auto',
        borderRadius:45,
        border: '2px solid rgba(255,255,255,.2)',
    },
    icon1:{
        width:22,
        display:'block',
        height:'auto'
    },
    icon2:{
        width:21,
        display:'block',
        height:'auto'
    },
    icon3:{
        width:20,
        display:'block',
        height:'auto'
    },
    icon4:{
        width:13,
        display:'block',
        height:'auto'
    },
    item:{
        display:'block',
        marginBottom:26
    },
    text:{
        marginTop:13,
        textAlign:'center',
        fontSize:15
    }
})