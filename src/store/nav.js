 export default{
   state:{
     nav:[
        {path: '/fuuu.hairmake/',         page: 'HOME' },
        {path: '/fuuu.hairmake/concept',  page: 'CONCEPT' },
        {path: '/fuuu.hairmake/menu',     page: 'MENU'},
        {path:'/fuuu.hairmake/access',    page:'ACCESS'}
      ]
   },
   getters:{
     nav(state){return state.nav}
   }
 }
