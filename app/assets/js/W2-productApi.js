const productPage = document.querySelector('#app').children[0];
// const productPage = document.querySelector('#app').childNodes[0];@@文字 差別

const productList = {
    data:{
        uuid:'82a32758-aadc-4405-b535-2f6a678989d8',
        products:[]
    },
    getProduct(){
        const vm = this;
        const api = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`
        axios.get(api)
        .then(res => {
            // console.log(res);

            // 清空陣列
            // this.data.products.splice(0,this.data.products.length)//@@冗長
            // this.data.products= [];
            // res.data.data.forEach(item => {
            //     this.data.products.push(item);
            // })

            // @@this指向變成axios
            // this.data.products = res.data.data;

            vm.data.products = res.data.data;
            console.log(vm.data.products);
            vm.renderList()
        })
        console.log(vm.data.products);//%% 非同步會是空的
        
        
    },
    renderList(){
        // @@ api description不見了
        let str = '';
        console.log(this);
        this.data.products.forEach(item => {
            str += `
            <div class="col-4 mb-4">
                <div class="card">
                    <img src="${item.imageUrl[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${item.title}<span class="badge badgeColor ml-1">${item.category}</span></h5>
                        <p class="card-text text-truncate lineCamp--4 text-wrap">
                            ${item.content}
                        </p>
                        <div class="d-flex">
                            <div class="form-inline">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div class="h3 ml-2">
                                $${item.price}
                            </div>
                            <a href="#" class="btn bg-green ml-auto">加入購物車</a>
                        </div>
                    </div>
                </div>
            </div>
            ` ;
        })
        console.log(productPage);
        
        productPage.innerHTML = str;
        
    }
}

productList.getProduct();