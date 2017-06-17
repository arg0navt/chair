import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    app:{
        minWidth:'100vw',
        minHeight:'100vh'
    },
    top:{
        width:'100%',
        height: 50,
        backgroundColor: '#242426',
        overflow:'hidden',
        position:'fixed',
        top:0,
        left:0,
        zIndex:10
    },
    flex:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    }
})