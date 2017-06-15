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
        maxWidth:600,
        margin:'auto',
    },
    itemPhoto:{
        width:90,
    },
    itemData:{
        width:'calc(100% - 90px)'
    }
})