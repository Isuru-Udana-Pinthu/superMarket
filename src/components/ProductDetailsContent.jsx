import React from 'react';

const ProductDetailsContent = () => {
    return (
        <section className="product-details py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-lg-9">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className="product-details__left">
                                    <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                        <div className="item">
                                            <img src="images/product-img1.png" alt="Product" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="mt-24 flex items-center gap-12 overflow-x-auto scroll-sm">
                                        <img src="images/product-img1.png" alt="" className="w-80 h-80 object-fit-cover border border-gray-100 rounded-8 cursor-pointer" />
                                        <img src="images/product-img2.png" alt="" className="w-80 h-80 object-fit-cover border border-gray-100 rounded-8 cursor-pointer" />
                                        <img src="images/product-img3.png" alt="" className="w-80 h-80 object-fit-cover border border-gray-100 rounded-8 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    <h5 className="mb-12">Lay's Potato Chips Onion Flavored</h5>
                                    <div className="flex items-center gap-12 mb-20">
                                        <div className="flex items-center gap-4">
                                            <i className="ph-fill ph-star text-warning-600" />
                                            <i className="ph-fill ph-star text-warning-600" />
                                            <i className="ph-fill ph-star text-warning-600" />
                                            <i className="ph-fill ph-star text-warning-600" />
                                            <i className="ph-fill ph-star text-gray-400" />
                                        </div>
                                        <span className="text-sm text-gray-500">4.7 Star Rating (21,671)</span>
                                        <span className="text-sm text-gray-500">|</span>
                                        <span className="text-sm text-gray-500">SKU: EB4DRP</span>
                                    </div>
                                    <p className="text-gray-500 mb-24">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                                    <div className="flex items-center gap-16 mb-24">
                                        <h4 className="mb-0 text-main-600">$25.00</h4>
                                        <span className="text-gray-400 text-lg text-decoration-line-through">$38.00</span>
                                    </div>
                                    
                                    <a href="https://wa.me/94123456789" className="btn btn-main bg-success-600 hover-bg-success-700 flex items-center gap-8 mb-24 justify-center">
                                        <i className="ph ph-whatsapp-logo text-xl" />
                                        Order on WhatsApp
                                    </a>

                                    <div className="p-16 border border-gray-100 rounded-12 mb-24 bg-gray-50">
                                        <div className="flex items-center justify-between mb-12">
                                            <span className="text-sm text-gray-600">Special Offer: Remains until the end of the offer</span>
                                        </div>
                                        <div className="flex items-center gap-8 mb-12">
                                            <i className="ph-fill ph-lightning text-main-600" />
                                            <span className="text-sm font-semibold">Products are almost sold out</span>
                                        </div>
                                        <div className="progress w-full bg-gray-200 rounded-full h-8 mb-8">
                                            <div className="progress-bar bg-main-600 h-8 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                        <span className="text-xs text-gray-500">Available only: 45</span>
                                    </div>

                                    <div className="flex items-center gap-16 flex-wrap">
                                        <div className="quantity flex items-center border border-gray-100 rounded-pill px-12 py-8">
                                            <button className="quantity__minus p-4"><i className="ph ph-minus" /></button>
                                            <input type="number" defaultValue="1" className="quantity__input text-center w-40 border-none outline-none" />
                                            <button className="quantity__plus p-4"><i className="ph ph-plus" /></button>
                                        </div>
                                        <button className="btn btn-main flex-grow justify-center py-12 px-24">Add To Cart</button>
                                        <button className="w-48 h-48 flex items-center justify-center border border-gray-100 rounded-pill hover-bg-main-600 hover-text-white transition-all"><i className="ph ph-heart text-xl" /></button>
                                        <button className="w-48 h-48 flex items-center justify-center border border-gray-100 rounded-pill hover-bg-main-600 hover-text-white transition-all"><i className="ph ph-shuffle text-xl" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-details__tabs mt-40">
                             <ul className="nav nav-pills custom-soft-pills mb-24 gap-12 border-bottom border-gray-100 pb-16">
                                <li className="nav-item">
                                    <button className="nav-link active py-8 px-20 rounded-pill">Description</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link py-8 px-20 rounded-pill border border-gray-100">Reviews</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active">
                                    <p className="text-gray-500 mb-20">Although the Unitarian Universalist Association (UUA) does not have a formal creed, our shared covenant, stated in our Bylaws, includes seven Principles which we as member ...</p>
                                    <div className="table-responsive">
                                        <table className="table border border-gray-100 rounded-12 overflow-hidden">
                                            <tbody>
                                                <tr><td className="bg-gray-50 text-gray-900 font-semibold py-12 px-20">Brand</td><td className="py-12 px-20">Lay's</td></tr>
                                                <tr><td className="bg-gray-50 text-gray-900 font-semibold py-12 px-20">Size</td><td className="py-12 px-20">200g</td></tr>
                                                <tr><td className="bg-gray-50 text-gray-900 font-semibold py-12 px-20">Ingredients</td><td className="py-12 px-20">Potatoes, Vegetable Oil, Onion Powder, Salt</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="product-details__sidebar p-24 border border-gray-100 rounded-16 sticky-top">
                            <div className="vendor-card mb-24 p-16 bg-gray-50 rounded-12 flex items-center gap-12">
                                <div className="w-48 h-48 rounded-pill overflow-hidden border border-white">
                                    <img src="images/logo.png" alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="flex-grow">
                                    <span className="text-xs text-gray-500 block mb-4">Store</span>
                                    <h6 className="mb-0 text-sm">by Marketpro</h6>
                                </div>
                                <a href="/" className="btn btn-outline-main py-4 px-12 text-xs rounded-pill">View Store</a>
                            </div>

                            <ul className="flex flex-col gap-16 mb-24">
                                <li className="flex items-center gap-12">
                                    <span className="w-32 h-32 flex items-center justify-center bg-main-soft rounded-pill text-main-600"><i className="ph ph-truck" /></span>
                                    <div className="flex-grow">
                                        <h6 className="text-sm mb-0">Fast Delivery</h6>
                                        <p className="text-xs text-gray-500 mb-0">Lightning-fast shipping, guaranteed.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-12">
                                    <span className="w-32 h-32 flex items-center justify-center bg-main-soft rounded-pill text-main-600"><i className="ph ph-arrow-counter-clockwise" /></span>
                                    <div className="flex-grow">
                                        <h6 className="text-sm mb-0">Free 90-day returns</h6>
                                        <p className="text-xs text-gray-500 mb-0">Shop risk-free with easy returns.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-12">
                                    <span className="w-32 h-32 flex items-center justify-center bg-main-soft rounded-pill text-main-600"><i className="ph ph-storefront" /></span>
                                    <div className="flex-grow">
                                        <h6 className="text-sm mb-0">Pickup available</h6>
                                        <p className="text-xs text-gray-500 mb-0">Usually ready in 24 hours</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="border-top border-gray-100 pt-24 mt-24">
                                <h6 className="text-sm mb-16">Payment</h6>
                                <p className="text-xs text-gray-500 mb-16">Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.</p>
                                <div className="flex items-center gap-8 flex-wrap">
                                    <img src="images/payment-method.png" alt="" className="h-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsContent;
