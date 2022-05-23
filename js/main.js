import vHeader from './components/vHeader.js'
import vProducts from './components/vProducts.js' 
import vCard from './components/vCard.js'
import vBasket from './components/vBasket.js'
import vBasketcard from './components/vBasketcard.js'

const app={
    components:{
        vHeader,
        vCard,
        vProducts,
        vBasket,
        vBasketcard
    },
    created(){
        fetch("https://628242289fac04c654120a39.mockapi.io/products").then( response => response.json() ).then(items => this.products= items)
        fetch("https://628242289fac04c654120a39.mockapi.io/categories").then( response => response.json() ).then(items => this.categories= items)
        
    },
    data(){
        return{
            products:[],
            beforeProducts:[],
            categories: [],
            paramProduct:'slim',
            currentPage: 'products',
            cardProducts:[],
            // pricePizza:0,
        }

    },
    computed: {
        pricePizza() {
            let sum = 0
            this.cardProducts.forEach(element => {
                sum += element.price * element.count
            })

            return sum
        }
    },
    methods:{
        selectPage(page){
            this.currentPage= page
            console.log(page)
            console.log(this.products)
            this.products=this.products.map(item=>{
                item.price=item.beginprice
                return item
            })
            console.log(this.products)
           
        },
        addToBasket(product) {
            // this.cardProducts.unshift(product)
            const issetProduct = this.cardProducts.some(p => p.id === product.id)
            
            if (issetProduct) {
                const foundProduct = this.cardProducts.find(p => p.id === product.id)
                foundProduct.count++
                console.log(this.cardProducts);
            }
            else {
                let sss={...product, count: 1}
                this.cardProducts.unshift(sss)
            }

           
            // console.log(this.cardProducts);
        },
        addToPrice(el){
            this.pricePizza+=el
            console.log(this.pricePizza)
        },
        noAddToPrise(el){
            // this.pricePizza= this.pricePizza- el.price
        },
        deletProd(el){
            console.log(el)
            this.cardProducts=this.cardProducts.filter(item => {
                if(item !== el) return true
            })
            this.noAddToPrise(el)
        },
        markupPrice(product,paramProduct, razmerProduct){
            this.products= this.products.map(item=>{
                if(item === product){
                    if(paramProduct ==='tradition'){
                        item.price+= item.traditionprice
                    }
                    if(razmerProduct ==='26 cm'){
                        item.price= item.beginprice
                    }
                    if(razmerProduct ==='30 cm'){
                        item.price= item.beginprice
                        item.price+= item.razmerprice
                    }
                    if(razmerProduct ==='40 cm'){
                        item.price= (item.price= item.beginprice)+item.razmerpricebigger
                    }
                }
                return item
            })
             this.products= this.products.map(item=>{
                if(item === product){
                    if(paramProduct ==='tradition'){
                        item.price+= item.traditionprice
                    }
                }
                return item
            })
            // this.products= this.products.map(item=>{
            //     if(item === product){
            //         if(razmerProduct ==='26 cm'){
            //             item.price= item.beginprice
            //         }
            //         if(razmerProduct ==='30 cm'){
            //             item.price+= item.razmerprice
            //         }
            //         if(razmerProduct ==='40 cm'){
            //             item.price= (item.price= item.beginprice)+item.razmerpricebigger
            //         }
            //     }
            //     return item
            // })
            console.log(111)
            console.log(razmerProduct)
        },
        deMarkupPrice(product,paramProduct, razmerProduct){
            this.products= this.products.map(item=>{
                if(item === product){
                    if(paramProduct ==='slim'){
                        item.price= item.price- item.traditionprice
                    }
                }
                return item
            })
            
        },
        deletAllBasket(){
            this.cardProducts=[]
            console.log('dslsm')
        }
    }
}
Vue.createApp(app).mount("#app")
