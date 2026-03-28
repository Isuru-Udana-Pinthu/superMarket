import React, { useState, useEffect } from 'react';
import Preloader1 from './components/Preloader1';
import Overlay2 from './components/Overlay2';
import SideOverlay3 from './components/SideOverlay3';
import ProgressWrap4 from './components/ProgressWrap4';
import SearchBox5 from './components/SearchBox5';
import MobileMenu6 from './components/MobileMenu6';
import HeaderTop7 from './components/HeaderTop7';
import Header8 from './components/Header8';
import Header9 from './components/Header9';
import Breadcrumb from './components/Breadcrumb';
import ProductDetailsContent from './components/ProductDetailsContent';
import Recommended16 from './components/Recommended16';
import Shipping25 from './components/Shipping25';
import Newsletter26 from './components/Newsletter26';
import Footer27 from './components/Footer27';
import BottomFooter28 from './components/BottomFooter28';

const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-wrapper">
            {isLoading && <Preloader1 />}
            <Overlay2 />
            <SideOverlay3 />
            <ProgressWrap4 />
            <SearchBox5 />
            <MobileMenu6 />
            <HeaderTop7 />
            <Header8 />
            <Header9 />
            <Breadcrumb />
            <ProductDetailsContent />
            <Recommended16 />
            <Shipping25 />
            <Newsletter26 />
            <Footer27 />
            <BottomFooter28 />
        </div>
    );
};

export default ProductDetails;
