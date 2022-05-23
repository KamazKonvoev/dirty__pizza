export default{
    template: `
    <div class="product__card" >
    <img :src="p.image_pizz" alt="">
    <p>{{p.name}}</p>
    <div class="pizza__param">
        <button :class="paramProduct=== 'slim' ? 'active__param' : ''" @click.prevent="paramProduct='slim'; dePrice(p)">тонкое</button>
        <button :class="paramProduct=== 'tradition' ? 'active__param' : ''" @click.prevent="paramProduct='tradition'; addPrice(p) ">традиционное</button>
        <button :class="razmerProduct=== '26 cm' ? 'active__param' : ''" @click.prevent="razmerProduct='26 cm'; razmerPriceAdd(p)">26 см.</button>
        <button :class="razmerProduct=== '30 cm' ? 'active__param' : ''" @click.prevent="razmerProduct='30 cm'; razmerPriceAdd(p)" >30 см.</button>
        <button :class="razmerProduct=== '40 cm' ? 'active__param' : ''" @click.prevent="razmerProduct='40 cm'; razmerPriceAdd(p) " >40 см.</button>
    </div>
    <div class="add__card">
        <p class="price">от {{p.price}} ₽</p>
        <button @click="$emit('addcard', p); $emit('countprice', p.price); ">+ Добавить</button>
    </div>
</div>
    `,

    props: {
        p: Object,
        categ: String,
    },
    

    data() {
        return {
            paramProduct:'slim',
            razmerProduct: '26 cm',
            markup: true
        }
    },
    methods:{
        addPrice(product){
            if(this.markup){
                this.$emit('markupprice', product, this.paramProduct, this.razmerProduct)
                this.markup= false
            }
        },
        dePrice(product){
            if(!this.markup){
                this.$emit('demarkupprice', product, this.paramProduct, this.razmerProduct)
                this.markup= true
            }
        },
        razmerPriceAdd(product){
            this.$emit('markupprice', product, this.paramProduct, this.razmerProduct)
        }
    }
}




