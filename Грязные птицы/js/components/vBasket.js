import vBasketcard from "./vBasketcard.js";
export default{
    template: `
    <section class="basket">
                <div class="container">
                    <div class="basket__empty" v-if="!cardProducts.length">
                        <div class="basket__empty-title">
                            <h2>Корзина пустая </h2>
                            <img src="./img/😕.png" alt="">
                        </div>
                        <p>Вероятней всего, вы не заказывали еще пиццу.</p>
                        <p>Для того, чтобы заказать пиццу, перейди на главную страницу</p>
                        <img src="./img/man-ab.png" alt="">
                        <button @click="$emit('pageprod', 'products')">Вернуться назад</button>
                    </div>
                    <div class="basket__filled" v-if="cardProducts.length">
                        <div class="basket__filled-header">
                            <div class="filled__header-text">
                                <img src="./fonts/teleshka.svg" alt="">
                                <p>Корзина</p>
                            </div>
                            <button  @click.prevent="$emit('deletall')"><img src="./fonts/Vector.svg"> Очистить корзину</button>
                        </div>
                        <div class="basket__filled-products" >
                            <v-basketcard  v-for="c in cardProducts" :key="c.id" :c="c" :cardProducts="cardProducts" @deletproduct="deletProd"/>

                        </div>
                        <div class="basket__filled-count">
                                <span>Всего пицц: <p>1 шт.</p> </span>
                                <span>Сумма заказа: <p>{{pricePizza}} ₽</p> </span>
                            </div>
                            <div class="basket__filled-btns">
                                <button @click="$emit('pageprod', 'products')"> < Вернуться назад </button>
                                <button>Оплатить сейчас</button>
                            </div>
                    </div>

                </div>
    </section>
    `,

    props: {
        cardProducts: Array,
        pricePizza: Number,
    },
    data() {
        return {
            val:1
            
        }
    },
    components:{
        vBasketcard
    },
    watch: {
        val(newVal) {
          if (newVal < 1) {
            this.val = 1;
          }
        },
    },
    methods:{
        deletProd(el){
            this.$emit('deletproduct', el)
        },
        
    }

}