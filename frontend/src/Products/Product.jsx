import React from 'react'
import "../Products/Product.css"
export default function Product() {
    return (
        <div class="row">
            <div class="col-sm-5 col-md-6">
                <div className='images'>
                    <a class="ripple" href="#!">
                        <img
                            alt="example"
                            class="img-fluid rounded"
                            src="https://sneakernews.com/wp-content/uploads/2019/05/nike-zoom-pegasus-35-turbo-blue-ribbon-sports-cj8296-100-3.jpg?w=1140"
                        />
                    </a>
                    <div className='products'>
                        <a class="ripple" href="#!">
                            <img
                                alt="example"
                                id='item'
                                class="img-fluid rounded"
                                src="https://sneakernews.com/wp-content/uploads/2019/05/nike-zoom-pegasus-35-turbo-blue-ribbon-sports-cj8296-100-3.jpg?w=1140"
                            />
                        </a>
                        <a class="ripple" href="#!">
                            <img
                                alt="example"
                                id='item'
                                class="img-fluid rounded"
                                src="https://sneakernews.com/wp-content/uploads/2019/05/nike-zoom-pegasus-35-turbo-blue-ribbon-sports-cj8296-100-3.jpg?w=1140"
                            />
                        </a>
                        <a class="ripple" href="#!">
                            <img
                                alt="example"
                                id='item'
                                class="img-fluid rounded"
                                src="https://sneakernews.com/wp-content/uploads/2019/05/nike-zoom-pegasus-35-turbo-blue-ribbon-sports-cj8296-100-3.jpg?w=1140"
                            />
                        </a>
                        <a class="ripple" href="#!">
                            <img
                                alt="example"
                                id='item'
                                class="img-fluid rounded"
                                src="https://sneakernews.com/wp-content/uploads/2019/05/nike-zoom-pegasus-35-turbo-blue-ribbon-sports-cj8296-100-3.jpg?w=1140"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                <div class="details" href="#!">
                    <h6 className='subtitle'>SNEAKER COMPANY</h6>
                    <h1 className='title'>Fall Limited Edition Sneakers</h1>
                    <p className='p'>These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole, they'll
                        withstand everything the weather can offer
                    </p>
                    <div className='prices'>
                    <div className='price'>
                        <h3>$125.00</h3>
                        <h3 className='discount'>50%</h3>
                    </div>
                    <h3 className='prev'>$250.00</h3>
                    </div>
                    <div className='button'>
                        <div className='cart'>
                            <h6 className='minus'> - </h6>
                            <h6 className='initial'> 0 </h6>
                            <h6 className='add'> + </h6>
                        </div>
                        <button
                            className='cartbtn'>
                            <i class="fas fa-shopping-cart">
                            </i>
                            Add to cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
