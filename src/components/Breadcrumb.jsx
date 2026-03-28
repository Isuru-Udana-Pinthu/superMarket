import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb py-26 bg-main-two-50">
            <div className="container container-lg">
                <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                    <h6 className="mb-0">Shop Details</h6>
                    <ul className="flex items-center gap-8 flex-wrap">
                        <li className="text-sm">
                            <a href="/" className="text-gray-900 flex items-center gap-8 hover-text-main-600">
                                <i className="ph ph-house" />
                                Home
                            </a>
                        </li>
                        <li className="flex items-center">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <a href="/" className="text-gray-900 flex items-center gap-8 hover-text-main-600">
                                Shop
                            </a>
                        </li>
                        <li className="flex items-center">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm text-main-600">Product Details</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
