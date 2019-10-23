import React, { useState, useEffect } from 'react';
import './ContentWrapper.css'
import Card from '../card/card';

import { connect } from 'react-redux';
import { fetchData } from '../../Actions/fetchData';

const ContentWrapper = (props) => {
    const [categoryData, setCategoryData] = useState([]);
    // const [count, setCount] = useState(0);

    const fetchCategoryData = () => {

        // setCategoryData(data);
        props.fetchData();
    }

    useEffect(() => {
        fetchCategoryData();
    }, []);

    return (
        <div className="wrapper">
            <div id="filters">
                <div>

                </div>
            </div>
            <div id="products">
                {
                    props.data && props.data.map((category, index) => {
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
        data: state.dataReducer
    }
}

export default connect(mapStateToProps, { fetchData })(ContentWrapper);