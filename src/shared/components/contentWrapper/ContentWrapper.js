import React, { useState, useEffect } from 'react';
import './ContentWrapper.css'
import Card from '../card/card';
import Accordion from '../accordion/accordion';

import { connect } from 'react-redux';
import { fetchData } from '../../Actions/fetchData';
import { fetchFiltersData } from '../../Actions/fetchFiltersData';

const ContentWrapper = (props) => {
    const [categoryData, setCategoryData] = useState(props.productData);
    const [filtersData, setfiltersData] = useState(props.filtersData);

    const fetchInitialData = () => {
        props.fetchData();
        props.fetchFiltersData();
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    useEffect(() => {
        setCategoryData(props.productData);
        setfiltersData(props.filtersData);
    }, [props.productData, props.filtersData]);

    return (
        <div className="wrapper">
            <div id="filters__wrapper">
                <div id="filters_container">
                    <div id="filters_title">
                        <div id="title_text">Filters</div>
                    </div>
                    {
                        filtersData && filtersData.map((filters,index) => {
                            return <Accordion key={index} title={filters.label} content={filters.content} />
                        })
                    }
                </div>
            </div>
            <div id="products">
                {
                    categoryData && categoryData.map((category) => {
                        return (
                            <div key={category.categoryId}>
                                <h1>{category.categoryName}</h1>
                                <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', justifyContent: 'space-between' }}>
                                    {
                                        category.products.map((product, index) => {
                                            return <Card key={`${category.categoryId}-product-${index}`} cardData={product} />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productData: state.dataReducer,
        filtersData: state.filtersReducer
    }
}

function loadData(store) {
    store.dispatch(fetchData());
    store.dispatch(fetchFiltersData());
}

export { loadData };
export default connect(mapStateToProps, { fetchData, fetchFiltersData })(ContentWrapper);