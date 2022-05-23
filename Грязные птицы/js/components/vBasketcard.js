export default{
    template: `
    <div class="basket__filled-card">
    <div class="product__name-basket">
            <img :src="c.image_pizz">
            <div class="text__basket">
                <p>{{c.name}}</p>
                <p>тонкое тесто, 26 см</p>
            </div>
        </div>
        <div class="switcher">
            <button @click="c.count--"><p>-</p></button>
            <input type="text" :value="c.count">
            <button @click="c.count++"><p>+</p></button>
        </div>
        <p class="basket__filled-price">{{c.price}} ₽</p>
        <button class="delet__prod" @click.prevent="deletProd(c)"><img src="../fonts/Group 36.svg"></button>
    </div>
    </div>
    `,

    props: {
        c: Object,
        cardProducts:Array
    },
    

    data() {
        return {
            val:1
        }
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
        }
    }
}