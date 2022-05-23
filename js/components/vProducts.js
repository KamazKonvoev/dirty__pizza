import vCard from './vCard.js'
export default{
    template: `
    <section class="products">
            <div class="container">
                <div class="category">
                    <p v-for="c in categories" :key="id"  :class="categ === c.name ? 'active-category': '' " @click.prevent="categSort(c.name)" >{{c.name}}</p>
                </div>
                <h3 class="about__category">{{categ}} пиццы</h3>
                <div class="product__list">
                    <v-card v-for="p in products" :key="p.id" :p="p" v-if="categ==='Все'"  @addcard="cardAdd($event)"  @countprice="countPrice($event)" @markupprice="markupPrice" @demarkupprice="deMarkupPrice"/>
                    <v-card v-for="p in sortProduct" :key="p.id" :p="p" v-if="categ!=='Все'" :categ='categ'  @addcard="cardAdd($event)" @countprice="countPrice($event)" @markupprice="markupPrice"/>
                </div>
            </div>
    </section>
    `,
    components:{
        vCard
    },
    props: {
        products: Array,
        categories: Array,
        cardProducts: Array,
    },

    data() {
        return {
            categ:'Все',
            sortProduct: [],
        }
    },
    computed:{
       
    },
    methods:{
        categSort(categ){
            if(categ==='Все'){
                this.categ='Все'
                console.log(this.sortProduct)
            }
            if(categ==='Жирные'){
                this.sortProduct= this.products.filter(item=>{
                    if(item.category === 'Жирные') return item
                })
                this.categ='Жирные'
                console.log(this.sortProduct)
            }
            if(categ==='Птичные'){
                this.sortProduct= this.products.filter(item=>{
                    if(item.category === 'Птичные') return item
                })
                this.categ='Птичные'
                console.log(this.sortProduct)
            }
            if(categ==='Лезвистые'){
                this.sortProduct= this.products.filter(item=>{
                    if(item.category === 'Лезвистые') return item
                })
                this.categ='Лезвистые'
                console.log(this.sortProduct)
            }
            if(categ==='Грязные'){
                this.sortProduct= this.products.filter(item=>{
                    if(item.category === 'Грязные') return item
                })
                this.categ='Грязные'
                console.log(this.sortProduct)
            }
            if(categ==='Ты его не купишь'){
                this.sortProduct= this.products.filter(item=>{
                    if(item.category === 'Ты его не купишь') return item
                })
                this.categ='Ты его не купишь'
                console.log(this.sortProduct)
            }
        },
        cardAdd(el){
            this.$emit('addcard', el)
            // this.cardProducts.unshift(el)
            // console.log(this.cardProducts)
        },
        countPrice(el){
            this.$emit('countprice', el)
        },
        markupPrice(product,paramProduct, razmerProduct){
            this.$emit('markupprice', product, paramProduct, razmerProduct)
        },
        deMarkupPrice(product,paramProduct, razmerProduct){
            this.$emit('demarkupprice', product, paramProduct, razmerProduct)
        }
    }

}