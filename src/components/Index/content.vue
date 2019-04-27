<template>
    <div class="content-wrap">
        
            <div class="content-top">
                <div 
                    class="content-top-lilt"
                    v-for="(value,index) in list"
                    :key="index"
                    :id="forId(index)"
                >
                    <div>
                        {{ value.topMessage }}
                    </div>
                
                </div>
                
            </div>
        

    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[
                {
                    topMessage:"发现"
                },
                {
                    topMessage:"关注"
                },
                {
                    topMessage:"流行"
                }
            ]
        }
    },
    methods: {
        forId:function(index){
            return "content-div" +index
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    width: 100%;
    position: sticky;
    top: 0.0rem;
    z-index: 999;
}
.content-top{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.03rem solid #f1f1f1;
    align-items: center;
}
.content-top-lilt{   
    height: 0.5rem;
    width: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    font-weight: 700;
}
#content-div0{
    height: 0.5rem;
    width: 0.7rem;
    border-bottom: 0.04rem solid rgba(255, 87, 119);
}

</style>
