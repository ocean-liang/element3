import { defineComponent, Teleport } from 'vue'

export default defineComponent({
     setup() {
         return (
             <Teleport to="body">
                  {$solt.defalut}
             </Teleport>
         )
     }
})