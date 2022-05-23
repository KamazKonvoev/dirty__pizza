
export default{
    template: `
        <div class="header">
            <div class="container">

                <div class="kartinka_pizza"  @click.prevent="$emit('pageprod', 'products')">
                    <a href="" ><img src="./img/image 1.png" alt=""></a>
                    <div class="text__pizza">
                        <p>Griaznyi ptizza</p>
                        <p>самая грязная пицца в мультивселенной</p>
                    </div>
                </div>
                <div class="bag" @click="$emit('pageprod', 'basket')">
                    <p>{{pricePizza}} ₽</p>
                    <div class="poloska"></div>
                    <img src="./fonts/iconfinder_shopping-cart_2561279 1.svg" alt="">
                    <p></p>
                </div>
            </div>
        </div>
    `,

    props: {
        currentPage: String,
        pricePizza: Number
    },

    data() {
        return {
            text: '',
        }
    },

}